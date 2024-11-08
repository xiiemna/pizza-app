import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PizzaService } from '../../service/pizza.service';
import { Router } from '@angular/router';
import { Pizza } from '../../model/pizza';

@Component({
  selector: 'app-list-pizza',
  standalone: true,
  imports: [
    CommonModule, 
    MatTableModule, 
    MatButtonModule, 
    MatIconModule],
  templateUrl: './list-pizza.component.html',
  styleUrl: './list-pizza.component.css'
})
export class ListPizzaComponent implements OnInit{
  //variable
  pizzas: Pizza[] = []

  constructor(private pizzaService: PizzaService, private router: Router){}

  ngOnInit(): void {
   //invocar el servicio
    this.pizzaService.getPizzas().subscribe(data => {
      this.pizzas = data
    })
  }

  //editar 
  editPizza(id: number): void{
    this.router.navigate(['/edit-pizza', id]) //direcciona a editar
  }
  
  //eliminar
  deletePizza(id: number): void{
    this.pizzaService.deletePizza(id).subscribe(() => {
      //filtra las pizzas para quitar el registro de las eliminadas
      this.pizzas = this.pizzas.filter(pizza => pizza.id !== id)
    })
  }
}
