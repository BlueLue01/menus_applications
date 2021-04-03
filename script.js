var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var count = 0






var pages = [
  {
    title:"Home",
    content:"Home",
  },
  {
    title:"About",
    content:"About",
  },
  {
    title:"Interact",
    content:"Interact",
  }
  
]



for (i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}

function pageMaker(pg){
  this.button = document.createElement("button")
  this.button.addEventListener("click", function(){
    writeStuff(pg.content, pg.title);
  })
  this.button.innerHTML=pg.title;
  nav.appendChild(this.button);
}

function Title(titles){
    display.innerHTML="";
    var headers = document.createElement("h1");
    headers.innerHTML=titles;
    display.appendChild(headers);
}




function Add(clicked){
  count = count + 1;
}


function counter(){
  var buttons = document.createElement("button")
  buttons.innerHTML="Increase Counter";
  var counter = document.createElement("div");
  counter.innerHTML="Counter: 0";
  display.appendChild(counter);
  buttons.addEventListener("click", function(){
      Add(true);
      counter.innerHTML="Counter: " + count;
  }) 
  display.appendChild(buttons);
}
 





function writeStuff(stuff, pg){
  if(pg=="About"){
    Title(pages[1].content);
    var enter = document.createElement("h3");
    enter.innerHTML="Luke Napier";
    display.appendChild(enter);
  }else if(pg!=="Interact"){
    Title(pages[0].content);
  }else{
    Title(pages[2].content);
    counter(true);
  }
}





writeStuff(pages[0].content);