
const p1=document.getElementById("q")
const p2=document.getElementById("p")
const f1=document.getElementById("fist1")
const f2=document.getElementById("fist2")
const h1=document.getElementById("h1")
const h2=document.getElementById("h2")
const scores=document.getElementsByClassName("score")
const awin=document.getElementById("gwin")
const bwin=document.getElementById("cwin")
const vic=document.getElementById("victory")
const reset=document.getElementById("newgame")
const home=document.getElementById("home")
let p1hit=false
let p2hit=false
let h1hit=false
let h2hit=false

h1.onclick=()=>{
    h1hit=true
}
h2.onclick=()=>{
    h2hit=true
}
p1.onclick=()=>{
    p1hit=true
}
p2.onclick=()=>{
    p2hit=true
}

document.addEventListener("keypress",function(e){
    if(Number(scores[0].innerText)>=100 && Number(scores[1].innerText)<Number(scores[0].innerText))
    {
        awin.innerText="Grey Won"
        awin.style.display="inline"
        home.style.display="inline"
        reset.style.display="inline"
        vic.play()
    }
    else if(Number(scores[1].innerText)>=100 && Number(scores[1].innerText)>Number(scores[0].innerText))
    {
        
        awin.innerText="Color Won"
        home.style.display="inline"
        awin.style.display="inline"
        reset.style.display="inline" 
        vic.play()
    }
    if(e.key==="q"){
        document.getElementById("p1").play()
        f1.style.display="inline"
    setInterval(() => {
        f1.style.display="none"
    }, 400);
    scores[1].innerHTML=Number(scores[1].innerText)-Math.floor(Math.random()*4)+1
}
if(e.key==="p")
{
    f2.style.display="inline"
    setInterval(() => {
        f2.style.display="none"
    }, 400);
    document.getElementById("p2").play()
    scores[0].innerHTML=Number(scores[0].innerText)-Math.floor(Math.random()*4)+1
}
if(e.key==="a"){
    scores[0].innerHTML=Number(scores[0].innerText)+Math.floor(Math.random()*3)+1
    document.getElementById("hel").play()
    
}
if(e.key==="l"){
        scores[1].innerHTML=Number(scores[1].innerText)+Math.floor(Math.random()*3)+1
        document.getElementById("hel").play()
    }
})
document.addEventListener("click",function(e){
    if(Number(scores[0].innerText)>=100 && Number(scores[1].innerText)<Number(scores[0].innerText))
    {
        awin.innerText="Grey Won"
        awin.style.display="inline"
        home.style.display="inline"
        reset.style.display="inline"
        vic.play()
    }
    else if(Number(scores[1].innerText)>=100 && Number(scores[1].innerText)>Number(scores[0].innerText))
    {
        
        awin.innerText="Color Won"
        home.style.display="inline"
        awin.style.display="inline"
        reset.style.display="inline" 
        vic.play()
    }
    if(p1hit){
        document.getElementById("p1").play()
        f1.style.display="inline"
    setInterval(() => {
        f1.style.display="none"
    }, 400);
        scores[1].innerHTML=Number(scores[1].innerText)-Math.floor(Math.random()*4)+1
        p1hit=false
    }
    if(p2hit)
    {
        f2.style.display="inline"
    setInterval(() => {
        f2.style.display="none"
    }, 400);
        p2hit=false
        document.getElementById("p2").play()
        scores[0].innerHTML=Number(scores[0].innerText)-Math.floor(Math.random()*4)+1
    }
    if(h1hit)
    {
        h1hit=false
        scores[0].innerHTML=Number(scores[0].innerText)+Math.floor(Math.random()*3)+1
        document.getElementById("hel").play()
    }
    if(h2hit)
    {
        h2hit=false
        scores[1].innerHTML=Number(scores[1].innerText)+Math.floor(Math.random()*3)+1
        document.getElementById("hel").play()
    }
})

const homeFun=()=>{
    window.location.replace("../index.html")
}