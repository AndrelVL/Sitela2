function logar(){

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if(username == "admin" && password == "admin"){

        location.href = "main2.html";
        

    }else{
        alert('Username or password Inavalid')
    }



}