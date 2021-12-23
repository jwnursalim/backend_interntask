export interface Task {
    id: string;
    title: string;
    status: TaskStatus
}

export enum TaskStatus {
    OPEN = 'OPEN',
    DONE = 'DONE',
}