import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EdadService {
  calcularEdad(anyoNacimiento: number): number {
    return new Date().getFullYear() - anyoNacimiento;
  }

  esMayorDeEdad(edad: number): boolean {
    return edad >= 18;
  }

  esAñoDeNacimientoValido(anyoNacimiento: number): boolean {
    const anyoActual = new Date().getFullYear();
    return Number.isInteger(anyoNacimiento)
      && anyoNacimiento >= 1900
      && anyoNacimiento <= anyoActual;
  }
}
