import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  crearUsuario( objeto: any ): any {
    return this.http.post(`${url}/users/create`, objeto ).toPromise()
      .then(res => res)
      .catch(err => err.error);
  }

  getAll(): any {
    return this.http.get(`${url}/users/getall`).toPromise()
      .then(res => res)
      .catch(err => err.error);
  }

  convertToCSV(objArray: any) {
      const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
      let str = "";
      for (let i = 0; i < array.length; i++) {
        let line = "";
        for (let index in array[i]) {
          if (line != "") line += ",";
      line += array[i][index];
        }
      str += line + "\r\n";
        }
    return str;
  }

  exportCSVFile(headers: any, items: any, fileName: any) {
    if (headers) {
     items.unshift(headers);
    }
    const jsonObject = JSON.stringify(items);
    const csv = this.convertToCSV(jsonObject);
    const exportName = fileName + ".csv" || "export.csv";
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, exportName);
    } else {
      const link = document.createElement("a");
      if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", exportName);
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
  }

   async crearArchivo(){
    const headers = {
      _id: 'Id',
      nombre: 'Nombre',
      correo: 'Correo',
      telefono: 'Telefono',
      mensaje: 'Mensaje',
      createAt: 'Fecha'
     };
     const data = await this.getAll()
     console.log(data.users);

     this.exportCSVFile(headers, data.users, 'Usuarios');
   }

}
