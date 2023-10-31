import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public personas: Persona[] = [];

  constructor(private personasService: PersonasService, private router: Router) { }

  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas(): void {
    this.personasService.getAll().subscribe(data => { 
      this.personas = data;
    });
  }

  redirectToCreate(): void {
    this.router.navigate(['/create-edit']);
  }  

  redirectToEdit(id: number): void {
    this.router.navigate([`/create-edit/${id}`]);
  }

  redirectToDelete(id: number): void {
    this.router.navigate([`/delete/${id}`]);
  }
}