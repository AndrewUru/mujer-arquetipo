// src/lib/getArquetipo.ts
import { supabase } from "./supabaseClient";

export async function getArquetipoPorDia(dia: number) {
  const { data, error } = await supabase
    .from("arquetipo")
    .select("*")
    .eq("dia_lunes", dia)
    .limit(1);

  if (error) {
    console.error("Error al obtener arquetipo:", error.message);
    return null;
  }

  return data?.[0] ?? null;
}
