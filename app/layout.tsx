import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FitnessTrainer - Tu Entrenador Personal',
  description: 'App de fitness con chatbot, ejercicios aleatorios y catalogo completo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
