# mocha_and_chai_test

1. 参考： 
2. https://mochajs.org/
3. https://www.chaijs.com/
4. https://www.youtube.com/watch?v=tR8Kghw4HpA
5. https://github.com/kyprogramming/mocha-chai-unit-testing
6. https://www.bilibili.com/video/BV1eB4y1g7By



# 版本问题
5 个测试全部通过。

总结修改：

1. 降级 chai 到 v4（v6 是纯 ESM，不兼容 ts-node + CommonJS）
2. 恢复 import { assert, expect, should } from "chai" 的原始导入方式
3. 删除多余的 chai-should.d.ts 文件（不再需要）
4. 修复 assert.typeOf(arrData, 'array') → assert.isArray(arrData)

# 主线
