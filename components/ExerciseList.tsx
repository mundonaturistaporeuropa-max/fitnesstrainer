'use client'

import { useState, useEffect } from 'react'

// ─── Animated SVG Illustrations ──────────────────────────────────────────────
function ExerciseAnimSVG({ muscle }: { muscle: string }) {
  const type = muscleToAnim(muscle);
  const svgs: Record<string, string> = {
    bench: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.bp{animation:bp 1.6s ease-in-out infinite;transform-origin:60px 32px}@keyframes bp{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}</style><rect x="10" y="60" width="100" height="8" rx="4" fill="#888"/><ellipse cx="60" cy="56" rx="14" ry="9" fill="#f0a070"/><rect x="46" y="50" width="28" height="14" rx="4" fill="#e8834a"/><g class="bp"><rect x="20" y="28" width="80" height="6" rx="3" fill="#bbb"/><circle cx="20" cy="31" r="7" fill="#999"/><circle cx="100" cy="31" r="7" fill="#999"/><rect x="48" y="34" width="6" height="18" rx="2" fill="#e8834a"/><rect x="66" y="34" width="6" height="18" rx="2" fill="#e8834a"/></g></svg>`,
    pushup: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.pu{animation:pu 1.6s ease-in-out infinite;transform-origin:60px 60px}@keyframes pu{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}</style><rect x="5" y="76" width="110" height="4" rx="2" fill="#666"/><g class="pu"><ellipse cx="38" cy="52" rx="8" ry="8" fill="#f0a070"/><rect x="30" y="56" width="50" height="12" rx="6" fill="#e8834a"/><rect x="26" y="64" width="8" height="14" rx="3" fill="#e8834a"/><rect x="86" y="64" width="8" height="14" rx="3" fill="#e8834a"/><circle cx="27" cy="79" r="4" fill="#c0643a"/><circle cx="90" cy="79" r="4" fill="#c0643a"/></g></svg>`,
    pullup: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.pull{animation:pull 1.8s ease-in-out infinite;transform-origin:60px 16px}@keyframes pull{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}</style><rect x="10" y="8" width="100" height="6" rx="3" fill="#888"/><g class="pull"><ellipse cx="60" cy="26" rx="9" ry="9" fill="#f0a070"/><rect x="51" y="32" width="18" height="26" rx="6" fill="#e8834a"/><rect x="38" y="22" width="10" height="22" rx="4" fill="#e8834a"/><rect x="72" y="22" width="10" height="22" rx="4" fill="#e8834a"/><rect x="52" y="56" width="8" height="22" rx="3" fill="#e8834a"/><rect x="60" y="56" width="8" height="22" rx="3" fill="#e8834a"/></g></svg>`,
    squat: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.sq{animation:sq 1.8s ease-in-out infinite;transform-origin:60px 50px}@keyframes sq{0%,100%{transform:translateY(0)}50%{transform:translateY(14px) scaleY(0.85)}}</style><rect x="5" y="82" width="110" height="4" rx="2" fill="#666"/><g class="sq"><ellipse cx="60" cy="14" rx="9" ry="9" fill="#f0a070"/><rect x="52" y="20" width="16" height="24" rx="5" fill="#e8834a"/><rect x="30" y="18" width="52" height="8" rx="3" fill="#bbb"/><rect x="40" y="44" width="10" height="30" rx="4" fill="#e8834a"/><rect x="70" y="44" width="10" height="30" rx="4" fill="#e8834a"/><circle cx="42" cy="77" r="5" fill="#c0643a"/><circle cx="78" cy="77" r="5" fill="#c0643a"/></g></svg>`,
    curl: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.ca{animation:ca 1.6s ease-in-out infinite;transform-origin:68px 52px}@keyframes ca{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-55deg)}}</style><ellipse cx="60" cy="18" rx="10" ry="10" fill="#f0a070"/><rect x="50" y="26" width="20" height="28" rx="6" fill="#e8834a"/><rect x="36" y="30" width="12" height="24" rx="4" fill="#e8834a"/><g class="ca"><rect x="68" y="30" width="12" height="26" rx="4" fill="#e8834a"/><rect x="62" y="54" width="24" height="6" rx="3" fill="#bbb"/><circle cx="62" cy="57" r="5" fill="#999"/><circle cx="86" cy="57" r="5" fill="#999"/></g><rect x="40" y="62" width="12" height="22" rx="4" fill="#e8834a"/><rect x="68" y="62" width="12" height="22" rx="4" fill="#e8834a"/></svg>`,
    ohpress: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.ohp{animation:ohp 1.6s ease-in-out infinite;transform-origin:60px 30px}@keyframes ohp{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}</style><ellipse cx="60" cy="20" rx="10" ry="10" fill="#f0a070"/><rect x="50" y="28" width="20" height="28" rx="6" fill="#e8834a"/><rect x="40" y="62" width="12" height="22" rx="4" fill="#e8834a"/><rect x="68" y="62" width="12" height="22" rx="4" fill="#e8834a"/><g class="ohp"><rect x="22" y="32" width="76" height="6" rx="3" fill="#bbb"/><circle cx="22" cy="35" r="6" fill="#999"/><circle cx="98" cy="35" r="6" fill="#999"/><rect x="40" y="36" width="10" height="14" rx="3" fill="#e8834a"/><rect x="70" y="36" width="10" height="14" rx="3" fill="#e8834a"/></g></svg>`,
    plank: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.pl{animation:pl 2.2s ease-in-out infinite}@keyframes pl{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}</style><rect x="5" y="76" width="110" height="4" rx="2" fill="#666"/><g class="pl"><ellipse cx="28" cy="58" rx="9" ry="9" fill="#f0a070"/><rect x="36" y="54" width="58" height="12" rx="6" fill="#e8834a"/><rect x="26" y="66" width="8" height="12" rx="3" fill="#e8834a"/><circle cx="27" cy="78" r="4" fill="#c0643a"/><rect x="90" y="62" width="8" height="14" rx="3" fill="#e8834a"/><circle cx="95" cy="77" r="5" fill="#c0643a"/></g></svg>`,
    row: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.ra{animation:ra 1.6s ease-in-out infinite;transform-origin:70px 44px}@keyframes ra{0%,100%{transform:translateX(0)}50%{transform:translateX(-16px)}}</style><rect x="5" y="76" width="50" height="4" rx="2" fill="#666"/><ellipse cx="30" cy="52" rx="9" ry="9" fill="#f0a070"/><rect x="36" y="48" width="40" height="12" rx="5" fill="#e8834a"/><rect x="22" y="58" width="8" height="20" rx="3" fill="#e8834a"/><rect x="38" y="58" width="8" height="20" rx="3" fill="#e8834a"/><g class="ra"><rect x="72" y="44" width="30" height="8" rx="3" fill="#e8834a"/><rect x="98" y="40" width="6" height="18" rx="2" fill="#bbb"/><circle cx="101" cy="38" r="5" fill="#999"/><circle cx="101" cy="60" r="5" fill="#999"/></g></svg>`,
    tricep: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.ta{animation:ta 1.6s ease-in-out infinite;transform-origin:62px 36px}@keyframes ta{0%,100%{transform:rotate(0deg)}50%{transform:rotate(48deg)}}</style><ellipse cx="60" cy="14" rx="10" ry="10" fill="#f0a070"/><rect x="50" y="22" width="20" height="24" rx="6" fill="#e8834a"/><rect x="36" y="26" width="12" height="8" rx="3" fill="#e8834a"/><rect x="72" y="26" width="12" height="8" rx="3" fill="#e8834a"/><g class="ta"><rect x="56" y="36" width="12" height="26" rx="4" fill="#e8834a"/><rect x="50" y="60" width="22" height="6" rx="3" fill="#bbb"/><circle cx="50" cy="63" r="5" fill="#999"/><circle cx="72" cy="63" r="5" fill="#999"/></g><rect x="40" y="54" width="12" height="26" rx="4" fill="#e8834a"/><rect x="68" y="54" width="12" height="26" rx="4" fill="#e8834a"/></svg>`,
    lunge: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.la{animation:la 1.8s ease-in-out infinite;transform-origin:54px 40px}@keyframes la{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}</style><rect x="5" y="83" width="110" height="4" rx="2" fill="#666"/><g class="la"><ellipse cx="54" cy="12" rx="9" ry="9" fill="#f0a070"/><rect x="46" y="20" width="16" height="22" rx="5" fill="#e8834a"/><rect x="35" y="22" width="10" height="6" rx="2" fill="#e8834a"/><rect x="73" y="22" width="10" height="6" rx="2" fill="#e8834a"/><rect x="38" y="40" width="12" height="32" rx="4" fill="#e8834a" transform="rotate(-15 44 56)"/><rect x="60" y="40" width="12" height="32" rx="4" fill="#e8834a" transform="rotate(10 66 56)"/><circle cx="36" cy="80" r="5" fill="#c0643a"/><circle cx="76" cy="79" r="5" fill="#c0643a"/></g></svg>`,
    abs: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.aa{animation:aa 1.6s ease-in-out infinite;transform-origin:60px 56px}@keyframes aa{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-26deg)}}</style><rect x="5" y="82" width="110" height="4" rx="2" fill="#666"/><rect x="38" y="54" width="44" height="16" rx="5" fill="#e8834a"/><rect x="42" y="68" width="14" height="20" rx="4" fill="#e8834a"/><rect x="64" y="68" width="14" height="20" rx="4" fill="#e8834a"/><circle cx="44" cy="82" r="5" fill="#c0643a"/><circle cx="76" cy="82" r="5" fill="#c0643a"/><g class="aa"><ellipse cx="60" cy="38" rx="9" ry="9" fill="#f0a070"/><rect x="50" y="44" width="20" height="14" rx="5" fill="#e8834a"/><rect x="34" y="44" width="14" height="8" rx="3" fill="#e8834a"/><rect x="72" y="44" width="14" height="8" rx="3" fill="#e8834a"/></g></svg>`,
    deadlift: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.da{animation:da 2s ease-in-out infinite;transform-origin:60px 62px}@keyframes da{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-28deg)}}</style><rect x="5" y="78" width="110" height="6" rx="3" fill="#666"/><rect x="18" y="68" width="84" height="8" rx="4" fill="#bbb"/><circle cx="18" cy="72" r="8" fill="#999"/><circle cx="102" cy="72" r="8" fill="#999"/><g class="da"><ellipse cx="60" cy="22" rx="9" ry="9" fill="#f0a070"/><rect x="51" y="30" width="18" height="34" rx="5" fill="#e8834a"/><rect x="34" y="52" width="14" height="8" rx="3" fill="#e8834a"/><rect x="72" y="52" width="14" height="8" rx="3" fill="#e8834a"/><rect x="42" y="62" width="12" height="20" rx="4" fill="#e8834a"/><rect x="66" y="62" width="12" height="20" rx="4" fill="#e8834a"/></g></svg>`,
    lateral: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.ll{animation:ll 1.6s ease-in-out infinite;transform-origin:46px 36px}.lr{animation:ll 1.6s ease-in-out infinite reverse;transform-origin:74px 36px}@keyframes ll{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-38deg)}}</style><ellipse cx="60" cy="16" rx="10" ry="10" fill="#f0a070"/><rect x="50" y="24" width="20" height="28" rx="6" fill="#e8834a"/><g class="ll"><rect x="26" y="36" width="22" height="8" rx="3" fill="#e8834a"/><circle cx="24" cy="40" r="5" fill="#999"/></g><g class="lr"><rect x="72" y="36" width="22" height="8" rx="3" fill="#e8834a"/><circle cx="96" cy="40" r="5" fill="#999"/></g><rect x="42" y="60" width="12" height="24" rx="4" fill="#e8834a"/><rect x="66" y="60" width="12" height="24" rx="4" fill="#e8834a"/></svg>`,
    glute: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.ga{animation:ga 1.8s ease-in-out infinite;transform-origin:60px 50px}@keyframes ga{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}</style><rect x="5" y="82" width="50" height="4" rx="2" fill="#666"/><rect x="65" y="82" width="50" height="4" rx="2" fill="#666"/><g class="ga"><rect x="30" y="62" width="18" height="8" rx="3" fill="#e8834a"/><rect x="72" y="62" width="18" height="8" rx="3" fill="#e8834a"/><rect x="44" y="50" width="32" height="18" rx="6" fill="#e8834a"/><rect x="20" y="60" width="24" height="24" rx="4" fill="#c0643a"/><rect x="76" y="60" width="24" height="24" rx="4" fill="#c0643a"/><ellipse cx="60" cy="42" rx="14" ry="10" fill="#f0a070"/></g><rect x="20" y="72" width="24" height="12" rx="4" fill="#e8834a"/><rect x="76" y="72" width="24" height="12" rx="4" fill="#e8834a"/></svg>`,
    shrug: `<svg viewBox="0 0 120 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><style>.sh{animation:sh 1.4s ease-in-out infinite;transform-origin:60px 30px}@keyframes sh{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}</style><ellipse cx="60" cy="18" rx="10" ry="10" fill="#f0a070"/><g class="sh"><rect x="50" y="26" width="20" height="22" rx="6" fill="#e8834a"/><rect x="22" y="30" width="26" height="8" rx="4" fill="#bbb"/><rect x="72" y="30" width="26" height="8" rx="4" fill="#bbb"/><circle cx="22" cy="34" r="6" fill="#999"/><circle cx="98" cy="34" r="6" fill="#999"/></g><rect x="42" y="56" width="12" height="28" rx="4" fill="#e8834a"/><rect x="66" y="56" width="12" height="28" rx="4" fill="#e8834a"/></svg>`,
  };
  const svg = svgs[type] || svgs['squat'];
  return (
    <div
      className="w-full h-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

function muscleToAnim(muscle: string): string {
  const m = muscle.toLowerCase();
  if (m.includes('pecho')) return 'bench';
  if (m.includes('espalda')) return 'row';
  if (m.includes('piernas') || m.includes('gemelos')) return 'squat';
  if (m.includes('hombros')) return 'ohpress';
  if (m.includes('biceps') || m.includes('bíceps')) return 'curl';
  if (m.includes('triceps') || m.includes('tríceps')) return 'tricep';
  if (m.includes('abdomen') || m.includes('core')) return 'abs';
  if (m.includes('glute') || m.includes('glúteo')) return 'glute';
  if (m.includes('trapecio')) return 'shrug';
  if (m.includes('antebrazos')) return 'curl';
  return 'squat';
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface Exercise {
  id: number
  name: string
  muscle_group: string
  equipment: string
  difficulty: string
  description: string
}

const MUSCLES = ['Todos', 'Pecho', 'Espalda', 'Piernas', 'Hombros', 'Biceps', 'Triceps', 'Abdomen', 'Gluteos', 'Trapecio', 'Antebrazos', 'Gemelos']
const MUSCLE_LABELS: Record<string, string> = {
  'Todos': 'Todos', 'Pecho': '💪 Pecho', 'Espalda': '🔙 Espalda',
  'Piernas': '🦵 Piernas', 'Hombros': '🏋️ Hombros', 'Biceps': '💪 Bíceps',
  'Triceps': '💪 Tríceps', 'Abdomen': '🔥 Abdomen', 'Gluteos': '🍑 Glúteos',
  'Trapecio': '🦅 Trapecio', 'Antebrazos': '🤜 Antebrazos', 'Gemelos': '🦵 Gemelos'
}

const diffColor = (d: string) =>
  d === 'Principiante' ? 'bg-green-500' : d === 'Intermedio' ? 'bg-yellow-500' : 'bg-red-500'

export default function ExerciseList() {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMuscle, setSelectedMuscle] = useState('Todos')
  const [selectedEquipment, setSelectedEquipment] = useState('Todo')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Exercise | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch('/api/exercises')
      .then(r => r.json())
      .then(data => {
        setExercises(data.exercises || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filtered = exercises.filter(e => {
    const muscleOk = selectedMuscle === 'Todos' || e.muscle_group === selectedMuscle
    const equipOk = selectedEquipment === 'Todo' ||
      (selectedEquipment === 'Sin equipo' && (e.equipment.toLowerCase().includes('sin equipo') || e.equipment.toLowerCase().includes('sin equip'))) ||
      (selectedEquipment === 'Máquina' && !e.equipment.toLowerCase().includes('sin equipo') && !e.equipment.toLowerCase().includes('sin equip'))
    const searchOk = e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase())
    return muscleOk && equipOk && searchOk
  })

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          📚 Catálogo de <span className="gradient-text">Ejercicios</span>
        </h2>
        <p className="text-gray-400">
          {loading ? 'Cargando ejercicios...' : `${exercises.length} ejercicios con demostraciones animadas`}
        </p>
      </div>

      {/* Filters */}
      <div className="glass-card p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3 mb-3">
          <input
            type="text"
            placeholder="🔍 Buscar ejercicio..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500"
          />
          <select
            value={selectedEquipment}
            onChange={e => setSelectedEquipment(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-orange-500"
          >
            <option value="Todo" className="bg-gray-800">⚙️ Todo el equipo</option>
            <option value="Sin equipo" className="bg-gray-800">🏃 Sin equipo</option>
            <option value="Máquina" className="bg-gray-800">🏋️ Con máquina</option>
          </select>
        </div>

        {/* Muscle group filter buttons */}
        <div className="flex flex-wrap gap-2">
          {MUSCLES.map(m => (
            <button
              key={m}
              onClick={() => setSelectedMuscle(m)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedMuscle === m
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {MUSCLE_LABELS[m] || m}
            </button>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-2">
          {filtered.length} ejercicios encontrados
        </p>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-white/60 text-sm">Cargando ejercicios...</p>
          </div>
        </div>
      )}

      {/* Exercise grid */}
      {!loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map(ex => (
            <div
              key={ex.id}
              onClick={() => setSelected(ex)}
              className="glass-card p-3 cursor-pointer hover:border-orange-500/50 hover:scale-105 transition-all duration-200"
            >
              <div className="w-full h-24 mb-2 flex items-center justify-center bg-black/20 rounded-xl overflow-hidden p-2">
                <ExerciseAnimSVG muscle={ex.muscle_group} />
              </div>
              <h3 className="text-white font-semibold text-xs mb-1 leading-tight line-clamp-2">{ex.name}</h3>
              <div className="flex flex-wrap gap-1">
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 truncate max-w-full">{ex.muscle_group}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full text-white ${diffColor(ex.difficulty)}`}>{ex.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-6xl mb-4">🔍</p>
          <p className="text-white/60">No se encontraron ejercicios</p>
          <button
            onClick={() => { setSearch(''); setSelectedMuscle('Todos'); setSelectedEquipment('Todo'); }}
            className="mt-4 px-6 py-2 bg-orange-500/20 text-orange-400 rounded-xl text-sm hover:bg-orange-500/30 transition-all"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Exercise detail modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-card max-w-md w-full p-6 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-full h-44 flex items-center justify-center bg-black/30 rounded-2xl mb-4 overflow-hidden p-3">
              <ExerciseAnimSVG muscle={selected.muscle_group} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">{selected.name}</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm px-3 py-1 rounded-full bg-orange-500/20 text-orange-400">{selected.muscle_group}</span>
              <span className={`text-sm px-3 py-1 rounded-full text-white ${diffColor(selected.difficulty)}`}>{selected.difficulty}</span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-500/20 text-gray-300">{selected.equipment}</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">{selected.description}</p>
            <button
              onClick={() => setSelected(null)}
              className="btn-primary w-full"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
