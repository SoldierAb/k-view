<template>
  <el-form
    :model="modelForm"
    :rules="rules"
    :label-width="`${labelWidth}px`"
    ref="modelForm"
    class="demo-modelForm"
  >
    <el-form-item v-for="cp in formComps" :label="cp.label" :prop="`${cp.bind}`" :key="cp.label">
      <upload-btn
        v-if="cp.comp==='UploadBtn'"
        v-bind="cp.props"
        :data="modelForm"
        :on-success="onSuccess"
        :on-error="onError"
        :on-progress="onProgress"
        :before-upload="beforeUpload"
        @get-file="getFile"
        ref="uploadBtn"
      >
        <span :class="`font-${uploadStatus}`" style="padding-left:10px">{{statusText}}</span>
      </upload-btn>
      <component v-else :is="`El${cp.comp}`" v-model="modelForm[cp.bind]" v-bind="cp.props">
        <async-options :url="cp.url"></async-options>
      </component>
    </el-form-item>
    <el-form-item style="margin-bottom:10px">
      <el-button size="small" type="primary" @click="submitForm">确定</el-button>
      <el-button size="small" @click="resetForm">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss">
.font-before {
  color: $before;
}
.font-success {
  color: $success;
}
.font-error {
  color: $error;
}
</style>


<script>
export default {
  name: "CommonForm",
  props: {
    actType: {
      type: String,
      default() {
        return "add";
      }
    },
    formComps: {
      type: Array
    },
    rules: {
      type: Object
    },
    modelForm: {
      type: Object
    },
    dataIndex: {
      type: Number
    },
    labelWidth: {
      type: Number,
      default() {
        return 90;
      }
    }
  },

  data() {
    return {
      uploadStatus: "before",
      statusText: `无限制文件类型`
    };
  },
  mounted() {
    const { formComps } = this;
    if (Array.isArray(formComps)) {
      const uploadBtn = formComps.find(item => item.comp === "UploadBtn");
      if (uploadBtn) {
        const { mindText } = uploadBtn.props;
        this.statusText = mindText;
      }
    }
  },
  methods: {
    setUploadStatus(status, text) {
      this.uploadStatus = status;
      this.statusText = text;
    },
    getFile(fileName, postFiles) {
      // const uploadBtnItem = this.formComps.find(item => item.comp === "UploadBtn");
      const uploadBtnItem = this.formComps.find(
        item => item.comp === "UploadBtn" && item.props.fileName === fileName
      );
      if (uploadBtnItem) {
        const { bind: fileKey } = uploadBtnItem;
        if (fileKey) this.modelForm[fileKey] = postFiles; //绑定当前表单文件数据
      }
    },
    beforeUpload(fileName, file) {
      const fileType = file.name.split(".").reverse()[0];
      const uploadBtnItem = this.formComps.find(
        item => item.comp === "UploadBtn" && item.props.fileName === fileName
      );
      const { type: validateType } = uploadBtnItem.props.fileLimit;
      if (validateType && validateType.includes(fileType)) {
        this.setUploadStatus("before", `${file.name}`);
        return file;
      }
      this.setUploadStatus("error", `${this.uploadText}`);
      return false;
    },
    onSuccess(res, file, fileList) {
      this.setUploadStatus("success", res.msg);
      this.$emit("upload-success", res, file, fileList);
    },
    onError(err, res, file, fileList) {
      this.setUploadStatus("error", res.msg);
    },
    onProgress(e, file, fileList) {},
    submitForm() {
      this.$refs.modelForm.validate(valid => {
        if (valid) {
          this.$emit("submit-form", this.modelForm, this.dataIndex);
          // this.$refs.uploadBtn.
        } else {
          console.log("error submit!!");
          this.$message({
            message: "数据提交错误",
            type: "warning"
          });
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.modelForm.resetFields();
      this.$emit("cancel");
    }
  }
};
</script>