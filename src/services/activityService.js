import { actividades } from "../data/activities";

export const obtenerActividades = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(actividades);
    }, 1000);
  });
};
