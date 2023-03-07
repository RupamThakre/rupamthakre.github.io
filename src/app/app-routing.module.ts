import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DocumentComponent } from './document/document.component';
import { InfoBlinkModule } from './info-blink/info-blink.module';

const infoModule = () => import('./info-blink/info-blink.module').then(m => m.InfoBlinkModule);

const routes: Routes = [
  { path: '', redirectTo: '/documentation', pathMatch: 'full' },
  { path: 'documentation', component: DocumentComponent },
  { path: 'app', 
  loadChildren : infoModule, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
