// function text(){
//     let mass = 'Hello'
//     console.log(mass)
// }
// text()

// function test(item1, item2){
//     let mass1 = 'Hello'
//     console.log(mass1, item1 + item2)
// }
// test (11,22)

// function test1(item3, item3){
//     let mass2 = 'Hello'
//     console.log(mass2, item3 + item3)
// }
// test1 (11,22)

// let f1 = () => { console.log('hello') }

// f1() 

// t1 = 10
// t2 = 20
// let f2 = (t1, t2) => {console.log('Sum= ', t1+t2)}
// f2(t1, t2)


// t3=30
// t4=40
// let f3 = (t1>t2)?
// (tt1,tt2) => {console.log('order= ', tt1+tt2)}:
// (tt1,tt2) => {console.log('order= ', tt1-tt2)}
// f3(t3,t4)

function yolochka(){}

yolochka.prototype.fast = function(){
    console.log('fast!')
}
yolochka.prototype.green = function(sun, co2){
    console.log('green', sun, '+', co2)
}
yolochka.prototype.shishki = function(){
    console.log('shishki==yolki')
}

let forest = new yolochka()

forest.fast()
forest.green(4500, 50)
forest.shishki()

