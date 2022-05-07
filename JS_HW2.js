// 1.Написать скриптик, который сосчитает и выведет результат 
//от возведения 2 в степень 10, начиная со степени 1.

let  power = 1
while(power <= 10) {
    console.log(Math.pow(2,power))
    power ++
}

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень,
// в которую будет возводиться число 2

const power1 = function(num) {
    let result = 1
    for(let i=1; i <= num; i++){
        result=result*2
    }
    return result
}
console.log(power1(10))

// // Вариант 2

const power2 = function(num1){
    return 2**num1
}

console.log(power2(10))

//2. Написать скрипт, который выведет 5 строк в консоль 
//таким образом, чтобы в первой строчке выводилось :), 
//во второй :):) и так далее
//Пример в консоли:
//:)
//:):)
//:):):)
//:):):):)
//:):):):):)

let smile = ':)'
let result1 =''
for(let i=1; i<=5; i++){
    result1+=smile
    console.log(result1)
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
// которая и будет выводиться в консоль (как в условии смайлик), 
// а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)


function printSmile(stroka, numberOfRows) {
    let result2 = ''
        for(let step = 1; step <= numberOfRows; step++){
            result2+=stroka
        console.log(result2)
       
    }
}
printSmile(':)',5)

// 3**.  Написать функцию, которая принимает на вход слово. 
// Задача функции посчитать и вывести в консоль, сколько в слове 
// гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
    const vowels = 'aeyuio'.split('')
    const consanants = 'qwrtpsdfghjklzxcvbnm'.split('')
    let numberOfVowels = 0
    let numberOfConsanants = 0
    for(char of word.toLowerCase()){
        if(vowels.includes(char)) numberOfVowels++
        if(consanants.includes(char)) numberOfConsanants++
    }
    console.log('Слово ', word, 'состоит из ', numberOfVowels, 'гласных и ', numberOfConsanants, 'согласных букв')
}
 
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')

