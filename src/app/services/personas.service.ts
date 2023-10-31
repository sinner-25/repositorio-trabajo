import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  private apiUrl = 'http://localhost:3051/personas';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  get(id: number) {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }

  create(persona: Persona) {
    return this.http.post<Persona>(this.apiUrl, persona);
  }

  update(id: number, persona: Persona) {
    return this.http.put<Persona>(`${this.apiUrl}/${id}`, persona);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}