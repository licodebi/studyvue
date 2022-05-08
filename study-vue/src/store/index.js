import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const actions ={
    increment(context,value){
        context.commit('INCREMENT',value)
    },
    decrement(context,value){
        context.commit('DECREMENT',value)
    },
    incrementOdd(context,value){
        if(context.state.sum%2==0){
            context.commit('INCREMENT',value)
        }
        
    },
    incrementWait(context,value){
        setTimeout(()=>{
            context.commit('INCREMENT',value)
        },500)
    }
}
const mutations={
    INCREMENT(state,value){
        state.sum+=value
    },
    DECREMENT(state,value){
        state.sum-=value
    }
    

}
const state={
    sum:0,
    school:'云南大学',
    subject:'软件工程'
}
const getters={
    bigSum(state){
        return state.sum*10
    }
}
//创建store并导出
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})