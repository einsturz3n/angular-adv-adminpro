import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit() {
    this.btnClass = "btn " + this.btnClass;
  }

  @Input('valor') progreso: number = 30;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  // get getPorcentaje() {
  //   return this.progreso + "%";
  // }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      this.progreso = 95;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progreso = 5;
    }
    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor: number) {

    // if (nuevoValor >= 100)
    //   nuevoValor = 100;
    // else if (nuevoValor <= 0)
    //   nuevoValor = 0;
    // else
    //   this.progreso = nuevoValor;

    // this.valorSalida.emit(nuevoValor);
    this.progreso = nuevoValor;
    this.valorSalida.emit(this.progreso);
  }


}
