let item_1 
item_1 = 5
console.log(item_1)

let item_2 
item_2 = 3
console.log(item_2)

let item_3 
item_3 = item_1 + item_2
console.log(item_3)

let item_4 
item_4 = 'Yolochka'
console.log(item_4)

console.log(item_3 + item_4)

console.log(item_3 * item_4)

let item_5
item_5 = item_3 
let item_6
let item_6_type
item_6 = 15
item_6_type = typeof(item_6)

console.log('item_6_type==' + item_6_type, 'item_6==' + item_6)

let item_7 = String(item_6)
let item_7_type = String(item_7)
console.log('item_7==' + item_7, 'item_7_type==' + typeof(item_7))

let age_1=10
let age_2=18
let age_3=60

if (age_1<age_2) {
    console.log('You dont have access cause your age is ' + age_1 + ' Its less then ' + age_2)
}
else if (age_1>=age_2 && age_1<age_3) {
    console.log('Welcome  !')
}
else if (age_1>age_3) {
    console.log('Keep calm and look Culture channel')
}
else {
    console.log('Technical work')
}

// // Задания 1* Преобразовать написанный код в функцию, принимающую на вход возраст.

const checkAge = function(age) {

    if (age < age_2) {
        console.log('You dont have access cause your age is ' + age + ' Its less then ' + age_2)
    }
        else if (age >= age_2 && age < age_3) {
            console.log('Welcome  !')
        }
        else if (age > age_3) {
            console.log('Keep calm and look Culture channel')
        }
    else {
        console.log('Technical work')
    }
}
checkAge(17)
checkAge(18)
checkAge(62)
checkAge('yyy')

// Задания 2* Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных.
// И если он не Number - появляется ошибка.

const checkAge1 = function(age) {
   
    if (typeof age == 'number')
       
    if (age < age_2) {
        console.log('You dont have access cause your age is ' + age + ' Its less then ' + age_2)
    }
        else if (age >= age_2 && age < age_3) {
            console.log('Welcome  !')
        }
        else if (age > age_3) {
            console.log('Keep calm and look Culture channel')
        }
    else {
            console.log('Technical work')
    }
    else { console.log('Not integer value')} 
}

checkAge1(17)
checkAge1(18)
checkAge1(62)
checkAge1('yyy')

// // Задания 3** Преобразовать задание 2* таким образом, чтобы значение "2" (строка в которой находится только цифра)
// // пропускалось преобразовываясь в number.

const checkAge2 = function(age) {
   
    // if (!isNaN(age))
    // if (Number(age))
    if (+age)
       
    if (age < age_2) {
        console.log('You dont have access cause your age is ' + age + ' Its less then ' + age_2)
    }
        else if (age >= age_2 && age < age_3) {
            console.log('Welcome  !')
        }
        else if (age > age_3) {
            console.log('Keep calm and look Culture channel')
        }
    else {
            console.log('Technical work')
    }
    else { console.log('Not integer value')} 
}

checkAge2(17)
checkAge2(18)
checkAge2(62)
checkAge2('62')
checkAge2('yyy')

