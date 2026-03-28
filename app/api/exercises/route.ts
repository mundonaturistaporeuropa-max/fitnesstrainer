/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

// ─── Base de datos completa de ejercicios ─────────────────────────────────────
const EXERCISES_SEED = [
  // ══════════════════════════════════════════════════════
  // PECHO (25 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Press de Banca con Barra', muscle_group: 'Pecho', equipment: 'Barra', difficulty: 'Intermedio', description: 'Ejercicio compuesto fundamental para el desarrollo del pecho. Tumbado en banco, agarre amplio, baja la barra hasta el pecho y empuja explosivamente.' },
  { name: 'Press de Banca Inclinado con Barra', muscle_group: 'Pecho', equipment: 'Barra', difficulty: 'Intermedio', description: 'Banco a 30-45°. Trabaja la porción clavicular del pectoral mayor (pecho superior).' },
  { name: 'Press de Banca Declinado con Barra', muscle_group: 'Pecho', equipment: 'Barra', difficulty: 'Intermedio', description: 'Banco en declinación. Enfatiza el pecho inferior y el esternón.' },
  { name: 'Press de Banca con Mancuernas', muscle_group: 'Pecho', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Mayor rango de movimiento que la barra. Mejora la estabilidad y activa más fibras musculares.' },
  { name: 'Press Inclinado con Mancuernas', muscle_group: 'Pecho', equipment: 'Mancuernas', difficulty: 'Intermedio', description: 'Banco inclinado 30-45°. Excelente para el pecho superior y la línea clavicular.' },
  { name: 'Press Declinado con Mancuernas', muscle_group: 'Pecho', equipment: 'Mancuernas', difficulty: 'Intermedio', description: 'Activa intensamente el pecho inferior. Rango de movimiento amplio.' },
  { name: 'Flexiones (Push-ups)', muscle_group: 'Pecho', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Ejercicio clásico de calistenia. Manos al ancho de hombros, cuerpo recto, baja hasta casi tocar el suelo.' },
  { name: 'Flexiones con Pies Elevados', muscle_group: 'Pecho', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Pies sobre un banco o caja. Trabaja el pecho superior como el press inclinado.' },
  { name: 'Flexiones Diamante', muscle_group: 'Pecho', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Manos juntas formando un triángulo. Enfatiza el pecho interno y el tríceps.' },
  { name: 'Flexiones Arqueras', muscle_group: 'Pecho', equipment: 'Sin equipo', difficulty: 'Avanzado', description: 'Flexión lateral donde un brazo queda extendido. Excelente para la fuerza unilateral.' },
  { name: 'Fondos en Paralelas (Chest Dips)', muscle_group: 'Pecho', equipment: 'Barras paralelas', difficulty: 'Intermedio', description: 'Inclínate hacia adelante para activar más el pecho. Trabaja pecho inferior, deltoides anterior y tríceps.' },
  { name: 'Aperturas con Mancuernas', muscle_group: 'Pecho', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Movimiento de apertura con brazos ligeramente flexionados. Estira y contrae las fibras pectorales.' },
  { name: 'Aperturas Inclinadas con Mancuernas', muscle_group: 'Pecho', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Banco inclinado 30°. Aísla el pecho superior con gran estiramiento.' },
  { name: 'Crossover en Polea Alta', muscle_group: 'Pecho', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Poleas altas, cruza los brazos hacia abajo. Trabaja el pecho inferior y la línea central.' },
  { name: 'Crossover en Polea Baja', muscle_group: 'Pecho', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Poleas bajas, cruza hacia arriba. Trabaja el pecho superior.' },
  { name: 'Crossover en Polea Media', muscle_group: 'Pecho', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Poleas a altura de pecho. Trabaja el pecho medio con tensión constante.' },
  { name: 'Press en Máquina de Pecho', muscle_group: 'Pecho', equipment: 'Máquina', difficulty: 'Principiante', description: 'Press guiado en máquina. Ideal para principiantes y para técnica sin balanceo.' },
  { name: 'Press en Máquina Convergente', muscle_group: 'Pecho', equipment: 'Máquina', difficulty: 'Principiante', description: 'Simula el movimiento natural del pectoral. Los brazos se acercan al final del recorrido.' },
  { name: 'Aperturas en Máquina (Peck Deck)', muscle_group: 'Pecho', equipment: 'Máquina', difficulty: 'Principiante', description: 'Máquina de aperturas con almohadillas. Aislamiento completo del pecho sin estrés en los codos.' },
  { name: 'Pullover con Mancuerna', muscle_group: 'Pecho', equipment: 'Mancuerna', difficulty: 'Intermedio', description: 'Tumbado en banco, mancuerna sobre el pecho, baja detrás de la cabeza. Estira el serrato y el pecho.' },
  { name: 'Pullover con Barra', muscle_group: 'Pecho', equipment: 'Barra', difficulty: 'Intermedio', description: 'Variante del pullover. Mayor activación del dorsal ancho y el pecho a la vez.' },
  { name: 'Press de Pecho en Smith', muscle_group: 'Pecho', equipment: 'Máquina Smith', difficulty: 'Principiante', description: 'Press guiado con barra fija. Permite mayor seguridad y aislamiento del pecho.' },
  { name: 'Flexiones con Lastres', muscle_group: 'Pecho', equipment: 'Lastres / Chaleco', difficulty: 'Avanzado', description: 'Flexiones tradicionales con peso adicional. Aumenta la resistencia para progresar.' },
  { name: 'Push-up con Banda Elástica', muscle_group: 'Pecho', equipment: 'Banda elástica', difficulty: 'Intermedio', description: 'Banda sobre la espalda durante la flexión. Añade resistencia variable.' },
  { name: 'Svend Press', muscle_group: 'Pecho', equipment: 'Disco', difficulty: 'Principiante', description: 'Aprieta un disco con ambas manos y empuja hacia adelante. Máxima contracción del pecho interno.' },

  // ══════════════════════════════════════════════════════
  // ESPALDA (25 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Dominadas Pronadas', muscle_group: 'Espalda', equipment: 'Barra de dominadas', difficulty: 'Avanzado', description: 'Ejercicio rey para la espalda. Agarre prono ancho, lleva el pecho a la barra activando dorsales.' },
  { name: 'Dominadas Supinas (Chin-ups)', muscle_group: 'Espalda', equipment: 'Barra de dominadas', difficulty: 'Intermedio', description: 'Agarre supino estrecho. Mayor activación del bíceps y dorsal inferior.' },
  { name: 'Dominadas Neutras', muscle_group: 'Espalda', equipment: 'Barra de dominadas', difficulty: 'Intermedio', description: 'Agarre neutro (palmas enfrentadas). Menor estrés en las muñecas, gran activación dorsal.' },
  { name: 'Dominadas con Lastre', muscle_group: 'Espalda', equipment: 'Barra + cinturón', difficulty: 'Avanzado', description: 'Dominadas con peso adicional en el cinturón. Para avanzados que ya hacen 15+ reps.' },
  { name: 'Jalón al Pecho en Polea', muscle_group: 'Espalda', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Barra en polea alta, tira hacia el pecho. Ideal para principiantes trabajando la espalda.' },
  { name: 'Jalón tras Nuca', muscle_group: 'Espalda', equipment: 'Máquina de poleas', difficulty: 'Intermedio', description: 'Jalón hacia atrás de la cabeza. Mayor activación del trapecio medio y deltoides posterior.' },
  { name: 'Jalón en Polea con Agarre Neutro', muscle_group: 'Espalda', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Barra neutral en polea alta. Menor tensión articular, gran rango de movimiento.' },
  { name: 'Remo con Barra Pronado', muscle_group: 'Espalda', equipment: 'Barra', difficulty: 'Intermedio', description: 'Agarre prono ancho a 45°. Activa trapecio medio y dorsales.' },
  { name: 'Remo con Barra Supino (Yates Row)', muscle_group: 'Espalda', equipment: 'Barra', difficulty: 'Intermedio', description: 'Agarre supino, más vertical. Desarrollado por Dorian Yates. Enfatiza el dorsal inferior.' },
  { name: 'Remo con Mancuerna Unilateral', muscle_group: 'Espalda', equipment: 'Mancuerna', difficulty: 'Principiante', description: 'Apoyo en banco, tira la mancuerna al costado. Excelente para el dorsal y el romboides.' },
  { name: 'Remo en Máquina', muscle_group: 'Espalda', equipment: 'Máquina', difficulty: 'Principiante', description: 'Remo guiado en máquina con pecho apoyado. Aislamiento del dorsal sin fatiga lumbar.' },
  { name: 'Remo en Polea Baja (Sentado)', muscle_group: 'Espalda', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Polea baja, sentado con los pies apoyados. Trabaja el grosor de la espalda.' },
  { name: 'Remo en Polea con Agarre Ancho', muscle_group: 'Espalda', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Remo sentado con barra ancha. Mayor activación del trapecio y romboides.' },
  { name: 'Peso Muerto Convencional', muscle_group: 'Espalda', equipment: 'Barra', difficulty: 'Avanzado', description: 'El ejercicio más completo del gimnasio. Activa espalda baja, glúteos, isquiotibiales y trapecios.' },
  { name: 'Peso Muerto Rumano', muscle_group: 'Espalda', equipment: 'Barra', difficulty: 'Intermedio', description: 'Énfasis en la espalda baja e isquiotibiales. Mantén la espalda recta en todo momento.' },
  { name: 'Peso Muerto Sumo', muscle_group: 'Espalda', equipment: 'Barra', difficulty: 'Avanzado', description: 'Pies muy separados y puntas hacia afuera. Mayor activación de glúteos y aductores.' },
  { name: 'Buenos Días (Good Mornings)', muscle_group: 'Espalda', equipment: 'Barra', difficulty: 'Intermedio', description: 'Barra en trapecios, inclínate hacia adelante. Excelente para la cadena posterior.' },
  { name: 'Hiperextensiones en Banco Romano', muscle_group: 'Espalda', equipment: 'Banco romano', difficulty: 'Principiante', description: 'Extensiones de cadera boca abajo. Trabaja espalda baja, glúteos e isquiotibiales.' },
  { name: 'Superman (en el suelo)', muscle_group: 'Espalda', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Tumbado boca abajo, levanta brazos y piernas a la vez. Activa toda la cadena posterior.' },
  { name: 'Remo Invertido (Australian Pull-up)', muscle_group: 'Espalda', equipment: 'Barra baja', difficulty: 'Principiante', description: 'Cuerpo inclinado bajo la barra, tira del pecho hacia ella. Progresión a las dominadas.' },
  { name: 'Pullover en Polea', muscle_group: 'Espalda', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'De pie, tira la polea alta hacia abajo con los brazos extendidos. Aísla el dorsal ancho.' },
  { name: 'Remo en TRX / Anillas', muscle_group: 'Espalda', equipment: 'TRX / Anillas', difficulty: 'Intermedio', description: 'Remo suspendido en correas. Involucra el core y la estabilidad.' },
  { name: 'Remo con Mancuernas en Banco', muscle_group: 'Espalda', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Ambas mancuernas a la vez apoyado en banco inclinado. Gran rango y aislamiento.' },
  { name: 'Jalón al Pecho con Banda Elástica', muscle_group: 'Espalda', equipment: 'Banda elástica', difficulty: 'Principiante', description: 'Jalón hacia el pecho con banda. Ideal para casa o calentamiento.' },
  { name: 'Remo en Smith', muscle_group: 'Espalda', equipment: 'Máquina Smith', difficulty: 'Principiante', description: 'Remo inclinado en Smith. Movimiento controlado y guiado.' },

  // ══════════════════════════════════════════════════════
  // PIERNAS (28 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Sentadilla con Barra (Back Squat)', muscle_group: 'Piernas', equipment: 'Barra', difficulty: 'Avanzado', description: 'Reina de los ejercicios. Trabaja cuádriceps, glúteos, isquiotibiales y core.' },
  { name: 'Sentadilla Frontal (Front Squat)', muscle_group: 'Piernas', equipment: 'Barra', difficulty: 'Avanzado', description: 'Barra en la parte delantera de los hombros. Mayor activación del cuádriceps.' },
  { name: 'Sentadilla Goblet', muscle_group: 'Piernas', equipment: 'Mancuerna / Kettlebell', difficulty: 'Principiante', description: 'Mancuerna sostenida en el pecho, postura vertical. Ideal para aprender la técnica.' },
  { name: 'Sentadilla Sumo', muscle_group: 'Piernas', equipment: 'Barra / Mancuerna', difficulty: 'Intermedio', description: 'Pies muy separados. Activa más los aductores y el glúteo.' },
  { name: 'Sentadilla Búlgara (Split Squat)', muscle_group: 'Piernas', equipment: 'Mancuernas / Barra', difficulty: 'Intermedio', description: 'Pie trasero elevado en banco. Excelente para el equilibrio y la fuerza unilateral.' },
  { name: 'Sentadilla Hack (Hack Squat)', muscle_group: 'Piernas', equipment: 'Máquina', difficulty: 'Intermedio', description: 'Máquina de hack squat. Enfatiza el cuádriceps con menor estrés lumbar.' },
  { name: 'Sentadilla en Smith', muscle_group: 'Piernas', equipment: 'Máquina Smith', difficulty: 'Principiante', description: 'Sentadilla guiada. Útil para principiantes y para aislar el cuádriceps.' },
  { name: 'Sentadilla con Salto (Jump Squat)', muscle_group: 'Piernas', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Sentadilla explosiva con salto. Entrena la potencia y quema grasa.' },
  { name: 'Sentadilla Pistol (Unilateral)', muscle_group: 'Piernas', equipment: 'Sin equipo', difficulty: 'Avanzado', description: 'Sentadilla a una pierna. Requiere gran fuerza, flexibilidad y equilibrio.' },
  { name: 'Prensa de Piernas 45°', muscle_group: 'Piernas', equipment: 'Máquina', difficulty: 'Principiante', description: 'Alternativa a la sentadilla. Trabaja cuádriceps, glúteos e isquiotibiales.' },
  { name: 'Prensa de Piernas Horizontal', muscle_group: 'Piernas', equipment: 'Máquina', difficulty: 'Principiante', description: 'Versión horizontal de la prensa. Menos estrés en la espalda baja.' },
  { name: 'Extensión de Cuádriceps', muscle_group: 'Piernas', equipment: 'Máquina', difficulty: 'Principiante', description: 'Aislamiento completo del cuádriceps. Extiende la rodilla contra resistencia.' },
  { name: 'Curl de Femorales Tumbado', muscle_group: 'Piernas', equipment: 'Máquina', difficulty: 'Principiante', description: 'Aislamiento del bíceps femoral. Tumbado boca abajo, flexiona la rodilla.' },
  { name: 'Curl de Femorales Sentado', muscle_group: 'Piernas', equipment: 'Máquina', difficulty: 'Principiante', description: 'Variante sentada. Diferente ángulo de activación del femoral.' },
  { name: 'Curl de Femorales de Pie (Unilateral)', muscle_group: 'Piernas', equipment: 'Máquina', difficulty: 'Principiante', description: 'Curl femoral unilateral de pie. Mejora la simetría entre ambas piernas.' },
  { name: 'Zancadas (Lunges)', muscle_group: 'Piernas', equipment: 'Sin equipo / Mancuernas', difficulty: 'Principiante', description: 'Paso amplio hacia adelante, rodilla trasera al suelo. Excelente para cuádriceps y glúteos.' },
  { name: 'Zancadas Inversas', muscle_group: 'Piernas', equipment: 'Sin equipo / Mancuernas', difficulty: 'Principiante', description: 'Paso hacia atrás. Menor estrés en la rodilla que las zancadas tradicionales.' },
  { name: 'Zancadas Laterales', muscle_group: 'Piernas', equipment: 'Sin equipo / Mancuernas', difficulty: 'Intermedio', description: 'Paso lateral amplio. Trabaja aductores e isquiotibiales en un eje diferente.' },
  { name: 'Zancadas con Barra', muscle_group: 'Piernas', equipment: 'Barra', difficulty: 'Avanzado', description: 'Zancadas con barra en los hombros. Mayor carga para la progresión.' },
  { name: 'Step-Up en Caja', muscle_group: 'Piernas', equipment: 'Caja / Banco', difficulty: 'Principiante', description: 'Sube a una caja alternando piernas. Trabaja cuádriceps y glúteos unilateralmente.' },
  { name: 'Hip Thrust con Barra', muscle_group: 'Piernas', equipment: 'Barra + banco', difficulty: 'Intermedio', description: 'Empuje de cadera con barra. Ejercicio principal para glúteos.' },
  { name: 'Elevación de Talones de Pie (Calf Raise)', muscle_group: 'Piernas', equipment: 'Máquina / Escalón', difficulty: 'Principiante', description: 'Eleva los talones sobre la punta de los pies. Trabaja gemelos y sóleo.' },
  { name: 'Elevación de Talones Sentado', muscle_group: 'Piernas', equipment: 'Máquina', difficulty: 'Principiante', description: 'Trabaja el sóleo preferentemente. Rodillas a 90° durante el movimiento.' },
  { name: 'Elevación de Talones Unilateral', muscle_group: 'Piernas', equipment: 'Escalón', difficulty: 'Intermedio', description: 'Calf raise a una pierna. Mayor rango de movimiento y mayor activación.' },
  { name: 'Good Morning (con barra)', muscle_group: 'Piernas', equipment: 'Barra', difficulty: 'Intermedio', description: 'Trabaja isquiotibiales y espalda baja. Inclínate hacia adelante con la barra en trapecios.' },
  { name: 'Peso Muerto con Piernas Rígidas', muscle_group: 'Piernas', equipment: 'Barra', difficulty: 'Intermedio', description: 'Piernas casi extendidas. Máximo estiramiento en los isquiotibiales.' },
  { name: 'Nordic Curl (Curl Nórdico)', muscle_group: 'Piernas', equipment: 'Sin equipo / Banco', difficulty: 'Avanzado', description: 'Sujeta los pies, desciende lentamente con el torso. Excelente para prevenir lesiones isquiotibiales.' },
  { name: 'Glute Bridge', muscle_group: 'Piernas', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Tumbado, eleva la cadera con los pies apoyados. Activa glúteos y la cadena posterior.' },

  // ══════════════════════════════════════════════════════
  // HOMBROS (20 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Press Militar con Barra', muscle_group: 'Hombros', equipment: 'Barra', difficulty: 'Intermedio', description: 'Press de pie con barra sobre la cabeza. El principal compuesto para el deltoides.' },
  { name: 'Press de Hombros con Mancuernas', muscle_group: 'Hombros', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Press sentado con mancuernas. Mayor rango de movimiento y activación estabilizadora.' },
  { name: 'Press Arnold', muscle_group: 'Hombros', equipment: 'Mancuernas', difficulty: 'Intermedio', description: 'Rotación de muñecas durante el press. Creado por Arnold Schwarzenegger. Activa los 3 fascículos del deltoides.' },
  { name: 'Press de Hombros en Máquina', muscle_group: 'Hombros', equipment: 'Máquina', difficulty: 'Principiante', description: 'Press guiado. Ideal para principiantes y para alto volumen sin fatiga estabilizadora.' },
  { name: 'Press de Hombros en Smith', muscle_group: 'Hombros', equipment: 'Máquina Smith', difficulty: 'Principiante', description: 'Press vertical guiado en máquina Smith. Permite mayor carga con seguridad.' },
  { name: 'Elevaciones Laterales con Mancuernas', muscle_group: 'Hombros', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Aísla el deltoides lateral. Sube los brazos hasta la altura de los hombros.' },
  { name: 'Elevaciones Laterales en Polea', muscle_group: 'Hombros', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Tensión constante en el deltoides lateral durante todo el recorrido.' },
  { name: 'Elevaciones Laterales Unilaterales', muscle_group: 'Hombros', equipment: 'Mancuerna', difficulty: 'Principiante', description: 'Una mancuerna a la vez. Mejor control del movimiento y corrección de asimetrías.' },
  { name: 'Elevaciones Frontales con Barra', muscle_group: 'Hombros', equipment: 'Barra', difficulty: 'Principiante', description: 'Levanta la barra al frente hasta la altura de los hombros. Trabaja el deltoides anterior.' },
  { name: 'Elevaciones Frontales con Mancuernas', muscle_group: 'Hombros', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Alternando o simultáneo. Trabaja el deltoides anterior.' },
  { name: 'Elevaciones Frontales con Disco', muscle_group: 'Hombros', equipment: 'Disco', difficulty: 'Principiante', description: 'Con un disco delante. Activación del deltoides anterior y serratos.' },
  { name: 'Pájaros (Rear Delt Fly)', muscle_group: 'Hombros', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Tronco inclinado, abre los brazos hacia atrás. Trabaja el deltoides posterior.' },
  { name: 'Pájaros en Máquina (Peck Deck Reverso)', muscle_group: 'Hombros', equipment: 'Máquina', difficulty: 'Principiante', description: 'Máquina de aperturas invertida. Aislamiento total del deltoides posterior.' },
  { name: 'Pájaros en Polea', muscle_group: 'Hombros', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Poleas cruzadas a altura media o alta. Trabaja el deltoides posterior con tensión constante.' },
  { name: 'Face Pull en Polea', muscle_group: 'Hombros', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Polea alta con cuerda, tira hacia la cara. Trabaja deltoides posterior y manguito rotador.' },
  { name: 'Encogimientos de Hombros (Shrugs) con Barra', muscle_group: 'Hombros', equipment: 'Barra', difficulty: 'Principiante', description: 'Eleva los hombros hacia las orejas. Trabaja el trapecio superior.' },
  { name: 'Encogimientos con Mancuernas', muscle_group: 'Hombros', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Variante con mancuernas. Mayor rango de movimiento que con barra.' },
  { name: 'Encogimientos en Máquina', muscle_group: 'Hombros', equipment: 'Máquina', difficulty: 'Principiante', description: 'Shrugs guiados. Control preciso del peso y del recorrido.' },
  { name: 'Press Handstand (Contra la Pared)', muscle_group: 'Hombros', equipment: 'Sin equipo', difficulty: 'Avanzado', description: 'Press con el cuerpo invertido. Nivel de calistenia avanzado para deltoides.' },
  { name: 'Rotación Externa con Banda', muscle_group: 'Hombros', equipment: 'Banda elástica', difficulty: 'Principiante', description: 'Rotación externa del hombro. Fortalece el manguito rotador y previene lesiones.' },

  // ══════════════════════════════════════════════════════
  // BÍCEPS (18 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Curl con Barra Recta', muscle_group: 'Biceps', equipment: 'Barra', difficulty: 'Principiante', description: 'Ejercicio clásico para el bíceps. Codos fijos a los costados, sube la barra hasta el pecho.' },
  { name: 'Curl con Barra EZ', muscle_group: 'Biceps', equipment: 'Barra EZ', difficulty: 'Principiante', description: 'Barra curvada que reduce el estrés en las muñecas. Gran activación del bíceps.' },
  { name: 'Curl con Mancuernas Alterno', muscle_group: 'Biceps', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Curl alternando un brazo y el otro. Permite mayor concentración en cada contracción.' },
  { name: 'Curl con Mancuernas Simultáneo', muscle_group: 'Biceps', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Ambas mancuernas a la vez. Mayor fatiga muscular en menos tiempo.' },
  { name: 'Curl Martillo', muscle_group: 'Biceps', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Agarre neutro (pulgar arriba). Trabaja el braquiorradial y el bíceps braquial.' },
  { name: 'Curl Martillo en Cuerda (Polea)', muscle_group: 'Biceps', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Curl martillo con cuerda en polea baja. Tensión constante en el braquiorradial.' },
  { name: 'Curl en Predicador con Barra EZ', muscle_group: 'Biceps', equipment: 'Banco predicador + Barra EZ', difficulty: 'Intermedio', description: 'Banco inclinado que fija el codo. Trabaja el pico del bíceps.' },
  { name: 'Curl en Predicador con Mancuerna', muscle_group: 'Biceps', equipment: 'Banco predicador + Mancuerna', difficulty: 'Intermedio', description: 'Versión unilateral del curl en predicador. Mayor concentración en cada brazo.' },
  { name: 'Curl Concentrado', muscle_group: 'Biceps', equipment: 'Mancuerna', difficulty: 'Principiante', description: 'Codo apoyado en el muslo. Máximo aislamiento del bíceps.' },
  { name: 'Curl en Polea Baja', muscle_group: 'Biceps', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Tensión constante en todo el rango. Polea baja con barra recta o EZ.' },
  { name: 'Curl en Máquina de Bíceps', muscle_group: 'Biceps', equipment: 'Máquina', difficulty: 'Principiante', description: 'Curl guiado en máquina. Ideal para aislar el bíceps sin compensaciones.' },
  { name: 'Curl Inclinado con Mancuernas', muscle_group: 'Biceps', equipment: 'Mancuernas + banco inclinado', difficulty: 'Intermedio', description: 'Tumbado en banco inclinado 45°. Máximo estiramiento del bíceps en la posición inicial.' },
  { name: 'Curl de Zottman', muscle_group: 'Biceps', equipment: 'Mancuernas', difficulty: 'Intermedio', description: 'Sube con supinación y baja con pronación. Trabaja bíceps y braquiorradial en un solo movimiento.' },
  { name: 'Curl con Banda Elástica', muscle_group: 'Biceps', equipment: 'Banda elástica', difficulty: 'Principiante', description: 'Curl de bíceps con banda. Ideal para casa, calentamiento o recuperación.' },
  { name: 'Curl en TRX', muscle_group: 'Biceps', equipment: 'TRX / Anillas', difficulty: 'Intermedio', description: 'Suspendido en TRX, tira hacia la frente. Involucra el core y el bíceps intensamente.' },
  { name: 'Chin-up (Dominada Supina)', muscle_group: 'Biceps', equipment: 'Barra de dominadas', difficulty: 'Intermedio', description: 'Agarre supino estrecho. Trabaja el bíceps como músculo primario junto al dorsal.' },
  { name: 'Curl en Banco Scott con Polea', muscle_group: 'Biceps', equipment: 'Banco predicador + Polea', difficulty: 'Intermedio', description: 'Banco predicador con polea baja. Tensión constante en el bíceps.' },
  { name: 'Curl 21s', muscle_group: 'Biceps', equipment: 'Barra', difficulty: 'Intermedio', description: '7 reps en rango bajo, 7 en rango alto, 7 completas. Técnica de alta intensidad para el bíceps.' },

  // ══════════════════════════════════════════════════════
  // TRÍCEPS (18 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Press Francés con Barra EZ', muscle_group: 'Triceps', equipment: 'Barra EZ + banco', difficulty: 'Intermedio', description: 'Tumbado, baja la barra hacia la frente. Trabaja la cabeza larga del tríceps.' },
  { name: 'Press Francés con Mancuernas', muscle_group: 'Triceps', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Versión con mancuernas del press francés. Menor estrés en las muñecas.' },
  { name: 'Jalones en Polea con Barra', muscle_group: 'Triceps', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Extensión de codo en polea alta con barra recta. Aislamiento del tríceps.' },
  { name: 'Jalones en Polea con Cuerda', muscle_group: 'Triceps', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Cuerda permite separar las manos al final para mayor contracción del tríceps.' },
  { name: 'Jalones en Polea con Barra V', muscle_group: 'Triceps', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Barra en V reduce el estrés en las muñecas. Excelente para el tríceps.' },
  { name: 'Extensión de Tríceps sobre Cabeza', muscle_group: 'Triceps', equipment: 'Mancuerna', difficulty: 'Principiante', description: 'Mancuerna detrás de la cabeza con ambas manos. Máximo estiramiento de la cabeza larga.' },
  { name: 'Extensión de Tríceps sobre Cabeza con Barra EZ', muscle_group: 'Triceps', equipment: 'Barra EZ', difficulty: 'Intermedio', description: 'Versión con barra EZ. Permite más carga que con mancuerna.' },
  { name: 'Extensión de Tríceps en Polea Alta sobre Cabeza', muscle_group: 'Triceps', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'De pie de espaldas a la polea. Extensión sobre la cabeza. Activa la cabeza larga.' },
  { name: 'Fondos en Banco (Triceps Dips)', muscle_group: 'Triceps', equipment: 'Banco', difficulty: 'Principiante', description: 'Manos en el borde del banco, cuerpo en el aire. Trabaja el tríceps con el peso corporal.' },
  { name: 'Fondos en Paralelas para Tríceps', muscle_group: 'Triceps', equipment: 'Barras paralelas', difficulty: 'Intermedio', description: 'Cuerpo vertical en las paralelas. Máxima carga en los tríceps.' },
  { name: 'Diamond Push-ups (Flexiones Diamante)', muscle_group: 'Triceps', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Manos formando triángulo. Aísla el tríceps en las flexiones.' },
  { name: 'Kickback de Tríceps con Mancuerna', muscle_group: 'Triceps', equipment: 'Mancuerna', difficulty: 'Principiante', description: 'Inclinado hacia adelante, extiende el codo hacia atrás. Gran contracción del tríceps.' },
  { name: 'Kickback en Polea', muscle_group: 'Triceps', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Kickback con polea baja. Tensión constante durante todo el movimiento.' },
  { name: 'Skull Crushers con Mancuernas', muscle_group: 'Triceps', equipment: 'Mancuernas', difficulty: 'Intermedio', description: 'Tumbado, baja las mancuernas hacia la sien. Trabaja las tres cabezas del tríceps.' },
  { name: 'Close Grip Bench Press', muscle_group: 'Triceps', equipment: 'Barra', difficulty: 'Intermedio', description: 'Press de banca con agarre estrecho. Excelente para el tríceps y pecho interno.' },
  { name: 'Extensión de Tríceps en Máquina', muscle_group: 'Triceps', equipment: 'Máquina', difficulty: 'Principiante', description: 'Extensión guiada en máquina. Ideal para principiantes y para alto volumen.' },
  { name: 'JM Press', muscle_group: 'Triceps', equipment: 'Barra', difficulty: 'Avanzado', description: 'Híbrido entre skull crusher y press de agarre estrecho. Desarrollado por JM Blakley.' },
  { name: 'Extensión de Tríceps con Banda', muscle_group: 'Triceps', equipment: 'Banda elástica', difficulty: 'Principiante', description: 'Extensión de tríceps con banda elástica. Ideal para casa o calentamiento.' },

  // ══════════════════════════════════════════════════════
  // ABDOMEN / CORE (20 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Plancha Abdominal', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Posición isométrica sobre codos y puntas de los pies. Activa todo el core.' },
  { name: 'Plancha Lateral', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Apoyo lateral sobre el codo. Trabaja los oblicuos y el cuadrado lumbar.' },
  { name: 'Plancha con Toque de Hombro', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Plancha alta, toca el hombro contrario con cada mano. Activa el core anti-rotacional.' },
  { name: 'Crunch Abdominal', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Contracción del recto abdominal. No levantes la zona lumbar del suelo.' },
  { name: 'Crunch con Cable', muscle_group: 'Abdomen', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Arrodillado frente a la polea, flexiona el torso. Permite añadir carga progresiva.' },
  { name: 'Crunch en Máquina', muscle_group: 'Abdomen', equipment: 'Máquina', difficulty: 'Principiante', description: 'Crunch guiado en máquina. Fácil de añadir carga para la sobrecarga progresiva.' },
  { name: 'Sit-ups Completos', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Inclinación completa del tronco. Trabaja el recto abdominal y los flexores de cadera.' },
  { name: 'Elevación de Piernas Tumbado', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Piernas rectas, súbelas desde el suelo hasta 90°. Trabaja el abdomen inferior.' },
  { name: 'Elevación de Piernas en Barra', muscle_group: 'Abdomen', equipment: 'Barra de dominadas', difficulty: 'Avanzado', description: 'Colgado, sube las piernas hasta 90° o más. Activa intensamente el recto abdominal inferior.' },
  { name: 'Elevación de Rodillas en Barra', muscle_group: 'Abdomen', equipment: 'Barra de dominadas', difficulty: 'Intermedio', description: 'Colgado, lleva las rodillas al pecho. Progresión antes de la elevación de piernas.' },
  { name: 'Elevación de Piernas en Paralelas', muscle_group: 'Abdomen', equipment: 'Barras paralelas', difficulty: 'Avanzado', description: 'Apoyo en paralelas, sube las piernas. Gran activación del recto inferior.' },
  { name: 'Giro Ruso (Russian Twist)', muscle_group: 'Abdomen', equipment: 'Sin equipo / Disco', difficulty: 'Intermedio', description: 'Sentado, gira el torso de lado a lado. Trabaja los oblicuos intensamente.' },
  { name: 'Mountain Climbers', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Plancha alta, lleva las rodillas al pecho alternando. Cardio + core a la vez.' },
  { name: 'Rueda Abdominal (Ab Wheel)', muscle_group: 'Abdomen', equipment: 'Rueda abdominal', difficulty: 'Avanzado', description: 'La rueda sobre el suelo, extiende el cuerpo hacia adelante. Muy intenso para el core.' },
  { name: 'Dead Bug', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Tumbado boca arriba, extiende brazo y pierna opuestos. Activa el core estabilizador.' },
  { name: 'Bird Dog', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'A cuatro patas, extiende brazo y pierna opuestos. Estabilidad lumbar y coordinación.' },
  { name: 'Hollow Body Hold', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Tumbado, levanta piernas y hombros formando una curva. Base de la calistenia.' },
  { name: 'V-Ups', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Levanta simultáneamente piernas y torso formando una V. Trabaja todo el recto abdominal.' },
  { name: 'Toe Touches', muscle_group: 'Abdomen', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Piernas arriba a 90°, toca los pies con las manos. Activación del abdomen superior.' },
  { name: 'Pallof Press', muscle_group: 'Abdomen', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'De pie lateral a la polea, empuja hacia adelante. Trabaja el core anti-rotacional.' },

  // ══════════════════════════════════════════════════════
  // GLÚTEOS (15 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Hip Thrust con Barra', muscle_group: 'Gluteos', equipment: 'Barra + banco', difficulty: 'Intermedio', description: 'Empuje de cadera con barra sobre las caderas. El mejor ejercicio para el glúteo mayor.' },
  { name: 'Hip Thrust con Mancuerna', muscle_group: 'Gluteos', equipment: 'Mancuerna', difficulty: 'Principiante', description: 'Versión con mancuerna. Ideal para comenzar el hip thrust antes de la barra.' },
  { name: 'Hip Thrust en Máquina', muscle_group: 'Gluteos', equipment: 'Máquina', difficulty: 'Principiante', description: 'Empuje de cadera guiado en máquina. Ideal para principiantes.' },
  { name: 'Glute Bridge', muscle_group: 'Gluteos', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Tumbado boca arriba, eleva las caderas. Activación básica del glúteo.' },
  { name: 'Glute Bridge Unilateral', muscle_group: 'Gluteos', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Puente de glúteos a una pierna. Corrige asimetrías y aumenta la intensidad.' },
  { name: 'Kickback de Glúteos en Polea', muscle_group: 'Gluteos', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'A cuatro patas, lleva la pierna hacia atrás contra la polea. Aislamiento del glúteo.' },
  { name: 'Kickback en Máquina', muscle_group: 'Gluteos', equipment: 'Máquina', difficulty: 'Principiante', description: 'Kickback guiado en máquina específica de glúteos.' },
  { name: 'Sentadilla con Banda Elástica', muscle_group: 'Gluteos', equipment: 'Banda elástica', difficulty: 'Principiante', description: 'Sentadilla con banda en las rodillas. Activa el glúteo medio y mayor.' },
  { name: 'Cable Pull Through', muscle_group: 'Gluteos', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Polea baja entre las piernas, extensión de cadera hacia adelante. Trabaja glúteos y femorales.' },
  { name: 'Abducción de Cadera en Máquina', muscle_group: 'Gluteos', equipment: 'Máquina', difficulty: 'Principiante', description: 'Separa las piernas contra resistencia. Trabaja el glúteo medio e interno.' },
  { name: 'Aducción de Cadera en Máquina', muscle_group: 'Gluteos', equipment: 'Máquina', difficulty: 'Principiante', description: 'Junta las piernas contra resistencia. Trabaja los aductores y el glúteo menor.' },
  { name: 'Patada de Burro (Donkey Kicks)', muscle_group: 'Gluteos', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'A cuatro patas, lleva el talón hacia el techo. Aislamiento del glúteo mayor.' },
  { name: 'Fire Hydrant', muscle_group: 'Gluteos', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'A cuatro patas, eleva la rodilla hacia el lado. Trabaja el glúteo medio.' },
  { name: 'Clamshell', muscle_group: 'Gluteos', equipment: 'Banda elástica', difficulty: 'Principiante', description: 'Tumbado de lado, abre la rodilla como una almeja. Trabaja el glúteo medio.' },
  { name: 'Sentadilla Sumo con Kettlebell', muscle_group: 'Gluteos', equipment: 'Kettlebell', difficulty: 'Principiante', description: 'Pies muy separados, punta hacia afuera, kettlebell al centro. Activa glúteos y aductores.' },

  // ══════════════════════════════════════════════════════
  // TRAPECIO (10 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Encogimientos con Barra', muscle_group: 'Trapecio', equipment: 'Barra', difficulty: 'Principiante', description: 'Eleva los hombros verticalmente con barra. Ejercicio principal para el trapecio superior.' },
  { name: 'Encogimientos con Mancuernas', muscle_group: 'Trapecio', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Mayor rango de movimiento que con barra. Permite la rotación natural del hombro.' },
  { name: 'Encogimientos en Máquina Smith', muscle_group: 'Trapecio', equipment: 'Máquina Smith', difficulty: 'Principiante', description: 'Encogimientos guiados con barra en Smith. Control preciso del movimiento.' },
  { name: 'Remo al Mentón con Barra', muscle_group: 'Trapecio', equipment: 'Barra', difficulty: 'Intermedio', description: 'Sube la barra hasta el mentón. Trabaja trapecios, deltoides y bíceps a la vez.' },
  { name: 'Remo al Mentón con Mancuernas', muscle_group: 'Trapecio', equipment: 'Mancuernas', difficulty: 'Intermedio', description: 'Variante con mancuernas. Menor estrés en las muñecas.' },
  { name: 'Remo al Mentón en Polea', muscle_group: 'Trapecio', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Polea baja con agarre estrecho. Tensión constante en el trapecio.' },
  { name: 'Face Pull con Cuerda', muscle_group: 'Trapecio', equipment: 'Máquina de poleas', difficulty: 'Principiante', description: 'Polea alta con cuerda, tira hacia la cara. Trabaja el trapecio medio y el deltoides posterior.' },
  { name: 'Peso Muerto con Agarre Erguido', muscle_group: 'Trapecio', equipment: 'Barra', difficulty: 'Avanzado', description: 'Peso muerto enfocado en la postura erguida. Involucra fuertemente el trapecio.' },
  { name: 'Power Shrug', muscle_group: 'Trapecio', equipment: 'Barra', difficulty: 'Avanzado', description: 'Encogimiento explosivo con empuje de piernas. Movimiento olímpico adaptado para el trapecio.' },
  { name: 'Granja (Farmer Walk)', muscle_group: 'Trapecio', equipment: 'Mancuernas / Kettlebells', difficulty: 'Intermedio', description: 'Camina cargando pesos pesados. Trabaja el trapecio, el agarre y el core.' },

  // ══════════════════════════════════════════════════════
  // ANTEBRAZOS (12 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Curl de Muñeca con Barra', muscle_group: 'Antebrazos', equipment: 'Barra', difficulty: 'Principiante', description: 'Apoya los antebrazos, flexiona las muñecas. Trabaja los flexores del antebrazo.' },
  { name: 'Extensión de Muñeca con Barra', muscle_group: 'Antebrazos', equipment: 'Barra', difficulty: 'Principiante', description: 'Extensión de muñecas. Trabaja los extensores del antebrazo.' },
  { name: 'Curl de Muñeca con Mancuernas', muscle_group: 'Antebrazos', equipment: 'Mancuernas', difficulty: 'Principiante', description: 'Versión con mancuernas. Trabaja los flexores del antebrazo.' },
  { name: 'Curl Inverso con Barra', muscle_group: 'Antebrazos', equipment: 'Barra', difficulty: 'Principiante', description: 'Curl de bíceps con agarre prono. Activa el braquiorradial y extensores del antebrazo.' },
  { name: 'Pronación y Supinación con Mancuerna', muscle_group: 'Antebrazos', equipment: 'Mancuerna', difficulty: 'Principiante', description: 'Gira la mancuerna pronando y supinando. Activa los rotadores del antebrazo.' },
  { name: 'Agarre en Barra (Dead Hang)', muscle_group: 'Antebrazos', equipment: 'Barra de dominadas', difficulty: 'Principiante', description: 'Colgado de la barra el máximo tiempo posible. Desarrolla la fuerza de agarre.' },
  { name: 'Farmer Walk', muscle_group: 'Antebrazos', equipment: 'Mancuernas / Kettlebells', difficulty: 'Principiante', description: 'Camina con pesos pesados. Entrena el agarre y los antebrazos funcionales.' },
  { name: 'Plate Pinch', muscle_group: 'Antebrazos', equipment: 'Discos', difficulty: 'Intermedio', description: 'Pellizca un disco con los dedos y mantenlo. Fuerza de los dedos y del agarre.' },
  { name: 'Rope Climb (Escalada de Cuerda)', muscle_group: 'Antebrazos', equipment: 'Cuerda', difficulty: 'Avanzado', description: 'Escala una cuerda vertical. Máximo esfuerzo de agarre y antebrazos.' },
  { name: 'Crush Grip con Expansor', muscle_group: 'Antebrazos', equipment: 'Expansor de mano', difficulty: 'Principiante', description: 'Aprieta el expansor repetidamente. Desarrolla la fuerza de los dedos y el agarre.' },
  { name: 'Rodillo de Muñecas (Wrist Roller)', muscle_group: 'Antebrazos', equipment: 'Rodillo de muñecas', difficulty: 'Intermedio', description: 'Enrolla y desenrolla el peso girando las muñecas. Trabaja toda la musculatura del antebrazo.' },
  { name: 'Curl Zottman', muscle_group: 'Antebrazos', equipment: 'Mancuernas', difficulty: 'Intermedio', description: 'Sube supinando y baja pronando. Trabaja bíceps y antebrazos en un solo movimiento.' },

  // ══════════════════════════════════════════════════════
  // GEMELOS / PANTORRILLAS (10 ejercicios)
  // ══════════════════════════════════════════════════════
  { name: 'Elevación de Talones de Pie', muscle_group: 'Gemelos', equipment: 'Escalón / Máquina', difficulty: 'Principiante', description: 'Sube sobre la punta de los pies. Trabaja el gemelo (gastrocnemio).' },
  { name: 'Elevación de Talones Sentado', muscle_group: 'Gemelos', equipment: 'Máquina', difficulty: 'Principiante', description: 'Trabaja el sóleo. Las rodillas a 90° cambian el músculo principal activado.' },
  { name: 'Elevación de Talones Unilateral', muscle_group: 'Gemelos', equipment: 'Escalón', difficulty: 'Intermedio', description: 'A una pierna en escalón. Mayor rango y más intensidad que la versión bilateral.' },
  { name: 'Elevación de Talones con Barra', muscle_group: 'Gemelos', equipment: 'Barra', difficulty: 'Intermedio', description: 'Barra en los hombros, sube sobre la punta. Permite mayor carga.' },
  { name: 'Elevación de Talones en Prensa', muscle_group: 'Gemelos', equipment: 'Máquina', difficulty: 'Principiante', description: 'Pies en la plataforma de la prensa de piernas, empuja con la punta. Gran rango.' },
  { name: 'Saltos de Cuerda', muscle_group: 'Gemelos', equipment: 'Cuerda de saltar', difficulty: 'Principiante', description: 'Salta la cuerda sobre la punta de los pies. Cardio + gemelos.' },
  { name: 'Saltos Pliométricos', muscle_group: 'Gemelos', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Saltos explosivos sobre la punta. Trabaja la potencia de gemelos y tobillo.' },
  { name: 'Burpees', muscle_group: 'Gemelos', equipment: 'Sin equipo', difficulty: 'Intermedio', description: 'Ejercicio completo que incluye salto. Cardio y gemelos intensos.' },
  { name: 'Elevación en Escaleras', muscle_group: 'Gemelos', equipment: 'Sin equipo', difficulty: 'Principiante', description: 'Sube escaleras de puntillas. Método funcional para trabajar gemelos.' },
  { name: 'Donkey Calf Raise', muscle_group: 'Gemelos', equipment: 'Máquina / Compañero', difficulty: 'Intermedio', description: 'Inclinado con peso en la espalda o máquina específica. Máximo estiramiento del gemelo.' },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const muscle = searchParams.get('muscle')
    const forceReseed = searchParams.get('reseed') === 'true'
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) throw new Error('DATABASE_URL is not set')
    const sql = neon(databaseUrl) as any

    // Create table if not exists
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

    // Check current count - if less than 50 or forceReseed, re-seed everything
    const countResult = await sql`SELECT COUNT(*) as count FROM exercises`
    const currentCount = parseInt(countResult[0]?.count ?? '0')

    if (currentCount < 50 || forceReseed) {
      // Truncate and re-seed with full database
      await sql`TRUNCATE TABLE exercises RESTART IDENTITY`
      for (const exercise of EXERCISES_SEED) {
        await sql`
          INSERT INTO exercises (name, muscle_group, equipment, difficulty, description)
          VALUES (${exercise.name}, ${exercise.muscle_group}, ${exercise.equipment}, ${exercise.difficulty}, ${exercise.description})
        `
      }
    }

    // Query exercises
    let exercises
    if (muscle && muscle !== 'Todos') {
      exercises = await sql`
        SELECT * FROM exercises
        WHERE muscle_group = ${muscle}
        ORDER BY difficulty, name
      `
    } else {
      exercises = await sql`
        SELECT * FROM exercises
        ORDER BY muscle_group, difficulty, name
      `
    }

    return NextResponse.json({ exercises })
  } catch (error) {
    console.error('Database error:', error)
    // Return fallback data if database is not available
    const muscle = new URL(request.url).searchParams.get('muscle')
    const filtered = muscle && muscle !== 'Todos'
      ? EXERCISES_SEED.filter(e => e.muscle_group === muscle)
      : EXERCISES_SEED
    return NextResponse.json({
      exercises: filtered,
      note: 'Using local data - database not configured'
    })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, muscle_group, equipment, difficulty, description } = body
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) throw new Error('DATABASE_URL is not set')
    const sql = neon(databaseUrl) as any
    const result = await sql`
      INSERT INTO exercises (name, muscle_group, equipment, difficulty, description)
      VALUES (${name}, ${muscle_group}, ${equipment}, ${difficulty}, ${description})
      RETURNING *
    `
    return NextResponse.json({ exercise: result[0] }, { status: 201 })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ error: 'Failed to create exercise' }, { status: 500 })
  }
}
