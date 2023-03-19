import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyles'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Roger Woellner</Name>
        <Function>FullStack Developer</Function>
        <Intro>Estou no 3° semestre em Análise e Desenvolvimento, 
          tenho experiência em desenvolvimento Web
          (React, PHP, JS, HTML, CSS, Python, entre outros).
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/roger.jpg" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
