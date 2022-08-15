<template>
    <ccs-dialog :title="title" :visible.sync="visible" width="70%">
        <div class="step-box">
            <ccs-steps :center="true" :stepArr="stetData" :active="active" finish-status="finish"></ccs-steps>

        </div>
        <template slot="footer">
            <ccs-button type="normal" @click="leftBtnCLick" :data="getBackText"></ccs-button>
            <ccs-button type="default" class="ml10" @click="submit" :data="getNextText"></ccs-button>
        </template>
    </ccs-dialog>
</template>

<script>
export default {
  name: '',
  components:{
  },
  data() {
    return {
        stetData: [
            {title: "基本信息"},
            {title: "核心功能"},
            {title: "应用场景"},
            {title: "产品优势"},
            {title: "其他"},
        ],
    };
  },
  computed:{
  },
  created() {
  },
  mounted() {
  },
  watch:{
  },
  methods: {},
};
</script>

<style type='stylesheet/scss' lang='scss'scoped>

</style>
