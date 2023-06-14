import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
export const useAnsibleStore = defineStore('AnsibleStore', {
  state: () => ({
    inventories: [],
    inventoryOptions: [],
    swMainList: ['mw', 'db'],
    swSubList: ref([]),
    state: ['running', 'stop'],
    install: ['true', 'false'],
    version: ['latest','4.0', '5.0',],
    configId:'',
    dryResults: {},
    runResults: {},
    KeyList: ['net_ipv4_tcp_mem'],
    keySubList: [],
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

    // 형상 적용
    configApplyData(jsonData, id) {
      return axios.post(`/sw-config-management/${id}.yaml`, jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          return res.data.status
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

    // dryrun
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
  getters: {
    getAllswMainList(state) {
      return state.swMainList;
    },

  }
})