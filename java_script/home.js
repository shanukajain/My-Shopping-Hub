let seconal_update=[
    {
        src:"https://rukminim1.flixcart.com/image/416/416/kaijgy80/showpiece-figurine/e/f/d/1739-continental-original-imafsfydbzjzqypv.jpeg?q=70",
        title:"home gifts",
        details:"Gift-ready home goods for every on your list."
    },
    {
        src:"https://static.javatpoint.com/list/images/list-of-kitchen-items1.png",
        title:"kitchen appliances",
        details:"Small but mighty tools that make food prep a breeze"
    },
    {
        src:"https://m.media-amazon.com/images/I/71w8TqPmI7L._SY550_.jpg",
        title:"Chistmas trees",
        details:"The prefect palce to put those prefect gifts."
    },
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShONbD626SBNKBSpOhQ1m5HLL-3tqtiz4_99WS5ma9DmHYrFOs9mjL_L5KkBGqrzGmj4U&usqp=CAU",
        title:"holiday decor",
        details:"Deck your halls with the seacon's festive finest."
    },
    {
        src:"https://m.media-amazon.com/images/I/81ueBynmpkL._SL1500_.jpg",
        title:"Faux fur blankets",
        details:"Snuggle-up with guilt-free throws that are ultra cozy."
    },
    {
        src:"https://cdn.shopify.com/s/files/1/1353/1137/files/587469_large.jpg?v=1533157539",
        title:"Serveware",
        details:"serve up a festive feast with stylish & functional serving essentials."
    },
    {
        src:"https://m.media-amazon.com/images/I/711UR8qcWSL._SX355_.jpg",
        title:"Jute rugs",
        details:"Natural style meets unbeatable durability in this classic rug material."
    },
    {
        src:"https://i.pinimg.com/564x/c7/4f/a5/c74fa5522cd30a1d31e35de3eb39644a.jpg",
        title:"Small space furniture",
        details:"give yourself breathing room with furniture both pint-size& pretty."
    }
]
let frame=4;
let S_frame=0;
display(S_frame);
document.querySelector("#prev").addEventListener("click",prev);
document.querySelector("#next").addEventListener("click",next);
function prev(){
S_frame--;
if(S_frame<0){
    S_frame=7
}
display(S_frame);
}
function next(){
    S_frame++;
    if(S_frame>7){
        S_frame=0
    }
   display(S_frame);
}
function display(S_frame){
    document.querySelector("#seconal_update").innerText="";
    let s=S_frame
  for(i=0;i<frame;i++){
    if(s==8){
        s=0;
    }
    let div=document.createElement("div");
    let images=document.createElement("img");
    images.setAttribute("src",seconal_update[s].src)
    let h3=document.createElement("h3");
    h3.innerText=seconal_update[s].title;
    let p=document.createElement("p");
    p.innerText=seconal_update[s].details
    s++;
    div.append(images,h3,p);
    document.querySelector("#seconal_update").append(div);
  }  
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
