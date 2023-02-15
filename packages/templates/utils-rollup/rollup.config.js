import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import babel from '@rollup/plugin-babel';
import { DEFAULT_EXTENSIONS } from '@babel/core';

export default {
  input: './src',
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true, // 保留模块结构
      sourcemap: false, // 是否输出sourcemap
      exports: 'named', // 指定导出模式（自动、默认、命名、无）
      preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
    },
    {
      dir: 'lib',
      format: 'esm',
      entryFileNames: '[name].mjs',
      preserveModules: true, // 保留模块结构
      sourcemap: false, // 是否输出sourcemap
      name: 'index',
      exports: 'named', // 指定导出模式（自动、默认、命名、无）
      preserveModulesRoot: 'src', // 将保留的模块放在根级别的此路径下
    },
    {
      dir: 'lib',
      format: 'umd',
      entryFileNames: '[name].umd.js',
      name: 'FE_utils', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
      sourcemap: false,
      plugins: [terser()],
    },
  ],
  plugins: [
    del({ targets: ['lib'] }),
    resolve({ extensions: ['.js', '.ts'] }),
    commonjs(),
    typescript({ module: 'ESNext', sourceMap: false }),
    babel({
      // 编译库使用 runtime
      babelHelpers: 'runtime',
      // 只转换源代码，不转换外部依赖
      exclude: 'node_modules/**',
      // babel 默认不支持 ts 需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, '.ts'],
    }),
  ],
};
