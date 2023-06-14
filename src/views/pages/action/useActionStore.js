import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
export const useActionStore = defineStore('ActionStore', {
  state: () => ({
    selectedInventory: '',
    selectedAction:'',
    runResults: {},


  }),
  actions: {
    // getInventories
    getInventories() {
      return axios.get('/inventories').then((res) => {
        return res.data
      })
        .catch((err) => {
          console.error(err);
        })
    },

    // action수행
    postAction(jsonData) {
      return axios.post(`/infra-manager`, jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          return res.data
        })
        .catch((err) => {
          console.error('API 요청 에러:', err);
        });
    },

    // dryrun
    postDryRun(id) {
      return axios.post(`/sw-config-management/dryrun/${id}`,{ id: id })
        .then((res) => {
          return res.data
        })
        .catch((err) => {
          console.error('API 요청 에러:', err);
        });
    },

    // run
    postRun(id) {
      return axios.post(`/sw-config-management/run/${id}`,{ id: id })
        .then((res) => {
          return res.data
        })
        .catch((err) => {
          console.error('API 요청 에러:', err);
        });
    },

  },
})