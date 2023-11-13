import List from "../components/resins";
import { resins } from "../data/resins";

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold my-2">Lista de Resinas Epóxicas:</h1>
      <List resins={resins} />

      <h2 className="text-2xl font-bold my-2">
        Resina Epóxica de Alto Desempeño:
      </h2>
      <p className="my-2">
        Ideal para áreas de alto tráfico y donde se requiere una alta
        resistencia química y mecánica.
      </p>
      <h2 className="text-2xl font-bold my-2">Resina Epóxica Autonivelante:</h2>
      <p className="my-2">
        Perfecta para obtener una superficie completamente plana y nivelada.
      </p>
      <h2 className="text-2xl font-bold my-2">Resina Epóxica Transparente:</h2>
      <p className="my-2">
        Utilizada para aplicaciones decorativas y de recubrimiento,
        especialmente en pisos con diseños personalizados.
      </p>
      <h2 className="text-2xl font-bold my-2">
        Resina Epóxica para Pisos de Garaje:
      </h2>
      <p className="my-2">
        Diseñada para soportar cargas pesadas y productos químicos comunes en
        garajes.
      </p>
      <h2 className="text-2xl font-bold my-2">
        Resina Epóxica de Baja Viscosidad:
      </h2>
      <p className="my-2">
        Apropiada para sellar grietas y fisuras en el sustrato antes de aplicar
        una capa de resina epóxica.
      </p>
      <h2 className="text-2xl font-bold my-2">
        Resina Epóxica de Curado Rápido:
      </h2>
      <p className="my-2">
        Se utiliza cuando se necesita una rápida puesta en servicio, reduciendo
        el tiempo de inactividad.
      </p>
      <h2 className="text-2xl font-bold my-2">Resina Epóxica Multicapa:</h2>
      <p className="my-2">
        Se aplica en múltiples capas para lograr un acabado resistente y
        duradero.
      </p>
    </>
  );
}
