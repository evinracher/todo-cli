import { STATUS } from "../constants"

export const formatTasks = (tasks) => {
    const formattedTasks = tasks.map((task) => {
        const completed = task.status === STATUS.completed;
        const statusIcon = completed ? '✓':' '
        return `${statusIcon}   -   ${task.description}`
    })
    return formattedTasks.join('\n');
}