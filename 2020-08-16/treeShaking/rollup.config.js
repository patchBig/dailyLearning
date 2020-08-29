import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/main.js',
    output: {
        file: 'rollup.bundle.js',
        format: 'cjs'
    },
    treeshake: true,
    plugins: [
        babel(),
        // uglify()
    ]
}