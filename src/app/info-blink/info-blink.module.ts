import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfoBlinkRoutingModule } from './info-blink-routing.module';
import { InfoBlinkComponent } from './info-blink.component';

@NgModule({
  declarations: [
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent,
    InfoBlinkComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(), // ToastrModule added,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    InfoBlinkRoutingModule
  ]
})
export class InfoBlinkModule { }
