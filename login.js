function check()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="Henry" && password=="1234")
    {
            
            window.location.href="home.html";
           
        }

    else
    {
        alert("no");
    }   

}