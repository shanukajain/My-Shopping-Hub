let url="https://636bf9d17f47ef51e13f6a6d.mockapi.io/furniture_products";
let bag=[]
let card=JSON.parse(localStorage.getItem("Addtocrat"))||[];
fetch(url)
.then((res)=> res.json())
.then((data)=>{
bag=data;
console.log(data);
console.log(bag);
display(bag);
})
.catch((err)=>console.log(err))
function display(bag){
    document.querySelector("#list").innerHTML="";
    bag.forEach(function(elem,i){
        
        let div=document.createElement("div");
        let imge=document.createElement("img")
        imge.setAttribute("src",elem.image);
        let h3=document.createElement("h3")
        h3.innerText=elem.Product_name;
        let des=document.createElement("p")
        des.innerText=elem.description;
        let cost=document.createElement("p")
        cost.innerText="Price : "+elem.price;
        let rating=document.createElement("p")
        rating.innerText="Rating(out of 100):"+elem.ratings
        let butt=document.createElement("button")
        butt.innerText="Add to crat";
        butt.addEventListener("click",function(){
            card.push(elem);
            localStorage.setItem("Addtocart",JSON.stringify(card));
        });
        div.append(imge,h3,cost,rating,butt);
        document.querySelector("#list").append(div);
    });
}