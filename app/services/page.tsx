import Image from "next/image";

const services = [
  {
    title: "Energía Solar",
    description:
      "Instalaciones de paneles solares tipo isla e interconexión con CFE, diseñadas para máxima eficiencia y ahorro.",
    img: "/solar.jpg",
  },
  {
    title: "Bombas y Sistemas de Agua",
    description:
      "Bombas sumergibles y bombas solares para riego, suministro de agua y proyectos de energía limpia.",
    img: "/bomba.webp",
  },
  {
    title: "Maquinaria Agrícola",
    description:
      "Motocultores, desbrozadoras, motosierras y más para optimizar el trabajo en campo con herramientas confiables.",
    img: "/maquinaria2.jpg",
  },
  {
    title: "Herramienta y Equipo Eléctrico",
    description:
      "Taladros, rotomartillos, sierras y más, para tareas profesionales en hogar, taller e industria.",
    img: "/herramienta.webp",
  },
  {
    title: "Generadores y Respaldo de Energía",
    description:
      "Generadores estacionarios y cabinas de energía para garantizar suministro continuo y confiable.",
    img: "/generador.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center px-6 py-16 pt-32 max-w-6xl mx-auto">
      
      {/* Hero / Introducción */}
      <section className="w-full mb-16 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Nuestros Servicios</h1>
        <p className="text-lg text-gray-700">
          En Lucendi Solar ofrecemos soluciones completas para hogar, campo e industria. 
          Desde energía solar hasta maquinaria y equipos eléctricos, estamos listos para cualquier proyecto.
        </p>
      </section>

      {/* Servicios principales */}
      <section className="w-full mb-16 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
            <Image
              src={service.img}
              alt={service.title}
              width={600}
              height={350}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Otros servicios */}
      <section className="w-full mb-16 text-center bg-gray-100 p-10 rounded-xl">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Otros Servicios</h2>
        <p className="text-gray-700 text-lg">
          Ofrecemos soluciones a medida para cualquier proyecto, grande o pequeño. 
          Si no ves lo que buscas, contáctanos y te ayudaremos a encontrar la mejor opción.
        </p>
      </section>

      {/* CTA final */}
      <section className="w-full text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">
          ¿Listo para iniciar tu proyecto?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Contáctanos ahora
        </a>
      </section>

    </main>
  );
}