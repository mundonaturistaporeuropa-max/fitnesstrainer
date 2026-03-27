'use client'
import { useState } from 'react'

interface Exercise {
  name: string
  muscle: string
  sets: string
  reps: string
  rest: string
  equipment: string
  tips: string
}

const exerciseDatabase: Record<string, Exercise[]> = {
  'Pecho': [
    { name: 'Press de Banca', muscle: 'Pecho', sets: '4', reps: '8-12', rest: '90s', equipment: 'Barra', tips: 'Mantén los pies en el suelo y espalda pegada al banco' },
    { name: 'Press Inclinado', muscle: 'Pecho', sets: '3', reps: '10-12', rest: '75s', equipment: 'Mancuernas', tips: 'Ángulo 30-45° para enfatizar pecho superior' },
    { name: 'Aperturas con Mancuernas', muscle: 'Pecho', sets: '3', reps: '12-15', rest: '60s', equipment: 'Mancuernas', tips: 'Movimiento de abrazo, codos ligeramente flexionados' },
    { name: 'Fondos en Paralelas', muscle: 'Pecho', sets: '3', reps: '10-15', rest: '75s', equipment: 'Barras', tips: 'Inclínate hacia adelante para enfatizar el pecho' },
    { name: 'Cruces en Polea', muscle: 'Pecho', sets: '3', reps: '15', rest: '60s', equipment: 'Polea', tips: 'Contracción máxima en el centro del movimiento' },
    { name: 'Flexiones de Pecho', muscle: 'Pecho', sets: '3', reps: '15-20', rest: '60s', equipment: 'Sin equipo', tips: 'Cuerpo recto, baja hasta casi tocar el suelo' },
    { name: 'Press Declinado', muscle: 'Pecho', sets: '3', reps: '10-12', rest: '75s', equipment: 'Barra', tips: 'Trabaja el pecho inferior, ángulo -15°' },
    { name: 'Pullover con Mancuerna', muscle: 'Pecho', sets: '3', reps: '12', rest: '60s', equipment: 'Mancuerna', tips: 'Estiramiento máximo en el pecho y serrato' },
  ],
  'Espalda': [
    { name: 'Dominadas', muscle: 'Espalda', sets: '4', reps: '6-10', rest: '90s', equipment: 'Barra', tips: 'Tira los codos hacia abajo, pecho hacia la barra' },
    { name: 'Peso Muerto', muscle: 'Espalda', sets: '4', reps: '6-8', rest: '120s', equipment: 'Barra', tips: 'Espalda neutra siempre, barra cerca del cuerpo' },
    { name: 'Remo con Barra', muscle: 'Espalda', sets: '4', reps: '8-12', rest: '90s', equipment: 'Barra', tips: 'Espalda recta, tira hacia el abdomen' },
    { name: 'Jalón al Pecho', muscle: 'Espalda', sets: '3', reps: '10-12', rest: '75s', equipment: 'Polea', tips: 'Ligera inclinación hacia atrás, siente el dorsal' },
    { name: 'Remo con Mancuerna', muscle: 'Espalda', sets: '3', reps: '12/lado', rest: '60s', equipment: 'Mancuerna', tips: 'Espalda paralela al suelo, codo cerca del cuerpo' },
    { name: 'Face Pulls', muscle: 'Espalda', sets: '3', reps: '15-20', rest: '60s', equipment: 'Polea', tips: 'Codos altos, retracción escapular al final' },
    { name: 'Buenos días', muscle: 'Espalda', sets: '3', reps: '10-12', rest: '75s', equipment: 'Barra', tips: 'Caderas hacia atrás, espalda recta' },
    { name: 'Hiperextensiones', muscle: 'Espalda', sets: '3', reps: '15', rest: '60s', equipment: 'Banco', tips: 'No hiperextiendas la espalda baja' },
  ],
  'Piernas': [
    { name: 'Sentadilla con Barra', muscle: 'Piernas', sets: '4', reps: '8-12', rest: '120s', equipment: 'Barra', tips: 'Espalda recta, rodillas alineadas con pies' },
    { name: 'Prensa de Piernas', muscle: 'Piernas', sets: '4', reps: '10-15', rest: '90s', equipment: 'Máquina', tips: 'No bloquees las rodillas arriba, espalda al respaldo' },
    { name: 'Extensiones de Cuádriceps', muscle: 'Piernas', sets: '3', reps: '12-15', rest: '60s', equipment: 'Máquina', tips: 'Extensión completa, contracción al final' },
    { name: 'Curl de Femorales', muscle: 'Piernas', sets: '3', reps: '12-15', rest: '60s', equipment: 'Máquina', tips: 'Pelvis pegada al banco, no uses impulso' },
    { name: 'Zancadas', muscle: 'Piernas', sets: '3', reps: '12/pierna', rest: '75s', equipment: 'Sin equipo', tips: 'Torso erguido, paso largo' },
    { name: 'Sentadilla Búlgara', muscle: 'Piernas', sets: '3', reps: '10/pierna', rest: '75s', equipment: 'Banco', tips: 'Gran ejercicio para glúteos y cuádriceps' },
    { name: 'Peso Muerto Rumano', muscle: 'Piernas', sets: '3', reps: '10-12', rest: '75s', equipment: 'Barra', tips: 'Enfocado en femorales, baja hasta sentir estiramiento' },
    { name: 'Elevación de Talones', muscle: 'Piernas', sets: '4', reps: '20-25', rest: '45s', equipment: 'Sin equipo', tips: 'Máxima elevación, pausa arriba' },
  ],
  'Hombros': [
    { name: 'Press Militar', muscle: 'Hombros', sets: '4', reps: '8-10', rest: '90s', equipment: 'Barra', tips: 'Core activado, no hiperextiendas la espalda' },
    { name: 'Elevaciones Laterales', muscle: 'Hombros', sets: '4', reps: '12-15', rest: '60s', equipment: 'Mancuernas', tips: 'Codos ligeramente flexionados, control al bajar' },
    { name: 'Press Arnold', muscle: 'Hombros', sets: '3', reps: '10-12', rest: '75s', equipment: 'Mancuernas', tips: 'Rotación del brazo durante el movimiento' },
    { name: 'Elevaciones Frontales', muscle: 'Hombros', sets: '3', reps: '12', rest: '60s', equipment: 'Mancuernas', tips: 'No subas más allá del nivel de los hombros' },
    { name: 'Pájaros', muscle: 'Hombros', sets: '3', reps: '15', rest: '60s', equipment: 'Mancuernas', tips: 'Trabaja el deltoides posterior, espalda inclinada' },
    { name: 'Face Pulls', muscle: 'Hombros', sets: '3', reps: '15-20', rest: '60s', equipment: 'Polea', tips: 'Excelente para el manguito rotador' },
    { name: 'Remo al Mentón', muscle: 'Hombros', sets: '3', reps: '10-12', rest: '75s', equipment: 'Barra', tips: 'Codos altos, no más arriba que los hombros' },
    { name: 'Press Mancuernas Sentado', muscle: 'Hombros', sets: '3', reps: '10-12', rest: '75s', equipment: 'Mancuernas', tips: 'Mayor rango de movimiento que con barra' },
  ],
  'Biceps': [
    { name: 'Curl con Barra', muscle: 'Biceps', sets: '4', reps: '8-12', rest: '75s', equipment: 'Barra', tips: 'Codos fijos, no uses el cuerpo para impulsar' },
    { name: 'Curl con Mancuernas Alterno', muscle: 'Biceps', sets: '3', reps: '10-12/lado', rest: '60s', equipment: 'Mancuernas', tips: 'Supinación del antebrazo al subir' },
    { name: 'Curl Martillo', muscle: 'Biceps', sets: '3', reps: '12', rest: '60s', equipment: 'Mancuernas', tips: 'Trabaja el braquiorradial, agarre neutro' },
    { name: 'Curl en Predicador', muscle: 'Biceps', sets: '3', reps: '12', rest: '60s', equipment: 'Banco', tips: 'Pico del bíceps, extensión completa abajo' },
    { name: 'Curl Concentrado', muscle: 'Biceps', sets: '3', reps: '15', rest: '45s', equipment: 'Mancuerna', tips: 'Aislamiento máximo, apoya el codo en el muslo' },
    { name: 'Curl 21', muscle: 'Biceps', sets: '3', reps: '21', rest: '90s', equipment: 'Barra', tips: '7 medias reps abajo + 7 medias reps arriba + 7 completas' },
    { name: 'Curl en Polea Baja', muscle: 'Biceps', sets: '3', reps: '12-15', rest: '60s', equipment: 'Polea', tips: 'Tensión constante en todo el movimiento' },
    { name: 'Curl Inclinado', muscle: 'Biceps', sets: '3', reps: '10-12', rest: '75s', equipment: 'Mancuernas', tips: 'Banco inclinado 45°, mayor estiramiento del bíceps' },
  ],
  'Triceps': [
    { name: 'Press Francés', muscle: 'Triceps', sets: '4', reps: '10-12', rest: '75s', equipment: 'Barra', tips: 'Codos hacia el techo, no los abras' },
    { name: 'Extensiones en Polea', muscle: 'Triceps', sets: '4', reps: '12-15', rest: '60s', equipment: 'Polea', tips: 'Codos fijos al cuerpo, extensión completa' },
    { name: 'Fondos en Banco', muscle: 'Triceps', sets: '3', reps: '12-15', rest: '60s', equipment: 'Banco', tips: 'Torso erguido para enfatizar tríceps' },
    { name: 'Press Cerrado', muscle: 'Triceps', sets: '3', reps: '10', rest: '75s', equipment: 'Barra', tips: 'Agarre estrecho, codos cerca del cuerpo' },
    { name: 'Patada de Tríceps', muscle: 'Triceps', sets: '3', reps: '15', rest: '45s', equipment: 'Mancuerna', tips: 'Codo fijo paralelo al suelo, extensión completa' },
    { name: 'Extensión sobre la Cabeza', muscle: 'Triceps', sets: '3', reps: '10-12', rest: '75s', equipment: 'Mancuerna', tips: 'Estiramiento máximo de la cabeza larga' },
    { name: 'Diamond Push-ups', muscle: 'Triceps', sets: '3', reps: '10-15', rest: '60s', equipment: 'Sin equipo', tips: 'Manos en forma de diamante, codos cerca del cuerpo' },
    { name: 'JM Press', muscle: 'Triceps', sets: '3', reps: '8-10', rest: '90s', equipment: 'Barra', tips: 'Combinación de press francés y press cerrado' },
  ],
  'Abdomen': [
    { name: 'Plancha', muscle: 'Abdomen', sets: '3', reps: '45-60s', rest: '45s', equipment: 'Sin equipo', tips: 'Cuerpo recto, no levantes ni bajes las caderas' },
    { name: 'Crunch Abdominal', muscle: 'Abdomen', sets: '4', reps: '20', rest: '45s', equipment: 'Sin equipo', tips: 'No jales el cuello, exhala al subir' },
    { name: 'Elevación de Piernas', muscle: 'Abdomen', sets: '3', reps: '15', rest: '60s', equipment: 'Sin equipo', tips: 'Espalda baja pegada al suelo' },
    { name: 'Giro Ruso', muscle: 'Abdomen', sets: '3', reps: '20/lado', rest: '45s', equipment: 'Sin equipo', tips: 'Pies levantados para más dificultad' },
    { name: 'Mountain Climbers', muscle: 'Abdomen', sets: '3', reps: '30s', rest: '30s', equipment: 'Sin equipo', tips: 'Ritmo rápido, mantén las caderas bajas' },
    { name: 'Rueda Abdominal', muscle: 'Abdomen', sets: '3', reps: '10-15', rest: '75s', equipment: 'Rueda', tips: 'Extiende completamente, control al volver' },
    { name: 'Plancha Lateral', muscle: 'Abdomen', sets: '3', reps: '30s/lado', rest: '30s', equipment: 'Sin equipo', tips: 'Oblicuos activados, cadera arriba' },
    { name: 'Dead Bug', muscle: 'Abdomen', sets: '3', reps: '10/lado', rest: '45s', equipment: 'Sin equipo', tips: 'Espalda baja siempre pegada al suelo' },
  ]
}

const muscleGroups = ['Todos', 'Pecho', 'Espalda', 'Piernas', 'Hombros', 'Biceps', 'Triceps', 'Abdomen']

const muscleColors: Record<string, string> = {
  'Pecho': 'from-red-500 to-orange-500',
  'Espalda': 'from-blue-500 to-cyan-500',
  'Piernas': 'from-green-500 to-teal-500',
  'Hombros': 'from-purple-500 to-pink-500',
  'Biceps': 'from-yellow-500 to-orange-500',
  'Triceps': 'from-orange-500 to-red-500',
  'Abdomen': 'from-pink-500 to-rose-500',
}

const muscleEmojis: Record<string, string> = {
  'Pecho': '🫁',
  'Espalda': '🔙',
  'Piernas': '🦵',
  'Hombros': '💪',
  'Biceps': '💪',
  'Triceps': '💪',
  'Abdomen': '🎯',
}

export default function RandomGenerator() {
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>(['Todos'])
  const [numExercises, setNumExercises] = useState(5)
  const [generatedRoutine, setGeneratedRoutine] = useState<Exercise[]>([])
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleMuscle = (muscle: string) => {
    if (muscle === 'Todos') {
      setSelectedMuscles(['Todos'])
      return
    }
    
    const newSelected = selectedMuscles.filter(m => m !== 'Todos')
    if (newSelected.includes(muscle)) {
      const filtered = newSelected.filter(m => m !== muscle)
      setSelectedMuscles(filtered.length === 0 ? ['Todos'] : filtered)
    } else {
      setSelectedMuscles([...newSelected, muscle])
    }
  }

  const generateRoutine = () => {
    setIsAnimating(true)
    setTimeout(() => {
      const musclesToUse = selectedMuscles.includes('Todos') 
        ? Object.keys(exerciseDatabase) 
        : selectedMuscles
      
      const allAvailableExercises: Exercise[] = []
      musclesToUse.forEach(muscle => {
        allAvailableExercises.push(...exerciseDatabase[muscle])
      })
      
      // Shuffle and pick
      const shuffled = [...allAvailableExercises].sort(() => Math.random() - 0.5)
      const selected = shuffled.slice(0, Math.min(numExercises, shuffled.length))
      
      setGeneratedRoutine(selected)
      setIsAnimating(false)
    }, 600)
  }

  const getTotalTime = () => {
    const minutes = generatedRoutine.reduce((total, ex) => {
      const sets = parseInt(ex.sets)
      const restSeconds = parseInt(ex.rest)
      return total + (sets * 45 + sets * restSeconds) / 60
    }, 0)
    return Math.round(minutes)
  }

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          🎲 Generador <span className="gradient-text">Aleatorio</span>
        </h2>
        <p className="text-gray-400">Genera una rutina personalizada al instante</p>
      </div>

      {/* Configuration */}
      <div className="glass-card p-6 mb-6">
        <h3 className="text-white font-semibold mb-4">⚙️ Configura tu rutina</h3>
        
        {/* Muscle Selection */}
        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-2">Selecciona músculos (puedes elegir varios):</p>
          <div className="flex flex-wrap gap-2">
            {muscleGroups.map(muscle => (
              <button
                key={muscle}
                onClick={() => toggleMuscle(muscle)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedMuscles.includes(muscle)
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                    : 'glass-card text-gray-300 hover:text-orange-400'
                }`}
              >
                {muscle !== 'Todos' ? muscleEmojis[muscle] + ' ' : '🏋️ '}{muscle}
              </button>
            ))}
          </div>
        </div>

        {/* Number of exercises */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm mb-2">Número de ejercicios: <span className="text-orange-400 font-bold">{numExercises}</span></p>
          <input
            type="range"
            min="3"
            max="10"
            value={numExercises}
            onChange={(e) => setNumExercises(parseInt(e.target.value))}
            className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-gray-500 text-xs mt-1">
            <span>3 ejercicios</span>
            <span>10 ejercicios</span>
          </div>
        </div>

        <button
          onClick={generateRoutine}
          disabled={isAnimating}
          className={`btn-primary w-full text-lg py-4 flex items-center justify-center gap-2 ${isAnimating ? 'opacity-70' : ''}`}
        >
          {isAnimating ? (
            <>
              <span className="animate-spin">🎲</span>
              Generando...
            </>
          ) : (
            <>
              🎲 Generar Rutina Aleatoria
            </>
          )}
        </button>
      </div>

      {/* Generated Routine */}
      {generatedRoutine.length > 0 && (
        <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Tu Rutina Personalizada 🔥</h3>
            <div className="flex gap-3 text-sm">
              <span className="glass-card px-3 py-1.5 text-orange-400">
                {generatedRoutine.length} ejercicios
              </span>
              <span className="glass-card px-3 py-1.5 text-green-400">
                ~{getTotalTime()} min
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {generatedRoutine.map((exercise, index) => (
              <div key={index} className="glass-card p-4 exercise-card">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${muscleColors[exercise.muscle] || 'from-orange-500 to-red-500'} flex items-center justify-center flex-shrink-0 font-bold text-white`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-white font-bold">{exercise.name}</h4>
                      <span className="muscle-tag text-xs">{exercise.muscle}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                        {exercise.equipment}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm mb-2">
                      <span className="text-orange-400">📊 {exercise.sets} series</span>
                      <span className="text-yellow-400">🔁 {exercise.reps} reps</span>
                      <span className="text-green-400">⏱️ {exercise.rest} descanso</span>
                    </div>
                    <p className="text-gray-400 text-xs">💡 {exercise.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-4 mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Tiempo estimado: <span className="text-orange-400 font-bold">{getTotalTime()} minutos</span> | 
              Total series: <span className="text-orange-400 font-bold">
                {generatedRoutine.reduce((t, ex) => t + parseInt(ex.sets), 0)}
              </span>
            </p>
          </div>
          
          <button
            onClick={generateRoutine}
            className="btn-secondary w-full mt-3 text-sm py-3"
          >
            🔄 Regenerar Rutina
          </button>
        </div>
      )}
    </div>
  )
}
