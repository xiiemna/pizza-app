import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { PizzaService } from '../../service/pizza.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-updt-pizza',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, //hace que el formulario sea reactivo
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './updt-pizza.component.html',
  styleUrl: './updt-pizza.component.css'
})
export class UpdtPizzaComponent implements OnInit{
  //variables
  pizzaForm: FormGroup
  id: number | null = null
  nombres: ['napolitana', 'margarita', 'peruana']

  //constructor
  constructor(
    private fb: FormBuilder,
    private pizzaService: PizzaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    //comportamiento al constructor
    this.pizzaForm = this.fb.group({
      nombre: [' '],
      precio: [' ']
    })
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!
    if (this.id){
      this.pizzaService.getPizza(this.id).subscribe(pizza => {
        this.pizzaForm.patchValue(pizza)
      })
    }
  }

  OnSubmit(): void{
    //preguntamos si es un Form valido
    if(this.pizzaForm.valid){
      if(this.id){
        this.pizzaService.updatePizza(this.id, this.pizzaForm.value).subscribe(() => {
         //direcciona a las listas
         this.router.navigate(['/list-pizzas'])
        })
      }else{
        
      }
    }
  }

}
