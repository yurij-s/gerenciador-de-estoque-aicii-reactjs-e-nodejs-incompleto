import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Validation from './ItemValidation'
import axios from 'axios'


function Home() {
    
    const [values, setValues] = useState({
        item: '',
        quantidade: '',
        preço: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.item === "" && errors.quantidade === "" && errors.preço === "") {
            axios.post('http://localhost:8081/home', values)
            .then(res =>{
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    }

    

    return (
        <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Items</h2>
                <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor='item'><strong>Item</strong></label>
                        <input type='text' placeholder='Enter Item' name='item' onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.item && <span className='text-danger'>{errors.item}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='quantidade'><strong>Quantidade</strong></label>
                        <input type='text' placeholder='Quantidade' name='quantidade' onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.quantidade && <span className='text-danger'>{errors.quantidade}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='preço'><strong>Preço</strong></label>
                        <input type='text' placeholder='Preço' name='preço' onChange={handleInput} className='form-control rounded-0'></input>
                        {errors.preço && <span className='text-danger'>{errors.preço}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Home
