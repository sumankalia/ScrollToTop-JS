function submitForm(event) {
    event.preventDefault()
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var additionalField5 = document.getElementById('additionalField5').value;

    const errors = [];

    if(!firstName){
        document.getElementById('firstNameError').innerText = 'Required';

        errors.push('firstName');
    }else{
        document.getElementById('firstNameError').innerText = '';
    }
    if(!lastName){
        document.getElementById('lastNameError').innerText = 'Required';

        errors.push('lastName');
    }else{
        document.getElementById('lastNameError').innerText = '';
    }
    if(!email){
        document.getElementById('emailError').innerText = 'Required';

        errors.push('email');
    } else {
        document.getElementById('emailError').innerText = '';
    }
    if(!password){
        document.getElementById('passwordError').innerText = 'Required';

        errors.push('password');
    } else {
        document.getElementById('passwordError').innerText = '';
    }
    if(!additionalField5){
        document.getElementById('additionalField5Error').innerText = 'Required';

        errors.push('additionalField5');
    } else {
        document.getElementById('additionalField5Error').innerText = '';
    }



    if(Array.isArray(errors) && errors.length >0){
        console.log({errors})
        const firstError = errors[0]
        let el = document.querySelector(`[name="${firstError}"]`);
    
        if (el) {
        el.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }
    }else{
        console.log({firstName, lastName, email, password, additionalField5})
    }
}