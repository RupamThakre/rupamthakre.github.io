import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { InfoBlinkComponent } from './info-blink.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path:'', 
  component:InfoBlinkComponent,
  children:[
  { path: 'register-student', component: AddStudentComponent },
  { path: 'view-students', component: StudentListComponent },
  { path: 'edit-student/:id', component: EditStudentComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoBlinkRoutingModule { }
