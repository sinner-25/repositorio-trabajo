import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { CreateEditComponent } from './components/create-edit/create-edit.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'create-edit', component: CreateEditComponent },
    { path: 'create-edit/:id', component: CreateEditComponent },
    { path: 'delete/:id', component: DeleteComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }