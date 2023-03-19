import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <a href="https://www.linkedin.com/in/roger-woellner-568a5a95/ " target={'_blank'}>
        <ItemContact
          IconFa={FaLinkedin} 
          LinkContact= "https://www.linkedin.com/in/roger-woellner-568a5a95/ " 
        />
        </a>
        <a href="https://github.com/RogerWoellner" target={'_blank'}>
        <ItemContact
          IconFa={FaGithub} 
          LinkContact= "https://github.com/RogerWoellner " 
        />
        </a>
        <a href="mailto: rogerwoellner8@gmail.com " target={'_blank'}>
        <ItemContact
          IconFa={FaEnvelope} 
          LinkContact= "rogerwoellner8@gmail.com" 
        />
        </a>
      </Content>
    </Container>
  )
}