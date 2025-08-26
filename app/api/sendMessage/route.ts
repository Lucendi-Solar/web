import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

async function sendTelegramMessage(text: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'Markdown',
    }),
  });
  return res.ok;
}

export async function POST(req: NextRequest) {
  try {
    const { email, phone, name, message } = await req.json();

    if (!email || !phone || !name || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const text = `*Nuevo Mensaje Recibido desde la página web*\n\n*Nombre:* ${name}\n*Correo:* ${email}\n*Teléfono:* ${phone}\n*Mensaje:*\n${message}`;
    const sent = await sendTelegramMessage(text);

    if (!sent) {
      return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}