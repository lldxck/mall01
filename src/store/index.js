import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        titleName:'首页'
    },
    mutations:{
        changeTitleName(state,payload){
            state.titleName = payload
        }
    }
})

export default store