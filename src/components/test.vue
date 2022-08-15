<template>
    <div class="app-container">
    </div>
</template>
<script>
  import addEdite from './add_edite'
  export default {
    components:{addEdite},
    props: {},
    data () {
        return {
          test:{
            a:false
          },
           items: ['a', 'b', 'c'],
           dialogVisible:false
        }
    },
    computed:{},
    mounted () {
      // this.message="test";
    },
    created () {
        var a = function(){
          "user strict"
              this.b = 1;
          }
          var b = function(){
              var b = new a().b;
              return 5 + b;
          }
          var c = b();
          console.log(new a);
      // let obj=JSON.parse(JSON.stringify(this.test));
      // obj.b='BB';
      this.message="test";
      // this.test=obj;
      // this.test=JSON.parse(JSON.stringify(this.test));
    },
    methods: {
      changeData(){
        this.test.a=true;
      },
      changeMessage(){
        this.message+="-1";
      },
      changeArr(){
        this.items.push('d');
      },
      openDialog(){
      }
    },
    filter:{},
    watch:{}
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
