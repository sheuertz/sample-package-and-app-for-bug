import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named'
        },
        {
            file: pkg.module,
            format: 'es',
            compact: true
        }
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],

    plugins: [
        typescript({
            typescript: require('typescript')
        }),
        resolve(),
        commonjs({
            include: /node_modules/,
            namedExports: {
                'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef']
            }
        })
    ]
};
