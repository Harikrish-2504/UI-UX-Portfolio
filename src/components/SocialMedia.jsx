import React from 'react'
import {BsGithub ,BsLinkedin} from 'react-icons/bs'
import {FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href='https://www.linkedin.com/in/harikrishnan-r-9a3b33290/' target='_blank'> <BsLinkedin/> </a>
        </div>
        <div>
          <a href="https://github.com/Harikrish-2504" target='_blank'>
          <BsGithub/>
          </a>
           
        </div>
        <div>
            <FaFacebookF/>
        </div>
    </div>
  )
}

export default SocialMedia
