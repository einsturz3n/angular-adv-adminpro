import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})

export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Cerveza', 'Hamburguesas'];
  public labels2: string[] = ['Pescado', 'Carne Vaca', 'Carne Cerdo'];
  public labels3: string[] = ['Gasolina', 'Varios', 'Cableado'];
  public labels4: string[] = ['Yerba', 'Aceite', 'Choclo'];


  public data1: any = [10, 15, 40];
  public data2: any = [99, 85, 42];
  public data3: any = [33, 710, 78];
  public data4: any = [55, 66, 22];


}
