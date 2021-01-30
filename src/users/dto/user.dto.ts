import { IsNumber, IsString, matches, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    @MinLength(2, { message: 'El nombre debe tener mínimo 2 caracteres.'})
    @MaxLength(40, { message: 'El nombre debe tener máximo 40 caracteres.'})
    nombre: string;

    @Matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/, { message: 'El correo debe ser del tipo algo@algo.com'})
    correo: string;

    @IsString()
    @Matches(/^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}$/, { message: 'El número telefonico es incorrecto.'} )
    telefono: string;

    @IsString()
    @MaxLength(300, { message: 'El mensaje debe tener menos de 300 caracteres.'})
    mensaje: string;

    createAt: Date;
}