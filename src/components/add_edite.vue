<template>
    <div>
        <el-dialog
              title="dialog"
              :close-on-click-modal="false"
              :visible.sync="dialogShow"
              @close="closeDialog">
            <div>
                测试dialog
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button class="btn-secondary" @click="closeDialog">取消</el-button>
                <el-button class="defaultBtn" @click="saveDialog" type="primary">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        components: {},
        created () {
            // this.dialogShow = true
        },
        data () {
            return {
                form: {
                    name: '',
                    region: '',
                },
                formRule: {
                    name: [
                        { required: true, message: '请输入模型key', trigger: 'blur' }
                    ]
                },
                dialogShow: true
            }
        },
        computed: {},
        mounted () {
            // this.dialogShow = true
        },
        methods: {
            closeDialog () {
                this.$emit('update:dialogVisible', false)
            },
            saveDialog () {
                this.$emit('update:dialogVisible', false)
            }
        },
        watch: {}
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
