import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Wrapper, ImageContainer, IntroContainer} from "./styled"

const Intro = () => (
    <>
    <Wrapper>
      <ImageContainer>
          <Image/>
      </ImageContainer>
      <IntroContainer>
        <header>
          <h1>Hello my name is  <b> <br/>Pablo Maldonado-Hernandez</b></h1>
          <h3>SOFTWARE ENGINEER - ATLANTA</h3>
        </header>
        <p> I am a software engineer from Atlanta area. I am here looking to contribute with my coding experience for an application.</p>
        <br></br>
        <p> Coding is something that I enjoyed a lot since I was exposed in 8th grade. That satisfaction you get when your code able to work and show up makes it looks awesome! If I'm not coding, then I'm either playing video games, traveling, or around with my family.   </p>
        {/* <p>A free, fully responsive gatsby starter template designed by <a target="blank"  href="https://www.twitter.com/matheusquintaes">@matheusquintaes</a> </p>
        <p>You can learn more <a target="blank" href="https://www.gatsbyjs.org/docs/starters/"> about the starters here</a></p> */}
      </IntroContainer>
    </Wrapper>
    </> 
)

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "intro/photo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 386) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}


export default Intro
