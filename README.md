# mocha_and_chai_test

1. 参考： 
2. https://mochajs.org/
3. https://www.chaijs.com/
4. https://sinonjs.org/
5. https://jsonplaceholder.typicode.com/
6. https://www.youtube.com/watch?v=tR8Kghw4HpA
7. https://github.com/kyprogramming/mocha-chai-unit-testing
   



# 版本问题
5 个测试全部通过。

总结修改：

1. 降级 chai 到 v4（v6 是纯 ESM，不兼容 ts-node + CommonJS）
2. 恢复 import { assert, expect, should } from "chai" 的原始导入方式
3. 删除多余的 chai-should.d.ts 文件（不再需要）
4. 修复 assert.typeOf(arrData, 'array') → assert.isArray(arrData)

# 主线

# 调试不起作用
1. Debugger attached + Segmentation fault 的组合，通常是 VSCode 的调试扩展自动附加到了 npm 进程。检查 VSCode 设置里是否开启了 Auto Attach：

2. 在 VSCode 里按 Ctrl+Shift+P，搜索 Debug: Toggle Auto Attach，看看是否是 Always 或 Smart 模式。如果是，改成 Disabled，然后重新打开终端再运行 npm test。
