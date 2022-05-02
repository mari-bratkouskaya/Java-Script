console.log(true || true)
console.log(true || false)
console.log(false || true)

console.log(true && true)
console.log(true && false)
console.log(false && true)

let item_1 = 5
let item_2 = 10

if (item_1 >3 || item_2 < 15) {
    console.log('idi Kuhat')
}
else {
    console.log('hodi golodniy')
}

let item_3 = 5
let item_4 = 100

if (item_3 >3 && item_4 < 15) {
    console.log('idi Kuhat')
}
else {
    console.log('hodi golodniy')
}


let item_5 = 5
let item_6 = 100
let item_7 = (item_6 > 50)? console.log('idi Kuhat') : console.log('hodi golodniy')

//  Циклы
// WHILE

let item_8 = 0

while(true) {
    console.log(item_8 + ' = idi Kuhat')
    item_8++
}
 

let item_9 = 0

while(item_9 < 20) {
    console.log(item_9 + ' = idi Kuhat')
    item_9 ++
}



let item_10 = 0
let item_11 = 20

while(item_10 < 20 && item_11 < 30) {
    console.log(item_10, ' = idi Kuhat')
    console.log(item_11, ' = ----')
    item_10 ++
    item_11 ++
}



let temperature = 0

while(temperature< 40) {
    if (temperature< 10) {
    console.log('temperature = ', temperature, 'Holodno')
    }
    else if (temperature>=10 && temperature<30) {
        console.log('temperature = ', temperature, 'Horosho')
    }
    else {
        console.log('temperature = ', temperature, 'Kapec!!!')
    }
    temperature ++
}


// FOR
 
 for(let i = 0; i < 10; i++){
     console.log(i, 'for')
 }



for(let temperature1 = 0; temperature1<10; temperature1++) {
    if (temperature1< 3) {
    console.log('temperature1 = ', temperature1, 'Holodno')
    }
    else if (temperature1>=3 && temperature1<7) {
        console.log('temperature1 = ', temperature1, 'Horosho')
    }
    else {
        console.log('temperature1 = ', temperature1, 'Kapec!!!')
    }
    console.log(temperature1)
}

let names = ['Kate',
            'Alex',
            'Ivan',
            'Ignat',
            'Andrey',
            'Vika']

for(let item1 of names) {
    
    console.log(item1)
}

let names1 = ['Kate',
            'Alex',
            'Ivan',
            'Ignat',
            'Andrey',
            'Vika']

for(let item2 of names1) {
    
    if (item2 == 'Ignat'){break;}
    console.log(item1)
}

