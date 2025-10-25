import { defineStore } from 'pinia'
import type { MiniTask } from '../../types/MiniTask'

export const useMiniTimerStore = defineStore('miniTimer', {
  state: () => ({
    miniTasks: [] as MiniTask[]
  }),
  getters: {
    getMiniTasks: (state) => state.miniTasks
  },
  actions: {
    addToMiniTasks(task: MiniTask) {
        this.miniTasks.push(task)
    }
  }
})