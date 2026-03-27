import { NextRequest, NextResponse } from 'next/server'

function generateLocalResponse(message: string): string {
  const msg = message.toLowerCase()
  
  if (msg.includes('pecho') || msg.includes('chest')) {
    return `💪 **Rutina de Pecho**

**Calentamiento (5 min):** Rotaciones de hombros 2x15, Push-ups suaves 2x10

1. **Press de Banca** - 4 series x 10-12 reps | Descanso: 90s
   - Músculos: Pectoral mayor, Deltoides anterior, Tríceps
   - Consejo: Baja la barra hasta el pecho, espalda pegada al banco

2. **Press Inclinado con Mancuernas** - 3x10-12 | Descanso: 75s
   - Músculos: Pectoral superior
   - Consejo: Ángulo 30-45°, codos a 45° del torso

3. **Aperturas con Mancuernas** - 3x12-15 | Descanso: 60s
   - Músculos: Pectoral completo
   - Consejo: Movimiento de abrazo, ligera flexión en codos

4. **Fondos en Paralelas** - 3x10-15 | Descanso: 75s
   - Músculos: Pectoral inferior, Tríceps
   - Consejo: Inclínate hacia adelante para pecho

5. **Cruces en Polea** - 3x15 | Descanso: 60s
   - Músculos: Definición pectoral`
  }
  
  if (msg.includes('espalda') || msg.includes('back')) {
    return `💪 **Rutina de Espalda**

1. **Dominadas** - 4x6-10 | Descanso: 90s
   - Músculos: Dorsal ancho, Bíceps
   - Consejo: Agarre prono, baja completamente

2. **Remo con Barra** - 4x8-12 | Descanso: 90s
   - Músculos: Dorsal medio, Trapecios

3. **Jalón al Pecho** - 3x10-12 | Descanso: 75s
4. **Remo con Mancuerna** - 3x12/lado | Descanso: 60s
5. **Face Pulls** - 3x15-20 | Descanso: 60s`
  }
  
  if (msg.includes('pierna') || msg.includes('leg') || msg.includes('cuadric') || msg.includes('femoral')) {
    return `💪 **Rutina de Piernas**

1. **Sentadilla con Barra** - 4x8-12 | Descanso: 120s
   - Músculos: Cuádriceps, Glúteos, Femorales
   - Consejo: Espalda recta, rodillas alineadas con pies

2. **Prensa de Piernas** - 4x10-15 | Descanso: 90s
3. **Extensiones de Cuádriceps** - 3x12-15 | Descanso: 60s
4. **Curl de Femorales** - 3x12-15 | Descanso: 60s
5. **Zancadas** - 3x12/pierna | Descanso: 75s
6. **Elevaciones de Talón** - 4x20 | Descanso: 45s`
  }
  
  if (msg.includes('hombro') || msg.includes('shoulder')) {
    return `💪 **Rutina de Hombros**

1. **Press Militar** - 4x8-10 | Descanso: 90s
   - Músculos: Deltoides anterior y lateral
2. **Elevaciones Laterales** - 4x12-15 | Descanso: 60s
3. **Elevaciones Frontales** - 3x12 | Descanso: 60s
4. **Face Pulls** - 4x15-20 | Descanso: 60s
5. **Press Arnold** - 3x10-12 | Descanso: 75s`
  }
  
  if (msg.includes('bícep') || msg.includes('bicep') || msg.includes('brazo')) {
    return `💪 **Rutina de Bíceps**

1. **Curl con Barra** - 4x8-12 | Descanso: 75s
2. **Curl con Mancuernas Alterno** - 3x10-12 | Descanso: 60s
3. **Curl Martillo** - 3x12 | Descanso: 60s
4. **Curl en Predicador** - 3x12 | Descanso: 60s
5. **Curl Concentrado** - 3x15 | Descanso: 45s`
  }
  
  if (msg.includes('trícep') || msg.includes('tricep')) {
    return `💪 **Rutina de Tríceps**

1. **Press Francés** - 4x10-12 | Descanso: 75s
2. **Extensiones en Polea** - 4x12-15 | Descanso: 60s
3. **Fondos en Banco** - 3x12-15 | Descanso: 60s
4. **Press Cerrado** - 3x10 | Descanso: 75s
5. **Patada de Tríceps** - 3x15 | Descanso: 45s`
  }
  
  if (msg.includes('abdomen') || msg.includes('abs') || msg.includes('core')) {
    return `💪 **Rutina de Abdominales**

1. **Plancha** - 3x45-60 segundos
2. **Crunch Abdominal** - 4x20
3. **Elevación de Piernas** - 3x15
4. **Giro Ruso** - 3x20/lado
5. **Rueda Abdominal** - 3x10-15
6. **Plancha Lateral** - 3x30s/lado`
  }
  
  if (msg.includes('principiante') || msg.includes('comenzar') || msg.includes('empezar')) {
    return `💪 **Plan para Principiantes - 3 días/semana**

**DÍA 1 - Empuje:**
1. Press de Banca: 3x10
2. Press Militar: 3x10
3. Fondos: 3x8

**DÍA 2 - Jalón:**
1. Jalón al Pecho: 3x10
2. Remo Sentado: 3x10
3. Curl de Bíceps: 3x12

**DÍA 3 - Piernas:**
1. Sentadilla: 3x10
2. Prensa: 3x12
3. Elevación Talones: 4x20

⏰ Duración: 45-60 min por sesión
😴 Descanso: 1 día entre sesiones`
  }
  
  if (msg.includes('casa') || msg.includes('sin equipo')) {
    return `💪 **Entrenamiento en Casa - Sin Equipo**

**Circuito 3 rondas (45s trabajo / 15s descanso):**
1. Flexiones de Pecho
2. Sentadillas
3. Fondos en Silla
4. Zancadas
5. Plancha
6. Burpees
7. Elevaciones de Rodilla`
  }
  
  if (msg.includes('adelgaz') || msg.includes('perder') || msg.includes('grasa')) {
    return `💪 **Plan para Perder Grasa**

**HIIT (3x/semana, 20 min):**
- 40s trabajo / 20s descanso
- Sprint, Sentadillas con salto, Flexiones, Mountain climbers

**Fuerza (3x/semana):**
- Ejercicios compuestos: Sentadilla, Peso Muerto, Press
- 3-4 series de 8-15 reps

**Cardio moderado (2-3x/semana):**
- 30-45 min: caminar, bicicleta, elíptica

📊 Nutrición: déficit 300-500 kcal, proteína 2g/kg`
  }
  
  if (msg.includes('masa') || msg.includes('volumen') || msg.includes('ganar musculo')) {
    return `💪 **Plan para Ganar Masa Muscular**

**Principios clave:**
- Superávit calórico: +300-500 kcal/día
- Proteína: 2-2.5g por kg de peso
- Entrenamiento 4-5 días/semana

**Programa Push/Pull/Legs:**

🔴 **Push (Lunes/Jueves):** Pecho, Hombros, Tríceps
🔵 **Pull (Martes/Viernes):** Espalda, Bíceps
🟢 **Legs (Miércoles):** Cuádriceps, Femorales, Glúteos

💤 Dormir 7-9 horas para optimizar la recuperación`
  }
  
  return `💪 ¡Hola! Soy tu entrenador personal virtual.

Puedo crear rutinas personalizadas para:
- 🏋️ Pecho, Espalda, Piernas, Hombros
- 💪 Bíceps, Tríceps, Abdominales
- 🏃 Planes para principiantes
- 🏠 Entrenamientos en casa sin equipo
- 🔥 Planes para adelgazar o ganar músculo

¿Qué quieres entrenar hoy?`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { message, history } = body
    const apiKey = process.env.OPENAI_API_KEY
    
    if (apiKey) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { 
              role: 'system', 
              content: 'Eres un entrenador personal experto con 15 años de experiencia. Responde siempre en español con rutinas detalladas incluyendo series, repeticiones, tiempos de descanso y consejos de técnica.' 
            },
            ...history.slice(-8).map((m: {role: string, content: string}) => ({ 
              role: m.role, 
              content: m.content 
            })),
            { role: 'user', content: message }
          ],
          max_tokens: 1200,
          temperature: 0.7
        })
      })
      
      if (response.ok) {
        const data = await response.json()
        return NextResponse.json({ response: data.choices[0].message.content })
      }
    }
    
    return NextResponse.json({ response: generateLocalResponse(message) })
  } catch {
    return NextResponse.json({ response: generateLocalResponse('') })
  }
}
