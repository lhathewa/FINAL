function validate(){
  var messEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
   var password=document.body.querySelector(".password").value;
  
  if(username==="cool"&&password==="password"){
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");
    
  
var pages = [
  
   
  {
    name:"Grade view",
    content:"Grades"
  },
  {
    name:"Add Grade",
    content:"none"
  }
]



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="Add Grade"){
    display.innerHTML=wd;
  }else{
    AddGrade()
      
  }
  
}

function AddGrade(){
  var header = document.createElement("h1");
  header.innerHTML="";
  display.appendChild(header);
  
}

contentWrite(pages[0].content, "Grade view");
    
    
    
    
    
    
    
    
    
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
  }else{
    if(username!=="cool"){messEle.innerHTML="Inorrect username"}
  }
   if(password!=="password"){messEle.innerHTML="Inorrect password"}
  }
  


document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})