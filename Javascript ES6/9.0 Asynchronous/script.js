const btn = document.querySelector('button')

// btn.('button', 'click', function onClick(){
//     setTimeout(function timer(){
//         console.log("You clicked a button")
//     }, 2000);
// });

btn.addEventListener('click', function onClick(){
    setTimeout(function timer(){
        console.log("You clicked a button")
    }, 2000)
} )

console.log("HI");
    
setTimeout(function timeOut(){
    console.log("Click a button!")
}, 5000);

console.log("Welcome Dewi Kumala Putri Firdaus")