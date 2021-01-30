import { Document } from "mongoose";

export interface User extends Document{
    readonly nombre: string;
    readonly correo: string;
    readonly telefono: string;
    readonly mensaje: string;
    readonly createdAt: Date;
}