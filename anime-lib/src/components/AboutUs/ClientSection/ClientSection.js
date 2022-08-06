import React from 'react'
import {ClientStyled} from './ClientSection.styles'
import Title from './Title'

function ClientSection() {
  return (
    <>
    
        <Title />
       <ClientStyled>
           <div>
            <ul>
                <li>
				      <img src="images/zuri.png" alt="zuri" />
	            </li>
                <li>
				       <img src="images/internship.svg" alt="intership" />
			        </li>
                <li>
				          <img src="images/hng.jpeg" alt="hng-internship"/>
                </li>
                
            </ul>
            </div>
            
	
    </ClientStyled>
   
    </>
  )
}

export default ClientSection