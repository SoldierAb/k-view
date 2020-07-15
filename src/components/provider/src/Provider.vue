
<script>
import Vue from 'vue';
import zhCN from '../../../locale/lang/zh-CN';

export default {
	name:'KProvider',
  	props:{
		locale:{
			type:Object,
			default(){
				return zhCN;
			},
		},
	},
	provide(){
		const {locale} = this;
		this._reactiveConfig = new Vue({
			data(){
				return {
					locale,
				};
			},
		});
		const {_data} = this._reactiveConfig;
		return {
			kviewConfig:_data,
		};
	},
	watch:{
		locale(val){
			this._reactiveConfig._data.locale = val;
		},
	},
	render(){
    	return this.$slots.default ? this.$slots.default[0] : null;
	},
};
</script>