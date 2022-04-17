const { count } = require('console')
const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

// console.log('START!')

// fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), {recursive: true}) - синхронный вариант
// fs.mkdir(path.resolve(__dirname, 'dir1'), (err) => { - асинхронный вариант
//     if(err) {
//         console.log(err)
//         return;
//     }
//     console.log('Папка создана')
// })

// console.log('END!')

// fs.rmdir(path.resolve(__dirname, 'dir1'), (err) => {
//     if(err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'переписанный текст', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('Файл записан')
// })

// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'Добавленный текст', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('Файл записан')
// })

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'test3.txt'), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test3.txt'), '123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test3.txt'), '456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test3.txt'), '789'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test3.txt')))
//     .then(data => console.log((data)))
//     .catch(err => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//     .then(() => console.log('Файл был удален'))


// Через переменную окружения передать строку, записать ее в файл,
// прочитать файл, посчитать количество слов в файле и записать
// их в новый файл count.txt, затем удалить первый файл


// const text = process.env.TEXT || '';

// writeFileAsync(path.resolve(__dirname, 'test.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Количество слов: ${count}`))
//     .then(() => removeFileAsync(path.resolve(__dirname, 'test.txt')))