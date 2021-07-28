let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})
function myFunction() {
        document.getElementById("demo").innerHTML = "my computer";
      }

function yourFunction() {
        document.getElementById("demon").innerHTML = "network";
      }

      function saFunction() {
        document.getElementById("dwarika").innerHTML = "control pannel";
      }
       function lalaguFunction() {
        document.getElementById("hellomoto").innerHTML = "recycle bin";
      }