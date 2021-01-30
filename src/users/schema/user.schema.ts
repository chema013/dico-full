import { Schema } from "mongoose";

export const UserSchema = new Schema({
    nombre: {type: String, required: true },
    correo: String,
    telefono: String,
    mensaje: String,
    createAt: {
        type: Date,
        default: Date.now
    }
});