'use client'
import { useState } from 'react'

interface Exercise {
  id: number
  name: string
  muscle: string
  equipment: string
  difficulty: string
  description: string
  steps: string[]
  tips: string[]
  svgAnimation: string
}

const exercises: Exercise[] = [
  {
    id: 1,
    name: 'Press de Banca con Barra',
    muscle: 'Pecho',
    equipment: 'Máquina/Barra',
    difficulty: 'Intermedio',
    description: 'Ejercicio compuesto fundamental para el desarrollo del pecho.',
    steps: ['Acuéstate en el banco plano', 'Agarra la barra con agarre prono ancho', 'Baja la barra al pecho controladamente', 'Empuja la barra hacia arriba explosivamente'],
    tips: ['Mantén los pies en el suelo', 'Arch leve en la espalda baja', 'Retracción escapular'],
    svgAnimation: 'bench'
  },
  {
    id: 2,
    name: 'Press Inclinado con Mancuernas',
    muscle: 'Pecho',
    equipment: 'Mancuernas',
    difficulty: 'Intermedio',
    description: 'Enfocado en la parte superior del pecho.',
    steps: ['Ajusta el banco a 30-45°', 'Sujeta las mancuernas a la altura de los hombros', 'Empuja hacia arriba y adentro', 'Baja lentamente'],
    tips: ['Codos a 45° del cuerpo', 'No bloquees los codos arriba', 'Controla la bajada'],
    svgAnimation: 'incline'
  },
  {
    id: 3,
    name: 'Flexiones de Pecho',
    muscle: 'Pecho',
    equipment: 'Sin Máquina',
    difficulty: 'Principiante',
    description: 'Ejercicio clásico de peso corporal para pecho y tríceps.',
    steps: ['Posición de plancha alta', 'Manos ligeramente más anchas que hombros', 'Baja el cuerpo hasta casi tocar el suelo', 'Empuja hacia arriba'],
    tips: ['Cuerpo recto como una tabla', 'Mirada al suelo', 'Activa el core'],
    svgAnimation: 'pushup'
  },
  {
    id: 4,
    name: 'Fondos en Paralelas',
    muscle: 'Pecho',
    equipment: 'Máquina/Barras',
    difficulty: 'Intermedio',
    description: 'Ejercicio compuesto que trabaja pecho inferior y tríceps.',
    steps: ['Sujétate a las paralelas', 'Inclínate ligeramente hacia adelante', 'Baja doblando los codos', 'Empuja hacia arriba'],
    tips: ['Inclínate para enfatizar pecho', 'No bajes demasiado', 'Control en todo momento'],
    svgAnimation: 'dips'
  },
  {
    id: 5,
    name: 'Aperturas con Mancuernas',
    muscle: 'Pecho',
    equipment: 'Mancuernas',
    difficulty: 'Intermedio',
    description: 'Ejercicio de aislamiento para el pectoral.',
    steps: ['Banco plano, mancuernas arriba', 'Abre los brazos como un arco', 'Baja hasta sentir estiramiento', 'Cierra como un abrazo'],
    tips: ['Ligera flexión en codos', 'No bajes demasiado', 'Movimiento de arco'],
    svgAnimation: 'flyes'
  },
  {
    id: 6,
    name: 'Dominadas',
    muscle: 'Espalda',
    equipment: 'Máquina/Barra',
    difficulty: 'Avanzado',
    description: 'Ejercicio rey para el desarrollo de la espalda.',
    steps: ['Agarra la barra con agarre prono ancho', 'Cuelga completamente', 'Tira del cuerpo hacia arriba', 'Baja controladamente'],
    tips: ['Codos hacia abajo y atrás', 'Pecho hacia la barra', 'Control en la bajada'],
    svgAnimation: 'pullups'
  },
  {
    id: 7,
    name: 'Remo con Barra',
    muscle: 'Espalda',
    equipment: 'Máquina/Barra',
    difficulty: 'Intermedio',
    description: 'Ejercicio fundamental para el grosor de la espalda.',
    steps: ['Inclínate hacia adelante 45°', 'Agarra la barra con agarre prono', 'Tira hacia el abdomen', 'Baja controladamente'],
    tips: ['Espalda recta', 'Codos cerca del cuerpo', 'Retracción escapular'],
    svgAnimation: 'row'
  },
  {
    id: 8,
    name: 'Jalón al Pecho',
    muscle: 'Espalda',
    equipment: 'Máquina',
    difficulty: 'Principiante',
    description: 'Ideal para principiantes en trabajo de espalda.',
    steps: ['Siéntate en la máquina', 'Agarra la barra ancha', 'Tira hacia el pecho', 'Sube controladamente'],
    tips: ['Pecho hacia arriba', 'No te inclines demasiado', 'Siente el dorsal'],
    svgAnimation: 'latpull'
  },
  {
    id: 9,
    name: 'Remo con Mancuerna',
    muscle: 'Espalda',
    equipment: 'Mancuernas',
    difficulty: 'Principiante',
    description: 'Remo unilateral para trabajo de espalda.',
    steps: ['Apoya rodilla y mano en banco', 'Mancuerna colgando', 'Tira hacia la cadera', 'Baja completamente'],
    tips: ['Espalda paralela al suelo', 'Codo cerca del cuerpo', 'Trabaja un lado a la vez'],
    svgAnimation: 'dumbrow'
  },
  {
    id: 10,
    name: 'Sentadilla con Barra',
    muscle: 'Piernas',
    equipment: 'Máquina/Barra',
    difficulty: 'Avanzado',
    description: 'El ejercicio más completo para piernas.',
    steps: ['Barra en trapecios', 'Pies a ancho de hombros', 'Baja como sentarse', 'Empuja hacia arriba'],
    tips: ['Rodillas alineadas con pies', 'Espalda recta', 'Profundidad completa'],
    svgAnimation: 'squat'
  },
  {
    id: 11,
    name: 'Prensa de Piernas',
    muscle: 'Piernas',
    equipment: 'Máquina',
    difficulty: 'Principiante',
    description: 'Excelente alternativa a la sentadilla.',
    steps: ['Siéntate en la máquina', 'Pies a ancho de hombros en la plataforma', 'Baja controladamente', 'Empuja sin bloquear rodillas'],
    tips: ['No bloquees las rodillas', 'Espalda pegada al respaldo', 'Control en la bajada'],
    svgAnimation: 'legpress'
  },
  {
    id: 12,
    name: 'Zancadas',
    muscle: 'Piernas',
    equipment: 'Sin Máquina',
    difficulty: 'Principiante',
    description: 'Ejercicio unilateral para piernas y glúteos.',
    steps: ['De pie, da un paso adelante', 'Baja la rodilla trasera al suelo', 'Empuja con el pie delantero', 'Alterna piernas'],
    tips: ['Torso erguido', 'Rodilla delantera no pasa el pie', 'Paso largo'],
    svgAnimation: 'lunges'
  },
  {
    id: 13,
    name: 'Curl de Femorales',
    muscle: 'Piernas',
    equipment: 'Máquina',
    difficulty: 'Principiante',
    description: 'Aislamiento del bíceps femoral.',
    steps: ['Acuéstate boca abajo en la máquina', 'Pies bajo el rodillo', 'Dobla las rodillas', 'Baja controladamente'],
    tips: ['Pelvis pegada al banco', 'No uses impulso', 'Contracción completa'],
    svgAnimation: 'legcurl'
  },
  {
    id: 14,
    name: 'Press Militar',
    muscle: 'Hombros',
    equipment: 'Máquina/Barra',
    difficulty: 'Intermedio',
    description: 'Ejercicio principal para deltoides anterior.',
    steps: ['De pie o sentado', 'Barra a nivel de hombros', 'Empuja hacia arriba', 'Baja controladamente'],
    tips: ['Core activado', 'No hiperextiendas la espalda', 'Codos ligeramente adelante'],
    svgAnimation: 'ohpress'
  },
  {
    id: 15,
    name: 'Elevaciones Laterales',
    muscle: 'Hombros',
    equipment: 'Mancuernas',
    difficulty: 'Principiante',
    description: 'Aislamiento del deltoides lateral.',
    steps: ['De pie con mancuernas', 'Eleva los brazos lateralmente', 'Hasta altura de hombros', 'Baja lentamente'],
    tips: ['Codos ligeramente flexionados', 'Muñecas neutras', 'Control en la bajada'],
    svgAnimation: 'laterals'
  },
  {
    id: 16,
    name: 'Curl con Barra',
    muscle: 'Biceps',
    equipment: 'Máquina/Barra',
    difficulty: 'Principiante',
    description: 'Ejercicio clásico para el bíceps.',
    steps: ['De pie con barra', 'Agarre supino ancho', 'Dobla los codos', 'Baja controladamente'],
    tips: ['Codos fijos', 'No uses impulso', 'Contracción completa'],
    svgAnimation: 'curl'
  },
  {
    id: 17,
    name: 'Curl Martillo',
    muscle: 'Biceps',
    equipment: 'Mancuernas',
    difficulty: 'Principiante',
    description: 'Trabaja el braquiorradial y bíceps.',
    steps: ['Mancuernas con agarre neutro', 'Dobla los codos alternando', 'Baja completamente', 'Alterna cada brazo'],
    tips: ['Codos fijos al cuerpo', 'Muñecas neutras todo el movimiento', 'Movimiento lento'],
    svgAnimation: 'hammer'
  },
  {
    id: 18,
    name: 'Press Francés',
    muscle: 'Triceps',
    equipment: 'Mancuernas',
    difficulty: 'Intermedio',
    description: 'Excelente ejercicio para la cabeza larga del tríceps.',
    steps: ['Banco plano, mancuernas arriba', 'Dobla los codos hacia la cabeza', 'Extiende completamente', 'Repite'],
    tips: ['Codos hacia el techo', 'No los abras', 'Control total'],
    svgAnimation: 'skullcrusher'
  },
  {
    id: 19,
    name: 'Extensiones en Polea',
    muscle: 'Triceps',
    equipment: 'Máquina',
    difficulty: 'Principiante',
    description: 'Ejercicio de aislamiento para tríceps.',
    steps: ['De pie frente a la polea', 'Cuerda o barra arriba', 'Empuja hacia abajo', 'Sube controladamente'],
    tips: ['Codos fijos al cuerpo', 'Extensión completa', 'No uses el cuerpo'],
    svgAnimation: 'tricepext'
  },
  {
    id: 20,
    name: 'Plancha',
    muscle: 'Abdomen',
    equipment: 'Sin Máquina',
    difficulty: 'Principiante',
    description: 'Ejercicio isométrico para el core completo.',
    steps: ['Posición de plancha en antebrazos', 'Cuerpo recto de cabeza a talones', 'Mantén la posición', 'Respira normalmente'],
    tips: ['No eleves ni bajes las caderas', 'Contrae el abdomen', 'Mantén el tiempo indicado'],
    svgAnimation: 'plank'
  },
  {
    id: 21,
    name: 'Crunch Abdominal',
    muscle: 'Abdomen',
    equipment: 'Sin Máquina',
    difficulty: 'Principiante',
    description: 'Ejercicio básico para el recto abdominal.',
    steps: ['Acuéstate boca arriba', 'Rodillas flexionadas', 'Manos en la cabeza', 'Eleva el torso hacia las rodillas'],
    tips: ['No jales el cuello', 'Contracción en la cima', 'Exhala al subir'],
    svgAnimation: 'crunch'
  },
  {
    id: 22,
    name: 'Peso Muerto',
    muscle: 'Espalda',
    equipment: 'Máquina/Barra',
    difficulty: 'Avanzado',
    description: 'El ejercicio más completo del gimnasio.',
    steps: ['Barra en el suelo', 'Pies a ancho de caderas', 'Agarra la barra', 'Extiende caderas y rodillas simultáneamente'],
    tips: ['Espalda neutra siempre', 'Barra cerca del cuerpo', 'Empuja el suelo'],
    svgAnimation: 'deadlift'
  },
  {
    id: 23,
    name: 'Elevación de Talones',
    muscle: 'Piernas',
    equipment: 'Sin Máquina',
    difficulty: 'Principiante',
    description: 'Ejercicio para el desarrollo de pantorrillas.',
    steps: ['De pie con pies a ancho de hombros', 'Elévate sobre los talones', 'Mantén un segundo arriba', 'Baja lentamente'],
    tips: ['Máxima elevación', 'Control en la bajada', 'Puedes hacerlo en un escalón'],
    svgAnimation: 'calfraise'
  },
  {
    id: 24,
    name: 'Face Pulls',
    muscle: 'Hombros',
    equipment: 'Máquina',
    difficulty: 'Principiante',
    description: 'Excelente para deltoides posterior y manguito rotador.',
    steps: ['Polea alta frente a ti', 'Cuerda con agarre prono', 'Tira hacia la cara', 'Codos altos'],
    tips: ['Retracción escapular', 'Codos paralelos al suelo', 'Movimiento controlado'],
    svgAnimation: 'facepull'
  }
]

const muscles = ['Todos', 'Pecho', 'Espalda', 'Piernas', 'Hombros', 'Biceps', 'Triceps', 'Abdomen']

const difficultyColors: Record<string, string> = {
  'Principiante': 'text-green-400 bg-green-400/10 border-green-400/30',
  'Intermedio': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  'Avanzado': 'text-red-400 bg-red-400/10 border-red-400/30'
}

function ExerciseSVG({ type }: { type: string }) {
  const svgs: Record<string, JSX.Element> = {
    bench: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="20" y="60" width="160" height="8" rx="4" fill="#FF6B35" opacity="0.8"/>
        <rect x="40" y="68" width="8" height="30" rx="2" fill="#FF6B35" opacity="0.6"/>
        <rect x="152" y="68" width="8" height="30" rx="2" fill="#FF6B35" opacity="0.6"/>
        <circle cx="100" cy="45" r="12" fill="#E94560" className="svg-animation"/>
        <line x1="100" y1="57" x2="100" y2="62" stroke="#E94560" strokeWidth="2"/>
        <line x1="100" y1="62" x2="70" y2="55" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="62" x2="130" y2="55" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="55" cy="54" r="6" fill="#FF6B35" opacity="0.7"/>
        <circle cx="145" cy="54" r="6" fill="#FF6B35" opacity="0.7"/>
        <text x="100" y="110" textAnchor="middle" fill="#FF6B35" fontSize="11" fontWeight="bold">PRESS DE BANCA</text>
      </svg>
    ),
    pushup: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="10" y="80" width="180" height="4" rx="2" fill="#FF6B35" opacity="0.4"/>
        <circle cx="80" cy="50" r="10" fill="#E94560" className="svg-animation"/>
        <line x1="80" y1="60" x2="80" y2="75" stroke="#E94560" strokeWidth="2.5"/>
        <line x1="80" y1="65" x2="55" y2="72" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="80" y1="65" x2="105" y2="72" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="80" y1="75" x2="80" y2="82" stroke="#E94560" strokeWidth="2.5"/>
        <line x1="80" y1="82" x2="60" y2="82" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="80" y1="82" x2="100" y2="82" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <text x="100" y="110" textAnchor="middle" fill="#FF6B35" fontSize="11" fontWeight="bold">FLEXIONES</text>
      </svg>
    ),
    squat: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="10" y="85" width="180" height="4" rx="2" fill="#FF6B35" opacity="0.4"/>
        <circle cx="100" cy="35" r="11" fill="#E94560" className="svg-animation"/>
        <line x1="100" y1="46" x2="100" y2="62" stroke="#E94560" strokeWidth="2.5"/>
        <line x1="100" y1="52" x2="75" y2="48" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="52" x2="125" y2="48" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="62" x2="80" y2="75" stroke="#E94560" strokeWidth="2.5"/>
        <line x1="100" y1="62" x2="120" y2="75" stroke="#E94560" strokeWidth="2.5"/>
        <line x1="80" y1="75" x2="75" y2="88" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="120" y1="75" x2="125" y2="88" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <text x="100" y="110" textAnchor="middle" fill="#FF6B35" fontSize="11" fontWeight="bold">SENTADILLA</text>
      </svg>
    ),
    pullups: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="30" y="10" width="140" height="6" rx="3" fill="#FF6B35" opacity="0.8"/>
        <circle cx="100" cy="35" r="11" fill="#E94560" className="svg-animation"/>
        <line x1="100" y1="46" x2="100" y2="58" stroke="#E94560" strokeWidth="2.5"/>
        <line x1="100" y1="50" x2="72" y2="25" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="50" x2="128" y2="25" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="58" x2="88" y2="75" stroke="#E94560" strokeWidth="2.5"/>
        <line x1="100" y1="58" x2="112" y2="75" stroke="#E94560" strokeWidth="2.5"/>
        <text x="100" y="110" textAnchor="middle" fill="#FF6B35" fontSize="11" fontWeight="bold">DOMINADAS</text>
      </svg>
    ),
    curl: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="10" y="85" width="180" height="4" rx="2" fill="#FF6B35" opacity="0.4"/>
        <circle cx="85" cy="35" r="11" fill="#E94560" className="svg-animation"/>
        <line x1="85" y1="46" x2="85" y2="58" stroke="#E94560" strokeWidth="2.5"/>
        <line x1="85" y1="52" x2="65" y2="48" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="65" y1="48" x2="55" y2="62" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="50" cy="65" r="5" fill="#FF6B35" opacity="0.8"/>
        <line x1="85" y1="58" x2="85" y2="88" stroke="#E94560" strokeWidth="2.5"/>
        <text x="100" y="110" textAnchor="middle" fill="#FF6B35" fontSize="11" fontWeight="bold">CURL DE BICEPS</text>
      </svg>
    ),
    plank: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="10" y="80" width="180" height="4" rx="2" fill="#FF6B35" opacity="0.4"/>
        <circle cx="155" cy="55" r="11" fill="#E94560" className="svg-animation"/>
        <line x1="155" y1="66" x2="50" y2="75" stroke="#E94560" strokeWidth="3"/>
        <line x1="50" y1="75" x2="38" y2="82" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="50" y1="75" x2="50" y2="82" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="155" y1="70" x2="162" y2="82" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="155" y1="70" x2="148" y2="82" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <text x="100" y="110" textAnchor="middle" fill="#FF6B35" fontSize="11" fontWeight="bold">PLANCHA</text>
      </svg>
    ),
    deadlift: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="10" y="85" width="180" height="4" rx="2" fill="#FF6B35" opacity="0.4"/>
        <circle cx="100" cy="30" r="11" fill="#E94560" className="svg-animation"/>
        <line x1="100" y1="41" x2="100" y2="58" stroke="#E94560" strokeWidth="2.5"/>
        <line x1="100" y1="50" x2="78" y2="54" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="50" x2="122" y2="54" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="78" y1="54" x2="70" y2="75" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="122" y1="54" x2="130" y2="75" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <rect x="40" y="78" width="120" height="8" rx="3" fill="#FF6B35" opacity="0.7"/>
        <text x="100" y="110" textAnchor="middle" fill="#FF6B35" fontSize="11" fontWeight="bold">PESO MUERTO</text>
      </svg>
    ),
    default: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <circle cx="100" cy="50" r="15" fill="#E94560" className="svg-animation"/>
        <line x1="100" y1="65" x2="100" y2="85" stroke="#E94560" strokeWidth="3"/>
        <line x1="100" y1="72" x2="75" y2="65" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="72" x2="125" y2="65" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="85" x2="82" y2="98" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <line x1="100" y1="85" x2="118" y2="98" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round"/>
        <text x="100" y="115" textAnchor="middle" fill="#FF6B35" fontSize="10" fontWeight="bold">EJERCICIO</text>
      </svg>
    )
  }
  return svgs[type] || svgs.default
}

export default function ExerciseList() {
  const [selectedMuscle, setSelectedMuscle] = useState('Todos')
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [equipmentFilter, setEquipmentFilter] = useState('Todos')

  const filteredExercises = exercises.filter(ex => {
    const muscleMatch = selectedMuscle === 'Todos' || ex.muscle === selectedMuscle
    const searchMatch = ex.name.toLowerCase().includes(searchTerm.toLowerCase()) || ex.muscle.toLowerCase().includes(searchTerm.toLowerCase())
    const equipMatch = equipmentFilter === 'Todos' || 
                       (equipmentFilter === 'Sin Máquina' && ex.equipment === 'Sin Máquina') ||
                       (equipmentFilter === 'Con Máquina' && ex.equipment !== 'Sin Máquina')
    return muscleMatch && searchMatch && equipMatch
  })

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          📚 Catálogo de <span className="gradient-text">Ejercicios</span>
        </h2>
        <p className="text-gray-400">Explora todos los ejercicios con guías visuales de ejecución</p>
      </div>

      {/* Filters */}
      <div className="glass-card p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="🔍 Buscar ejercicio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500"
          />
          <select
            value={equipmentFilter}
            onChange={(e) => setEquipmentFilter(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500"
          >
            <option value="Todos">🏋️ Todo el Equipo</option>
            <option value="Sin Máquina">🤸 Sin Máquina</option>
            <option value="Con Máquina">⚙️ Con Máquina</option>
          </select>
        </div>
        
        {/* Muscle Filter */}
        <div className="flex flex-wrap gap-2 mt-4">
          {muscles.map(muscle => (
            <button
              key={muscle}
              onClick={() => setSelectedMuscle(muscle)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedMuscle === muscle
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                  : 'glass-card text-gray-300 hover:text-orange-400'
              }`}
            >
              {muscle}
            </button>
          ))}
        </div>
        
        <p className="text-gray-500 text-xs mt-3">{filteredExercises.length} ejercicios encontrados</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExercises.map(exercise => (
          <div
            key={exercise.id}
            onClick={() => setSelectedExercise(exercise)}
            className="glass-card p-4 cursor-pointer exercise-card hover:border-orange-500/30 transition-all"
          >
            {/* SVG Animation */}
            <div className="w-full h-28 mb-3 bg-black/20 rounded-xl overflow-hidden">
              <ExerciseSVG type={exercise.svgAnimation} />
            </div>
            
            <h3 className="text-white font-bold text-sm mb-2">{exercise.name}</h3>
            
            <div className="flex flex-wrap gap-1.5">
              <span className="muscle-tag text-xs">{exercise.muscle}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full border ${difficultyColors[exercise.difficulty]}`}>
                {exercise.difficulty}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                {exercise.equipment.includes('Sin') ? '🤸 Sin Máquina' : '⚙️ Máquina'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedExercise && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedExercise(null)}
        >
          <div
            className="glass-card max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{selectedExercise.name}</h3>
              <button onClick={() => setSelectedExercise(null)} className="text-gray-400 hover:text-white text-2xl">✕</button>
            </div>
            
            <div className="w-full h-36 mb-4 bg-black/30 rounded-xl overflow-hidden">
              <ExerciseSVG type={selectedExercise.svgAnimation} />
            </div>

            <p className="text-gray-300 text-sm mb-4">{selectedExercise.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="muscle-tag">{selectedExercise.muscle}</span>
              <span className={`text-sm px-3 py-1 rounded-full border ${difficultyColors[selectedExercise.difficulty]}`}>
                {selectedExercise.difficulty}
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                {selectedExercise.equipment}
              </span>
            </div>

            <div className="mb-4">
              <h4 className="text-orange-400 font-semibold mb-2">📋 Pasos</h4>
              <ol className="space-y-1">
                {selectedExercise.steps.map((step, i) => (
                  <li key={i} className="text-gray-300 text-sm flex gap-2">
                    <span className="text-orange-500 font-bold">{i + 1}.</span> {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="text-orange-400 font-semibold mb-2">💡 Consejos</h4>
              <ul className="space-y-1">
                {selectedExercise.tips.map((tip, i) => (
                  <li key={i} className="text-gray-300 text-sm flex gap-2">
                    <span className="text-green-400">✓</span> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
