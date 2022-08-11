import React from 'react'

import {TeamCard,Image,Proffesion} from './TheTeam.Styles'
import Title from './Title'
import JoseImg from '../../../assets/images/jose.png'
import TemitopeImg from '../../../assets/images/Temitope.png'
import PearlImg from '../../../assets/images/pearl.png'
import RofiatImg from '../../../assets/images/rofiat.png'
import SalamsonImg from '../../../assets/images/salamson.png'
import BlessingImg from '../../../assets/images/blessing.png'
import AriellaImg from '../../../assets/images/ariella.png'
import JoyStellaImg from '../../../assets/images/joystella.png'

function TheTeam() {
  return (
    <>
    
           <Title />
            <TeamCard Bg="#181A1C">
                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={JoseImg} />
                    <div className='Green'>
                    <h5>Joseph Macharia</h5>
                    <p>Full Stack Developer</p>
                    </div>
                </Proffesion>
          
                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={TemitopeImg} />
                    <div className='Green'>
                    <h5>Temitope Ayodele</h5>
                    <p>Product Designer</p>
                    </div>
                </Proffesion>


                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={PearlImg} />
                    <div className='Green'>
                    <h5>Pearl Okoroafor</h5>
                    <p>Full Stack Developer</p>
                    </div>
                </Proffesion>

                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={RofiatImg} />
                    <div className='Green'>
                    <h5>Rofiat Salam</h5>
                    <p>Product Designer</p>
                    </div>
                </Proffesion>

                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={SalamsonImg} />
                    <div className='Green'>
                    <h5>Olabisi Salamson</h5>
                    <p>Product Designer</p>
                    </div>
                </Proffesion>
          
                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={BlessingImg} />
                    <div className='Green'>
                    <h5>Adenusi Blessing</h5>
                    <p>Product Designer</p>
                    </div>
                </Proffesion>


                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={AriellaImg} />
                    <div className='Green'>
                    <h5>Mary Ariella</h5>
                    <p>Product Designer</p>
                    </div>
                </Proffesion>

                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={JoyStellaImg} />
                    <div className='Green'>
                    <h5>Ehibe Joystella</h5>
                    <p>Product Designer</p>
                    </div>
                </Proffesion>

                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={JoseImg} />
                    <div className='Green'>
                    <h5>Joseph </h5>
                    <p>Full Stack Developer</p>
                    </div>
                </Proffesion>
          
                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={JoseImg} />
                    <div className='Green'>
                    <h5>Joseph Macharia</h5>
                    <p>Full Stack Developer</p>
                    </div>
                </Proffesion>


                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={JoseImg} />
                    <div className='Green'>
                    <h5>Joseph Macharia</h5>
                    <p>Full Stack Developer</p>
                    </div>
                </Proffesion>

                <Proffesion Bg="#fff" Color="#fff">
                    <Image src={JoseImg} />
                    <div className='Green'>
                    <h5>Joseph Macharia</h5>
                    <p>Full Stack Developer</p>
                    </div>
                </Proffesion>

                
            </TeamCard>
            
        
        
    </>
  )
}

export default TheTeam