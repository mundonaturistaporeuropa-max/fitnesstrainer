import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

// Datos iniciales de ejercicios para seed
const EXERCISES_SEED = [
  { name: 'Press de Banca', muscle_group: 'Pecho', equipment: 'Barra', difficulty: 'Intermedio', description: 'Ejercicio compuesto fundamental para el desarrollo del pecho.' },
  { name: 'Press Inclinado', muscle_group: 'Pecho', equipment: 'Mancuernas', difficulty: 'Intermedio', description: 'Enfocado en la parte superior del pecho.' },
  { name: 'Flexiones', muscle_group: 'Pecho', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Ejercicio clásico de peso corporal.' },
  { name: 'Fondos en Paralelas', muscle_group: 'Pecho', equipment: 'Barras', difficulty: 'Intermedio', description: 'Trabaja pecho inferior y tríceps.' },
  { name: 'Aperturas con Mancuernas', muscle_group: 'Pecho', equipment: 'Mancuernas', difficulty: 'Intermedio', description: 'Aislamiento del pectoral.' },
  { name: 'Dominadas', muscle_group: 'Espalda', equipment: 'Barra', difficulty: 'Avanzado', description: 'Ejercicio rey para la espalda.' },
  { name: 'Peso Muerto', muscle_group: 'Espalda', equipment: 'Barra', difficulty: 'Avanzado', description: 'El ejercicio más completo del gimnasio.' },
  { name: 'Remo con Barra', muscle_group: 'Espalda', equipment: 'Barra', difficulty: 'Intermedio', description: 'Ejercicio fundamental para el grosor de la espalda.' },
  { name: 'Jalón al Pecho', muscle_group: 'Espalda', equipment: 'Máquina', difficulty: 'Principiante', description: 'Ideal para principiantes en espalda.' },
  { name: 'Remo con Mancuerna', muscle_group: 'Espalda', equipment: 'Mancuerna', difficulty: 'Principiante', description: 'Remo unilateral para espalda.' },
  { name: 'Sentadilla con Barra', muscle_group: 'Piernas', equipment: 'Barra', difficulty: 'Avanzado', description: 'El ejercicio más completo para piernas.' },
  { name: 'Prensa de Piernas', muscle_group: 'Piernas', equipment: 'Máquina', difficulty: 'Principiante', description: 'Alternativa a la sentadilla.' },
  { name: 'Curl de Femorales', muscle_group: 'Piernas', equipment: 'Máquina', difficulty: 'Principiante', description: 'Aislamiento del bíceps femoral.' },
  { name: 'Zancadas', muscle_group: 'Piernas', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Ejercicio unilateral para piernas.' },
  { name: 'Elevación de Talones', muscle_group: 'Piernas', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Ejercicio para pantorrillas.' },
  { name: 'Press Militar', muscle_group: 'Hombros', equipment: 'Barra', difficulty: 'Intermedio', description: 'Ejercicio principal para deltoides.' },
  { name: 'Elevaciones Laterales', muscle_group: 'Hombros', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Aislamiento del deltoides lateral.' },
  { name: 'Press Arnold', muscle_group: 'Hombros', equipment: 'Mancuernas', difficulty: 'Intermedio', description: 'Deltoides completo.' },
  { name: 'Face Pulls', muscle_group: 'Hombros', equipment: 'Máquina', difficulty: 'Principiante', description: 'Deltoides posterior y manguito rotador.' },
  { name: 'Curl con Barra', muscle_group: 'Biceps', equipment: 'Barra', difficulty: 'Principiante', description: 'Ejercicio clásico para el bíceps.' },
  { name: 'Curl Martillo', muscle_group: 'Biceps', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Trabaja el braquiorradial.' },
  { name: 'Curl en Predicador', muscle_group: 'Biceps', equipment: 'Banco', difficulty: 'Intermedio', description: 'Pico del bíceps.' },
  { name: 'Press Francés', muscle_group: 'Triceps', equipment: 'Barra', difficulty: 'Intermedio', description: 'Cabeza larga del tríceps.' },
  { name: 'Extensiones en Polea', muscle_group: 'Triceps', equipment: 'Máquina', difficulty: 'Principiante', description: 'Aislamiento de tríceps.' },
  { name: 'Plancha', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Ejercicio isométrico para el core.' },
  { name: 'Crunch Abdominal', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Básico para el recto abdominal.' },
  { name: 'Giro Ruso', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Trabaja los oblicuos.' },
]

function getDbConnection() {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set')
  }
  return neon(databaseUrl)
}

async function initializeDb(sql: ReturnType<typeof neon>) {
  await sql`
    CREATE TABLE IF NOT EXISTS exercises (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      muscle_group VARCHAR(100) NOT NULL,
      equipment VARCHAR(100) NOT NULL,
      difficulty VARCHAR(50) NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  const countResult = await sql`SELECT COUNT(*) as count FROM exercises`
  const rows = countResult as Array<{ count: string }>
  if (parseInt(rows[0].count) === 0) {
    for (const exercise of EXERCISES_SEED) {
      await sql`
        INSERT INTO exercises (name, muscle_group, equipment, difficulty, description)
        VALUES (${exercise.name}, ${exercise.muscle_group}, ${exercise.equipment}, ${exercise.difficulty}, ${exercise.description})
      `
    }
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const muscle = searchParams.get('muscle')
    const sql = getDbConnection()
    await initializeDb(sql)

    let exercises
    if (muscle && muscle !== 'Todos') {
      exercises = await sql`
        SELECT * FROM exercises WHERE muscle_group = ${muscle} ORDER BY name
      `
    } else {
      exercises = await sql`
        SELECT * FROM exercises ORDER BY muscle_group, name
      `
    }

    return NextResponse.json({ exercises })
  } catch (error) {
    console.error('Database error:', error)
    // Return fallback data if database is not available
    return NextResponse.json({
      exercises: EXERCISES_SEED,
      note: 'Using local data - database not configured'
    })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, muscle_group, equipment, difficulty, description } = body
    const sql = getDbConnection()

    const result = await sql`
      INSERT INTO exercises (name, muscle_group, equipment, difficulty, description)
      VALUES (${name}, ${muscle_group}, ${equipment}, ${difficulty}, ${description})
      RETURNING *
    `

    const rows = result as Array<Record<string, unknown>>
    return NextResponse.json({ exercise: rows[0] }, { status: 201 })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to create exercise' }, { status: 500 })
  }
}
