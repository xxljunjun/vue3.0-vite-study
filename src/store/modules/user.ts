import { defineStore } from 'pinia'
export const userStore = defineStore('userStore', {
    state:()=>({
        token:'',
        dialogVisible:false
    }),
    getters:{

    },
    actions:{
        setToken(token){
            this.token = token
        },
        setDialogStatus(bol){
            this.dialogVisible = bol
        }
    }
})