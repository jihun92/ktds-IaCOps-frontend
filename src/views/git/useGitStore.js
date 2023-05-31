import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
export const useGitStore = defineStore('GitStore', {
    actions: {
        // add all
        async postAdd() {
            try {
                const response = await axios.post('/git/add-all')
                return response.data
            } catch (error) {
                console.error(error)
                throw error
            }
        },
        // commit
        async postCommit(commitMsg) {
            try {
                const response = await axios.post('/git/commit', { commitMsg: commitMsg }) 
                return response.data
            } catch (error) {
                console.error(error)
                throw error
            }
        },

        // push
        async postPush() {
            try {
                const response = await axios.post('/git/push')
                return response.data
            } catch (error) {
                console.error(error)
                throw error
            }
        },

    },
})