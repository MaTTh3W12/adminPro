import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pizza', 'Monitor', 'Medicina']
  public labels2: string[] = ['Laptops', 'Televisores', 'Hamburguesas']
  public data1 = [
    [50, 3, 10],
  ];
  public data2 = [
    [120, 60, 200],
  ];

}
