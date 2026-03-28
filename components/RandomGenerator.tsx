'use client'

import { useState } from 'react'

// ─── Inline mini animated SVGs ───────────────────────────────────────────────
function ExerciseAnim({ type }: { type: string }) {
  const anims: Record<string, JSX.Element> = {
    bench: (
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes bp{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}.bpb{animation:bp 1.2s ease-in-out infinite;transform-origin:60px 26px}.bpa{animation:bp 1.2s ease-in-out infinite;transform-origin:50px 36px}`}</style>
        <rect x="15" y="54" width="90" height="8" rx="3" fill="#555"/><rect x="20" y="62" width="8" height="14" rx="2" fill="#444"/><rect x="92" y="62" width="8" height="14" rx="2" fill="#444"/>
        <ellipse cx="60" cy="51" rx="28" ry="6" fill="#e8834a"/><circle cx="88" cy="49" r="7" fill="#f0a070"/>
        <g className="bpa"><line x1="50" y1="36" x2="38" y2="24" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/><line x1="70" y1="36" x2="82" y2="24" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/></g>
        <g className="bpb"><rect x="22" y="22" width="76" height="5" rx="2.5" fill="#bbb"/><circle cx="22" cy="24" r="6" fill="#888"/><circle cx="98" cy="24" r="6" fill="#888"/></g>
      </svg>
    ),
    pushup: (
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes pu{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.pub{animation:pu 1s ease-in-out infinite;transform-origin:60px 54px}`}</style>
        <line x1="5" y1="72" x2="115" y2="72" stroke="#666" strokeWidth="2"/>
        <g className="pub"><ellipse cx="58" cy="55" rx="26" ry="7" fill="#e8834a" transform="rotate(-10,58,55)"/><circle cx="85" cy="49" r="7" fill="#f0a070"/><line x1="70" y1="53" x2="80" y2="67" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><line x1="46" y1="56" x2="36" y2="69" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><line x1="35" y1="59" x2="20" y2="67" stroke="#e8834a" strokeWidth="5" strokeLinecap="round"/></g>
      </svg>
    ),
    pullup: (
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes pul{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}.pull{animation:pul 1.3s ease-in-out infinite;transform-origin:60px 44px}`}</style>
        <rect x="15" y="8" width="90" height="6" rx="3" fill="#aaa"/><rect x="10" y="0" width="6" height="20" rx="2" fill="#888"/><rect x="104" y="0" width="6" height="20" rx="2" fill="#888"/>
        <g className="pull"><line x1="48" y1="44" x2="43" y2="13" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><line x1="72" y1="44" x2="77" y2="13" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><ellipse cx="60" cy="52" rx="12" ry="18" fill="#e8834a"/><circle cx="60" cy="34" r="8" fill="#f0a070"/><line x1="54" y1="69" x2="50" y2="84" stroke="#e8834a" strokeWidth="5" strokeLinecap="round"/><line x1="66" y1="69" x2="70" y2="84" stroke="#e8834a" strokeWidth="5" strokeLinecap="round"/></g>
      </svg>
    ),
    squat: (
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes sq{0%,100%{transform:translateY(0) scaleY(1)}50%{transform:translateY(12px) scaleY(0.82)}}.sqb{animation:sq 1.2s ease-in-out infinite;transform-origin:60px 44px}`}</style>
        <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
        <g className="sqb"><rect x="28" y="21" width="64" height="5" rx="2.5" fill="#bbb"/><circle cx="28" cy="23" r="5" fill="#888"/><circle cx="92" cy="23" r="5" fill="#888"/><circle cx="60" cy="13" r="8" fill="#f0a070"/><rect x="52" y="25" width="16" height="22" rx="4" fill="#e8834a"/><line x1="52" y1="29" x2="38" y2="25" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/><line x1="68" y1="29" x2="82" y2="25" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/><line x1="56" y1="47" x2="48" y2="71" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><line x1="64" y1="47" x2="72" y2="71" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><ellipse cx="48" cy="73" rx="7" ry="3" fill="#c06030"/><ellipse cx="72" cy="73" rx="7" ry="3" fill="#c06030"/></g>
      </svg>
    ),
    curl: (
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes cu{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-70deg)}}.cua{animation:cu 1s ease-in-out infinite;transform-origin:68px 49px}`}</style>
        <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
        <circle cx="60" cy="14" r="9" fill="#f0a070"/><rect x="52" y="27" width="16" height="24" rx="4" fill="#e8834a"/><line x1="52" y1="31" x2="42" y2="54" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><circle cx="42" cy="57" r="4" fill="#bbb"/>
        <g className="cua"><line x1="68" y1="49" x2="78" y2="69" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><circle cx="78" cy="72" r="5" fill="#bbb"/></g>
        <line x1="56" y1="51" x2="52" y2="77" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><line x1="64" y1="51" x2="68" y2="77" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    ),
    ohpress: (
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes oh{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}.ohb{animation:oh 1.2s ease-in-out infinite;transform-origin:60px 27px}.oha{animation:oh 1.2s ease-in-out infinite;transform-origin:60px 37px}`}</style>
        <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
        <circle cx="60" cy="21" r="9" fill="#f0a070"/><rect x="52" y="33" width="16" height="22" rx="4" fill="#e8834a"/><line x1="55" y1="55" x2="50" y2="77" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><line x1="65" y1="55" x2="70" y2="77" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
        <g className="oha"><line x1="52" y1="37" x2="35" y2="23" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><line x1="68" y1="37" x2="85" y2="23" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/></g>
        <g className="ohb"><rect x="22" y="13" width="76" height="5" rx="2.5" fill="#bbb"/><circle cx="22" cy="15" r="6" fill="#888"/><circle cx="98" cy="15" r="6" fill="#888"/></g>
      </svg>
    ),
    plank: (
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes pl{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}.plb{animation:pl 2s ease-in-out infinite;transform-origin:60px 49px}`}</style>
        <line x1="5" y1="72" x2="115" y2="72" stroke="#666" strokeWidth="2"/>
        <g className="plb"><ellipse cx="58" cy="54" rx="32" ry="7" fill="#e8834a"/><circle cx="90" cy="51" r="7" fill="#f0a070"/><line x1="74" y1="55" x2="85" y2="67" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><line x1="42" y1="57" x2="30" y2="67" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><rect x="26" y="65" width="12" height="4" rx="2" fill="#f0a070"/><rect x="82" y="65" width="12" height="4" rx="2" fill="#f0a070"/></g>
      </svg>
    ),
    row: (
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes rw{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-8px) rotate(20deg)}}.rwa{animation:rw 1.1s ease-in-out infinite;transform-origin:55px 41px}`}</style>
        <line x1="5" y1="80" x2="115" y2="80" stroke="#666" strokeWidth="2"/>
        <ellipse cx="58" cy="45" rx="20" ry="8" fill="#e8834a" transform="rotate(-30,58,45)"/><circle cx="82" cy="35" r="8" fill="#f0a070"/>
        <line x1="50" y1="51" x2="44" y2="71" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><line x1="62" y1="51" x2="66" y2="71" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
        <g className="rwa"><line x1="55" y1="41" x2="32" y2="49" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><rect x="20" y="45" width="14" height="5" rx="2" fill="#bbb"/><circle cx="20" cy="47" r="5" fill="#888"/></g>
      </svg>
    ),
    tricep: (
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes tr{0%,100%{transform:rotate(0deg)}50%{transform:rotate(55deg)}}.tra{animation:tr 1s ease-in-out infinite;transform-origin:60px 41px}`}</style>
        <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
        <circle cx="60" cy="14" r="9" fill="#f0a070"/><rect x="52" y="27" width="16" height="22" rx="4" fill="#e8834a"/><line x1="56" y1="55" x2="52" y2="77" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><line x1="64" y1="55" x2="68" y2="77" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
        <line x1="60" y1="29" x2="60" y2="41" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <g className="tra"><line x1="60" y1="41" x2="60" y2="61" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><circle cx="60" cy="63" r="5" fill="#bbb"/></g>
      </svg>
    ),
    lunge: (
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes lu{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}.lub{animation:lu 1.2s ease-in-out infinite;transform-origin:60px 39px}`}</style>
        <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
        <g className="lub"><circle cx="60" cy="17" r="9" fill="#f0a070"/><rect x="52" y="29" width="16" height="20" rx="4" fill="#e8834a"/><line x1="52" y1="35" x2="30" y2="31" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/><line x1="68" y1="35" x2="90" y2="31" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/><line x1="56" y1="49" x2="42" y2="65" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><line x1="42" y1="65" x2="38" y2="84" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><line x1="64" y1="49" x2="76" y2="63" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><line x1="76" y1="63" x2="86" y2="84" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/></g>
      </svg>
    ),
    abs: (
      <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes ab{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-35deg)}}.abu{animation:ab 1s ease-in-out infinite;transform-origin:50px 54px}`}</style>
        <line x1="5" y1="75" x2="115" y2="75" stroke="#666" strokeWidth="2"/>
        <line x1="50" y1="57" x2="32" y2="54" stroke="#e8834a" strokeWidth="7" strokeLinecap="round"/><line x1="32" y1="54" x2="28" y2="71" stroke="#e8834a" strokeWidth="7" strokeLinecap="round"/><line x1="50" y1="57" x2="68" y2="54" stroke="#e8834a" strokeWidth="7" strokeLinecap="round"/><line x1="68" y1="54" x2="72" y2="71" stroke="#e8834a" strokeWidth="7" strokeLinecap="round"/>
        <g className="abu"><ellipse cx="50" cy="47" rx="18" ry="8" fill="#e8834a"/><circle cx="50" cy="39" r="8" fill="#f0a070"/><line x1="40" y1="43" x2="44" y2="37" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/><line x1="60" y1="43" x2="56" y2="37" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/></g>
      </svg>
    ),
    deadlift: (
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes dl{0%,100%{transform:rotate(-35deg) translateY(0)}50%{transform:rotate(0deg) translateY(-8px)}}.dlb{animation:dl 1.4s ease-in-out infinite;transform-origin:60px 59px}`}</style>
        <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
        <rect x="22" y="77" width="76" height="6" rx="3" fill="#bbb"/><circle cx="22" cy="80" r="8" fill="#888"/><circle cx="98" cy="80" r="8" fill="#888"/>
        <g className="dlb"><circle cx="60" cy="17" r="9" fill="#f0a070"/><rect x="52" y="29" width="16" height="28" rx="4" fill="#e8834a"/><line x1="52" y1="35" x2="36" y2="47" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><line x1="68" y1="35" x2="84" y2="47" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><line x1="56" y1="57" x2="50" y2="75" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><line x1="64" y1="57" x2="70" y2="75" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/></g>
      </svg>
    ),
    lateral: (
      <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>{`@keyframes lat{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-50deg)}}.latL{animation:lat 1.1s ease-in-out infinite;transform-origin:52px 35px}.latR{animation:lat 1.1s ease-in-out infinite reverse;transform-origin:68px 35px}`}</style>
        <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
        <circle cx="60" cy="14" r="9" fill="#f0a070"/><rect x="52" y="27" width="16" height="22" rx="4" fill="#e8834a"/><line x1="55" y1="55" x2="52" y2="77" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/><line x1="65" y1="55" x2="68" y2="77" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
        <g className="latL"><line x1="52" y1="35" x2="32" y2="41" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><circle cx="30" cy="41" r="4" fill="#bbb"/></g>
        <g className="latR"><line x1="68" y1="35" x2="88" y2="41" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/><circle cx="90" cy="41" r="4" fill="#bbb"/></g>
      </svg>
    ),
  }
  return anims[type] || anims['squat']
}

// ─── Exercise Data ────────────────────────────────────────────────────────────
type MuscleGroup = 'Pecho' | 'Espalda' | 'Piernas' | 'Hombros' | 'Bíceps' | 'Tríceps' | 'Abdomen'

interface ExerciseItem {
  name: string
  sets: string
  reps: string
  rest: string
  tip: string
  animType: string
}

const EXERCISE_DB: Record<MuscleGroup, ExerciseItem[]> = {
  Pecho: [
    { name:'Press de Banca', sets:'4', reps:'8-12', rest:'90s', tip:'Espalda pegada al banco', animType:'bench' },
    { name:'Press Inclinado', sets:'3', reps:'10-12', rest:'75s', tip:'Banco a 30-45°', animType:'bench' },
    { name:'Flexiones', sets:'3', reps:'15-20', rest:'60s', tip:'Core apretado', animType:'pushup' },
    { name:'Fondos en Paralelas', sets:'3', reps:'10-15', rest:'75s', tip:'Inclínate hacia adelante', animType:'pushup' },
    { name:'Aperturas con Mancuernas', sets:'3', reps:'12-15', rest:'60s', tip:'Movimiento en arco', animType:'bench' },
  ],
  Espalda: [
    { name:'Dominadas', sets:'4', reps:'6-10', rest:'90s', tip:'Baja completamente', animType:'pullup' },
    { name:'Peso Muerto', sets:'4', reps:'5-8', rest:'120s', tip:'Espalda siempre recta', animType:'deadlift' },
    { name:'Remo con Barra', sets:'4', reps:'8-12', rest:'90s', tip:'Aprieta la espalda arriba', animType:'row' },
    { name:'Jalón al Pecho', sets:'3', reps:'10-12', rest:'75s', tip:'Codos hacia abajo', animType:'pullup' },
    { name:'Remo con Mancuerna', sets:'3', reps:'12/lado', rest:'60s', tip:'Espalda paralela al suelo', animType:'row' },
  ],
  Piernas: [
    { name:'Sentadilla con Barra', sets:'4', reps:'8-12', rest:'120s', tip:'Rodillas alineadas', animType:'squat' },
    { name:'Prensa de Piernas', sets:'4', reps:'10-15', rest:'90s', tip:'No bloquees rodillas', animType:'squat' },
    { name:'Zancadas', sets:'3', reps:'12/pierna', rest:'75s', tip:'Rodilla no pasa el pie', animType:'lunge' },
    { name:'Curl de Femorales', sets:'3', reps:'12-15', rest:'60s', tip:'No levantes caderas', animType:'squat' },
    { name:'Elevación de Talones', sets:'4', reps:'20', rest:'45s', tip:'Máximo rango de movimiento', animType:'squat' },
  ],
  Hombros: [
    { name:'Press Militar', sets:'4', reps:'8-10', rest:'90s', tip:'Core activo siempre', animType:'ohpress' },
    { name:'Elevaciones Laterales', sets:'4', reps:'12-15', rest:'60s', tip:'Peso ligero, control total', animType:'lateral' },
    { name:'Press Arnold', sets:'3', reps:'10-12', rest:'75s', tip:'Rota las palmas al subir', animType:'ohpress' },
    { name:'Face Pulls', sets:'4', reps:'15-20', rest:'60s', tip:'Codos al nivel de hombros', animType:'row' },
    { name:'Elevaciones Frontales', sets:'3', reps:'12', rest:'60s', tip:'No balancees el torso', animType:'lateral' },
  ],
  Bíceps: [
    { name:'Curl con Barra', sets:'4', reps:'8-12', rest:'75s', tip:'Codos pegados al cuerpo', animType:'curl' },
    { name:'Curl Martillo', sets:'3', reps:'10-12', rest:'60s', tip:'Agarre neutro', animType:'curl' },
    { name:'Curl en Predicador', sets:'3', reps:'12', rest:'60s', tip:'No extiendas del todo', animType:'curl' },
    { name:'Curl Concentrado', sets:'3', reps:'15', rest:'45s', tip:'Apoya el codo en el muslo', animType:'curl' },
    { name:'Curl Inclinado', sets:'3', reps:'10-12', rest:'60s', tip:'Estiramiento completo', animType:'curl' },
  ],
  Tríceps: [
    { name:'Press Francés', sets:'4', reps:'10-12', rest:'75s', tip:'Codos apuntando al techo', animType:'tricep' },
    { name:'Extensiones en Polea', sets:'4', reps:'12-15', rest:'60s', tip:'Solo se mueve el antebrazo', animType:'tricep' },
    { name:'Fondos en Banco', sets:'3', reps:'12-15', rest:'60s', tip:'Espalda pegada al banco', animType:'pushup' },
    { name:'Press Cerrado', sets:'3', reps:'10', rest:'75s', tip:'Codos cerca del cuerpo', animType:'bench' },
    { name:'Patada de Tríceps', sets:'3', reps:'15', rest:'45s', tip:'Extiende completamente', animType:'tricep' },
  ],
  Abdomen: [
    { name:'Plancha', sets:'3', reps:'45-60s', rest:'45s', tip:'No dejes caer caderas', animType:'plank' },
    { name:'Crunch Abdominal', sets:'4', reps:'20', rest:'45s', tip:'Exhala al subir', animType:'abs' },
    { name:'Elevación de Piernas', sets:'3', reps:'15', rest:'45s', tip:'Espalda baja en el suelo', animType:'abs' },
    { name:'Giro Ruso', sets:'3', reps:'20/lado', rest:'45s', tip:'Levanta los pies', animType:'abs' },
    { name:'Mountain Climbers', sets:'3', reps:'30s', rest:'30s', tip:'Caderas al nivel del cuerpo', animType:'plank' },
  ],
}

const ALL_MUSCLES: MuscleGroup[] = ['Pecho','Espalda','Piernas','Hombros','Bíceps','Tríceps','Abdomen']

function getRandomItems<T>(arr: T[], n: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(n, arr.length))
}

export default function RandomGenerator() {
  const [selectedMuscles, setSelectedMuscles] = useState<MuscleGroup[]>([])
  const [numExercises, setNumExercises] = useState(5)
  const [routine, setRoutine] = useState<(ExerciseItem & { muscle: MuscleGroup })[]>([])
  const [generated, setGenerated] = useState(false)

  const toggleMuscle = (m: MuscleGroup) => {
    setSelectedMuscles(prev =>
      prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m]
    )
  }

  const generateRoutine = () => {
    const muscles = selectedMuscles.length > 0 ? selectedMuscles : ALL_MUSCLES
    const pool: (ExerciseItem & { muscle: MuscleGroup })[] = []
    muscles.forEach(m => {
      EXERCISE_DB[m].forEach(ex => pool.push({ ...ex, muscle: m }))
    })
    const selected = getRandomItems(pool, numExercises)
    setRoutine(selected)
    setGenerated(true)
  }

  const muscleEmojis: Record<MuscleGroup, string> = {
    Pecho:'🏋️', Espalda:'🦾', Piernas:'🦵', Hombros:'🤸', Bíceps:'💪', Tríceps:'🦵', Abdomen:'🔥'
  }

  const difficultyColor = (muscle: MuscleGroup) => {
    const hard: MuscleGroup[] = ['Espalda','Piernas']
    return hard.includes(muscle) ? 'bg-red-500' : 'bg-yellow-500'
  }

  const totalMinutes = routine.reduce((acc) => acc + 3, 0)

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">🎲 Generador <span className="gradient-text">Aleatorio</span></h2>
        <p className="text-gray-400">Genera una rutina personalizada al instante</p>
      </div>
      <div className="glass-card p-6 mb-6">
        <h3 className="text-white font-semibold mb-3">⚙️ Configura tu rutina</h3>
        <p className="text-gray-400 text-sm mb-3">Selecciona músculos (puedes elegir varios):</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={() => setSelectedMuscles([])}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedMuscles.length === 0 ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
            🏆 Todos
          </button>
          {ALL_MUSCLES.map(m => (
            <button key={m} onClick={() => toggleMuscle(m)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedMuscles.includes(m) ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
              {muscleEmojis[m]} {m}
            </button>
          ))}
        </div>
        <p className="text-gray-400 text-sm mb-2">Número de ejercicios: <span className="text-orange-400 font-bold">{numExercises}</span></p>
        <input type="range" min={3} max={10} value={numExercises} onChange={e => setNumExercises(parseInt(e.target.value))}
          className="w-full accent-orange-500 mb-1"/>
        <div className="flex justify-between text-xs text-gray-500"><span>3 ejercicios</span><span>10 ejercicios</span></div>
        <button onClick={generateRoutine} className="btn-primary w-full mt-4 text-lg py-4">
          🎲 Generar Rutina Aleatoria
        </button>
      </div>

      {generated && routine.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">Tu Rutina Personalizada 🔥</h3>
            <div className="flex gap-2">
              <span className="glass-card px-3 py-1 text-sm text-orange-400">{routine.length} ejercicios</span>
              <span className="glass-card px-3 py-1 text-sm text-gray-400">~{totalMinutes * 4} min</span>
            </div>
          </div>
          {routine.map((ex, i) => (
            <div key={i} className="glass-card p-4 exercise-card">
              <div className="flex gap-4 items-start">
                {/* Animated SVG */}
                <div className="w-24 h-20 flex-shrink-0 flex items-center justify-center bg-black/30 rounded-xl overflow-hidden p-1">
                  <ExerciseAnim type={ex.animType} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</span>
                    <h4 className="text-white font-semibold">{ex.name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400">{ex.muscle}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-2">
                    <span>📋 <strong className="text-white">{ex.sets}</strong> series</span>
                    <span>🔁 <strong className="text-white">{ex.reps}</strong> reps</span>
                    <span>⏱️ <strong className="text-white">{ex.rest}</strong> descanso</span>
                  </div>
                  <p className="text-xs text-yellow-400">💡 {ex.tip}</p>
                </div>
              </div>
            </div>
          ))}
          <button onClick={generateRoutine} className="btn-secondary w-full mt-2">
            🔄 Regenerar Rutina
          </button>
        </div>
      )}
    </div>
  )
}
