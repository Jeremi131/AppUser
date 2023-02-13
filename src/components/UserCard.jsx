import React from 'react'
import './styles/userCard.css'



const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen}) => {

  const handleDelete = () => {
    deleteUserById(user.id)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpen()
  }

  return (
    <article className='card_item'>
      <h2 className='card_name'><i className='bx box_user bxs-user' ></i>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='card_information'>
        <li className='card_data'>
          <span className='text_data'>EMAIL: </span>
          {user.email}</li>
        <li className='card_data'>
          <span className='text_data'>BIRTHDAY: </span>
          {user.birthday}</li>
      </ul>
      <div className='btn_container'>
        <button className='card_btn_delete' onClick={handleDelete}><i className='bx box_delete bx-trash'></i></button>
        <button className='card_btn_update' onClick={handleUpdate}><i className='bx box_update bxs-edit-alt' ></i></button>
      </div>

    </article>
  )
}

export default UserCard