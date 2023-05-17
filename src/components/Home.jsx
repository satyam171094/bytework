import React from 'react'
import vg from "../assets/2.webp"
import {BsFacebook, BsApple, BsMicrosoft,BsWhatsapp} from "react-icons/bs"

const Home = () => {
  return (
      <>
    <div className='home' id='home'>
        <main>
            <h1>ByteWorks</h1>
            <p>Unlocking digital possibilities through innovative IT solutions.</p>
        </main>
    </div>    
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
            We are your one and only solutions to  tech problems your face
            every day. We are leading tech companty whose aim is to
            increase the problem solving ability in children.
        </p>
    </div>
    </div>
    <div className='home3' id='about'>
        <div>
            <h1>Who We are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni ipsa, in neque impedit repudiandae eveniet, quaerat voluptas ad cum necessitatibus similique blanditiis corrupti rerum. Doloremque possimus maxime debitis dolore in! Iure eum cumque, rerum, ducimus harum unde repellat molestiae ut illo reiciendis voluptas pariatur tempore eveniet. Quia, accusamus quae.</p>
        </div>
    </div>
    <div className="home4" id='brands'>

        <div>
            <h1>Brands</h1>
            <article>

                <div style = {{
                    animationDelay: "0.3s",
                }}>
               <BsFacebook />
               <p>facebook</p>
                </div>

                <div style = {{
                    animationDelay: "0.5s",
                }}>
               <BsApple />
               <p>Apple</p>
                </div>

                <div style = {{
                    animationDelay: "0.7s",
                }}>
               <BsMicrosoft />
               <p>Microsoft</p>
                </div>

                <div style = {{
                    animationDelay: "1s"
                }}>
               <BsWhatsapp />
               <p>whatsapp</p>
                </div>

            </article>
        </div>
    </div>

      </>
  )
}

export default Home
