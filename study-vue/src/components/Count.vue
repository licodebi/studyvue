<template>
    <div>
        <h1>{{school}}-{{subject}}专业</h1>
        <h1>当前和为{{sum}}</h1>
        <h3>放大后的和为{{bigSum}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
import { mapActions,mapGetters,mapState,mapMutations } from "vuex"
export default {
    name:'Count',
    data(){
        return{
            n:1 //用户所选数字
        }
    },
    computed:{
        ...mapState(['sum','school','subject']),
        ...mapGetters(['bigSum'])
    },
    methods:{
       ...mapActions(['increment','decrement','incrementOdd','incrementWait'])
    }
}
</script>

<style  lang="css">
    button{
        margin-left: 5px;
    }
</style>