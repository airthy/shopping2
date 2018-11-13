/**
 * Created by gjason on 2017/3/27.
 */


import Vue from 'vue'
import Vuex from 'vuex'//先写vue 后写vuex


Vue.use(Vuex)

export default new Vuex.Store({
state:{
  
  count:0
   },

mutations:{
    increment (state){
      state.count++;
    },
    crement(state){

      state.count--;
    }


},

actions:{
   increment(context){
      
      context.commit('increment');

   },
   crement(context){

    context.commit('crement');
   }

}



})