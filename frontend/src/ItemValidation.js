function Validation(values) {
    let error = {}

    if(values.item === '') {
        error.item = 'O nome do item não deve estar vazio'
    }else {
        error.item = ''
    }

    if(values.quantidade === '' || parseFloat(values.quantidade) <= 0) {
        error.quantidade = "A quantidade não deve ser menor ou igual a zero"
    }else {
        error.quantidade = ''
    }

    if(values.preço === '' || parseFloat(values.preço) <= 0) {
        error.preço = "O preço não deve ser menor ou igual a zero"
    } else {
        error.preço = ''
    }

    return error;
}

export default Validation