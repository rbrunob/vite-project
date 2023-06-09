import React, { useState } from 'react';
import './Form.module.css';


const Form = ({ user }) => {
    // gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role);
        setName('');
        setEmail('');
        setBio('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">
                    <span>Nome:</span>
                    <input type="text" name="name" placeholder='Digite seu nome' onChange={handleName} value={name} />
                </label>
                <label htmlFor="mail">
                    <span>E-mail:</span>
                    <input type="email" name="mail" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                <label htmlFor="text">
                    <span>Biografia</span>
                    <textarea name="text" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                <label htmlFor="">
                    <span>Função no sistema</span>
                    <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="adim">Adminitrador</option>
                    </select>
                </label>

                <button type="submit" value="Enviar">Enviar</button>

            </form>
            <div>
                Bem vindo, <strong>{name}</strong>, o seu novo e-mail é <strong>{email}</strong>
            </div>
        </>
    )
}

export default Form