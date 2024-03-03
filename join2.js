let Name = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("pasword");
let cfrm= document.getElementById("Cpass");
let a = document.getElementById("sign");
document.forms[0].onsubmit = function(e){
    let nom = false;
    let Email = false;
    let password = false;
    let confirm = false;
    let test_name = /^[A-Z]/;
    let test_gmail = /@gmail.com$/;
    let test_pass = /^[A-Z].+[0-9]/;
    if(Name.value !== "" && test_name.test(Name.value) === true){
        nom = true;
        document.getElementById("n").textContent ="";
    }
    else{
        document.getElementById("n").textContent ="invalide Name";
    }
    if(email.value !== "" && test_gmail.test(email.value) === true){
        Email = true;
        document.getElementById("em").textContent ="";
    }
    else{
        document.getElementById("em").textContent ="invalide gmail";
    }
    if(pass.value !== "" && test_pass.test(pass.value) === true){
        password = true;
        document.getElementById("pas").textContent ="";
    }
    else{
        document.getElementById("pas").textContent ="invalide password";
    }
    
    if(cfrm.value !== "" && cfrm.value === pass.value){
        confirm = true;
        document.getElementById("conf").textContent ="";
    }
    else{
        document.getElementById("conf").textContent ="not the same password";
    }
    if(nom === false|| Email === false || password === false || confirm === false ){
        e.preventDefault();
        
    }
    if(nom === true && Email === true && password === true && confirm === true ){
        e.preventDefault();
        a.click();
    }
    
    
    
    
}