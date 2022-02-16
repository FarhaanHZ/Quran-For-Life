function enter(){
   adduser=document.getElementById("username").value
   localStorage.setItem("username", adduser);
   window.location="main.html" 
}

