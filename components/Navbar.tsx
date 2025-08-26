// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Lucendi Solar
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/">Inicio</Link>
          <Link href="/about">Quiénes somos</Link>
          <Link href="/services">Servicios</Link>
          {/* <Link href="/projects">Proyectos</Link> */}
          <Link href="/contact">Contacto</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Solicita tu proyecto
        </Link>

        {/* Botón hamburguesa móvil */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Menu móvil */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-200 flex flex-col items-center py-4 gap-4">
          <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link href="/about" onClick={() => setOpen(false)}>Quiénes somos</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Servicios</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Proyectos</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contacto</Link>
        </nav>
      )}
    </header>
  );
}
