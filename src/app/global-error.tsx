"use client";

export default function GlobalError({
    retry,

}: {
    error: Error & { digest: string };
    retry: () => void;
}) {
    return (
        //global-error reemplaza TODO el layout raiz, por eso necesita 
        // su propio <html> y <body>
        <html>
            <body>
                <h2>Error crítico de la aplicación</h2>
                <button onClick={() => retry()}>Reintentar</button>
            </body>
        </html>
    );
}