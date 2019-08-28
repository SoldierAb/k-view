<template lang="html">
    <div class="upload-panel-container">
      <upload-btn
          :multiple="multiple"
          :headers="headers"
          :file-name="fileName"
          :data="data"
          :url="url"
          :with-credentials="withCredentials"
          :before-upload = "beforeUpload"
          :on-success="onSuccess"
          :on-error= "onError"
          :on-remove = "onRemove"
      >
      </upload-btn>
    </div>
</template>

<style lang="scss">
 .upload-panel-container{

 }
</style>

<script>
import UploadBtn from './UploadBtn.vue';
import Emitter from '@/utils/emitter';

export default {

  name:'UploadPanel',

  mixins:[UploadBtn,Emitter],

  components:{UploadBtn},

  data(){
    return {}
  },

  methods:{
    handleRemove(file) {
      const fileList = this.fileList;
      fileList.splice(fileList.indexOf(file), 1);
      this.onRemove(file, fileList);
    }
  },

}
</script>
