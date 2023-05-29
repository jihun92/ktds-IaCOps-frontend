import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
export const useAnsibleStore = defineStore('AnsibleStore', {
  actions: {
    // plan
    async getInventories(params) {
      try {
        const response = await axios.get('/inventories', { params })
        return response.data
      } catch (error) {
        console.error(error)
        throw error
      }
    },

  },
})