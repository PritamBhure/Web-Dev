let togglebtn = document.createElement("button")
let currentmode ="light"
togglebtn.innerText="Click me"
document.querySelector("body").append(togglebtn)


togglebtn.addEventListener("click", ()=>{
if (currentmode === "light"){
    currentmode ="dark"
    document.querySelector("body").style.backgroundColor="black"
    console.log(currentmode)
}   
else{
    currentmode ="light"
    document.querySelector("body").style.backgroundColor="White"
    console.log(currentmode)
}

});