<template>
    <div class="app-container">
      <div>
        <el-button   @click="changeMessage">改变</el-button>
        <span class="ml20">{{message}}</span>
      </div>
      <div>
        <el-button  @click="changeData">改变其他</el-button>
        <span class="ml20">{{test.a}}</span>
      </div>
    </div>
</template>
<script>
  export default {
    components:{addEdite},
    props: {},
    data () {
        return {
          test:{
            a:1
          },
        }
    },
    computed:{},
    mounted () {
      // this.message="test111";
    },
    created () {
      let obj={
            cpuSpec:"",
            memorySpec:"",
            cpuSpec:"",
          }
      this.handleInitial();
    },
    methods: {
      test(){
         function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
          }
      },
      handleInitial(){
        this.message="test";
      },
      changeData(){
        this.test.a++;
      },
      changeMessage(){
        this.message+="-1";
      },
    },
    filter:{},
    watch:{}
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
