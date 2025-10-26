export type MiniTask = {
    taskName: string,
    taskTime: number,
    
}

export type MiniTaskWithTimeStamp = MiniTask & {
    id: string,
    timestamp: number
    dueAt: number
}