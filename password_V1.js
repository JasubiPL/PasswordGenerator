let password = [];
let passwordFinal = "";
const btnGenerar = document.getElementById("generar").addEventListener("click", start);
const abc = ["0","1","2","3","4","5","6","7","8","9",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];//62 caracteres

function start(){
    let getLenght = document.getElementById("inputLenght").value;
    for(x=1;x<=getLenght;x++){
        password.push(Math.floor(Math.random()*62));
    }
    
    conversor();
}

function conversor(){
    for(i=0;i<=password.length -1;i++){
        
        password[i] = abc[password[i]];
        
    }
    
    
    
    union();
}

function union(){
    for(y=0;y<=password.length -1;y++){
        passwordFinal += password[y];
    }
    
    respuesta();
    
}

function respuesta(){
    let getPassword = document.getElementById("inputPassword");
    let getLenght = document.getElementById("inputLenght");
    getPassword.value = passwordFinal;
    getLenght.value = "";
    console.log(passwordFinal);
    //getPassword.value(passwordFinal);
    password = [];
    passwordFinal="";
}


//start();