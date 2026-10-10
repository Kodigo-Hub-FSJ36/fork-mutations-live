import { getTasks } from "@/src/lib/tasks-store" 
import TaskForm from "@/src/components/TaskForm";
import TaskList from "@/src/components/TaskList";

export const instant = false;

export default async function TareasPage() {
    const tasks = await getTasks();

    return (
        <main>
            <h1>Mis Tareas</h1>
            <TaskForm/>
            <TaskList/>
        </main>
    );
}