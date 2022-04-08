const fs = require('fs')
const path = require('path')

console.log('START!')

// fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), {recursive: true}) - синхронный вариант
// fs.mkdir(path.resolve(__dirname, 'dir1'), (err) => { - асинхронный вариант
//     if(err) {
//         console.log(err)
//         return;
//     }
//     console.log('Папка создана')
// })

// console.log('END!')