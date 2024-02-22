document.addEventListener("DOMContentLoaded",function(){
    let error = document.querySelector("#error");
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmpassword").value;

    if(confirmPassword== "" && password==""){
        error.innerHTML = "*passwords do not match";
    }
    else if(confirmPassword == password){
        error.innerHTML = "";
    }
    else{
        error.innerHTML = "*passwords do not match";
    }
})