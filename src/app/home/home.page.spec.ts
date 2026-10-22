import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { HomePage } from './home.page';
import { EdadService } from '../services/edad.service';
import { EntradaService, ResultadoEntrada } from '../services/entrada.service';

// Agrupa todas las pruebas relacionadas con la página principal.
describe('HomePage', () => {
  // "component" es la instancia de la página que se está probando.
  let component: HomePage;
  // "fixture" conecta la instancia del componente con su plantilla HTML.
  let fixture: ComponentFixture<HomePage>;
  // Mock de la función del servicio que valida el código de entrada.
  // Se controla en cada prueba para simular respuestas correctas o errores.  
  // ---> ReturnType<typeof vi.fn> obtiene automáticamente el tipo de dato que devuelve vi.fn() y lo utiliza como tipo para la variable validarEntrada.
  // De esta forma, TypeScript sabe que la variable contiene una función simulada de Vitest y permite usar métodos como mockResolvedValue, mockRejectedValue o mockReturnValue.
  let validarEntrada: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Se crea una función simulada nueva antes de cada prueba para evitar que las llamadas o resultados de una prueba afecten a otra.
    validarEntrada = vi.fn();

    // Configura el entorno de pruebas de Angular. Se importa HomePage y se sustituye EntradaService por un objeto simulado.
    TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [
        { provide: EntradaService, useValue: { validarEntrada } },
      ],
    });

    // Crea la página y obtiene tanto su instancia como su representación DOM.
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;

    // Ejecuta el ciclo inicial de Angular para renderizar la plantilla.
    fixture.detectChanges();
  });

  afterEach(() => {
    // Devuelve los temporizadores reales después de cada prueba. Esto evita
    // que los fake timers utilizados en una prueba afecten a las siguientes.
    vi.useRealTimers();
  });

  it('crea la página y muestra el formulario principal', () => {
    // TODO - Comprueba que el componente se crea.

    // TODO - Observamos el elemento con selector "ion-card-title", solo tenemos uno en este caso

  });

  // Estas pruebas comprueban reglas que no necesitan consultar servicios.
  describe('reglas síncronas', () => {
    // TODO - Una persona menor de 18 años no puede acceder.
    it('rechaza 17 años', () => {

    });

    // TODO - La edad mínima permitida es exactamente 18 años.
    it('acepta exactamente 18 años', () => {

    });

    // TODO - También se aceptan personas que superan la edad mínima.
    it('acepta una edad superior a 18 años', () => {

    });

    // TODO - Comprueba que el año de nacimiento se transforma en la edad actual.
    it('calcula la edad a partir del año de nacimiento', () => {

    });

    // Si faltan campos obligatorios, se muestra un error y no se consulta el servicio porque la solicitud se detiene antes.
    it('no solicita acceso cuando faltan datos obligatorios', async () => {
      /* TODO
       * Llamar a solicitarAcceso
       * Controlar estado
       * Controlar mensaje
       * Comprobar si se puede llamar validarEntrada
       */

    });

    // Una persona menor de edad se rechaza antes de validar su código.
    it('rechaza una persona menor antes de consultar la entrada', async () => {
      /* TODO
       * Añadir nombre, anyoNacimiento y codigoEntrada
       * Llamar a solicitarAcceso
       * Controlar estado
       * Controlar mensaje
       * Comprobar si se puede llamar validarEntrada
       */

    });
  });

  // Comprueba la comunicación entre HomePage y EntradaService.
  describe('colaboración con EntradaService', () => {
    // DONE - Prepara datos válidos reutilizables en las pruebas del servicio.
    // Este método auxiliar se podrá utilizar en este describe
    const prepararFormulario = (): void => {
      component.nombre = 'Alex García';
      component.anyoNacimiento = new Date().getFullYear() - 25;
      component.codigoEntrada = 'FEST-2026';
    };

    // Simula una promesa correcta y verifica el estado de carga y el resultado.
    it('indica carga y procesa una promesa resuelta', async () => {
      // TODO - Creamos una variable de tipo ResultadoEntrada
      
      // TODO - validarEntrada si la promesa se resuelve correctamente
      
      /* TODO
       * Necesitamos los datos de nombre, anyoNacimiento y codigoEntrada
       * Llamamos a solicitarAcceso
       * El estado será "cargando"
       * Esperamos hasta completar la solicitud
       * Comprobar que validarEntrada se ha llamado 1 vez
       * Comprobar que validarEntrada se llama con el parámetro "FEST-2026"
       * Comprobar que estado sea "exito"
       * Comprobar que mensaje sea "Entrada autorizada"
       */

    });

    // Una respuesta recibida correctamente también puede indicar que el
    // código no está autorizado; en ese caso se muestra el rechazo.
    it('muestra el rechazo de una entrada válida para la persona', async () => {

      // TODO - Crear los valores falsos de validarEntrada, añadir valores a autorizada y mensaje
      
      /* TODO
       * Necesitamos los datos de nombre, anyoNacimiento y codigoEntrada
       * Llamamos a solicitarAcceso
       * Comprobar que estado sea "error"
       * Comprobar que mensaje sea "Código rechazado"
       */

    });

    // Convierte un fallo de la promesa en un mensaje de error que el usuario
    // puede ver, en lugar de dejar la interfaz en estado de carga.
    it('convierte un rechazo de la promesa en un error visible', async () => {
      // TODO - controlar la respeusta de rechazo de la promesa ("red caída")
      /* TODO
       * Necesitamos los datos de nombre, anyoNacimiento y codigoEntrada
       * Llamamos a solicitarAcceso
       * Comprobar que estado sea "error"
       * Comprobar que mensaje sea "No se ha podido consultar"
       */

    });
  });

  // Comprueba el resultado que se muestra en la plantilla y el comportamiento
  // del mensaje temporal que desaparece mediante un temporizador.
  describe('DOM y timers', () => {
    // Después de una respuesta autorizada, el resultado debe aparecer en el
    // DOM con la clase CSS que representa un estado correcto.
    it('pinta el resultado en el DOM después de una respuesta correcta', async () => {
      // TODO - Añadir valores falsos a validarEntrada cuando el resultado se válido
      
      /* TODO
       * Necesitamos los datos de nombre, anyoNacimiento y codigoEntrada
       * Llamamos a solicitarAcceso
       * Habrá que detectar los cambios del fixture
       * Controlar el elemento con class="result"
       * Comprobar que textContent sea "Acceso concedido"
       * Comprobar que classList contiene "success" y sea true
       */

    });

    // Los temporizadores simulados permiten avanzar el tiempo manualmente y
    // comprobar que el aviso permanece 4 segundos y después se limpia.
    it('borra el aviso cuando avanza el timer controlado', async () => {
      // TODO - Añadir un Timer falso
            
      // TODO - Añadir valores falsos a validarEntrada cuando autorizada sea true y el mensaje "Temporal"
      
      /* TODO
       * Necesitamos los datos de nombre, anyoNacimiento y codigoEntrada
       * Llamamos a solicitarAcceso
       * Avanzamos el tiempo hasta 3999ms
       * Comprobar que el mensaje sea "Temporal"
       * Avanzamos el tiempo 1ms para que sea 4000ms
       * Comprobar que el estado sea "inicial"
       * Comprobar que el mensaje sea ""
       */

    });
  });

  // Comprueba que Angular permite reemplazar EdadService por un mock mediante
  // inyección de dependencias, algo útil para aislar la página en una prueba.
  it('permite sustituir EdadService mediante el inyector', async () => {
    /* TODO
     * Creamos un mock de EdadService con los métodos_
     * -> calcularEdad que devolverá un valor siempre 42
     * -> esMayorEdad que devolverá siempre true
     * -> esAñoDeNacimientoValido que devolverá siempre true.
     */

    /* TODO
     * Creamos un mock de para validarEntrada con las variables 
     * -> autorizada que será true
     * -> mensaje que será "Mock autorizado"
     */

    // Se reinicia el módulo anterior para configurar esta prueba con otro proveedor de EdadService.
    /* TODO
     * Añadir un provider para EdadService
     * Añadir otro para EntradaService
     */
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [],
    }); 

  
    // Se crea una segunda instancia usando los servicios simulados.
    const mockFixture = TestBed.createComponent(HomePage);
    const mockComponent = mockFixture.componentInstance;

    // TODO - asignar valores a nombre y codigoEntrada
    
    // Al solicitar el acceso, la página debe utilizar las funciones del mock
    // y completar el flujo como si la persona fuera mayor de edad.
    /* TODO
     * Llamar a solicitarAcceso
     * Comprobar que calcularEdad se puede llamar
     * Comprobar que esMayorDeEdad se puede llamar con el parámetro 42
     * Comprobar que estado sea "exito"
     */
    
  });
});
