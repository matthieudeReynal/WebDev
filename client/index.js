//import { strict } from "assert";

console.log("Hello World!");


document.querySelector("#submit")
    .addEventListener("click",function subscribeToNewsletter(event){
        var mail = document.querySelector("#mail").value
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        console.log(mail)

    })