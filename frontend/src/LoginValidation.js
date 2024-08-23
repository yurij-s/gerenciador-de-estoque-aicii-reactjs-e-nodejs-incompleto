function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    
    if(values.email === '') {
        error.email = 'O nome não deve estar vazio'
    }
    else if(!email_pattern.test(values.email)) {
        error.email = 'Email não corresponde'
    }else {
        error.email = ''
    }

    if(values.password_pattern === '') {
        error.password = 'A senha não deve estar vazia'
    }
    else if(!password_pattern.test(values.password)) {
        error.password = 'Senha não corresponde'
    }else {
        error.password = ''
    }
    return error;
}

export default Validation