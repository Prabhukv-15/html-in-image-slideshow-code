const imgs= document.getElementById("imgs")
const pre=document.getElementById("pre")
const nxt=document.getElementById("nxt")
const img = document.getElementById("#imgs img")
let idx=0
let interval= setInterval(run,2000)
function run(){
    idx++
    slideshow()
}
function slideshow(){
    if(idx>img.length-1){
        idx=0
    }else if(idx<0){
        idx=img.length-1
    }
    img.style.transform='translateX(${-idx,700px})'
}
function resetInterval(){
    clearInterval=(setInterval)
    setInterval=(run,2000)
}
.btn nxt addEventListener('click', ()=>{
    idx++;
    slideshow();
    resetInterval();

})
.btn pre addEventListener('click', ()=>{
    idx--;
    slideshow();
    resetInterval();
})
