// src/pages/api/login.ts
export const prerender = false;

import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabaseClient";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  // Opción 1: si hay contraseña → usar login tradicional
  if (password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Intentar registrar si falla login
      const { error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signupError) {
        return redirect(`/login?msg=Error:+${signupError.message}`);
      }

      return redirect(
        `/login?msg=Te+registraste+correctamente,+revisa+tu+email`
      );
    }

    return redirect("/dashboard");
  }

  // Opción 2: si NO hay contraseña → usar enlace mágico
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "https://mujer-chakana.vercel.app/dashboard",
    },
  });

  if (error) {
    return redirect(`/login?msg=Error+al+enviar+correo`);
  }

  return redirect(`/login?msg=Revisa+tu+email`);
};
