
function addTaskInput() {
    document.getElementById("main").style.filter = "blur(8px)";
    document.getElementById("something").style.visibility =
      "visible";
      document.getElementById("e").style.display = "none";
  }

  
const taskList = [];
const addTask = () => {
    const name = document.getElementById("tt").value;
    // console.log(name);

    const tempObj = {
        id: Date.now(),
        taskName: name,
    }
    taskList.push(tempObj);
    // console.log(taskList);
    addTaskOnScreen();
    addEventListener("click",loose())
}



const addTaskOnScreen = () => {
    const element = document.createElement("div");
    element.setAttribute("class", "child");
    let exstingElement = document.getElementById("imagine");
    exstingElement.appendChild(element);
    element.innerText = taskList[taskList.length - 1].taskName;
    let line = document.createElement("hr");
     let tyty= document.createElement("ul");
  tyty.setAttribute("id","ool")
  tyty.setAttribute("type","none");

   
   
let icon1= document.createElement("i");
icon1.setAttribute("class","fa-solid fa-trash-can");
icon1.setAttribute("onclick","dlt()")
let icon2 = document.createElement("i");
icon2.setAttribute("class","fa-sharp fa-solid fa-circle-plus");
icon2.setAttribute("onclick","addflaskInput()")


    element.appendChild(line);

    element.appendChild(icon1);

    element.appendChild(icon2);
    
    element.appendChild(tyty);
    
   
}

function loose() {
  document.getElementById("main").style.filter = "blur(0px)";
  document.getElementById("something").style.visibility =
    "hidden";
    
   
}

function addflaskInput() {
  document.getElementById("main").style.filter = "blur(8px)";
  document.getElementById("imp").style.visibility =
    "visible";
   
}
function looseb() {
  document.getElementById("main").style.filter = "blur(0px)";
  document.getElementById("imp").style.visibility =
    "hidden";
    
   
}


function as(){
 
  
  let  name1  = document.getElementById("yy").value;
  
  let ool=document.getElementById("ool")

 
let listaa =document.createElement("li");

listaa.textContent=name1;
ool.appendChild(listaa);
addEventListener("click",looseb())

}
function dlt(){

}