import VueUpload from './src/VueUpload.vue';

VueUpload.install=(Vue)=>{
    Vue.component(VueUpload.name,VueUpload)
}

export default VueUpload;