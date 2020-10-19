function verify_input(value,regex,input){
    if(regex.test(value)) input.style.borderBottom="2px solid #4AD991";
    else if(value.length==0) input.style.borderBottom="1px solid #fff";
    else input.style.borderBottom="2px solid #FF6565";

    return regex.test(value);
}

function verify_textarea(value,regex,input){
    if(regex.test(value)) input.style.border="2px solid #4AD991";
    else if(value.length==0) input.style.border="1px solid #ced4da";
    else input.style.border="2px solid #FF6565";

    return regex.test(value);
}