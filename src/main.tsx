import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Services from "./pages/Services";
import RootLayout from "./pages/RootLayout";
import UserHome from "./pages/users/UserHome";
import UserProfile from "./pages/users/UserProfile";
import UserLayout from "./pages/users/UserLayout";
import OauthSucess from "./pages/OauthSucess";
import OauthFailure from "./pages/OauthFailure";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>

      {/* Public pages */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<Signup />} />
        <Route path="services" element={<Services />} />

        {/* Protected user pages */}
        <Route path="dashboard" element={<UserLayout />}>
          <Route index element={<UserHome />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
        <Route path="oauth2/success" element={<OauthSucess />} />
        <Route path="oauth2/failure" element={<OauthFailure />} />
      </Route>

    </Routes>
  </BrowserRouter>
);