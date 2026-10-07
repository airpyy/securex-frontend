export default interface User {
    id: string;
    name?: string;
    email: string;
    enabled: boolean;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
    provider: string;
}