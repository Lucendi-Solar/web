"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then((res) => {
        if (res.ok) {
          setSubmitted(true);
        } else {
          setSubmitted(false);
          alert("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        }
      });
    console.log(form);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="flex flex-col items-center px-6 py-16 pt-32 max-w-4xl mx-auto">
      
      {/* Hero / introducción */}
      <section className="w-full mb-16 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Contáctanos</h1>
        <p className="text-lg text-gray-700">
          ¿Tienes un proyecto en mente o alguna consulta? Escríbenos y nuestro agente de ventas te responderá a la brevedad.
        </p>
      </section>

      {/* Formulario */}
      <section className="w-full mb-16">
        {submitted && (
          <p className="mb-6 text-green-600 font-semibold text-center">
            ¡Gracias! Hemos recibido tu mensaje.
          </p>
        )}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Teléfono (opcional)"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Mensaje / Descripción del proyecto"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Información de contacto directa */}
      <section className="w-full text-center bg-gray-100 p-10 rounded-xl">
        <h2 className="text-3xl font-bold text-blue-500 mb-6">O contáctanos directamente</h2>
        <p className="text-gray-700 mb-2">Teléfono: <Link href="tel:+523123181873">+52 312 318 1873</Link></p>
        <p className="text-gray-700 mb-2">Correo: <Link href="mailto:contacto@lucendisolar.com">contacto@lucendisolar.com</Link></p>
        {/* <p className="text-gray-700 mb-2">Villa de Álvarez, Colima, México</p> */}
        <p className="text-gray-700 mt-8">
          También puedes escribirnos por WhatsApp usando el botón flotante en la esquina inferior derecha.
        </p>
      </section>

    </main>
  );
}