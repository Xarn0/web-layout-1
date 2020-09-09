function cek(hour = 1){
    return hour * 60 + ` Минут в  ${hour} часах`
}

console.log(cek(3892))

function dayC(month = 1){
    return month * 30 * 24
}
console.log(dayC(12))
let arr = []
function range(start,end,opr = 1){
  for(let i  = start; i < end+1 ; i += opr){
      arr.push(i)
  }
  return arr;
}
console.log(range(1,10,2))
function sum(start){
    let sum1 = 0;
    for(let i1 = 0; i1 < start.length; i1++){
        sum1 += start[i1]
    }
    return sum1
}
console.log(sum([1,2,3,4]))

let ae = [1,2,3,4,5,6,7,8,9,10]
function res(arr){
    let r = []
    for(let i = 0; i < arr.length; i++){
        r.unshift(arr[i])
    }
    return  arr = r
}
ae = res(ae)
// console.log(res(ae))
console.log(res(ae))

function arryTolist(arr){
    let obj = null;
     for(let i = 0; i < arr.length; i++){
           obj = {value : arr[i], res: obj}
     }
     return obj
}

console.log(arryTolist([1,2,3,4,5]))


// function arrayToList(array) {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//       list = {value: array[i], rest: obj};
//     }
//     return list;
//   }
//   console.log(arrayToList([1,2,3,4,5,6,7,8,9]))

function rec(arr,arr2){
    return arr.concat(arr2)
    
}

console.log(rec([23,34,34],[1,2,3,4,5,6]))

function re(rec){
    return reduce(rec, (acc,sum)=>acc+=sum,0)
}
console.log(re())
console.log([1,2,3,4,5,6,7,8,9,10].reduce((a,b)=>a+=b,0))

let empty = {};
empty.speak = function(line) {
    console.log(`${line} сказал he`);
}
empty.speak('hhhh')

function look(){
    console.log(`${this.name} это его имя`)
}
let oop ={
    name: 'alex',
    look
}
oop.look()

function pol(n){
    console.log(' а вот и работа ' + this.name , n)
}
let t = {name : 'egor'},
 t1 = {name : 'alex'},
 t2 = {name : 'dima'};
 pol.call(t,23)
 pol.call(t1,453)
 pol.call(t2,52)

 class Vec{
     constructor(x,y){
         this.x = x,
         this.y = y
     }
     plus(){
         return this.x - this.y 
     }
     minus(){
        return this.x + this.y 
    }
    
 }

 Vec.prototype.let = function(a,b){
     a -= this.x,
    b -= this.y
    return {a,b}  
 }
 let vec = new Vec(40,32);
 console.log(vec.plus())
 console.log(vec.minus())
 console.log(vec.let(22,52) )


 class Human{
     constructor(name,age,sula,dals){
         this.name = name,
         this.age = age,
         this.sula = sula,
         this.dals = dals
     }
 }
 let gosha = new Human('Гоша', 21 , 120 , 200)

 class Ninja{
     constructor(vanue){
         Human.call(Ninja,this)
         this.vanue = vanue;
     }
 }
 Ninja.prototype = new Human();
 let nin = new Ninja("олуг",12 , 200 , 400 , "uut")
 console.log(gosha,nin)

 class Group{
     constructor(){
         num = [];
     }
     add(value){
        let prov =  this.num.indexOf(value)
         if(prov == -1){
            this.num.push(value)
         }
         else{
             console.log("такое уже есть ")
         }
       
     }
 }
let p = new Group()
 console.log(p.add(21))

 let arr = [];

 
 console.log(arr[t] 
    ) 
   
    const roads =[
        'home 1' , 'home 2',
        'home 3' , 'home 4'
    ]

    function bui(ed){
        let graph = Object.create(null);
        function addEg(from,to){
            if(graph[from] == null){
                graph[from] = [to];
            }
            else{
                graph[from].push(to)
            }
        }
        for(let [ from,to] of ed.map(r=> r.split('-')))
        {
            console.log(from + to + ' ooo');
            console.log(to +  from+ ' ooo')
            addEg(from,to);
            addEg(to,from);
        }
        // return graph;
    }

    console.log(bui(roads))