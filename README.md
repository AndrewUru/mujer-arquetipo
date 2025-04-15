# 🌸 Mujer Arquetipo

Bienvenida a **Mujer Arquetipo**, una aplicación desarrollada con Astro, TailwindCSS y Supabase que acompaña el ciclo femenino en un recorrido de 28 días con arquetipos inspiradores cada lunes.

![Mujer Arquetipo](/mujer-arquetipo.png)

---

## 🚀 Tecnologías utilizadas

- ⚡️ [Astro](https://astro.build/) — Framework moderno orientado a performance
- 🎨 [TailwindCSS](https://tailwindcss.com/) — Utilidades CSS para una UI elegante
- 🧠 [Supabase](https://supabase.com/) — Backend-as-a-Service (Auth + DB)
- 📨 Magic Link Authentication
- 📦 RLS (Row Level Security) en Supabase para proteger los datos

---

## 📁 Estructura del proyecto

```
.
├── src
│   ├── layouts
│   │   └── Layout.astro         # Layout base estilizado
│   ├── pages
│   │   ├── index.astro          # Página de bienvenida
│   │   ├── setup.astro          # Formulario para configurar fecha de inicio
│   │   ├── dashboard.astro      # Calcula y muestra el arquetipo actual
│   │   └── login.astro          # Login con magic link
│   ├── lib
│   │   └── supabaseClient.ts    # Cliente de Supabase
│   └── styles
│       └── global.css           # Estilos globales
```

---

## 🔐 Supabase Auth + RLS

Se utiliza autenticación mediante **enlace mágico** (Magic Link).

### 🧱 Tabla `perfiles`

| Columna        | Tipo   | Descripción                  |
| -------------- | ------ | ---------------------------- |
| `id`           | `uuid` | ID del usuario (auth.uid)    |
| `fecha_inicio` | `date` | Fecha elegida por la usuaria |

### ✅ Políticas RLS implementadas

```sql
-- SELECT
auth.uid() = id

-- INSERT
auth.uid() = id
WITH CHECK (auth.uid() = id)

-- UPDATE
auth.uid() = id
WITH CHECK (auth.uid() = id)
```

---

## 🧠 Cálculo del día del ciclo

Se calcula automáticamente al iniciar sesión en base a la fecha guardada:

```ts
function calcularDiaCiclo(fechaInicio: Date): number {
  const hoy = new Date();
  const diffTime = hoy.getTime() - fechaInicio.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return (diffDays % 28) + 1;
}
```

---

## ✨ UI/UX moderno

- Tipografía `Outfit` desde Google Fonts
- Layout responsivo con Tailwind
- Botones redondeados, colores suaves y accesibilidad
- Scroll suave (`scroll-behavior: smooth`)

### Página principal (`index.astro`)

- Texto introductorio
- Botones: _Configurar ciclo_ y _Ir al dashboard_

### Página de setup

- Selector de fecha (`<input type="date">`)
- Guarda automáticamente la fecha en Supabase
- Redirecciona a `/dashboard`

---

## 📆 Arquetipos

Los arquetipos se almacenan en la tabla `arquetipo` con 28 registros, uno por día.

| Columna       | Tipo     | Descripción             |
| ------------- | -------- | ----------------------- |
| `dia_lunes`   | `number` | Día del ciclo (1–28)    |
| `nombre`      | `text`   | Nombre del arquetipo    |
| `descripcion` | `text`   | Descripción inspiradora |

---

## 🧪 Próximos pasos

- [ ] Añadir ilustraciones por arquetipo
- [ ] Calendario visual de progreso
- [ ] Guardar notas personales por día
- [ ] Compartir arquetipos en redes sociales

---

## 🧘‍♀️ Contribuye

Este proyecto está en desarrollo. Si quieres sumar ideas, feedback o mejoras en código, ¡bienvenida! ✨

---

## 💖 Créditos

Creado con ❤️ para acompañar a las mujeres en su conexión cíclica.

---

> “El ciclo menstrual no es solo biología, es una guía para reconectar con nuestra sabiduría interior.”
