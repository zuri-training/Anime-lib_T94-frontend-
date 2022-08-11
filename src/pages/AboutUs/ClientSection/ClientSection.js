import React from 'react'

import {ClientStyled} from './ClientSection.styles'
import Title from './Title'
import Zuri from '../../../assets/images/zuri.png'
import InternshipImg from '../../../assets/images/internship.svg'
import HNGImg from '../../../assets/images/hng.jpeg'

function ClientSection() {
  return (
    <>
    
        <Title />
       <ClientStyled>
           <div>
            <ul>
                <li>
				      <img src={Zuri} alt="zuri" />
	            </li>
                <li>
				       <img src={InternshipImg} alt="intership" />
			        </li>
                <li>
				          <img src={HNGImg} alt="hng-internship"/>
                </li>
                
                
            </ul>
            </div>
            
	
    </ClientStyled>
   
    </>
  )
}

export default ClientSection