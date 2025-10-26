import { defineStore } from "pinia";
import type { MiniTask, MiniTaskWithTimeStamp } from "../../types/MiniTask";

export const useMiniTimerStore = defineStore("miniTimer", {
  state: () => ({
    miniTasks: [] as MiniTaskWithTimeStamp[],
  }),
  getters: {
    getMiniTasks: (state) => state.miniTasks,
  },
  actions: {
    addToMiniTasks(task: MiniTask) {
      // first create timestamp
      const id = crypto.randomUUID?.() ?? String(Date.now())
      const createdAt = Date.now();
      const dueAt = createdAt + task.taskTime * 60_000; // convert minutes → ms
      const taskWithTimeStamp: MiniTaskWithTimeStamp = {
        ...task,
        id,
        createdAt,
        dueAt,
      };
      this.miniTasks.push(taskWithTimeStamp);
    },
  },
});
