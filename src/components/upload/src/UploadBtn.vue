<template>
<div class="upload-btn-container">
  <label>上传文件</label>
  <input class="upload-btn" type="file" ref="inputUpload" @change="handleChange" :multiple="multiple" />
</div>
</template>

<style lang="scss">
.upload-btn-container {
    $uploadBtnHeight: 30px;
    $borderColor: #c0ccda;
    $btnBg: #66b1ff;
    $fontColor: grey;
    position: relative;
    border-radius: 2px;
    display: inline-block;
    width:auto;
    height:$uploadBtnHeight;
    line-height:$uploadBtnHeight;
    padding:2px 10px;
    color:white;
    background-color: #409EFF;
    border-color: #409EFF;
    font-size: 14px;
    &:active,&:hover{
      background-color: $btnBg;
    }
    .upload-btn{
      opacity: 0;
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
}
</style>


<script>
import Vue from "vue";
import uploadAct from "../util/upload";
import Emitter from "@/utils/emitter";

export default {
  name: "UploadBtn",
  mixins: [Emitter],
  props: {
    multiple: { //是否多选
      type: Boolean,
      default: false
    },
    headers: {
      type: Object,
      default () {
        return {};
      }
    },
    fileName: { //文件上传key
      type: String,
      default: "file"
    },
    data: { //额外数据
      type: Object,
      default: {}
    },
    url: {
      type: String,
      require: true
    },
    withCredentials: { //是否支持cookie验证
      type: Boolean,
      default: false
    },
    beforeUpload:  { //上传之前验证函数
      type: Function,
      default(){
        return {}
      }
    },
    onProgress: {
      type: Function,
      default(){
        return {}
      }
    },
    onSuccess: {
      type: Function,
      default(){
        return {}
      }
    },
    onError: {
      type: Function,
      default(){
        return {}
      }
    },
    onRemove: {
      type: Function,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      fileList: [],
      markId:0,
    };
  },
  methods: {

    /**
    * @description 文件数据变化
    */
    handleChange(e) {
      const { files  } = e.target;
      if (!files) return;
      this.setFiles(files);
      this.$refs.inputUpload.value = null;
    },

    /**
    * @description  文件数据设置
    */
    setFiles(files) {
      let postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) postFiles = postFiles.slice(0, 1);

      if (postFiles.length === 0) return;

      postFiles.forEach(file => { //文件逐一上传
        this.upload(file);
      });
    },

    /**
    * @description 文件上传
    */
    upload(file) {

      if (!this.beforeUpload) { //如果没有校验规则直接开始上传

        return this.post(file);

      }

      const before = this.beforeUpload(file);

      if (before && before.then) {
        before.then(
          processedFile => {

            if (Object.prototype.toString.call(processedFile) === "[object File]") {

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

    /**
    * @description 存储文件数据
    */
    setFilelist(file){
      file.markId=this.markId++;
      file.status='uploading';
      this.fileList.push(file);
    },

    /**
    * @description 上传文件项
    */
    post(file) {

      this.setFilelist(file);

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

    /**
    * @description 上传进度
    */
    handleProgress(e, file) {

      let { percent } = e;

      this.onProgress(e, file, this.fileList);

    },

    /**
    * @description 上传成功
    */
    handleSuccess(res, file) {
      const {markId} = file;

      if(!this.fileList[markId]) return;

      this.fileList[markId].status =  file.status = 'success';

      this.onSuccess(res,file,this.fileList);
    },

    /**
    * @description 上传出错
    */

    handleError(err, response, file) {
      this.onError(err, response, file,this.fileList);
    },

  }
};
</script>
