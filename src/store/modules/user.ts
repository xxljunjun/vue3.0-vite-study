import { defineStore } from 'pinia'
export const userStore = defineStore('userStore', {
    state:()=>({
        token:''
    }),
    getters:{

    },
    actions:{
        setToken(token){
            this.token = token
        }
    }
})