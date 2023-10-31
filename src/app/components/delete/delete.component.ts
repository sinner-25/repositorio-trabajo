import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from '../../services/personas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete',
  template: '',
  styles: []
})
export class DeleteComponent implements OnInit {
  public id: number = 0;

  constructor(
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.id = +paramId;
      this.eliminarPersona(this.id);
    } else {
      console.error('ID parameter not found.');
    }
  }

  eliminarPersona(id: number): void {
    this.personasService.delete(id).subscribe(response => {
      this.snackBar.open('Persona Eliminada Correctamente', 'Cerrar', {
        duration: 3000, 
        verticalPosition: 'top'
      });
      this.router.navigate(['/list']);
    });
  }
}