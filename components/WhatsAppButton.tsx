// src/components/WhatsAppButton.tsx
import Link from "next/link";

export default function WhatsAppButton() {
  const phone = "523123181873"; // <-- cambia por tu número con lada internacional
  const message = "Hola, me interesa un proyecto con Lucendi Solar";

  return (
    <Link
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition z-50 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-7 h-7"
      >
        <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.64 6L0 24l6.26-1.63A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22a9.9 9.9 0 01-5.06-1.38l-.36-.21-3.72.97.99-3.62-.24-.37A9.9 9.9 0 012 12c0-5.52 4.48-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0122 12c0 5.52-4.48 10-10 10zm5.35-7.65c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.66.15s-.76.94-.93 1.13c-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.17-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.5.07-.76.36s-1 1-1 2.44 1.02 2.83 1.16 3.02c.15.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.29.19 1.78.12.54-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.56-.34z" />
      </svg>
    </Link>
  );
}
