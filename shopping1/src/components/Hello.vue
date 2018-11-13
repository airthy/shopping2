<template>
<form>
 {{message}}
 <br>
加减只差：{{balance}}

<slot>增补内容</slot>


<table >
<tr class='tr1'>          <!--表头单元格 - 包含表头信息-->
 <th>商品信息</th>
 <th>单价</th>
 <th>商品数量</th>
 <th>商品总额 </th>
 <th>编辑</th>
</tr>


<tr class='tr2'  v-for='item in dataList'>
<td class='td2' ><div class='left'> </div>   <div class='content-right'> <div class='middle' ><img v-bind:src='item.imgPic' :width='width1' :height='height1'/></div>   <div class='right'> <dl><dt>{{item.name}}</dt><dd>赠送：{{item.gifts}}</dd></dl> </div>  </div> </td>

<td> {{item.price|round}} </td>

<td><div @click='mius(item)'  class='mius'><img  v-bind:src='image2' :width='width' :height='height' /></div>  <span class='counts'>{{item.count}} </span>   <div  @click='plus(item)' class='plus'>  <img  v-bind:src='image1' :width='width' :height='height' /></div></td>

<td>{{item.price*item.count|round}} </td>

<td><span class='glyphicon glyphicon-trash' id='remove'></span></td>

</tr>


</table>

</form>                                                               


</template>                                                            //第一步 创建一个vue实例

<script>
 export default{                                                    //第二步用v-for渲染商品列表信息
  name: 'hello',
  props:['message'],
data:function(){                                                      //第三步 使用过滤器对金额和图片进行格式化
  return {dataList:[],
  image1:"static/img/add.png",                                         //使用v-on实现产品金额的动态计算
  image2:"static/img/mius.png",
  height1:'50px',
  width1:'60px',
  height:"15px",
  width:"15px"
  }

},


computed:{
  balance:function(){
         return this.$store.state.count;

  }

},

mounted:function(){
  this.$nextTick(function(){

     this.getDatalist(); //如果写成return getData()会怎么样  



  })

},

filters:{
  
round:function(value){
 return Number(value).toFixed(2); 

}

},

methods:{
  
getDatalist (){
      this.$http.get('static/resource/cart.json').then(function(response){//使用this是因为 相当于 resource插件已经集成到vue中了所以不能直接http
           this.dataList=response.body.result;
  })


},

round:function(value){
 return Number(value).toFixed(2); 


},

mius:function(item){
  
  this.$store.dispatch('crement');
  if(item.count>1){
       item.count--;
       this.$emit('change');      
     
  }else{
       item.count=1;

  }

},

plus:function(item){
  
    this.$store.dispatch('increment');
    item.count++;
    this.$emit('change');

},

getTotal:function(){
  
    var sum=0; //sum 需赋值为0  即sum=0   不能直接写成var sum   如果不将sum赋值  那么在进行sun+=  操作时 会进行类型转换 undefined+数字 undefined

    this.dataList.forEach(function(item,index){//成为NAN  和数字相加 得到NAN    所以在给sum 初始化时应该赋值0

         sum+=item.price*item.count;
       })
       return sum;

  
}




}

}

</script>
