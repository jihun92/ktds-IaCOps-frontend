import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
export const useProjectStore = defineStore('ProjectStore', {
  state: () => ({
    planResults: [],
    applyResults: []


  }),
  actions: {
    // getTerraformStatusFile
    getTerraformStatusFile() {
      return axios.get('/terraform/terraform-tfstatus')
        .then((res) => {
          return res.data
        })
        .catch((err) => {
          console.error('API 요청 에러:', err);s
        });
    },
    // getTerraformStatusFile
    getAnsibleFile(id) {
      return axios.get(`/sw-config-management/${id}.yaml`)
        .then((res) => {
          return res.data
        })
        .catch((err) => {
          console.error('API 요청 에러:', err);
        });
    },


  },
})