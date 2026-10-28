import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { describe, expect, it } from 'vitest';
import { AppComponent } from './app.component';

// Agrupa las pruebas del componente raíz de la aplicación.
describe('AppComponent', () => {
  // Comprueba que el componente principal puede crearse con su configuración
  // de rutas y que Angular proporciona una instancia válida.
  it('should create the app', async () => {
    // Configura el entorno de pruebas importando el componente raíz.
    // Se proporciona un router vacío porque el componente depende del router.
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();
    
    // Crea una instancia del componente y obtiene su representación de prueba.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Verifica que Angular ha creado correctamente el componente.
    expect(app).toBeTruthy();
  });
});
