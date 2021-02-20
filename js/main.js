function validate(){
    let uname = document.getElementById("username").value;
    let message = document.getElementById("usermsg");
   
    if (uname == "")  {
        alert("please");
        message.style.display = "block";
        // setTimeout(function () {
        // message.style.display = "none";
        // },6000);
    } 
}

