let url="https://636bf9d17f47ef51e13f6a6d.mockapi.io/furniture_products";
let bag=[]
let bag1=[]
let card=JSON.parse(localStorage.getItem("Addtocrat"))||[];
console.log(card);
fetch(url)
.then((res)=> res.json())
.then((data)=>{
bag=data;
console.log(data);
console.log(bag);
filter_bag(bag);
})
.catch((err)=>console.log(err));
function filter_bag(bag){
    let val=localStorage.getItem("filter");
     bag1=bag.filter(function(ele){
        return ele.product==val;
    });
    display(bag1);
}
function display(bag){
    let card=JSON.parse(localStorage.getItem("Addtocart"))||[];
    console.log(card);
    document.querySelector("#list").innerHTML="";
    bag.forEach(function(elem,i){
        let div=document.createElement("div");
        let a=document.createElement("a");
        a.href="individualproduct.html"
        let imge=document.createElement("img")
        imge.setAttribute("src",elem.image);
        imge.addEventListener("click",function(){
            localStorage.setItem("product",JSON.stringify(elem));
        });
        a.append(imge);
        let h3=document.createElement("h3")
        h3.innerText=elem.Product_name;
        let des=document.createElement("p")
        des.innerText=elem.description;
        let cost=document.createElement("p")
        cost.innerText="Price : "+elem.price;
        let rating=document.createElement("p")
        rating.innerText="Rating(out of 100):"+elem.ratings
        let butt=document.createElement("button")
        butt.innerText="Add to cart";
        butt.addEventListener("click",function(){
            card.push(elem);
            console.log(card);
            localStorage.setItem("Addtocart",JSON.stringify(card));
        });
        div.append(a,h3,cost,rating,butt);
        document.querySelector("#list").append(div);
    });
}
function furniture(){
    let p="Chips";
    localStorage.setItem("filter",p);
}
function furniture1(){
    let p="Car";
    localStorage.setItem("filter",p);
}function furniture2(){
    let p="Towels";
    localStorage.setItem("filter",p);
}function furniture3(){
    let p="Hat";
    localStorage.setItem("filter",p);
}function furniture4(){
    let p="Pizza"
    localStorage.setItem("filter",p);
}function furniture5(){
    let p="Salad";
    localStorage.setItem("filter",p);
}function furniture6(){
    let p="Shirt";
    localStorage.setItem("filter",p);
}function furniture7(){
    let p="Shoes";
    localStorage.setItem("filter",p);
}function furniture8(){
    let p="Ball";
    localStorage.setItem("filter",p);
}function furniture9(){
    let p="Computer";
    localStorage.setItem("filter",p);
}
function rate(){
    bag1.sort(function(a,b){return(a.ratings-b.ratings)});
    console.log(typeof(bag1[1].ratings));
    display(bag1);
}
function price(){
    bag1.sort(function(a,b){return(a.price-b.price)});
    display(bag1);
}