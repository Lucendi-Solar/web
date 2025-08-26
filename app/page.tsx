// src/app/page.tsx
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full h-[80vh] relative flex items-center justify-center text-center">
        <Image
          src="/hero-solar.jpg"
          alt="Lucendi Solar - Energía para tu campo y hogar"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Energía y tecnología para tu campo y hogar
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Proyectos en energía solar, maquinaria agrícola y más.
          </p>
          <Link
            href="/contact"
            className="md:inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
          Solicita tu proyecto
        </Link>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-16 px-6 max-w-6xl w-full text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { name: "Energía solar", img: "/solar.jpg" },
            { name: "Bombas sumergibles", img: "/bomba.webp" },
            { name: "Maquinaria agrícola", img: "/maquinaria.jpg" },
            { name: "Herramienta eléctrica", img: "/herramienta.webp" },
            { name: "Ventiladores", img: "/ventiladores.webp" }
          ].map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={service.img}
                alt={service.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-gray-100 py-16 px-6 w-full">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-500">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Ahorro garantizado</h3>
              <p>Optimizamos tus costos con soluciones energéticas y maquinaria eficiente.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Soluciones personalizadas</h3>
              <p>Diseñamos proyectos adaptados a las necesidades de tu hogar o campo.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Confianza y experiencia</h3>
              <p>Contamos con años de trayectoria en instalaciones y proyectos especializados.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Final */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para iniciar tu proyecto?
        </h2>
        <Link
          href="/contact"
          className="hidden md:inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Contáctanos ahora
        </Link>
      </section>
    </main>
  );
}
