// window.onload(
//     alert("teste")
// )
// function handlePayment(){
// }
// let dropdown = document.getElementById("pagemento")
// console.log(dropdown)

function cadastrar(){
    idInput = document.getElementById("username");
    passInput = document.getElementById("password");
    localStorage.setItem(idInput.value, passInput.value);
}

function login(){
    idInput = document.getElementById("username");
    passInput = document.getElementById("password");

    // Object.keys(localStorage).forEach((key) => {
    //     arr.push(localStorage.getItem(key))
    // })
    console.log(localStorage.getItem(idInput.value))
    if(localStorage.getItem(idInput.value) == passInput.value){
        window.location.href = "index.html";
    }else{
        alert("Usuário ou senha inválidos.");
    }
}
