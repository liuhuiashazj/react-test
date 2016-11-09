import React from 'react'
import Header from '../../components/Header'
import Fnav from '../../components/Fnav'
import Nav from '../../components/Nav'
import './CoreLayout.scss'
import '../../styles/core.scss'


export const CoreLayout = ({ children }) => {
    return ( 
    	< div className = 'container text-center' >
	        < Header / >
	        < Fnav / >
	        
	        < div className = 'right' > { children } < /div> 
        < /div>
    )
}



export default CoreLayout
