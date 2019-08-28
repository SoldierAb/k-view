const babel = require('@babel/core');
const types = require('@babel/types');

// Babel将源码转换AST之后，通过遍历AST树（其实就是一个js对象），对树做一些修改，然后再将AST转成code，即成源码。

let visitor = {
    // import 语句解析时触发该函数
    ImportDeclaration(path,{opts}) {  //path 语句抽象语法树 opts 插件参数

        let node = path.node;
        let {specifiers} = node; // 导入的包的说明符 是个数组集合
        
        // 确认导入库 是否是 .babelrc library属性指定库 以及 如果不是默认导入 才进行按需导入加载
        
        if (opts.library === node.source.value && !types.isImportDefaultSpecifier(specifiers[0])) {
            
            let newImports = specifiers.map(specifier => { // 遍历 出导入的每个包的说明描述符

                const importStr = `${node.source.value}/packages/${specifier.local.name}`.toLowerCase();
                
                return types.importDeclaration(

                    [types.importDefaultSpecifier(specifier.local)],
                    // 生成import语句如 import Button from 'element-ui/packages/button/index.js'
                    types.stringLiteral(importStr)
                )

            });

            // 将原有语句写法替换掉 新写法
           path.replaceWithMultiple(newImports);

        }
    }
}

module.exports = function(babel) { // 将插件导出
    return {visitor} // 属性名固定为visitor
};

