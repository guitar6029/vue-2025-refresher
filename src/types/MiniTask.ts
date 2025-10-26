export type MiniTask = {
    taskName: string,
    taskTime: number,
    
}

export type MiniTaskWithTimeStamp = MiniTask & {
    timestamp: number
    dueAt: number
}