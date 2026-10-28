import { Injectable } from '@angular/core';

export interface ResultadoEntrada {
  autorizada: boolean;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class EntradaService {
  private readonly entradasValidas = new Set(['FEST-2026', 'VIP-2026']);

  validarEntrada(codigo: string): Promise<ResultadoEntrada> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const autorizada = this.entradasValidas.has(codigo.trim().toUpperCase());
        resolve({
          autorizada,
          mensaje: autorizada
            ? 'Entrada válida. Puedes acceder al recinto.'
            : 'El código no corresponde a una entrada válida.',
        });
      }, 300);
    });
  }
}
