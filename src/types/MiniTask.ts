export type MiniTask = {
    taskName: string,
    taskTime: number,
    
}

export type MiniTaskWithTimeStamp = MiniTask & {
    id: string,
    createdAt: number
    dueAt: number
}