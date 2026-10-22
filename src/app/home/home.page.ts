import { ChangeDetectorRef, Component, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { EdadService } from '../services/edad.service';
import { EntradaService } from '../services/entrada.service';

// DONE - Los posibles valores de EstadoAcceso
export type EstadoAcceso = 'inicial' | 'cargando' | 'exito' | 'error';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonNote,
    IonSpinner,
    IonTitle,
    IonToolbar,
  ],
})
export class HomePage implements OnDestroy {
  nombre = '';
  anyoNacimiento = 2000;
  codigoEntrada = '';
  edad: number | null = null;
  estado: EstadoAcceso = 'inicial';
  mensaje = '';

  private readonly edadService = inject(EdadService);
  private readonly entradaService = inject(EntradaService);
  private readonly changeDetector = inject(ChangeDetectorRef);
  private avisoTimer: ReturnType<typeof setTimeout> | undefined;

  calcularEdad(anyoNacimiento: number): number {
    return this.edadService.calcularEdad(anyoNacimiento);
  }

  esMayorDeEdad(edad: number): boolean {
    return this.edadService.esMayorDeEdad(edad);
  }

  puedeSolicitarAcceso(): boolean {
    return this.nombre.trim().length >= 2
      && this.edadService.esAñoDeNacimientoValido(this.anyoNacimiento)
      && this.codigoEntrada.trim().length > 0;
  }

  async solicitarAcceso(): Promise<void> {
    if (!this.puedeSolicitarAcceso()) {
      this.estado = 'error';
      this.mensaje = 'Completa un nombre, un año válido y el código de entrada.';
      return;
    }

    this.edad = this.calcularEdad(this.anyoNacimiento);
    if (!this.esMayorDeEdad(this.edad)) {
      this.estado = 'error';
      this.mensaje = 'El acceso está reservado a personas mayores de edad.';
      return;
    }

    this.estado = 'cargando';
    this.mensaje = 'Consultando la entrada...';

    try {
      const resultado = await this.entradaService.validarEntrada(this.codigoEntrada);
      this.estado = resultado.autorizada ? 'exito' : 'error';
      this.mensaje = resultado.mensaje;
      this.changeDetector.markForCheck();
      this.programarBorradoDelAviso();
    } catch {
      this.estado = 'error';
      this.mensaje = 'No se ha podido consultar la entrada. Inténtalo de nuevo.';
      this.changeDetector.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.cancelarAviso();
  }

  private programarBorradoDelAviso(): void {
    this.cancelarAviso();
    this.avisoTimer = setTimeout(() => {
      this.estado = 'inicial';
      this.mensaje = '';
      this.changeDetector.markForCheck();
    }, 4000);
  }

  private cancelarAviso(): void {
    if (this.avisoTimer !== undefined) {
      clearTimeout(this.avisoTimer);
      this.avisoTimer = undefined;
    }
  }
}
