window.onload = ()=>{
    console.log("Message from producer.");
    document.querySelector("#key").innerHTML = Math.random(9)*100;
}