'use client'

import { useState, useRef, useEffect } from 'react'

// ─── Animated SVG Exercise Illustration ──────────────────────────────────────
function ExerciseAnimSVG({ type }: { type: string }) {
  const svgs: Record<string, string> = {
    bench: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.bp{animation:bp 1.6s ease-in-out infinite;transform-origin:60px 32px}@keyframes bp{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}</style><rect x="10" y="60" width="100" height="8" rx="4" fill="#888"/><ellipse cx="60" cy="56" rx="14" ry="9" fill="#f0a070"/><rect x="46" y="50" width="28" height="14" rx="4" fill="#e8834a"/><g class="bp"><rect x="20" y="28" width="80" height="6" rx="3" fill="#bbb"/><circle cx="20" cy="31" r="7" fill="#999"/><circle cx="100" cy="31" r="7" fill="#999"/><rect x="48" y="34" width="6" height="18" rx="2" fill="#e8834a"/><rect x="66" y="34" width="6" height="18" rx="2" fill="#e8834a"/></g></svg>`,
    pushup: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.pu{animation:pu 1.6s ease-in-out infinite;transform-origin:60px 60px}@keyframes pu{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}</style><rect x="5" y="76" width="110" height="4" rx="2" fill="#666"/><g class="pu"><ellipse cx="38" cy="52" rx="8" ry="8" fill="#f0a070"/><rect x="30" y="56" width="50" height="12" rx="6" fill="#e8834a"/><rect x="26" y="64" width="8" height="14" rx="3" fill="#e8834a"/><rect x="86" y="64" width="8" height="14" rx="3" fill="#e8834a"/><circle cx="27" cy="79" r="4" fill="#c0643a"/><circle cx="90" cy="79" r="4" fill="#c0643a"/></g></svg>`,
    pullup: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.pull{animation:pull 1.8s ease-in-out infinite;transform-origin:60px 16px}@keyframes pull{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}</style><rect x="10" y="8" width="100" height="6" rx="3" fill="#888"/><g class="pull"><ellipse cx="60" cy="26" rx="9" ry="9" fill="#f0a070"/><rect x="51" y="32" width="18" height="26" rx="6" fill="#e8834a"/><rect x="38" y="22" width="10" height="22" rx="4" fill="#e8834a"/><rect x="72" y="22" width="10" height="22" rx="4" fill="#e8834a"/><rect x="52" y="56" width="8" height="22" rx="3" fill="#e8834a"/><rect x="60" y="56" width="8" height="22" rx="3" fill="#e8834a"/></g></svg>`,
    squat: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.sq{animation:sq 1.8s ease-in-out infinite;transform-origin:60px 50px}@keyframes sq{0%,100%{transform:translateY(0)}50%{transform:translateY(14px) scaleY(0.85)}}</style><rect x="5" y="82" width="110" height="4" rx="2" fill="#666"/><g class="sq"><ellipse cx="60" cy="14" rx="9" ry="9" fill="#f0a070"/><rect x="52" y="20" width="16" height="24" rx="5" fill="#e8834a"/><rect x="30" y="18" width="52" height="8" rx="3" fill="#bbb"/><rect x="40" y="44" width="10" height="30" rx="4" fill="#e8834a"/><rect x="70" y="44" width="10" height="30" rx="4" fill="#e8834a"/><circle cx="42" cy="77" r="5" fill="#c0643a"/><circle cx="78" cy="77" r="5" fill="#c0643a"/></g></svg>`,
    curl: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.ca{animation:ca 1.6s ease-in-out infinite;transform-origin:68px 52px}@keyframes ca{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-55deg)}}</style><ellipse cx="60" cy="18" rx="10" ry="10" fill="#f0a070"/><rect x="50" y="26" width="20" height="28" rx="6" fill="#e8834a"/><rect x="36" y="30" width="12" height="24" rx="4" fill="#e8834a"/><g class="ca"><rect x="68" y="30" width="12" height="26" rx="4" fill="#e8834a"/><rect x="62" y="54" width="24" height="6" rx="3" fill="#bbb"/><circle cx="62" cy="57" r="5" fill="#999"/><circle cx="86" cy="57" r="5" fill="#999"/></g><rect x="40" y="62" width="12" height="22" rx="4" fill="#e8834a"/><rect x="68" y="62" width="12" height="22" rx="4" fill="#e8834a"/></svg>`,
    ohpress: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.ohp{animation:ohp 1.6s ease-in-out infinite;transform-origin:60px 30px}@keyframes ohp{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}</style><ellipse cx="60" cy="20" rx="10" ry="10" fill="#f0a070"/><rect x="50" y="28" width="20" height="28" rx="6" fill="#e8834a"/><rect x="40" y="62" width="12" height="22" rx="4" fill="#e8834a"/><rect x="68" y="62" width="12" height="22" rx="4" fill="#e8834a"/><g class="ohp"><rect x="22" y="32" width="76" height="6" rx="3" fill="#bbb"/><circle cx="22" cy="35" r="6" fill="#999"/><circle cx="98" cy="35" r="6" fill="#999"/><rect x="40" y="36" width="10" height="14" rx="3" fill="#e8834a"/><rect x="70" y="36" width="10" height="14" rx="3" fill="#e8834a"/></g></svg>`,
    plank: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.pl{animation:pl 2.2s ease-in-out infinite}@keyframes pl{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}</style><rect x="5" y="76" width="110" height="4" rx="2" fill="#666"/><g class="pl"><ellipse cx="28" cy="58" rx="9" ry="9" fill="#f0a070"/><rect x="36" y="54" width="58" height="12" rx="6" fill="#e8834a"/><rect x="26" y="66" width="8" height="12" rx="3" fill="#e8834a"/><circle cx="27" cy="78" r="4" fill="#c0643a"/><rect x="90" y="62" width="8" height="14" rx="3" fill="#e8834a"/><circle cx="95" cy="77" r="5" fill="#c0643a"/></g></svg>`,
    row: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.ra{animation:ra 1.6s ease-in-out infinite;transform-origin:70px 44px}@keyframes ra{0%,100%{transform:translateX(0)}50%{transform:translateX(-16px)}}</style><rect x="5" y="76" width="50" height="4" rx="2" fill="#666"/><ellipse cx="30" cy="52" rx="9" ry="9" fill="#f0a070"/><rect x="36" y="48" width="40" height="12" rx="5" fill="#e8834a"/><rect x="22" y="58" width="8" height="20" rx="3" fill="#e8834a"/><rect x="38" y="58" width="8" height="20" rx="3" fill="#e8834a"/><g class="ra"><rect x="72" y="44" width="30" height="8" rx="3" fill="#e8834a"/><rect x="98" y="40" width="6" height="18" rx="2" fill="#bbb"/><circle cx="101" cy="38" r="5" fill="#999"/><circle cx="101" cy="60" r="5" fill="#999"/></g></svg>`,
    tricep: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.ta{animation:ta 1.6s ease-in-out infinite;transform-origin:62px 36px}@keyframes ta{0%,100%{transform:rotate(0deg)}50%{transform:rotate(48deg)}}</style><ellipse cx="60" cy="14" rx="10" ry="10" fill="#f0a070"/><rect x="50" y="22" width="20" height="24" rx="6" fill="#e8834a"/><rect x="36" y="26" width="12" height="8" rx="3" fill="#e8834a"/><rect x="72" y="26" width="12" height="8" rx="3" fill="#e8834a"/><g class="ta"><rect x="56" y="36" width="12" height="26" rx="4" fill="#e8834a"/><rect x="50" y="60" width="22" height="6" rx="3" fill="#bbb"/><circle cx="50" cy="63" r="5" fill="#999"/><circle cx="72" cy="63" r="5" fill="#999"/></g><rect x="40" y="54" width="12" height="26" rx="4" fill="#e8834a"/><rect x="68" y="54" width="12" height="26" rx="4" fill="#e8834a"/></svg>`,
    lunge: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.la{animation:la 1.8s ease-in-out infinite;transform-origin:54px 40px}@keyframes la{0%,100%{transform:translateY(0)}50%{transform:translateY(10px)}}</style><rect x="5" y="83" width="110" height="4" rx="2" fill="#666"/><g class="la"><ellipse cx="54" cy="12" rx="9" ry="9" fill="#f0a070"/><rect x="46" y="20" width="16" height="22" rx="5" fill="#e8834a"/><rect x="35" y="22" width="10" height="6" rx="2" fill="#e8834a"/><rect x="73" y="22" width="10" height="6" rx="2" fill="#e8834a"/><rect x="38" y="40" width="12" height="32" rx="4" fill="#e8834a" transform="rotate(-15 44 56)"/><rect x="60" y="40" width="12" height="32" rx="4" fill="#e8834a" transform="rotate(10 66 56)"/><circle cx="36" cy="80" r="5" fill="#c0643a"/><circle cx="76" cy="79" r="5" fill="#c0643a"/></g></svg>`,
    abs: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.aa{animation:aa 1.6s ease-in-out infinite;transform-origin:60px 56px}@keyframes aa{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-26deg)}}</style><rect x="5" y="82" width="110" height="4" rx="2" fill="#666"/><rect x="38" y="54" width="44" height="16" rx="5" fill="#e8834a"/><rect x="42" y="68" width="14" height="20" rx="4" fill="#e8834a"/><rect x="64" y="68" width="14" height="20" rx="4" fill="#e8834a"/><circle cx="44" cy="82" r="5" fill="#c0643a"/><circle cx="76" cy="82" r="5" fill="#c0643a"/><g class="aa"><ellipse cx="60" cy="38" rx="9" ry="9" fill="#f0a070"/><rect x="50" y="44" width="20" height="14" rx="5" fill="#e8834a"/><rect x="34" y="44" width="14" height="8" rx="3" fill="#e8834a"/><rect x="72" y="44" width="14" height="8" rx="3" fill="#e8834a"/></g></svg>`,
    deadlift: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.da{animation:da 2s ease-in-out infinite;transform-origin:60px 62px}@keyframes da{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-28deg)}}</style><rect x="5" y="78" width="110" height="6" rx="3" fill="#666"/><rect x="18" y="68" width="84" height="8" rx="4" fill="#bbb"/><circle cx="18" cy="72" r="8" fill="#999"/><circle cx="102" cy="72" r="8" fill="#999"/><g class="da"><ellipse cx="60" cy="22" rx="9" ry="9" fill="#f0a070"/><rect x="51" y="30" width="18" height="34" rx="5" fill="#e8834a"/><rect x="34" y="52" width="14" height="8" rx="3" fill="#e8834a"/><rect x="72" y="52" width="14" height="8" rx="3" fill="#e8834a"/><rect x="42" y="62" width="12" height="20" rx="4" fill="#e8834a"/><rect x="66" y="62" width="12" height="20" rx="4" fill="#e8834a"/></g></svg>`,
    lateral: `<svg viewBox="0 0 120 90" width="100" height="75" xmlns="http://www.w3.org/2000/svg"><style>.ll{animation:ll 1.6s ease-in-out infinite;transform-origin:46px 36px}.lr{animation:ll 1.6s ease-in-out infinite reverse;transform-origin:74px 36px}@keyframes ll{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-38deg)}}</style><ellipse cx="60" cy="16" rx="10" ry="10" fill="#f0a070"/><rect x="50" y="24" width="20" height="28" rx="6" fill="#e8834a"/><g class="ll"><rect x="26" y="36" width="22" height="8" rx="3" fill="#e8834a"/><circle cx="24" cy="40" r="5" fill="#999"/></g><g class="lr"><rect x="72" y="36" width="22" height="8" rx="3" fill="#e8834a"/><circle cx="96" cy="40" r="5" fill="#999"/></g><rect x="42" y="60" width="12" height="24" rx="4" fill="#e8834a"/><rect x="66" y="60" width="12" height="24" rx="4" fill="#e8834a"/></svg>`
  };
  const svg = svgs[type] || svgs['squat'];
  return (
    <div
      style={{display:'inline-block',background:'rgba(0,0,0,0.2)',borderRadius:'12px',padding:'6px',margin:'4px 0'}}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

// ─── Detect animation type from exercise name ─────────────────────────────────
function getAnimType(name: string): string {
  const n = (name || '').toLowerCase();
  if (n.includes('press banca') || n.includes('banco') || n.includes('bench')) return 'bench';
  if (n.includes('flexion') || n.includes('flexión') || n.includes('push')) return 'pushup';
  if (n.includes('dominada') || n.includes('jalón') || n.includes('jalon') || n.includes('pull')) return 'pullup';
  if (n.includes('sentadilla') || n.includes('squat')) return 'squat';
  if (n.includes('curl') || n.includes('bícep') || n.includes('bicep')) return 'curl';
  if (n.includes('press militar') || n.includes('press de hombro') || n.includes('overhead') || n.includes('militar')) return 'ohpress';
  if (n.includes('plancha') || n.includes('plank')) return 'plank';
  if (n.includes('remo') || n.includes('row')) return 'row';
  if (n.includes('tricep') || n.includes('trícep') || n.includes('extensi') || n.includes('fondo')) return 'tricep';
  if (n.includes('zancada') || n.includes('lunge') || n.includes('estocada')) return 'lunge';
  if (n.includes('abdomi') || n.includes('crunch') || n.includes('abdominal')) return 'abs';
  if (n.includes('peso muerto') || n.includes('deadlift') || n.includes('rumano')) return 'deadlift';
  if (n.includes('lateral') || n.includes('elevaci') || n.includes('pájaro') || n.includes('pajaro')) return 'lateral';
  return 'squat';
}

// ─── Parse numbered exercises from bot message ────────────────────────────────
function parseExercises(text: string): Array<{name: string; animType: string; detail: string}> {
  if (!text || typeof text !== 'string') return [];
  const results: Array<{name: string; animType: string; detail: string}> = [];
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i] || '';
    const match = line.match(/^\d+\.\s+(?:\*\*)?([^*\n]{4,50})(?:\*\*)?(?:\s*[—–-].*)?$/);
    if (match && match[1]) {
      const candidate = match[1].replace(/\*\*/g, '').trim();
      const detail = (lines[i + 1] || '').replace(/^\s+/, '').replace(/\*\*/g, '').trim();
      results.push({ name: candidate, animType: getAnimType(candidate), detail });
    }
  }
  return results;
}

// ─── Render chatbot message with optional exercise animations ─────────────────
function BotMessage({ content }: { content: string }) {
  const safeContent = content || '';
  const exercises = parseExercises(safeContent);
  if (exercises.length === 0) {
    return <p className="text-sm whitespace-pre-wrap">{safeContent}</p>;
  }
  return (
    <div className="text-sm">
      <p className="whitespace-pre-wrap mb-3">{safeContent}</p>
      <div className="border-t border-white/10 pt-3 mt-2">
        <p className="text-xs text-orange-300 font-semibold mb-2">🎬 Demostraciones animadas:</p>
        <div className="grid grid-cols-2 gap-2">
          {exercises.slice(0, 6).map((ex, i) => (
            <div key={i} className="bg-black/20 rounded-xl p-2 flex flex-col items-center gap-1">
              <ExerciseAnimSVG type={ex.animType} />
              <span className="text-xs text-orange-200 font-medium text-center leading-tight">{ex.name}</span>
              {ex.detail && <span className="text-xs text-white/50 text-center">{ex.detail.substring(0, 50)}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Interfaces ───────────────────────────────────────────────────────────────
interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const INITIAL_MESSAGE: Message = {
  id: 0,
  role: 'assistant',
  content: `¡Hola! Soy tu entrenador personal virtual 💪 Puedo ayudarte a crear rutinas de entrenamiento personalizadas. Puedes pedirme cosas como:

- "Crea una rutina para ganar masa muscular"
- "Dame un entrenamiento de pecho y tríceps"
- "Quiero adelgazar, que ejercicios hago"
- "Plan de 5 dias para principiantes"
- "Ejercicios para espalda en casa"

¡Escríbeme lo que necesitas!`,
  timestamp: new Date()
}

// ─── Local AI fallback ────────────────────────────────────────────────────────
function generateLocalResponse(userMessage: string): string {
  const msg = (userMessage || '').toLowerCase();
  if (msg.includes('pecho') || msg.includes('chest') || msg.includes('bench')) {
    return `💪 Rutina de Pecho

1. Press Banca con Barra — 4 series x 8-10 reps
Agarre ancho, baja la barra al pecho, empuja explosivo.

2. Press Banca con Mancuernas — 3 series x 10-12 reps
Mayor rango de movimiento, más activación muscular.

3. Flexiones — 3 series x hasta el fallo
Excelente para definición y fuerza funcional.

4. Aperturas con Mancuernas — 3 series x 12 reps
Movimiento de apertura, estira bien el pecho.`;
  }
  if (msg.includes('espalda') || msg.includes('back') || msg.includes('remo') || msg.includes('dominada')) {
    return `💪 Rutina de Espalda

1. Dominadas — 4 series x 6-10 reps
Agarre prono, lleva el pecho a la barra.

2. Remo con Barra — 4 series x 8-10 reps
Tronco a 45°, tira hasta el ombligo.

3. Jalón al Pecho — 3 series x 12 reps
Lleva la barra al pecho, codos hacia atrás.

4. Remo con Mancuerna — 3 series x 10 por lado
Apoya la rodilla, tira del codo hacia arriba.`;
  }
  if (msg.includes('pierna') || msg.includes('leg') || msg.includes('sentadilla') || msg.includes('squat')) {
    return `💪 Rutina de Piernas

1. Sentadilla con Barra — 4 series x 8-10 reps
Baja hasta paralelo, rodillas alineadas con pies.

2. Peso Muerto Rumano — 3 series x 10-12 reps
Mantén espalda recta, siente el estiramiento.

3. Zancadas — 3 series x 12 pasos por pierna
Paso amplio, rodilla trasera casi toca el suelo.

4. Extensiones de Cuádriceps — 3 series x 15 reps
Completa extensión, aprieta el cuádriceps arriba.`;
  }
  if (msg.includes('hombro') || msg.includes('shoulder') || msg.includes('deltoid')) {
    return `💪 Rutina de Hombros

1. Press Militar con Barra — 4 series x 8-10 reps
Empuja la barra sobre la cabeza, core activo.

2. Elevaciones Laterales — 4 series x 12-15 reps
Brazos ligeramente flexionados, sube hasta los hombros.

3. Press de Hombros con Mancuernas — 3 series x 10 reps
Control en la bajada, explota hacia arriba.

4. Pájaros Posteriores — 3 series x 15 reps
Tronco inclinado, lleva los brazos hacia atrás.`;
  }
  if (msg.includes('bícep') || msg.includes('bicep') || msg.includes('curl')) {
    return `💪 Rutina de Bíceps

1. Curl de Bíceps con Barra — 4 series x 10-12 reps
Codos fijos, contrae el bíceps en la cima.

2. Curl Martillo — 3 series x 12 reps
Trabaja el braquial y el braquiorradial.

3. Curl Concentrado — 3 series x 15 reps por brazo
Máxima contracción, ideal para el pico.

4. Curl en Polea — 2 series x 15 reps
Tensión constante durante todo el movimiento.`;
  }
  if (msg.includes('trícep') || msg.includes('tricep') || msg.includes('fondo')) {
    return `💪 Rutina de Tríceps

1. Extensiones de Tríceps (Press Francés) — 4 series x 10-12 reps
Codos apuntando al techo, baja la barra a la frente.

2. Fondos en Paralelas — 3 series x 10 reps
Inclínate ligeramente hacia adelante para aislar tríceps.

3. Jalones en Polea — 3 series x 15 reps
Codos fijos, extiende completamente los brazos.

4. Extensiones sobre Cabeza — 3 series x 12 reps
Baja la mancuerna detrás de la cabeza.`;
  }
  if (msg.includes('abdomi') || msg.includes('abs') || msg.includes('core') || msg.includes('six')) {
    return `💪 Rutina de Abdominales

1. Plancha — 3 series x 45-60 segundos
Core activo, cuerpo recto como una tabla.

2. Crunch Abdominal — 4 series x 20 reps
No jales el cuello, contrae el abdomen.

3. Elevación de Piernas — 3 series x 15 reps
Piernas rectas, baja sin tocar el suelo.

4. Mountain Climbers — 3 series x 30 segundos
Rodillas al pecho alternando, rápido y controlado.`;
  }
  if (msg.includes('masa') || msg.includes('músculo') || msg.includes('musculo') || msg.includes('volumen') || msg.includes('ganar')) {
    return `💪 Plan para Ganar Masa Muscular

Lunes — Pecho y Tríceps:
1. Press Banca con Barra — 4x8
2. Press Banca Inclinado — 3x10
3. Extensiones de Tríceps — 4x10
4. Fondos en Paralelas — 3x12

Miércoles — Espalda y Bíceps:
1. Dominadas — 4x8
2. Remo con Barra — 4x10
3. Jalón al Pecho — 3x12
4. Curl de Bíceps — 4x12

Viernes — Piernas y Hombros:
1. Sentadilla con Barra — 4x8
2. Peso Muerto Rumano — 3x10
3. Press Militar — 3x10
4. Elevaciones Laterales — 3x15

Come con superávit calórico (+300-500 kcal). ¡Consistencia es clave!`;
  }
  if (msg.includes('adelgazar') || msg.includes('perder') || msg.includes('quemar') || msg.includes('cardio')) {
    return `🔥 Plan para Perder Peso

Circuito HIIT (3-4 veces por semana):
1. Sentadillas — 30 seg
2. Flexiones — 30 seg
3. Mountain Climbers — 30 seg
4. Zancadas — 30 seg
5. Plancha — 30 seg

Descansa 15 segundos entre ejercicios, repite 4-5 rondas.
Déficit calórico de 300-500 kcal/día.
Camina 8,000-10,000 pasos diarios.`;
  }
  if (msg.includes('principiante') || msg.includes('comenzar') || msg.includes('empezar') || msg.includes('beginner')) {
    return `🌟 Plan para Principiantes (3 días/semana)

Día A — Cuerpo Completo:
1. Sentadillas — 3x10
2. Flexiones — 3x8
3. Remo con Mancuerna — 3x10

Día B — Cuerpo Completo:
1. Zancadas — 3x8 por pierna
2. Press Militar — 3x10
3. Plancha — 3x30 segundos

Día C — Cuerpo Completo:
1. Peso Muerto con Mancuernas — 3x10
2. Curl de Bíceps — 3x12
3. Extensiones de Tríceps — 3x12

Descansa al menos 1 día entre sesiones. Aprende la técnica antes de añadir peso.`;
  }
  if (msg.includes('casa') || msg.includes('sin máquina') || msg.includes('sin equipo') || msg.includes('home')) {
    return `🏠 Entrena en Casa (Sin Equipamiento)

1. Flexiones — 4 series x max reps
Múltiples variantes: normal, diamante, declive.

2. Sentadillas — 4 series x 15 reps
Peso corporal, profundidad completa.

3. Zancadas — 3 series x 12 por pierna
Alternadas, quema grasa eficazmente.

4. Plancha — 3 series x 45 segundos
Core y estabilidad total.

5. Dominadas en Barra de Puerta — 4 series x max
Si tienes barra, ¡úsala!

6. Mountain Climbers — 3 series x 30 segundos
Cardio y core a la vez.`;
  }
  return `💪 ¡Hola! Puedo diseñarte una rutina personalizada. Dime más sobre tu objetivo:

¿Qué músculo quieres trabajar? (pecho, espalda, piernas, hombros, bíceps, tríceps...)
¿Cuál es tu objetivo? (ganar músculo, perder peso, fuerza, resistencia)
¿Tienes equipamiento? (gimnasio, mancuernas, en casa sin nada)
¿Cuántos días a la semana puedes entrenar?

Con esa información te crearé el plan perfecto para ti. 🎯`;
}

// ─── Main Chatbot Component ───────────────────────────────────────────────────
export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return
    const userMessage: Message = {
      id: messages.length,
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input.trim() })
      })
      if (response.ok) {
        const data = await response.json()
        const assistantMessage: Message = {
          id: messages.length + 1,
          role: 'assistant',
          content: data.response || data.message || '',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, assistantMessage])
      } else {
        throw new Error('API error')
      }
    } catch {
      const localResponse = generateLocalResponse(input.trim())
      const assistantMessage: Message = {
        id: messages.length + 1,
        role: 'assistant',
        content: localResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="flex flex-col h-[650px] bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600/80 to-red-600/80 px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">🤖</div>
        <div>
          <h3 className="font-bold text-white">Entrenador Personal IA</h3>
          <p className="text-white/70 text-xs">Con demostraciones animadas</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/60 text-xs">En línea</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] ${
              message.role === 'user'
                ? 'bg-orange-600/80 text-white rounded-2xl rounded-tr-sm'
                : 'bg-white/10 text-white rounded-2xl rounded-tl-sm'
            } px-4 py-3`}>
              {message.role === 'assistant' ? (
                <BotMessage content={message.content} />
              ) : (
                <p className="text-sm">{message.content}</p>
              )}
              <p className="text-xs text-white/40 mt-2">
                {message.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/10 text-white rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay:'0ms'}}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay:'150ms'}}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay:'300ms'}}></div>
                </div>
                <span className="text-xs text-white/60">Preparando tu rutina...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-white/10 p-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu consulta de entrenamiento..."
            className="flex-1 bg-white/10 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-500/50 border border-white/10"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:opacity-50 text-white rounded-xl px-5 py-3 font-medium transition-all"
          >
            💬
          </button>
        </div>
      </div>
    </div>
  )
}
