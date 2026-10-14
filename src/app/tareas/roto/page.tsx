// siempre lanza un error, así que vamos a forzar el renderizado dinámico -
// si no fuera así, "next build" fallaría intentando pre-renderizar una sola vez

//export const dynamic = "force-dynamic";
export const instant = false;

export default async function RotoPage(): Promise<never> {
    throw new Error("La base de datos no pudo responder (simulado para la demo)");
}
