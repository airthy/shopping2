<template>
  
   <div>

        <div>
        <span></span>
        <span>购物车</span>
        <span></span>
        </div>

  更改产品次数统计：{{total}}
  
         <hello message="you have a message" v-on:change='change'>

               <h3>测试slot 功能</h3>

         </hello>



   </div>

</template>

<script>
import Hello from './components/Hello'

export default{
 name:'app',
  data (){
       return{
        
         total:0

       }

  },
   components: {
        Hello
    },
methods:{
  
  change:function(){
    this.total++;


  }

}





}




  
</script>
