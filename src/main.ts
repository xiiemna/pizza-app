import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Route, RouterModule } from '@angular/router';
import { ListPizzaComponent } from './app/component/list-pizza/list-pizza.component';
import { UpdtPizzaComponent } from './app/component/updt-pizza/updt-pizza.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Route[] = [
  {path: 'list-pizzas', component: ListPizzaComponent},
  {path: 'add-pizzas', component:UpdtPizzaComponent},
  {path: 'edit-pizza/:id', component:UpdtPizzaComponent},
  {path: '', redirectTo: '/list-pizzas', pathMatch: 'full'}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule, RouterModule, MatToolbarModule, BrowserAnimationsModule)]
}).catch((err) => console.error(err));
