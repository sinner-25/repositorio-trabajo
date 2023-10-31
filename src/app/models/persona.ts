export interface IPersona {
  id?: number;
  nombre: string;
  apellido: string;
  fecha_nacimiento: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Persona implements IPersona {
  id?: number;
  nombre: string;
  apellido: string;
  fecha_nacimiento: Date;
  createdAt?: Date;
  updatedAt?: Date;

  constructor() {
      this.nombre = '';
      this.apellido = '';
      this.fecha_nacimiento = new Date();
  }
}
