function login(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    if(username == 'João Victor' && password == '1234'){
        alert("Aperte OK")
        location.href = "Home.html"
    }else{
        alert("Nome ou Senha inválido!")
    }
}