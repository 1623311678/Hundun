import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve' //将外部引入的js打包进来
import babel from 'rollup-plugin-babel'
import del from 'rollup-plugin-delete' //
import commonjs from '@rollup/plugin-commonjs' //将CommonJS模块转换为ES6, 方便rollup直接调用
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const isProduction = process.env.NODE_ENV === 'production'
console.log(isProduction)
export default {
    input: './src/index.js',
    output: [
        {
            file: './dist/index.umd.js',
            format: 'umd',
            name: 'index',
        },
        {
            file: './demo/index.umd.js',
            format: 'umd',
            name: 'index',
        },
        {
            file: './dist/index.amd.js',
            format: 'amd',
            name: 'index',
        },
        {
            file: './dist/index.es.js',
            format: 'es',
            name: 'index',
        },
    ],
    plugins: [
        //源代码更改马上清空dist文件夹下面打包过的文件 防止代码冗余
        del({ targets: ['dist', 'test/index.umd.js'] }),
        nodeResolve(),
        commonjs({
            include: 'node_modules/**',
        }),
        isProduction && terser(),
        babel({
            exclude: 'node_modules/**',
        }),
        // 开启服务
        !isProduction &&
            serve({
                open: false,
                host: 'localhost',
                port: 9009,
                historyApiFallback: true,
                contentBase: 'demo',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            }),
        // 热更新
        !isProduction && livereload(),
    ],
}
