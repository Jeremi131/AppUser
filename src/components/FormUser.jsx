import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues.js'
import './styles/formUser.css'

const FormUser = ({ createNewUser, updateInfo, updateUserById, handleClose, setUpdateInfo }) => {

    const { reset, register, handleSubmit } = useForm()

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])


    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
        } else {
            createNewUser(data)
        }
        handleClose()
        reset(defaultValues)
    }

    const handleCancel = () => {
        reset(defaultValues)
        setUpdateInfo()
        handleClose()
    }



    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <h2 className='form_tittle'>New User</h2>
            <div onClick={handleCancel}><i className='bx box_closed bx-x'></i></div>
            <div className='form_item'>
                <label className='form_label' htmlFor="firstName">
                    <i className='bx box_label bxs-user' ></i>First Name</label>
                <input className='form_input' {...register('first_name')} type="text" id='firstName' />

            </div>
            <div className='form_item'>
                <label className='form_label' htmlFor="lastName">
                    <i className='bx box_label bxs-user' ></i>Last Name</label>
                <input className='form_input' {...register('last_name')} type="text" id='lastName' />

            </div>
            <div className='form_item'>
                <label className='form_label' htmlFor="email">
                    <i className='bx box_label bxs-envelope' ></i>Email</label>
                <input className='form_input' {...register('email')} type="email" id='email' />
            </div>
            <div className='form_item'>
                <label className='form_label' htmlFor="password">
                    <i className='bx box_label bxs-key' ></i>Password</label>
                <input className='form_input' {...register('password')} type="password" id='password' />
            </div>
            <div className='form_item'>
                <label className='form_label' htmlFor="birthday">
                    <i className='bx box_label bxs-cake'></i>Birthday</label>
                <input className='form_input' {...register('birthday')} type="date" id='birthday' />
            </div>
            <button className='form_btn'>{ updateInfo ? 'Update' : 'Add a new user'}</button>
        </form>
    )
}

export default FormUser