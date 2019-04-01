import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

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
        })
    ]
};
