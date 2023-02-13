import React from 'react'
import './styles/loadingScreen.css'


const LoadingScreen = () => {
    return (
        <div className='load_screen'>
            <i class='bx box_load bxs-user-pin'></i>
            <h1 className='load_text'>LOADING...</h1>
        </div>
    )
}

export default LoadingScreen