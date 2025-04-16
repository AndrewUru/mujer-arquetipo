<p align="center">
  <img src="public/mujer_chakana.webp" alt="Mujer Chakana" width="600" />
</p>

# 🎺 Mujer Chakana

Bienvenida a **_Mujer Chakana_**, una aplicación desarrollada con Astro, TailwindCSS, Supabase y React que acompaña el ciclo femenino en un recorrido simbólico de **28 días**, guiado por arquetipos femeninos inspirados en la **Chakana** y la cosmovisión andina.

Este es un proyecto que une **tecnología, espiritualidad y memoria ancestral** para reconectar con los saberes del cuerpo y la tierra.

---

## ✨ Tecnologías utilizadas

- ⚡️ [Astro](https://astro.build/) — Framework moderno orientado a performance
- 🎨 [TailwindCSS](https://tailwindcss.com/) — Utilidades CSS para UI fluida
- 🌈 [React](https://react.dev/) — Componentes dinámicos con interactividad
- 🔐 [Supabase](https://supabase.com/) — Auth + Base de datos Postgres
- 📧 Autenticación mágica (Magic Link) y opcional por contraseña
- 🧠 RLS (Row Level Security) para proteger los datos de cada usuaria
- ☁️ [Vercel](https://vercel.com/) — Hosting optimizado para Astro

---

## 🚀 Cómo desplegar en Vercel

1. Clona este repositorio:

   ```bash
   git clone https://github.com/AndrewUru/mujer-chakana
   cd mujer-chakana
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Conecta tu proyecto a [Vercel](https://vercel.com) y agrega estas variables en el panel:

| Variable                   | Valor                |
| -------------------------- | -------------------- |
| `PUBLIC_SUPABASE_URL`      | (tu URL de Supabase) |
| `PUBLIC_SUPABASE_ANON_KEY` | (tu clave pública)   |

4. Asegúrate de tener este adaptador en `astro.config.mjs`:

```ts
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  adapter: vercel(),
});
```

5. ¡Listo! Deploy automático desde Git.

---

## 📁 Estructura del proyecto

```
.
├── src
│   ├── components             # Navbar, botones, react hooks
│   ├── layouts                # Layout base estilizado
│   ├── pages
│   │   ├── index.astro        # Página de bienvenida
│   │   ├── setup.astro        # Configura el ciclo menstrual
│   │   ├── dashboard.astro    # Muestra el arquetipo actual
│   │   └── login.astro        # Login (Magic Link / Password)
│   ├── lib
│   │   └── supabaseClient.ts  # Cliente de Supabase
│   └── styles
│       └── global.css         # Estilos generales
```

---

## 🔐 Supabase Auth + RLS

La app utiliza autenticación con **Magic Link**, pero puedes añadir opción por contraseña si quieres monetizar o tener mayor control.

### Tablas principales

#### `ciclo_semanal_mujer_chakana`

| Columna       | Tipo   | Descripción                      |
| ------------- | ------ | -------------------------------- |
| `dia_ciclo`   | `int`  | Día 1 al 28                      |
| `arquetipo`   | `text` | Nombre simbólico (La Madre, etc) |
| `descripcion` | `text` | Guía espiritual de ese día       |
| `elemento`    | `text` | Fuego, Agua, Tierra, Aire        |
| `audio_url`   | `text` | Link a audio del día             |
| `ritual_pdf`  | `text` | PDF con práctica ritual          |
| `tip_extra`   | `text` | Acción o sugerencia diaria       |

#### `perfiles`

| Columna        | Tipo   | Descripción                      |
| -------------- | ------ | -------------------------------- |
| `id`           | `uuid` | auth.uid()                       |
| `fecha_inicio` | `date` | Día 1 del ciclo según la usuaria |

#### RLS policies

```sql
-- SELECT, INSERT, UPDATE
auth.uid() = id
WITH CHECK (auth.uid() = id)
```

---

## 🔄 Lógica del ciclo

```ts
const diffDays = Math.floor(
  (new Date().getTime() - new Date(fecha_inicio).getTime()) /
    (1000 * 60 * 60 * 24)
);
const diaCiclo = (diffDays % 28) + 1;
```

---

## ✨ UI/UX & diseño

- Layout inspirado en la **Chakana**
- Responsive y accesible
- Navbar móvil tipo app
- Colores suaves: rosados, lilas, blancos
- Íconos de `lucide-react` (React icons elegantes)
- Tipografía `Outfit` desde Google Fonts

---

## 🌕 Arquetipos Chakana

| Día | Arquetipo     | Simbolismo                            |
| --- | ------------- | ------------------------------------- |
| 1   | La Visionaria | Intuición, claridad interior          |
| 2   | La Sanadora   | Compasión, emociones, cuidado del ser |
| 8   | La Curandera  | Medicina ancestral, hierbas, tierra   |
| 15  | La Guerrera   | Protección, fuerza, coraje            |
| 22  | La Madre      | Nutrición, guía, amor incondicional   |

> Incluye 28 arquetipos, uno por cada día del ciclo 🎺

---

## 💡 Roadmap

- [x] Selector de fecha para ciclo
- [x] Cálculo automático del día
- [x] Dashboard con arquetipo diario
- [x] Audio y ritual por día
- [ ] Guardado de notas personales
- [ ] Calendario circular visual
- [ ] Ilustraciones y símbolos andinos
- [ ] Integración con redes o journaling

---

## 🙌 Contribuye

¿Te vibra este camino?  
Puedes sumar como desarrolladora, diseñadora, artista o simplemente amante de los saberes cíclicos 🌛  
¡Envía un PR, idea o mensaje!

---

## 💖 Créditos

Creado con 💗 por [@andrewuru](https://github.com/AndrewUru)  
Inspirado por la **Chakana**, el **Warmi Pachakuti** y el poder de recordar desde el cuerpo.

---

> “La Chakana nos recuerda que somos puente entre mundos, y que el camino espiritual comienza en nosotras.” — _Mujer Chakana_
