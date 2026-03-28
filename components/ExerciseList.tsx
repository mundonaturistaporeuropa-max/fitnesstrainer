'use client'

import { useState } from 'react'

function PressDesBancaAnim() {
  return (
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes benchPress { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes benchArm { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-30deg); } }
        .bp-bar { animation: benchPress 1.2s ease-in-out infinite; transform-origin: 60px 28px; }
        .bp-arm { animation: benchArm 1.2s ease-in-out infinite; transform-origin: 50px 38px; }
      `}</style>
      <rect x="15" y="55" width="90" height="8" rx="3" fill="#555"/>
      <rect x="20" y="63" width="8" height="14" rx="2" fill="#444"/>
      <rect x="92" y="63" width="8" height="14" rx="2" fill="#444"/>
      <ellipse cx="60" cy="52" rx="28" ry="6" fill="#e8834a"/>
      <circle cx="88" cy="50" r="7" fill="#f0a070"/>
      <g className="bp-arm">
        <line x1="50" y1="38" x2="38" y2="26" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/>
        <line x1="70" y1="38" x2="82" y2="26" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/>
      </g>
      <g className="bp-bar">
        <rect x="22" y="24" width="76" height="5" rx="2.5" fill="#bbb"/>
        <circle cx="22" cy="26" r="6" fill="#888"/>
        <circle cx="98" cy="26" r="6" fill="#888"/>
      </g>
    </svg>
  )
}
function FlexionesAnim() {
  return (
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes pushup { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .pu-body { animation: pushup 1s ease-in-out infinite; transform-origin: 60px 55px; }
      `}</style>
      <line x1="5" y1="72" x2="115" y2="72" stroke="#666" strokeWidth="2"/>
      <g className="pu-body">
        <ellipse cx="58" cy="56" rx="26" ry="7" fill="#e8834a" transform="rotate(-10,58,56)"/>
        <circle cx="86" cy="50" r="7" fill="#f0a070"/>
        <line x1="70" y1="54" x2="80" y2="68" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <line x1="46" y1="57" x2="36" y2="70" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <line x1="35" y1="60" x2="20" y2="68" stroke="#e8834a" strokeWidth="5" strokeLinecap="round"/>
      </g>
    </svg>
  )
}
function DominadasAnim() {
  return (
    <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes pullup { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-18px); } }
        .pull-body { animation: pullup 1.3s ease-in-out infinite; transform-origin: 60px 45px; }
      `}</style>
      <rect x="15" y="8" width="90" height="6" rx="3" fill="#aaa"/>
      <rect x="10" y="0" width="6" height="20" rx="2" fill="#888"/>
      <rect x="104" y="0" width="6" height="20" rx="2" fill="#888"/>
      <g className="pull-body">
        <line x1="48" y1="45" x2="43" y2="14" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <line x1="72" y1="45" x2="77" y2="14" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <ellipse cx="60" cy="53" rx="12" ry="18" fill="#e8834a"/>
        <circle cx="60" cy="35" r="8" fill="#f0a070"/>
        <line x1="54" y1="70" x2="50" y2="85" stroke="#e8834a" strokeWidth="5" strokeLinecap="round"/>
        <line x1="66" y1="70" x2="70" y2="85" stroke="#e8834a" strokeWidth="5" strokeLinecap="round"/>
      </g>
    </svg>
  )
}
function SentadillaAnim() {
  return (
    <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes squat { 0%,100% { transform: translateY(0px) scaleY(1); } 50% { transform: translateY(12px) scaleY(0.82); } }
        .sq-body { animation: squat 1.2s ease-in-out infinite; transform-origin: 60px 45px; }
      `}</style>
      <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
      <g className="sq-body">
        <rect x="28" y="22" width="64" height="5" rx="2.5" fill="#bbb"/>
        <circle cx="28" cy="24" r="5" fill="#888"/>
        <circle cx="92" cy="24" r="5" fill="#888"/>
        <circle cx="60" cy="14" r="8" fill="#f0a070"/>
        <rect x="52" y="26" width="16" height="22" rx="4" fill="#e8834a"/>
        <line x1="52" y1="30" x2="38" y2="26" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/>
        <line x1="68" y1="30" x2="82" y2="26" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/>
        <line x1="56" y1="48" x2="48" y2="72" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
        <line x1="64" y1="48" x2="72" y2="72" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
        <ellipse cx="48" cy="74" rx="7" ry="3" fill="#c06030"/>
        <ellipse cx="72" cy="74" rx="7" ry="3" fill="#c06030"/>
      </g>
    </svg>
  )
}
function CurlBicepsAnim() {
  return (
    <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes curl { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-70deg); } }
        .curl-arm { animation: curl 1s ease-in-out infinite; transform-origin: 68px 50px; }
      `}</style>
      <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
      <circle cx="60" cy="15" r="9" fill="#f0a070"/>
      <rect x="52" y="28" width="16" height="24" rx="4" fill="#e8834a"/>
      <line x1="52" y1="32" x2="42" y2="55" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="42" cy="58" r="4" fill="#bbb"/>
      <g className="curl-arm">
        <line x1="68" y1="50" x2="78" y2="70" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="78" cy="73" r="5" fill="#bbb"/>
      </g>
      <line x1="56" y1="52" x2="52" y2="78" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      <line x1="64" y1="52" x2="68" y2="78" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  )
}
function PressMilitarAnim() {
  return (
    <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes ohpress { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-16px); } }
        .ohp-bar { animation: ohpress 1.2s ease-in-out infinite; transform-origin: 60px 28px; }
        .ohp-arm { animation: ohpress 1.2s ease-in-out infinite; transform-origin: 60px 38px; }
      `}</style>
      <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
      <circle cx="60" cy="22" r="9" fill="#f0a070"/>
      <rect x="52" y="34" width="16" height="22" rx="4" fill="#e8834a"/>
      <line x1="55" y1="56" x2="50" y2="78" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      <line x1="65" y1="56" x2="70" y2="78" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      <g className="ohp-arm">
        <line x1="52" y1="38" x2="35" y2="24" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <line x1="68" y1="38" x2="85" y2="24" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
      </g>
      <g className="ohp-bar">
        <rect x="22" y="14" width="76" height="5" rx="2.5" fill="#bbb"/>
        <circle cx="22" cy="16" r="6" fill="#888"/>
        <circle cx="98" cy="16" r="6" fill="#888"/>
      </g>
    </svg>
  )
}
function PlanchaAnim() {
  return (
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes plank { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-3px); } }
        .pl-body { animation: plank 2s ease-in-out infinite; transform-origin: 60px 50px; }
      `}</style>
      <line x1="5" y1="72" x2="115" y2="72" stroke="#666" strokeWidth="2"/>
      <g className="pl-body">
        <ellipse cx="58" cy="55" rx="32" ry="7" fill="#e8834a"/>
        <circle cx="90" cy="52" r="7" fill="#f0a070"/>
        <line x1="74" y1="56" x2="85" y2="68" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <line x1="42" y1="58" x2="30" y2="68" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <rect x="26" y="66" width="12" height="4" rx="2" fill="#f0a070"/>
        <rect x="82" y="66" width="12" height="4" rx="2" fill="#f0a070"/>
      </g>
    </svg>
  )
}
function RemoAnim() {
  return (
    <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes row { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-8px) rotate(20deg); } }
        .row-arm { animation: row 1.1s ease-in-out infinite; transform-origin: 55px 42px; }
      `}</style>
      <line x1="5" y1="80" x2="115" y2="80" stroke="#666" strokeWidth="2"/>
      <ellipse cx="58" cy="46" rx="20" ry="8" fill="#e8834a" transform="rotate(-30,58,46)"/>
      <circle cx="82" cy="36" r="8" fill="#f0a070"/>
      <line x1="50" y1="52" x2="44" y2="72" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      <line x1="62" y1="52" x2="66" y2="72" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      <g className="row-arm">
        <line x1="55" y1="42" x2="32" y2="50" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <rect x="20" y="46" width="14" height="5" rx="2" fill="#bbb"/>
        <circle cx="20" cy="48" r="5" fill="#888"/>
      </g>
    </svg>
  )
}
function ExtensionTricepsAnim() {
  return (
    <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes tricep { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(55deg); } }
        .tri-arm { animation: tricep 1s ease-in-out infinite; transform-origin: 60px 42px; }
      `}</style>
      <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
      <circle cx="60" cy="15" r="9" fill="#f0a070"/>
      <rect x="52" y="28" width="16" height="22" rx="4" fill="#e8834a"/>
      <line x1="56" y1="56" x2="52" y2="78" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      <line x1="64" y1="56" x2="68" y2="78" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      <line x1="60" y1="30" x2="60" y2="42" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
      <g className="tri-arm">
        <line x1="60" y1="42" x2="60" y2="62" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="60" cy="64" r="5" fill="#bbb"/>
      </g>
    </svg>
  )
}
function ZancadasAnim() {
  return (
    <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes lunge { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(10px); } }
        .lu-body { animation: lunge 1.2s ease-in-out infinite; transform-origin: 60px 40px; }
      `}</style>
      <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
      <g className="lu-body">
        <circle cx="60" cy="18" r="9" fill="#f0a070"/>
        <rect x="52" y="30" width="16" height="20" rx="4" fill="#e8834a"/>
        <line x1="52" y1="36" x2="30" y2="32" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/>
        <line x1="68" y1="36" x2="90" y2="32" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/>
        <line x1="56" y1="50" x2="42" y2="66" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
        <line x1="42" y1="66" x2="38" y2="85" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
        <line x1="64" y1="50" x2="76" y2="64" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
        <line x1="76" y1="64" x2="86" y2="85" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      </g>
    </svg>
  )
}
function AbdominalAnim() {
  return (
    <svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes crunch { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-35deg); } }
        .cr-upper { animation: crunch 1s ease-in-out infinite; transform-origin: 50px 55px; }
      `}</style>
      <line x1="5" y1="75" x2="115" y2="75" stroke="#666" strokeWidth="2"/>
      <line x1="50" y1="58" x2="32" y2="55" stroke="#e8834a" strokeWidth="7" strokeLinecap="round"/>
      <line x1="32" y1="55" x2="28" y2="72" stroke="#e8834a" strokeWidth="7" strokeLinecap="round"/>
      <line x1="50" y1="58" x2="68" y2="55" stroke="#e8834a" strokeWidth="7" strokeLinecap="round"/>
      <line x1="68" y1="55" x2="72" y2="72" stroke="#e8834a" strokeWidth="7" strokeLinecap="round"/>
      <g className="cr-upper">
        <ellipse cx="50" cy="48" rx="18" ry="8" fill="#e8834a"/>
        <circle cx="50" cy="40" r="8" fill="#f0a070"/>
        <line x1="40" y1="44" x2="44" y2="38" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/>
        <line x1="60" y1="44" x2="56" y2="38" stroke="#f0a070" strokeWidth="4" strokeLinecap="round"/>
      </g>
    </svg>
  )
}
function PesoMuertoAnim() {
  return (
    <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes deadlift { 0%,100% { transform: rotate(-35deg) translateY(0px); } 50% { transform: rotate(0deg) translateY(-8px); } }
        .dl-body { animation: deadlift 1.4s ease-in-out infinite; transform-origin: 60px 60px; }
      `}</style>
      <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
      <rect x="22" y="78" width="76" height="6" rx="3" fill="#bbb"/>
      <circle cx="22" cy="81" r="8" fill="#888"/>
      <circle cx="98" cy="81" r="8" fill="#888"/>
      <g className="dl-body">
        <circle cx="60" cy="18" r="9" fill="#f0a070"/>
        <rect x="52" y="30" width="16" height="28" rx="4" fill="#e8834a"/>
        <line x1="52" y1="36" x2="36" y2="48" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <line x1="68" y1="36" x2="84" y2="48" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <line x1="56" y1="58" x2="50" y2="76" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
        <line x1="64" y1="58" x2="70" y2="76" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      </g>
    </svg>
  )
}
function ElevacionLateralAnim() {
  return (
    <svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        @keyframes lateral { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(-50deg); } }
        .lat-left { animation: lateral 1.1s ease-in-out infinite; transform-origin: 52px 36px; }
        .lat-right { animation: lateral 1.1s ease-in-out infinite reverse; transform-origin: 68px 36px; }
      `}</style>
      <line x1="5" y1="88" x2="115" y2="88" stroke="#666" strokeWidth="2"/>
      <circle cx="60" cy="15" r="9" fill="#f0a070"/>
      <rect x="52" y="28" width="16" height="22" rx="4" fill="#e8834a"/>
      <line x1="55" y1="56" x2="52" y2="78" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      <line x1="65" y1="56" x2="68" y2="78" stroke="#e8834a" strokeWidth="6" strokeLinecap="round"/>
      <g className="lat-left">
        <line x1="52" y1="36" x2="32" y2="42" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="30" cy="42" r="4" fill="#bbb"/>
      </g>
      <g className="lat-right">
        <line x1="68" y1="36" x2="88" y2="42" stroke="#f0a070" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="90" cy="42" r="4" fill="#bbb"/>
      </g>
    </svg>
  )
}

type Exercise = {
  id: number; name: string; muscle: string; equipment: string; difficulty: string
  description: string; steps: string[]; tips: string; animation: () => JSX.Element
}

const EXERCISES: Exercise[] = [
  { id:1, name:'Press de Banca', muscle:'Pecho', equipment:'Máquina', difficulty:'Intermedio', description:'Ejercicio compuesto rey para el pecho. Activa pectoral mayor, deltoides anterior y tríceps.', steps:['Acuéstate en el banco, pies en el suelo','Agarre a la anchura de hombros','Baja la barra al pecho de forma controlada','Empuja hasta bloquear codos'], tips:'Mantén la espalda arqueada levemente y los pies firmes.', animation: PressDesBancaAnim },
  { id:2, name:'Press Inclinado', muscle:'Pecho', equipment:'Máquina', difficulty:'Intermedio', description:'Enfocado en la parte superior del pecho. Banco inclinado a 30-45°.', steps:['Inclina el banco a 30-45°','Agarra las mancuernas','Baja controlado a la altura del pecho','Sube extendiendo completamente'], tips:'No dejes que los codos bajen por debajo del banco.', animation: PressDesBancaAnim },
  { id:3, name:'Flexiones de Pecho', muscle:'Pecho', equipment:'Sin máquina', difficulty:'Principiante', description:'Ejercicio clásico de peso corporal para pecho y tríceps.', steps:['Colócate en posición de plancha','Manos a la anchura de hombros','Baja el pecho al suelo','Empuja hasta extender brazos'], tips:'Mantén el core apretado durante todo el movimiento.', animation: FlexionesAnim },
  { id:4, name:'Fondos en Paralelas', muscle:'Pecho', equipment:'Sin máquina', difficulty:'Intermedio', description:'Trabaja el pecho inferior y los tríceps.', steps:['Agarra las barras paralelas','Inclínate ligeramente hacia adelante','Baja doblando los codos','Sube empujando hasta arriba'], tips:'Inclinarte más hacia adelante activa más el pecho.', animation: FlexionesAnim },
  { id:5, name:'Dominadas', muscle:'Espalda', equipment:'Sin máquina', difficulty:'Avanzado', description:'El ejercicio rey para la espalda. Activa dorsal ancho, romboides y bíceps.', steps:['Cuelga de la barra con agarre prono','Lleva el pecho hacia la barra','Baja lentamente controlando el movimiento','Repite'], tips:'No balancees el cuerpo, movimiento controlado.', animation: DominadasAnim },
  { id:6, name:'Peso Muerto', muscle:'Espalda', equipment:'Máquina', difficulty:'Avanzado', description:'El ejercicio más completo del gimnasio. Trabaja toda la cadena posterior.', steps:['Pies a la anchura de cadera junto a la barra','Agarra la barra con brazos extendidos','Empuja el suelo y levanta manteniendo la espalda recta','Baja de forma controlada'], tips:'La espalda siempre recta, nunca redondees la columna.', animation: PesoMuertoAnim },
  { id:7, name:'Remo con Barra', muscle:'Espalda', equipment:'Máquina', difficulty:'Intermedio', description:'Ejercicio fundamental para el grosor de la espalda media.', steps:['Inclínate con la espalda recta','Agarra la barra más ancha que los hombros','Lleva la barra al abdomen','Baja controlado'], tips:'Mantén el torso estable y aprieta la espalda arriba.', animation: RemoAnim },
  { id:8, name:'Jalón al Pecho', muscle:'Espalda', equipment:'Máquina', difficulty:'Principiante', description:'Alternativa a dominadas para principiantes.', steps:['Siéntate en la máquina','Agarra la barra amplia','Lleva la barra al pecho superior','Sube lentamente'], tips:'Lleva los codos hacia abajo y atrás al bajar.', animation: DominadasAnim },
  { id:9, name:'Sentadilla con Barra', muscle:'Piernas', equipment:'Máquina', difficulty:'Avanzado', description:'La reina de los ejercicios para piernas. Activa cuádriceps, glúteos y femorales.', steps:['Coloca la barra en los trapecios','Pies a la anchura de hombros','Baja como si fueras a sentarte','Sube empujando el suelo'], tips:'Rodillas alineadas con los pies, no dejes que se junten.', animation: SentadillaAnim },
  { id:10, name:'Prensa de Piernas', muscle:'Piernas', equipment:'Máquina', difficulty:'Principiante', description:'Alternativa segura a la sentadilla en máquina.', steps:['Siéntate en la máquina prensa','Pies separados a la anchura de hombros','Dobla las rodillas 90°','Empuja la plataforma hasta casi extender'], tips:'No bloquees las rodillas al extender completamente.', animation: SentadillaAnim },
  { id:11, name:'Zancadas', muscle:'Piernas', equipment:'Sin máquina', difficulty:'Principiante', description:'Ejercicio unilateral para piernas y glúteos.', steps:['De pie con los pies juntos','Da un paso largo hacia adelante','Dobla la rodilla trasera hacia el suelo','Vuelve y repite con la otra pierna'], tips:'La rodilla delantera no debe sobrepasar el pie.', animation: ZancadasAnim },
  { id:12, name:'Press Militar', muscle:'Hombros', equipment:'Máquina', difficulty:'Intermedio', description:'Ejercicio principal para los deltoides.', steps:['De pie o sentado con la barra al pecho','Empuja la barra sobre la cabeza','Extiende los brazos completamente','Baja controlado al pecho'], tips:'No arquees la espalda al empujar, activa el core.', animation: PressMilitarAnim },
  { id:13, name:'Elevaciones Laterales', muscle:'Hombros', equipment:'Sin máquina', difficulty:'Principiante', description:'Aislamiento del deltoides lateral. Clave para hombros anchos.', steps:['De pie con mancuernas a los lados','Levanta los brazos hacia los lados','Llega a la altura de los hombros','Baja lentamente'], tips:'Usa peso ligero y controla el movimiento.', animation: ElevacionLateralAnim },
  { id:14, name:'Press Arnold', muscle:'Hombros', equipment:'Sin máquina', difficulty:'Intermedio', description:'Variante del press con rotación. Trabaja todos los deltoides.', steps:['Mancuernas frente a la cara, palmas hacia ti','Gira las palmas mientras subes','Lleva las mancuernas sobre la cabeza','Invierte el movimiento al bajar'], tips:'El movimiento de rotación activa más fibras del deltoides.', animation: PressMilitarAnim },
  { id:15, name:'Curl con Barra', muscle:'Bíceps', equipment:'Máquina', difficulty:'Principiante', description:'Ejercicio clásico para el bíceps. El más efectivo para masa.', steps:['De pie con la barra en agarre supino','Pega los codos al cuerpo','Sube la barra contrayendo el bíceps','Baja controlado sin soltar la tensión'], tips:'No balancees el cuerpo, el movimiento es solo del codo.', animation: CurlBicepsAnim },
  { id:16, name:'Curl Martillo', muscle:'Bíceps', equipment:'Sin máquina', difficulty:'Principiante', description:'Agarre neutro que trabaja el braquiorradial y bíceps.', steps:['De pie con mancuernas en agarre neutro','Pega los codos al cuerpo','Sube alternando o los dos a la vez','Baja lentamente'], tips:'El agarre neutro reduce el estrés en la muñeca.', animation: CurlBicepsAnim },
  { id:17, name:'Curl en Predicador', muscle:'Bíceps', equipment:'Máquina', difficulty:'Intermedio', description:'Aísla el bíceps eliminando el impulso corporal.', steps:['Apoya los tríceps en el soporte inclinado','Agarra la barra en supino','Sube la barra hasta máxima contracción','Baja lentamente casi extendiendo'], tips:'No extiendas completamente para mantener la tensión.', animation: CurlBicepsAnim },
  { id:18, name:'Press Francés', muscle:'Tríceps', equipment:'Máquina', difficulty:'Intermedio', description:'Trabaja la cabeza larga del tríceps principalmente.', steps:['Acostado en banco con barra EZ','Extiende los brazos sobre la cabeza','Dobla los codos bajando la barra a la frente','Extiende de vuelta'], tips:'Mantén los codos apuntando al techo, no los abras.', animation: ExtensionTricepsAnim },
  { id:19, name:'Extensiones en Polea', muscle:'Tríceps', equipment:'Máquina', difficulty:'Principiante', description:'Aislamiento perfecto del tríceps en polea alta.', steps:['De pie frente a la polea alta','Agarra la cuerda con ambas manos','Pega los codos al cuerpo','Extiende los brazos hacia abajo'], tips:'Los codos no deben moverse, solo el antebrazo.', animation: ExtensionTricepsAnim },
  { id:20, name:'Plancha', muscle:'Abdomen', equipment:'Sin máquina', difficulty:'Principiante', description:'Ejercicio isométrico fundamental para el core.', steps:['Apóyate sobre los antebrazos y punteras','Cuerpo en línea recta','Aprieta el abdomen y glúteos','Mantén la posición'], tips:'No dejes caer las caderas ni levantes el trasero.', animation: PlanchaAnim },
  { id:21, name:'Crunch Abdominal', muscle:'Abdomen', equipment:'Sin máquina', difficulty:'Principiante', description:'El clásico abdominal para el recto abdominal.', steps:['Acostado boca arriba, rodillas dobladas','Manos detrás de la cabeza','Sube el torso contrayendo el abdomen','Baja controlado'], tips:'No jales el cuello, exhala al subir.', animation: AbdominalAnim },
  { id:22, name:'Giro Ruso', muscle:'Abdomen', equipment:'Sin máquina', difficulty:'Intermedio', description:'Trabaja los oblicuos con giros laterales.', steps:['Sentado con rodillas dobladas','Inclínate 45° hacia atrás','Gira el torso de lado a lado','Mantén el abdomen contraído'], tips:'Levanta los pies del suelo para mayor dificultad.', animation: AbdominalAnim },
  { id:23, name:'Remo con Mancuerna', muscle:'Espalda', equipment:'Sin máquina', difficulty:'Principiante', description:'Remo unilateral con apoyo en banco.', steps:['Apoya la rodilla y mano en el banco','Coge la mancuerna con la mano libre','Lleva el codo hacia el techo','Baja controlado'], tips:'Mantén la espalda paralela al suelo.', animation: RemoAnim },
  { id:24, name:'Curl de Femorales', muscle:'Piernas', equipment:'Máquina', difficulty:'Principiante', description:'Aislamiento del bíceps femoral en máquina.', steps:['Tumbado boca abajo en la máquina','Coloca los tobillos bajo el rodillo','Dobla las rodillas llevando los talones al trasero','Baja controlado'], tips:'No levantes las caderas de la máquina.', animation: SentadillaAnim },
]

const MUSCLES = ['Todos','Pecho','Espalda','Piernas','Hombros','Bíceps','Tríceps','Abdomen']
const EQUIPMENT_OPTIONS = ['Todo el Equipo','Máquina','Sin máquina']

export default function ExerciseList() {
  const [selectedMuscle, setSelectedMuscle] = useState('Todos')
  const [selectedEquipment, setSelectedEquipment] = useState('Todo el Equipo')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Exercise | null>(null)

  const filtered = EXERCISES.filter(e => {
    const muscleOk = selectedMuscle === 'Todos' || e.muscle === selectedMuscle
    const equipOk = selectedEquipment === 'Todo el Equipo' || e.equipment === selectedEquipment
    const searchOk = e.name.toLowerCase().includes(search.toLowerCase())
    return muscleOk && equipOk && searchOk
  })

  const diffColor = (d: string) =>
    d === 'Principiante' ? 'bg-green-500' : d === 'Intermedio' ? 'bg-yellow-500' : 'bg-red-500'

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">📚 Catálogo de <span className="gradient-text">Ejercicios</span></h2>
        <p className="text-gray-400">Explora todos los ejercicios con animaciones en movimiento</p>
      </div>
      <div className="glass-card p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <input type="text" placeholder="🔍 Buscar ejercicio..." value={search} onChange={e => setSearch(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500"/>
          <select value={selectedEquipment} onChange={e => setSelectedEquipment(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-orange-500">
            {EQUIPMENT_OPTIONS.map(o => <option key={o} value={o} className="bg-gray-800">{o}</option>)}
          </select>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {MUSCLES.map(m => (
            <button key={m} onClick={() => setSelectedMuscle(m)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedMuscle === m ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
              {m}
            </button>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-2">{filtered.length} ejercicios encontrados</p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(ex => (
          <div key={ex.id} onClick={() => setSelected(ex)}
            className="glass-card p-4 exercise-card cursor-pointer hover:border-orange-500/50 transition-all duration-200">
            <div className="w-full h-28 mb-3 flex items-center justify-center bg-black/20 rounded-xl overflow-hidden p-2">
              <ex.animation />
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">{ex.name}</h3>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400">{ex.muscle}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full text-white ${diffColor(ex.difficulty)}`}>{ex.difficulty}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${ex.equipment === 'Sin máquina' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                {ex.equipment === 'Sin máquina' ? '🏃 Sin máq.' : '⚙️ Máquina'}
              </span>
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelected(null)}>
          <div className="glass-card max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="w-full h-52 flex items-center justify-center bg-black/30 rounded-2xl mb-4 overflow-hidden p-3">
              <selected.animation />
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">{selected.name}</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-sm px-3 py-1 rounded-full bg-orange-500/20 text-orange-400">{selected.muscle}</span>
              <span className={`text-sm px-3 py-1 rounded-full text-white ${diffColor(selected.difficulty)}`}>{selected.difficulty}</span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-500/20 text-gray-300">{selected.equipment}</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">{selected.description}</p>
            <h4 className="text-orange-400 font-semibold mb-2">📋 Pasos:</h4>
            <ol className="space-y-2 mb-4">
              {selected.steps.map((s,i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i+1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-3">
              <p className="text-orange-300 text-sm">💡 <strong>Consejo:</strong> {selected.tips}</p>
            </div>
            <button onClick={() => setSelected(null)} className="btn-primary w-full mt-4">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  )
}
