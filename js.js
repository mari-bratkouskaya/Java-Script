let drawCats = function(howManyTimes){
    for (let i=0; i<howManyTimes; i++){
    console.log(i + '="."=')
    }
}
drawCats(10)

let java = 'java'
let script = 'script'
let javascript = java + script
console.log(javascript.length)

let longString = 'Эта длинная строка такая длинная'
console.log(longString.slice(4,18))

let arg =5
switch(arg){
    case 1:
        console.log('Значение переменной arg равно 1')
    break
    case 3:
         console.log('Значение переменной arg равно 3')
    break

    case 5:
         console.log('Значение переменной arg равно 5')
    break
    default:
        console.log('Значение переменной arg равно: ' + arg)
}

let killed =11
switch(killed){
    case 1:
        console.log('За 1 врага начисляется 100 очков опыта')
    break
    case 3:
        console.log('За 3 врага начисляется 300 очков опыта')
    break
    case 5:
        console.log('За 5 врага начисляется 500 очков опыта')
    break
    case 10:
        console.log('За 10 врага начисляется 1000 очков опыта')
    break
    default:
        console.log('За ' , killed, ' врага начисляется ', killed*100, ' очков опыта')

}
