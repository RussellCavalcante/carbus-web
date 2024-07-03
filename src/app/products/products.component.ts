import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products = [
    { image: 'assets/PRODUTOS/01.jpeg', title: 'PONTEIRAS' },
    { image: 'assets/PRODUTOS/02.jpeg', title: 'LANTERNAS' },
    { image: 'assets/PRODUTOS/03-removebg-preview.png', title: 'Borracha' },
    { image: 'assets/PRODUTOS/04.jpeg', title: 'PISTÕES' },
    { image: 'assets/PRODUTOS/05.jpeg', title: 'PÁRA-BRISA E VIDRO' },
    { image: 'assets/PRODUTOS/06.jpeg', title: 'LIMPADORES DE PÁRA-BRISA' },
    { image: 'assets/PRODUTOS/07.jpeg', title: 'TECIDOS E TAPETES' },
    { image: 'assets/PRODUTOS/08.jpeg', title: 'RETROVISORES' },
    { image: 'assets/PRODUTOS/09.jpeg', title: 'PERFIL ALUMÍNIO E PVC' },
    { image: 'assets/PRODUTOS/10.jpeg', title: 'PARA-CHOQUE' },
    { image: 'assets/PRODUTOS/11.jpeg', title: 'CHAPA' },
    { image: 'assets/PRODUTOS/12.jpeg', title: 'Caneleta' },
  ];

  openWhatsApp(): void {
    window.open('https://wa.me/5565993557958', '_blank');
  }

  ngOnInit(): void {
  }

}
