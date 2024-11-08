import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private apiURL = 'http://localhost:3000/pizzas'
  constructor(private http: HttpClient) { }

  //DEFINICION DE LOS METODOS

  //listar pizza (todos)
  getPizzas(): Observable<Pizza[]>{
    return this.http.get<Pizza[]>(this.apiURL)
  }

  //listar 1 pizza x ID
  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.apiURL}/${id}`)
  }

  //registrar pizza
  addPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.apiURL, pizza)
  }

  //actualizar pizza
  updatePizza(id: number, pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`${this.apiURL}/{id}`, pizza)
  }

  //eliminar pizza
  deletePizza(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/{id}`)
  } 
}
