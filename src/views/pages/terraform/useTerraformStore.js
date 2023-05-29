import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
export const useTerraformStore = defineStore('TerraformStore', {
  actions: {
    // plan
    async postPlan() {
      try {
        const response = await axios.post('/plan')
        return response.data
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    // apply
    async postApply() {
      try {
        const response = await axios.post('/apply')
        return response.data
      } catch (error) {
        console.error(error)
        throw error
      }
    },

  },
})