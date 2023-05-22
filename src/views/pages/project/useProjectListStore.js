import { defineStore } from 'pinia'
import axios from 'axios'



export const useProjectListStore = defineStore('ProjectListStore', {
  actions: {
    // 👉 Fetch projects data
    fetchProjects() { return axios.get('/pages/projects/list') 
  },
  },
})
