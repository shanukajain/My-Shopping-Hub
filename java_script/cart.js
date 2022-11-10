let bag=JSON.parse(localStorage.getItem("Addtocart"));

display(bag);

function display(bag){
    let price=0;
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
        price+=Number(elem.price);
        console.log(price);
        let rating=document.createElement("p")
        rating.innerText="Rating(out of 100):"+elem.ratings
        let butt=document.createElement("button")
        butt.innerText="Delete";
        butt.addEventListener("click",function(){
            deleterow(i)
        });
        div.append(imge,h3,cost,rating,butt);
        document.querySelector("#list").append(div);
    });
    document.querySelector("#totalprice").innerText="Total Price :"+price;

}
function deleterow(i){
bag.splice(i,1);
localStorage.setItem("Addtocart",JSON.stringify(bag));
display(bag)
}