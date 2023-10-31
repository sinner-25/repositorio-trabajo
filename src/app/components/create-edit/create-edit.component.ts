import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../models/persona';

@Component({
    selector: 'app-create-edit',
    templateUrl: './create-edit.component.html',
    styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {
    public persona: Persona = new Persona();
    public id: number | null = null;

    constructor(
        private personasService: PersonasService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const paramId = this.route.snapshot.paramMap.get('id');
        if (paramId) {
            this.id = +paramId;
            this.personasService.get(this.id).subscribe(data => {
                this.persona = data;
            });
        }
    }

    guardarPersona(): void {
        if (this.id) {
            this.personasService.update(this.id, this.persona).subscribe(() => {
                this.router.navigate(['/list']); 
            });
        } else {
            this.personasService.create(this.persona).subscribe(() => {
                this.router.navigate(['/list']); 
            });
        }
    }
}