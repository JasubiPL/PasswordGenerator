let password = [];
let passwordFinal = "";
let longitud = 90;
let abc = ["0","1","2","3","4","5","6","7","8","9",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];//62 caracteres


function aleatorio(){
    for(x=1;x<=longitud;x++){
        password.push(Math.floor(Math.random()*62));
    }
    
    //console.log(password);
    conversor();
}

function conversor(){
    //console.log(password);
    for(i=0;i<=password.length -1;i++){
        
        password[i] = abc[password[i]];
        //console.log(password);
    }
    
    
    //console.log(password);
    union();
}

function union(){
    for(y=0;y<=password.length -1;y++){
        passwordFinal += password[y];
    }
    
    respuesta();
    
}

function respuesta(){
    console.log(passwordFinal);
}


console.log(aleatorio());