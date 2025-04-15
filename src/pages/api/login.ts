// src/pages/api/login.ts
export const prerender = false;

import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabaseClient";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString() ?? "";

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "http://localhost:4321/dashboard",
    },
  });

  if (error) {
    return redirect(`/login?msg=Error+al+enviar+correo`);
  }

  return redirect(`/login?msg=Revisa+tu+email`);
};
