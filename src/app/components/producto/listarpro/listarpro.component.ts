import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listarpro',
  templateUrl: './listarpro.component.html',
  styleUrls: ['./listarpro.component.css']
})
export class ListarproComponent implements OnInit {
  productos: any;
  producto: any;
  titulo = 'Crear';
  accion = 'Registrar';
  productoModel:Producto = new Producto();
  constructor(private productoService: ProductoService, private router: Router) { }
  ngOnInit(): void {
    this.productoModel.idproducto=0;
    this.listar();
  }
  listar(): void {
    this.productoService.getProductos().subscribe(
      (data) => {
        this.productos = data['cursor_productos'];
        console.log("Productos", this.productos);
      }, (err) => {
        console.log("Error en el listar-producto-component")
      }
    )
  }
}
