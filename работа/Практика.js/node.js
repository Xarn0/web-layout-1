let div = document.querySelector('.blockUl');
div.classList.toggle('cl')
for(let li = 0 ; li < 6; li++){
    let i  = document.createElement('li');
    i.textContent = 'Прикол?';
    i.classList.add('li')
    div.append(i)
}

// let li = document.querySelector('li:last-child');
// li.style.color = '#fff';
// li.style.backgroundColor = '#f44332';
// li.style.cssText = "padding :  40px ; color : blue;"
//  let lyp = document.createElement('li');
//  lyp.textContent = 'rtrtrtr'
//  li.after(lyp);
//  let o = div.childNodes;
// //  let arr = [];
//  for(let key of o){
//      key == "text" ? arr.push(key) : 'key'; 
     
//  }
// console.log(div.style.width)
// console.log(div.getComputedStyle(top))

let pro = document.querySelector('.pro');
pro.addEventListener('dragdrop', ()=>{
    console.log('rd')
})

let img =  document.querySelector('.okno');
// img = img.childNodes ; 



document.querySelector('#btn').addEventListener('click',(e)=>{
    setTimeout(()=>{img.prepend(img.lastElementChild)},650)

}) 
document.querySelector('#btn2').addEventListener('click',(e)=>{
    setTimeout(()=>{img.append(img.firstElementChild)},650)
   
    }) 






// let y = 0;
// function creat(i)
// {
//     let arr = ['./flod.jpg','./niga.jpg','./112main.jpg'];
//     let divdiv = document.createElement('div');
//     let img1 = document.createElement('img');
//     divdiv.classList.add('img1')
//     img1.src = arr[i];
//     divdiv.prepend(img1);
//     document.querySelector('.prob').prepend(divdiv)
    
// };

//  function del(cor){
//  let po = document.querySelector('.prob').children.length;
//  let p1 = document.querySelector('.prob').children
//   if(po >= 1){
//     document.querySelector(cor).remove();
//   }
 
 
//  }
 

// function clikm(c){
//    let nex = document.querySelector('#btn3').addEventListener('click',()=>{
//     del('.img1:last-child')
//     c++;
    
     
//      if(c > 2){
//          c = 0 
//      }
     
//     });
//     document.querySelector('#btn4').addEventListener('click',()=>{
//         del('.img1:first-child')
        
        
//          c--;
//          if(c < 0){
//              c = 2 
//          }
//         });
//         if(nex){
//             console.log('2')
//         }

// }

// clikm(y);

// function clikmNad(c){
//     document.querySelector('#btn4').addEventListener('click',()=>{
//         del('.img1:first-child')
        
//         mui(c)
//          c--;
//          if(c < 0){
//              c = 2 
//          }
//         })
// }


// class slad{
//     constructor(){
//         this.y = 0;
// };
//     creat(y)
// {
//     let arr = ['./flod.jpg','./niga.jpg','./112main.jpg'];
//     let divdiv = document.createElement('div');
//     let img1 = document.createElement('img');
//     divdiv.classList.add('img1')
//     img1.src = arr[y];
//     divdiv.prepend(img1);
//     document.querySelector('.prob').prepend(divdiv)
    
// };
//     clikm(){
//         let cl = document.querySelector('#btn3').addEventListener('click',()=>{
//         del('.img1:last-child')
//        creat(y)
//          this.y++;
//          if(c > 2){
//              c = 0 
//          }
//         })
// };
//      del(cor){
//         let po = document.querySelector('.prob').children.length;
//         let p1 = document.querySelector('.prob').children
//          if(po >= 1){
//            document.querySelector(cor).remove();
//          }
        
        
// };

//  clikmNad(c){
//     let cl = document.querySelector('#btn4').addEventListener('click',()=>{
//         del('.img1:first-child')
        
//         creat(c)
//          this.c--;
//          if(c <= 0){
//              this.c = 2 
//          }
//         })
// }       
// }

// let eveo = new slad()

// eveo.clikm()

