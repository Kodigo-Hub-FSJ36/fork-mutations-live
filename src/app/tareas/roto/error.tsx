"use client";

import { useEffect } from "react";

export default function ErrorTareasRoto({
    error,
    retry,
}: {
    error: Error & { digest?: string };
    retry: () => void;
}) {
    useEffect(() => {
        console.error("Error capturado en /tareas/roto: ", error);

    }, [error]);

    return (    
        <main>
            <h2>
                Algo salió mal
            </h2>
            <p>{error.message}</p>
            <button onClick={() => retry()}>Reintentar</button>
        </main>
    );
}