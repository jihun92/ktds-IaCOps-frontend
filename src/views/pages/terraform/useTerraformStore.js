import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
export const useTerraformStore = defineStore('TerraformStore', {
  state: () => ({
    typeOptions: ['t2.nano', 't2.micro', 't2.small', 't2.medium', 't2.large'],
    zoneOptions: ['ap-northeast-2a', 'ap-northeast-2c'],
    osOptions: ['centOS', 'ubuntu'],
    osVersionList: [],
    dbengineOptions: ['postgreSQL','mySQL'],
    dbengineVersionList: [],
    planResults: [],
    applyResults: []


  }),
  actions: {
    // plan
    postPlan() {
      return axios.post('/terraform/plan')
      .then((res)=> {
        return res.data
      })
      .catch((err) => {
        console.error('API 요청 에러:', err);
      });
    },
    // apply
    postApply() {
      return axios.post('/terraform/apply')
      .then((res)=> {
        return res.data
      })
      .catch((err) => {
        console.error('API 요청 에러:', err);
      });
    },

  },
})