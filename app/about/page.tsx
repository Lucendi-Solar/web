import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center px-6 py-16 pt-32 max-w-6xl mx-auto">
      
      {/* Historia */}
      <section className="w-full mb-16 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-6">Nuestra Historia</h1>
        <p className="text-lg text-gray-700">
          Lucendi Solar nació en 2017 en Villa de Álvarez, Colima, con un objetivo claro: 
          ofrecer soluciones de calidad para el campo y la industria. 
          Comenzamos vendiendo equipo agrícola y desde entonces hemos crecido, 
          expandiendo nuestros servicios a energía solar, bombas, generadores y más.
        </p>
      </section>

      {/* Misión y valores */}
      <section className="w-full mb-16 text-center bg-gray-100 p-10 rounded-xl">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">Misión y Valores</h2>
        <p className="text-lg text-gray-700">
          Nuestra misión es brindar soluciones efectivas a los retos de nuestros clientes, 
          cuidando siempre su economía y trabajando con integridad. 
          Nos esforzamos por realizar un trabajo eficiente y responsable con el medio ambiente, 
          garantizando proyectos de calidad y confianza.
        </p>
      </section>

      {/* Equipo */}
      <section className="w-full mb-16 text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">Nuestro Equipo</h2>
        <p className="text-lg text-gray-700">
          Somos una empresa familiar comprometida con cada proyecto. 
          Cada miembro aporta experiencia y dedicación, asegurando que cada instalación 
          y servicio cumpla con los más altos estándares de calidad.
        </p>
      </section>

      {/* Proyectos destacados / experiencia */}
      <section className="w-full text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-10">Proyectos Destacados</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Proyectos de energía solar independientes, diseñados para máxima autonomía y eficiencia.",
            "Conexiones confiables a la red eléctrica, garantizando seguridad y cumplimiento normativo.",
            "Soluciones de bombeo eficientes para abastecimiento de agua en campo y vivienda.",
            "Generadores confiables que aseguran continuidad de energía en todo momento.",
            "Equipamiento industrial para optimizar ventilación y condiciones de trabajo.",
            "Sistemas de bombeo con energía limpia, ideales para agricultura y riego sostenible.",
            "Distribución de herramientas profesionales para ferreterías, garantizando calidad y disponibilidad"
          ].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}