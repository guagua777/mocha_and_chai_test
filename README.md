# mocha_and_chai_test

1. 参考： 
2. https://mochajs.org/
3. https://www.chaijs.com/
4. https://sinonjs.org/
5. https://jsonplaceholder.typicode.com/
6. https://www.youtube.com/watch?v=tR8Kghw4HpA
7. https://github.com/kyprogramming/mocha-chai-unit-testing
8. https://blog.csdn.net/m0_60027772/article/details/125738692
9. https://zhuanlan.zhihu.com/p/712616723
   



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


# 总结：
1. 创建node工程：npm init -y
2. 添加依赖：npm install typescript mocha chai @types/mocha @types/chai ts-node --save-dev
3. 添加ts配置：tsc --init
4. 添加源文件：
   ```
   class Calculator{
        add(a:number , b:number):number{
            this.logMessage('logging add function');
            const c = this.getRandomValue();
            return a+b+c;
        }
        subsctract(a:number , b:number):number{
            this.logMessage('logging subsctract function');
            return a-b;
        }
        multply(a:number , b:number):number{
            return a*b;
        }
        divide(a:number , b:number):number{
            if(b === 0){
                throw new Error('Can not divide by zero.')
            }
            return a/b;
        }

        getRandomValue():number{
        return Math.floor(Math.random()*10 +1);
        }


        logMessage(msg:string){
            console.log(msg);
        }


        asyncFunctionPromise(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(4);
            },1000);
        })
        }
    }


    export default Calculator;

   ```
5. 添加测试文件：
   ```
    import Calculator from '../src/calculator';
    import { expect } from 'chai';

    // describe.only
    // describe.skip
    describe('Calculator', () => {

        // it('should add two numbers', () => {
        //     const calculator = new Calculator();
        //     const result = calculator.add(1, 2);
        //     expect(result).to.equal(3);
        // });


        it('should throw an error while dividing by zero',()=>{
            // arrange 
            const calc = new Calculator();
            expect(()=> calc.divide(10,0)).to.throw('Can not divide by zero.');
        });

    });

   ```



# 教程：
1. 添加测试脚本：
   ```
   "scripts": {
    "test": "mocha --require ts-node/register test/*.spec.ts"
   }
   ```
2. 运行测试：npm run test
3. 测试结构：
   - mocha使用describe 和 it 来组织测试
   - describe(name, fn) ：定义测试套件（可嵌套）
   - it(name, fn) ：定义测试用例
   ```
   describe('Calculator', () => {
    it('should add two numbers', () => {
        const calculator = new Calculator();
        const result = calculator.add(1, 2);
        expect(result).to.equal(3);
    });
   });
   ```
4. 钩子hook：before, beforeEach, after, afterEach
5. 根钩子：
6. only和skip
7. 异步测试，使用async/await
   ```
   it('should fetch user', async function () {
        const user = await fetchUser(1);
        assert.equal(user.name, 'Alice');
    });
   ```
8. 配置文件：
   - .mocharc.js
   - .mocharc.yaml
   - .mocharc.yml
   - .mocharc.jsonc
   - .mocharc.json
   