let btn = document.getElementById('btn')
// btn.addEventListener('click', ()=>{
//     document.querySelector('.box').innerText = 'I am clicked'
// })
// btn.addEventListener('dblclick', ()=>{
//     document.querySelector('.box').innerText = 'I am clicked'
// })
btn.addEventListener('contextmenu', ()=>{
    document.querySelector('.box').innerText = 'I am clicked'
})

document.addEventListener("click", (e) => {
    if (e.target.id === "btn") {
        console.log("Clicked dynamically");
    }
    
});
document.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target.id === 'btn');
    
});