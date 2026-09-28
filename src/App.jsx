import { useEffect, useState } from "react";
import { obtenerActividades } from "./services/activityService";
import ListaActividades from "./components/ActivityList";
import BarraBusqueda from "./components/SearchBar";
import DetalleActividad from "./components/ActivityDetail";
import MisInscripciones from "./components/MisInscripciones";

const normalizarTexto = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [actividadSeleccionada, setActividadSeleccionada] = useState(null);
  const [actividadesInscritas, setActividadesInscritas] = useState([]);
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mensajeError, setMensajeError] = useState("");

  useEffect(() => {
    obtenerActividades()
      .then((datos) => {
        setActividades(datos);
      })
      .catch(() => {
        setMensajeError("No se pudieron cargar las actividades.");
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  const busquedaNormalizada = normalizarTexto(busqueda);
  const actividadesFiltradas = actividades.filter((actividad) => {
    return (
      normalizarTexto(actividad.nombre).includes(busquedaNormalizada) ||
      normalizarTexto(actividad.profesor).includes(busquedaNormalizada) ||
      normalizarTexto(actividad.categoria).includes(busquedaNormalizada)
    );
  });

  const misActividades = actividades.filter((actividad) =>
    actividadesInscritas.includes(actividad.id),
  );

  const cambiarCupos = (idActividad, cantidad) => {
    setActividades((actividadesActuales) =>
      actividadesActuales.map((actividad) =>
        actividad.id === idActividad
          ? {
              ...actividad,
              cuposDisponibles: actividad.cuposDisponibles + cantidad,
            }
          : actividad,
      ),
    );

    setActividadSeleccionada((actividadActual) => {
      if (!actividadActual || actividadActual.id !== idActividad) {
        return actividadActual;
      }

      return {
        ...actividadActual,
        cuposDisponibles: actividadActual.cuposDisponibles + cantidad,
      };
    });
  };

  const manejarInscripcion = (actividad) => {
    const yaEstaInscrita = actividadesInscritas.includes(actividad.id);

    if (yaEstaInscrita || actividad.cuposDisponibles === 0) {
      return;
    }

    setActividadesInscritas((actividadesActuales) => [
      ...actividadesActuales,
      actividad.id,
    ]);
    cambiarCupos(actividad.id, -1);
  };

  const manejarCancelacion = (actividad) => {
    setActividadesInscritas((actividadesActuales) =>
      actividadesActuales.filter((id) => id !== actividad.id),
    );
    cambiarCupos(actividad.id, 1);
  };

  return (
    <div className="aplicacion">
      <header className="encabezado">
        <div className="encabezado-contenido">
          <div className="logo-contenedor">
            <img
              className="logo-centro"
              src="/logo-locos-x-el-deporte.png"
              alt="Locos por el deporte"
            />
          </div>
          <div className="texto-encabezado">
            <h1 className="titulo-imagen-contenedor">
              <img
                className="titulo-imagen"
                src="/logo-centro-deportivo.png"
                alt="Centro Deportivo"
              />
            </h1>
            <p className="descripcion-principal">
              Revisa las actividades disponibles y encuentra la que más te guste.
            </p>
          </div>
        </div>
      </header>

      <main className="contenido-principal">
        {cargando ? (
          <p className="mensaje-estado">Cargando actividades...</p>
        ) : mensajeError ? (
          <p className="mensaje-estado mensaje-error">{mensajeError}</p>
        ) : actividadSeleccionada ? (
          <DetalleActividad
            actividad={actividadSeleccionada}
            alVolver={() => setActividadSeleccionada(null)}
            alInscribir={manejarInscripcion}
            alCancelar={manejarCancelacion}
            estaInscrita={actividadesInscritas.includes(actividadSeleccionada.id)}
          />
        ) : (
          <>
            <BarraBusqueda busqueda={busqueda} alBuscar={setBusqueda} />

            <ListaActividades
              actividades={actividadesFiltradas}
              alSeleccionar={setActividadSeleccionada}
            />

            <MisInscripciones
              actividades={misActividades}
              alSeleccionar={setActividadSeleccionada}
              alCancelar={manejarCancelacion}
            />
          </>
        )}
      </main>

      <footer className="pie-pagina">
        <p>Centro deportivo de Temuco</p>
      </footer>
    </div>
  );
}

export default App;
