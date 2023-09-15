import { Component } from '@angular/core';
import { ServicoroupaService } from '../service/servicoroupa.service';
import { Roupa } from './Roupa';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private servicoroupa: ServicoroupaService){
    this.getRoupa()
  }


  ngOnInit():void{}

  roupas: Roupa[] = [];

  getRoupa():void{
    this.servicoroupa.getAll().subscribe((roupa) => (this.roupas = roupa));
  }
}
