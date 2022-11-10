let acc=JSON.parse(localStorage.getItem("account_details"))||[];
console.log(acc)
function create(event){
    // event.Preventdefault();
let email=document.querySelector("#cemail").value;
let password=document.querySelector("#cpass").value;
let cpassword=document.querySelector("#ccpass").value;
let check=document.querySelector("#ccheck").value;
console.log(email,cpassword,password,check);

    let obj={
        email,
     password
    }
    console.log(obj)
acc.push(obj);
console.log(acc);
localStorage.setItem("account_details",JSON.stringify(acc));
}


document.querySelector("#createaccount").addEventListener("submit",create);
document.querySelector("#Sign_in").addEventListener("submit",signin);
function signin(event){
    let e=0;
    let p=0;
    let email=document.querySelector("#semail").value;
    let passowrd=document.querySelector("#spass").value;
    console.log(email,passowrd)
    acc.forEach(function(ele,i){
        if(ele.email==email){
            e++;
        }
        if(ele.passowrd==passowrd){
            p++;
        }
    });
    if(e<0 || p<0){
        console.log("not");
        event.preventdefault();
    }
}