// goog.provide('main')
// goog.require('util')
// goog.require('menu')

// import { post } from './util.js'
// import { menu } from './menu.js'

// let baz = () => {
//     post()
//     var x = 1
//     console.log(x)
//     function unused() {
//         return 5
//     }
//     return x
// }

// baz()

// main.js
import { Apple } from './components'

const appleModel = new Apple({
  model: 'IphoneX'
}).getModel()

console.log(appleModel)