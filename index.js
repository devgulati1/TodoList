var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.getElementById("bd");
var button=document.getElementById("btn");
var input=document.getElementById("input");
var ul=document.querySelector("ul");

function setGradient(){
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
}
function inputtext(){
    return input.value.length;
  }
  function createList(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
  
  
  li.addEventListener("click",function(){
    var finished=this.classList.toggle("done");
    var removeButton=document.createElement("button");
    removeButton.classList.add("deleteButton");
    if(finished){
      removeButton.appendChild(document.createTextNode("remove"));
      
      
      li.appendChild(removeButton);
      removeButton.addEventListener("click",function(){
        this.parentElement.remove();
      });
    }
  })
  }
  
  
  
  
  function createListAfterClick(){
    if(inputtext()>0){
      createList();
  }
  }
  function createListAfterPress(){
    if(inputtext()>0 && event.which===13){
      createList();
     }
  }
  
  






color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);



button.addEventListener("click",createListAfterClick);
input.addEventListener("keypress",createListAfterPress);
    
    
