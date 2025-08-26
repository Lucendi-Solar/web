// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {/* Info empresa */}
        <div>
          <h2 className="text-xl font-bold text-blue-400 mb-3">Lucendi Solar</h2>
          <p>Soluciones en energía solar, maquinaria y proyectos eléctricos para campo y hogar.</p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="font-semibold text-white mb-3">Enlaces</h3>
          <ul className="space-y-2">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/about">Quiénes somos</Link></li>
            <li><Link href="/services">Servicios</Link></li>
            {/* <li><Link href="/projects">Proyectos</Link></li> */}
            <li><Link href="/contact">Contacto</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contacto</h3>
          <p>Colima, México</p>
          <p><a href="tel:+523123181873">+52 312 318 1873</a></p>
          <p><a href="mailto:contacto@lucendisolar.com">contacto@lucendisolar.com</a></p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Lucendi Solar. Todos los derechos reservados.
      </div>
    </footer>
  );
}