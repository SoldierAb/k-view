<template>
  <div class="search-bar-container">
    <a-form-model 
      ref="searchForm"
      v-bind="formItemLayout"
      :model="condition"
      :rules="rules"
      :layout="layout"
    >
      <!-- search-conditions -->
      <a-form-model-item
        v-for="item in config"
        :key="item.key"
        :label="item.label"
        :prop="item.bind"
      >
        <component 
          :is="item.comp.is"
          v-model="condition[item.bind]"
          v-bind="item.comp.props"
        >
          <template v-if="item.comp.props.label">
            {{ item.comp.props.label }}
          </template>
          <template v-if="item.comp.children">
            <component
              :is="child.comp.is"
              v-for="child in item.comp.children"
              :key="child.key"
              v-bind="child.comp.props"
            >
              <template v-if="child.comp.props.label">
                {{ child.comp.props.label }}
              </template>
            </component>
          </template>
        </component>
      </a-form-model-item>
      <!-- search-button-action -->
      <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
        <slot>
          <a-button
            type="primary"
            @click="onSubmit"
          >
            查询
          </a-button>
        </slot>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<style lang="scss">
 .search-bar-container{
   position: relative;
   height: 100%
 }
</style>
<script>

export default {
	name: 'KSearchBar',
	model:{
		prop:'condition',
		event:'change',
	},
	props: {
		layout:{
			type:String,
			default(){
				return 'inline'; // horizontal,vertical
			},
		},
		condition:{
			type:Object,
			default(){
				return {};
			},
		},
		rules:{
			type:Array,
			default(){
				return [];
			},
		},
		// 内部formItem 配置数组
		config: {  
			type:Array,
			default(){
				return [];
			},
		},
	},
  data () {
    return {

    };
	},
	computed: {
    formItemLayout() {
      const { layout } = this;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
  created () {
  
  },
  mounted () {

  },
  beforeDestroy () {

  },
  methods: {
		onSubmit() {
      this.$refs.searchForm.validate(valid => {
        if (valid) {
					this.$emit('search',this.condition);
        } else {
          console.error('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>
