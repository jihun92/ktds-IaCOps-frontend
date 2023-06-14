import { defineStore } from 'pinia'
import axios from '@/plugins/axios'
export const useGitStore = defineStore('GitStore', {
    state: () => ({

        addResults: '',
        commitResults: '',
        pushResults: '',

    }),
    actions: {
        postAdd() {
            return axios.post('/git/add-all')
                .then((res) => {
                    return res.data
                })
                .catch((err) => {
                    console.error('API 요청 에러:', err);
                });
        },
        // commit
        // 형상 적용
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