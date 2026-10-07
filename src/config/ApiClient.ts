import { Config } from "@hugeicons/core-free-icons";
import axios from "axios";
import useAuth from "../auth/store"
import { refreshToken } from "../services/AuthServices";

const apiClient = axios.create({
  baseURL: "http://localhost:8082/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 10000,
  
});

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = useAuth.getState().accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
);

let isRefreshing = false;
let pending:any[]=[];
function queueRequest(cb:any){
  pending.push(cb);
}
function resolveQueue(newToken:String){
   pending.forEach(cb=>cb(newToken));
   pending = [];
}
apiClient.interceptors.response.use(
  (response)=> response,
  async(error) => {
    const is401=error.response.status===401;
    const original = error.config;
    if(!is401 || original._retry){
     return Promise.reject(error)
    }

    //agr dono hi nhi hai then we will try to refresh the token 
    if(isRefreshing){
      return new Promise((resolve,reject)=>{
        queueRequest((newToken:string)=>{
            if(!newToken)return reject();
            original.headers.Authorization=`Bearer${newToken}`;
            resolve(apiClient(original));
        })
      })
    }

    //start refrsh
    isRefreshing=true
    try {
    const loginResponse= await refreshToken()
      const newToken=loginResponse.accessToken;
      if(!newToken) throw new Error("no Access Token Received");
      useAuth.getState().changeLocalLoginData(loginResponse.accessToken,loginResponse.users,true,false);
      resolveQueue(newToken);
      original.headers.Authorization=`Bearer${newToken}`;
      return apiClient(original);
      
    } catch (error) {
      resolveQueue("null");
      useAuth.getState().logout()
      return Promise.reject(error);
    }finally{
      isRefreshing=false
    }

  }
)
export default apiClient;