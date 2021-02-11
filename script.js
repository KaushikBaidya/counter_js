//initial count 0
let count = 0;

//select value and buttons

const button = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

button.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const newVariable = e.currentTarget.classList;
        if(newVariable.contains("increase")){
            count++;
        } 
        else if (newVariable.contains("decrease")){
            count--;
        }
        else{
            count = 0;
        }

        value.textContent = count;
    })
})