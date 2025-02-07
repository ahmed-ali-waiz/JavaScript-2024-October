let btn1 = document.querySelector("#button1")
let btn2 = document.querySelector("#button2")
let btn3 = document.querySelector("#button3")
let btn4 = document.querySelector("#button4")
let btn5 = document.querySelector("#button5")

let box = document.querySelector(".box")

let h = document.querySelector("h2")


let flag = 0;

btn1.addEventListener("click",()=>{

    if (flag===0) {
        box.style.backgroundColor = "red";
     h.innerHTML = "Red";
     h.style.color = "white";
     btn1.innerHTML = "white"
     btn1.style.backgroundColor = "gray"
     flag = 1
    }
    else{
        box.style.backgroundColor = "white";
        h.innerHTML = "White";
        h.style.color = "black";
        btn1.innerHTML = "red"
     btn1.style.backgroundColor = "red"
        flag = 0
    }
     
})
btn2.addEventListener("click",()=>{

    if (flag===0) {
        box.style.backgroundColor = "green";
     h.innerHTML = "Green";
     h.style.color = "white";
     btn2.innerHTML = "white"
     btn2.style.backgroundColor = "gray"
     flag = 1
    }
    else{
        box.style.backgroundColor = "white";
        h.innerHTML = "White";
        h.style.color = "black";
        btn2.innerHTML = "green"
     btn2.style.backgroundColor = "green"
        flag = 0
    }
     
})
btn3.addEventListener("click",()=>{

    if (flag===0) {
        box.style.backgroundColor = "yellow";
     h.innerHTML = "Yellow";
     h.style.color = "black";
      btn3.innerHTML = "white"
     btn3.style.backgroundColor = "gray"
     flag = 1
    }
    else{
        box.style.backgroundColor = "white";
        h.innerHTML = "White";
        h.style.color = "black";
         btn3.innerHTML = "yellow"
     btn3.style.backgroundColor = "yellow"
        flag = 0
    }
     
})
btn4.addEventListener("click",()=>{

    if (flag===0) {
        box.style.backgroundColor = "blue";
     h.innerHTML = "Blue";
     h.style.color = "white";
      btn4.innerHTML = "white"
     btn4.style.backgroundColor = "gray"
     flag = 1
    }
    else{
        box.style.backgroundColor = "white";
        h.innerHTML = "White";
        h.style.color = "black";
         btn4.innerHTML = "blue"
     btn4.style.backgroundColor = "blue"
        flag = 0
    }
     
})

btn5.addEventListener("click",()=>{

    if (flag===0) {
        box.style.backgroundColor = "Black";
     h.innerHTML = "Black";
     h.style.color = "white";
      btn5.innerHTML = "white"
     btn5.style.backgroundColor = "gray"
     flag = 1
    }
    else{
        box.style.backgroundColor = "white";
        h.innerHTML = "White";
        h.style.color = "black";
         btn5.innerHTML = "black"
     btn5.style.backgroundColor = "black"
        flag = 0
    }
     
})