import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { EntradaService } from './entrada.service';

// Agrupa las pruebas del servicio que valida los códigos de entrada.
describe('EntradaService', () => {
  // Instancia del servicio utilizada en cada prueba.
  let service: EntradaService;

  beforeEach(() => {
    // Se crea una instancia independiente para que cada prueba empiece con el mismo estado.
    service = new EntradaService();

    // TODO - useFakeTimers Permite controlar manualmente la espera asíncrona del servicio.
    
  });

  afterEach(() => {
    // Devuelve los temporizadores reales al terminar cada prueba.
    vi.useRealTimers();
  });

  // Comprueba que un código conocido se normaliza, espera el tiempo previsto
  // y devuelve una respuesta autorizada.
  it('resuelve una entrada conocida después de su espera asíncrona', async () => {
    /* TODO - Pásamos un valor válido a validarEntrada (fest-2026 o vip-2026)
     * Devuelve una promesa ---> Promise<ResultadoEntrada>
     */
    

    /* TODO - Avanza el reloj simulado para completar la espera sin tener que detener realmente
     * la prueba durante 300 milisegundos.
     */ 


    /* TODO - Verifica que la promesa termina correctamente con el resultado esperado.
     * Recordad que tenemos que esperar a que la Promise responda.
     * Debe ser exáctamente igual, tanto autorizada como el mensaje.
     */
    
  });

  // Comprueba que un código que no existe resuelve sin autorización.
  it('resuelve como no autorizada una entrada desconocida', async () => {
    /* TODO - Pásamos un valor inválido a validarEntrada (NO-EXISTE)
     * Devuelve una promesa ---> Promise<ResultadoEntrada>
     */
    
    // TODO - Avanza el reloj simulado para completar la espera sin tener que
    // detener realmente la prueba durante 300 milisegundos.
   

    /* TODO - Comprueba que la promesa devuelve exactamente el resultado esperado para un código que no está registrado.
     * Recordad que tenemos que esperar a que la Promise responda.
     * Debe ser exáctamente igual, tanto autorizada como el mensaje.
     */
    
  });
});
