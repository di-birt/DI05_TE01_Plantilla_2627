import { beforeEach, describe, expect, it, vi } from 'vitest';
import { EdadService } from './edad.service';

// Agrupa las pruebas del servicio encargado de calcular y validar edades.
describe('EdadService', () => {
  // Instancia del servicio utilizada en cada prueba.
  let service: EdadService;

  beforeEach(() => {
    // Crea una instancia independiente antes de cada prueba para que todas comiencen con el mismo estado.
    service = new EdadService();
  });

  // TODO - Comprueba que la edad se calcula comparando el año de nacimiento con el año actual del sistema.
  it('calcula la edad usando el año actual', () => {
    
  });

  // TODO Comprueba los dos lados del límite de mayoría de edad: una persona de 17 años no cumple la condición y una de 18 sí la cumple.
  it('valida el límite de mayoría de edad', () => {
    
  });

  // TODO Comprueba que el año introducido está dentro de un rango razonable, que no tiene decimales y que no pertenece al futuro.
  it('valida años de nacimiento razonables', () => {

  });

  // spyOn permite observar una llamada a la implementación real de esMayorEdad sin sustituirla. 
  // Así se verifica tanto el resultado como los argumentos.
  it('permite espiar la lógica real del servicio', () => {

    // Definir espía
    
    // Añadir los expect

    // Restaura el método original para no dejar el espía activo.

  });
});
