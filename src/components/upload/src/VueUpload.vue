<template>
  <div class="vue-upload-container" :style="`height:${uploadPercent?80:60}px`">
    <div class="upload-box">
      <p>上传文件</p>
      <input
        class="upload-btn"
        type="file"
        ref="inputUpload"
        @change="handleChange"
        :multiple="multiple"
      />
      <div class="upload-list">

      </div>
    </div>
    <div class="upload-progress" v-show="uploadPercent">
      <el-progress
        :percentage="uploadPercent"
        :status="uploadPercent===100?'success':''"
      ></el-progress>
    </div>
  </div>
</template>

<style lang="scss">
.vue-upload-container {
  $uploadBtnHeight: 30px;
  $bgColor:#fbfdff;
  $borderColor:#c0ccda;
  $btnBg:#66b1ff;
  $fontColor:grey;
  position: relative;
  height: 80px;
  min-width: 500px;
  background-color: $bgColor;
  border: 1px dashed $borderColor;
  border-radius: 6px;
  padding: 10px 20px;
  display:inline-block;

  .upload-box {
    height: $uploadBtnHeight;
    line-height: $uploadBtnHeight;
    width: 80px;
    border-radius: 2px;
    position: relative;
    background: $btnBg;
    border-color: $btnBg;
    color: #fff;
    text-align: center;
    &:hover {
      border-color: #c6e2ff;
      background-color: #7abafd;
    }
    .upload-btn {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .upload-list{
    color:$fontColor;
  }

  .upload-progress {
    height: calc(100% - #{$uploadBtnHeight});
    padding-top:10px;
  }
}
</style>


<script>
import Vue from "vue";
import uploadAct from "../util/upload";
import Emitter from "@/utils/emitter";
import { Progress } from "element-ui";

export default {
  name: "VueUpload",
  components:{Progress},
  mixins: [Emitter],
  props: {
    multiple: {                        //是否多选
      type: Boolean,
      default: false
    },
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    fileName: {                      //文件上传key
      type: String,
      default: "file"
    },
    data: {                      //额外数据
      type: Object,
      default: {}
    },
    url: {
      type: String,
      require: true
    },
    withCredentials: {      //是否支持cookie验证
      type: Boolean,
      default: false
    },
    beforeUpload: Function,     //上传之前验证函数
    onProgress: {
      type: Function,
      default: {}
    },
    onSuccess: {
      type: Function,
      default: {}
    },
    onError: {
      type: Function,
      default: {}
    },
    onRemove: {
      type: Function,
      default: {}
    }
  },
  data() {
    return {
      uploadPercent: 0,
      uploadPercent:false,
      fileList:[],
    };
  },
  methods: {

    handleChange(e) {
      console.log('handleChange------------------------------------');
      const {files} = e.target;
      console.log(files);
      if (!files) return;
      this.setFiles(files);
      this.$refs.inputUpload.value = null;
    },

    setFiles(files) {
      let postFiles = Array.prototype.slice.call(files); //当前文件实例继承slice
      if (!this.multiple) postFiles = postFiles.slice(0, 1);
      if (postFiles.length === 0) return;
      postFiles.forEach(file => {  //文件逐一上传
        this.upload(file);
      });
    },

    upload(file) {
      if (!this.beforeUpload) {    //如果没有校验规则直接开始上传
        return this.post(file);
      }
      const before = this.beforeUpload(file);
      if (before && before.then) {
        before.then(
          processedFile => {
            if (
              Object.prototype.toString.call(processedFile) === "[object File]"
            ) {
              this.post(processedFile);
            } else {
              this.post(file);
            }
          },
          () => {
            // this.$emit('cancel', file);
          }
        );
      } else if (before !== false) {
        this.post(file);
      } else {
        // this.$emit('cancel', file);
      }
    },

    post(file) {
      uploadAct({
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: file,
        data: this.data,
        filename: this.fileName,
        action: this.url,
        onProgress: e => {
          this.handleProgress(e, file);
        },
        onSuccess: res => {
          this.handleSuccess(res, file);
        },
        onError: (err, response) => {
          this.handleError(err, response, file);
        }
      });
    },

    getFile(file) {
      const fileList = this.fileList;
      let target;
      fileList.every(item => {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },

    handleProgress(e, file) {
      console.log("handleProgress   ------------------------------------------------  ");
      console.log(e, file);
      let {percent}= e;
      this.uploadPercent=percent;
      //   const _file = this.getFile(file);
        this.onProgress(e, file, this.fileList);
      //   _file.percentage = e.percent || 0;
    },
    handleSuccess(res, file) {
      console.log("handleSuccess    ", res, file);
      //   const _file = this.getFile(file);

      //   if (_file) {
      //     _file.status = "finished";
      //     _file.response = res;

          // this.dispatch('ElFormItem','');
      //     this.dispatch("FormItem", "on-form-change", _file); //触发表单数据变化
      //     this.onSuccess(res, _file, this.fileList);

      //     setTimeout(() => {
      //       _file.uploadPercent = false;
      //     }, 1000);
      //   }
    },
    handleError(err, response, file) {
      console.log("handleError    ", err, response, file);
      //   const _file = this.getFile(file);
      //   const fileList = this.fileList;
      //   _file.status = "fail";
      //   fileList.splice(fileList.indexOf(_file), 1);
      //   this.onError(err, response, file);
    },

    handleRemove(file) {
      const fileList = this.fileList;
      fileList.splice(fileList.indexOf(file), 1);
      this.onRemove(file, fileList);
    }
  }
};
</script>
