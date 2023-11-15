/* eslint-disable @next/next/no-img-element */

import { Section } from "@/components/section";
import Image from "next/image";
import Link from "next/link";

import Header from "./resinas/header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-4 md:mx-auto  md:w-3/4">
        <section className="bg-white p-6 rounded shadow">
          <h1 className="text-4xl font-semibold mb-4">
            Pisos de resina epóxica
          </h1>
          <h2 className="text-xl font-semibold mb-4">
            Introducción a los pisos de resina epóxica
          </h2>
          <p className="text-gray-700">
            Los pisos de resina epóxica son una opción popular para diversos
            entornos debido a sus propiedades únicas y versatilidad. La resina
            epóxica es un material duradero y resistente que se aplica sobre
            superficies para crear un acabado liso y brillante. Estos pisos son
            ampliamente utilizados en espacios industriales, comerciales y
            residenciales debido a su capacidad para resistir el desgaste,
            productos químicos y abrasiones.
          </p>
          <p className="text-gray-700 mt-2">
            Además de su durabilidad, los pisos de resina epóxica también
            ofrecen una amplia gama de opciones de diseño. Pueden personalizarse
            con diferentes colores, patrones y efectos decorativos, lo que los
            convierte en una elección atractiva para quienes buscan una solución
            estética y funcional para sus suelos.
          </p>
        </section>
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Tipos de Resinas Epóxicas
          </h2>
          <p className="text-gray-700">
            Existen varios tipos de resinas epóxicas utilizadas en la creación
            de pisos duraderos y resistentes. Cada tipo tiene sus propias
            características y aplicaciones específicas. Algunos de los tipos más
            comunes son:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              Resinas Epóxicas 100% Sólidas: Estas resinas no contienen
              solventes y ofrecen una alta resistencia química y mecánica. Son
              ideales para áreas de alto tráfico y exposición a productos
              químicos.
            </li>
            <li>
              Resinas Autonivelantes: Estas resinas se autonivelan durante su
              aplicación, creando una superficie uniforme. Son ideales para
              lograr un acabado liso y estético.
            </li>
            <li>
              Morteros Epóxicos: Estas mezclas incluyen agregados como arena y
              cuarzo, lo que aumenta su resistencia y durabilidad. Son adecuadas
              para áreas con requerimientos de resistencia extremadamente altos.
            </li>
            <li>
              Resinas Transparentes: Diseñadas para crear pisos de apariencia
              transparente o semitransparente. Se utilizan a menudo en espacios
              donde se desea resaltar la apariencia del sustrato existente.
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            Elegir el tipo de resina epóxica adecuado depende de las necesidades
            específicas del proyecto, el entorno y el nivel de resistencia
            requerido.
          </p>
        </section>
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Ventajas y Desventajas</h2>
          <p className="text-gray-700">
            Los pisos de resina epóxica ofrecen una serie de ventajas y
            desventajas que deben tenerse en cuenta al considerar su uso en un
            proyecto. Algunas de las principales ventajas son:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              <strong>Durabilidad:</strong> Los pisos de resina epóxica son
              altamente duraderos y resistentes al desgaste, lo que los hace
              ideales para áreas de alto tráfico.
            </li>
            <li>
              <strong>Resistencia Química:</strong> Son capaces de resistir
              productos químicos corrosivos, lo que los hace adecuados para
              entornos industriales y comerciales.
            </li>
            <li>
              <strong>Fácil Limpieza:</strong> La superficie lisa y sin juntas
              facilita la limpieza y evita la acumulación de suciedad y
              gérmenes.
            </li>
            <li>
              <strong>Opciones de Diseño:</strong> Se pueden personalizar con
              una amplia gama de colores, patrones y efectos decorativos.
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            Sin embargo, también hay algunas desventajas que deben considerarse:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              <strong>Costo Inicial:</strong> La instalación de pisos de resina
              epóxica puede ser más costosa en comparación con otros tipos de
              pavimentos.
            </li>
            <li>
              <strong>Sensibilidad a la Humedad:</strong> Algunos tipos de
              resinas epóxicas pueden ser sensibles a la humedad, lo que podría
              afectar su durabilidad en ciertos entornos.
            </li>
            <li>
              <strong>Proceso de Instalación:</strong> La instalación requiere
              un proceso específico que incluye preparación de la superficie,
              mezcla y aplicación de la resina, y tiempo de curado.
            </li>
          </ul>
        </section>
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Aplicaciones de los Pisos de Resina Epóxica
          </h2>
          <p className="text-gray-700">
            Los pisos de resina epóxica se utilizan en una variedad de
            aplicaciones debido a su durabilidad y versatilidad. Algunas de las
            aplicaciones comunes incluyen:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              <strong>Áreas Industriales:</strong> Los pisos epóxicos son
              ideales para fábricas, almacenes y plantas de producción debido a
              su resistencia a productos químicos, impactos y tráfico pesado.
            </li>
            <li>
              <strong>Comercios y Tiendas:</strong> En tiendas minoristas y
              comerciales, los pisos de resina epóxica proporcionan un aspecto
              atractivo y duradero para áreas de exhibición y ventas.
            </li>
            <li>
              <strong>Garajes y Talleres:</strong> Son muy utilizados en garajes
              y talleres debido a su resistencia al aceite, grasa y abrasiones,
              además de ser fáciles de limpiar.
            </li>
            <li>
              <strong>Entornos Sanitarios:</strong> En hospitales, laboratorios
              y espacios médicos, los pisos epóxicos ofrecen una superficie
              higiénica y fácil de desinfectar.
            </li>
            <li>
              <strong>Áreas de Alimentación:</strong> En cocinas comerciales y
              restaurantes, los pisos de resina epóxica cumplen con los
              estándares de seguridad alimentaria y son resistentes a derrames.
            </li>
            <li>
              <strong>Instalaciones Deportivas:</strong> En gimnasios y canchas
              deportivas, estos pisos proporcionan un acabado liso y amortiguado
              que es ideal para actividades físicas.
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            La capacidad de los pisos de resina epóxica para adaptarse a
            diversas condiciones y requerimientos hace que sean una opción
            popular en una amplia gama de entornos.
          </p>
        </section>
        <Section
          header={
            <h2 className="text-xl font-semibold mb-4">
              Aplicación de las resinas para pisos epoxicos
            </h2>
          }
          contentA={
            <>
              <p className="text-gray-700">
                Para aplicar la resina epoxica para pisos se debe preparar y
                limpiar la superficie, mezclar resina y endurecedor según las
                indicaciones, aplicar capas uniformes con rodillo y pincel,
                eliminando burbujas, opcionalmente añadir colorantes, permitir
                el curado adecuado y considerar un sellador para mayor
                durabilidad y brillo.
              </p>
              <Link
                href="/aplicacion"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Ver más
              </Link>
            </>
          }
          contentB={
            <Image
              className="rounded shadow-lg"
              src="/applying-epoxy-resin-1.png"
              alt="Hombre aplincando resina epóxica"
              width={250}
              height={250}
            />
          }
        />

        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Diseños y Colores de los Pisos de Resina Epóxica
          </h2>
          <p className="text-gray-700">
            Una de las ventajas más destacadas de los pisos de resina epóxica es
            la amplia gama de opciones de diseño y colores disponibles. Estas
            opciones permiten crear pisos únicos y personalizados que se adapten
            a la estética de cualquier espacio.
          </p>
          <p className="text-gray-700 mt-2">
            Algunas de las opciones incluyen:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              <strong>Colores Sólidos:</strong> Puedes elegir entre una variedad
              de colores sólidos para crear un fondo uniforme y moderno.
            </li>
            <li>
              <strong>Efectos Metálicos:</strong> Los pisos epóxicos con efectos
              metálicos añaden un aspecto brillante y sofisticado, similar a los
              reflejos del metal.
            </li>
            <li>
              <strong>Marmolados:</strong> Mediante la combinación de colores y
              técnicas de marmolado, es posible lograr un acabado similar al
              mármol.
            </li>
            <li>
              <strong>Efectos Tridimensionales:</strong> Los pisos epóxicos
              pueden diseñarse para crear efectos en 3D que den profundidad y
              dinamismo al espacio.
            </li>
            <li>
              <strong>Logotipos y Diseños Personalizados:</strong> Se pueden
              incorporar logotipos, diseños geométricos y otros patrones
              personalizados en el piso.
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            La elección del diseño y los colores dependerá del estilo del
            entorno, su función y las preferencias estéticas del propietario.
            Consultar con profesionales puede ayudar a tomar decisiones
            informadas y creativas.
          </p>
        </section>
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Mantenimiento y Limpieza de los Pisos de Resina Epóxica
          </h2>
          <p className="text-gray-700">
            Los pisos de resina epóxica son conocidos por su durabilidad y
            facilidad de mantenimiento. Aquí hay algunos consejos para mantener
            y limpiar adecuadamente estos pisos:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              <strong>Limpieza Regular:</strong> Barre o aspira el piso
              regularmente para eliminar el polvo y la suciedad que pueden rayar
              la superficie.
            </li>
            <li>
              <strong>Limpieza Húmedad:</strong> Limpia el piso con una solución
              suave de agua tibia y un limpiador neutro. Evita el uso de
              limpiadores abrasivos.
            </li>
            <li>
              <strong>Derrames Rápidos:</strong> Limpia los derrames de líquidos
              de inmediato para evitar que se absorban y causen manchas.
            </li>
            <li>
              <strong>Evita el Impacto:</strong> Aunque los pisos son
              resistentes, evita golpes o impactos fuertes que puedan dañar la
              superficie.
            </li>
            <li>
              <strong>Protégete al Mover Objetos:</strong> Al mover muebles u
              objetos pesados, coloca almohadillas protectoras en las patas para
              evitar arañazos.
            </li>
            <li>
              <strong>Evita Sustancias Agresivas:</strong> Evita el contacto con
              productos químicos agresivos que puedan dañar la resina.
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            Siguiendo estos consejos, los pisos de resina epóxica se mantendrán
            en excelentes condiciones y su aspecto perdurará a lo largo del
            tiempo.
          </p>
        </section>
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Comparaciones con Otros Tipos de Pisos
          </h2>
          <p className="text-gray-700">
            Los pisos de resina epóxica tienen características únicas en
            comparación con otros tipos de pisos populares. Aquí hay algunas
            comparaciones clave:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              <strong>Madera:</strong> A diferencia de los pisos de madera, los
              epóxicos son más resistentes al agua y a los impactos, lo que los
              hace ideales para ambientes húmedos o de alto tráfico.
            </li>
            <li>
              <strong>Cerámica:</strong> A diferencia de las baldosas cerámicas,
              los pisos epóxicos no tienen juntas, lo que facilita la limpieza y
              evita la acumulación de suciedad en las grietas.
            </li>
            <li>
              <strong>Laminado:</strong> A diferencia de los pisos laminados,
              los epóxicos son más resistentes al desgaste y a los arañazos, lo
              que los hace más duraderos en el tiempo.
            </li>
            <li>
              <strong>Alfombras:</strong> A diferencia de las alfombras, los
              pisos epóxicos son higiénicos, ya que no atrapan alérgenos ni
              suciedad, y son más fáciles de limpiar y mantener.
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            Cada tipo de piso tiene sus ventajas y desventajas, por lo que es
            importante considerar las necesidades y características específicas
            de tu proyecto antes de tomar una decisión.
          </p>
        </section>
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Casos de Estudio y Testimonios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-200 rounded">
              <h3 className="text-lg font-semibold mb-2">
                Estudio de Caso: Hotel de Lujo
              </h3>
              <p className="text-gray-700">
                En un hotel de lujo, se eligieron pisos de resina epóxica para
                las áreas comunes debido a su elegante apariencia y fácil
                mantenimiento. Los huéspedes quedaron impresionados con la
                calidad y durabilidad de los pisos.
              </p>
            </div>
            <div className="p-4 bg-gray-200 rounded">
              <h3 className="text-lg font-semibold mb-2">
                Testimonio de Cliente
              </h3>
              <p className="text-gray-700">
                {`"Elegimos pisos de resina epóxica para nuestro taller automotriz y
              no podríamos estar más contentos. Son resistentes al aceite y a
              los impactos, y su apariencia profesional ha impresionado a
              nuestros clientes." - Juan Pérez, Propietario.`}
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                ¿Cuánto tiempo dura la instalación?
              </h3>
              <p className="text-gray-700">
                El tiempo de instalación puede variar según el tamaño y la
                complejidad del proyecto, pero en promedio, la instalación de
                pisos de resina epóxica puede demorar de 2 a 5 días, incluyendo
                el tiempo de curado.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                ¿Se pueden reparar los daños en los pisos epóxicos?
              </h3>
              <p className="text-gray-700">
                Sí, los daños menores como arañazos superficiales o pequeñas
                grietas pueden repararse mediante un proceso de pulido y
                relleno. En casos más graves, es posible que se requiera un
                trabajo más extenso de reparación.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                ¿Qué tipo de mantenimiento necesitan los pisos epóxicos?
              </h3>
              <p className="text-gray-700">
                Los pisos epóxicos requieren un mantenimiento relativamente
                sencillo. Se recomienda limpiarlos regularmente con agua tibia y
                un limpiador neutro. Evita el uso de productos químicos
                agresivos o abrasivos que puedan dañar la resina.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
