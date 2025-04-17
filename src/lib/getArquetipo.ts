import { createClient } from "@supabase/supabase-js";

const supabase = createClient("your-supabase-url", "your-supabase-anon-key");

export async function getArquetipoPorDia(dia: number) {
  const { data, error } = await supabase
    .from("mujer_chakana")
    .select("*")
    .eq("dia_lunes", dia)
    .limit(1)
    .single(); // asegura que sea solo un objeto, no array

  if (error) {
    console.error("Error al obtener arquetipo:", error.message);
    return null;
  }

  return data;
}
