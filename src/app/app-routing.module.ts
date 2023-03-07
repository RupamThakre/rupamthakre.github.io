import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { InfoBlinkModule } from './info-blink/info-blink.module';

const routes: Routes = [
  { path: '', redirectTo: '/documentation', pathMatch: 'full' },
  { path: 'documentation', component: DocumentComponent },
  {
    path: 'app',
    loadChildren: () => InfoBlinkModule
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
