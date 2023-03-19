import React, { useEffect, useState } from 'react'
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './style'

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([])

  useEffect(() => {
    let abortController = new AbortController(); 

    function getGitHubAPI() {
      fetch('https://api.github.com/users/RogerWoellner/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        var data = await res.json()
        setItemsApi(data)
      })
      .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();  
  }, [])

  return (
    <Container>
     <Content>
     <a href="https://choperiaharden.netlify.app/" target="_blank">
      <img class="img" src="/images/logo_harden.jpg" alt="harden" />
      <p>Site da Choperia Harden</p>
      <p>HTML, CSS e JavaScript</p> 
     </a>
     </Content>
     <Content>
     <a href="https://github.com/RogerWoellner/HealthCare-PHP/tree/main/Trabalho_novo" target="_blank">
      <img class="img" src="/images/healthcare.jpg" alt="healthcare" />
      <p>Health Care</p>
      <p>Site em PHP</p> 
     </a>
     </Content>
     <Content>
     <a href="https://simplejumpgameroger.netlify.app/" target="_blank">
      <img class="img" src="/images/mario.png" alt="mario" />
      <p>Jump Game</p>
      <p>Usando JavaScript, HTML e CSS</p> 
     </a>
     </Content>
     <Content>
     <a href="https://rogercalculator.netlify.app/" target="_blank">
      <img class="img" src="/images/calculadora.PNG" alt="calculadora" />
      <p>Calculadora</p>
      <p>HTML, CSS e JavaScript</p> 
     </a>
     </Content>
   </Container>
  )
}