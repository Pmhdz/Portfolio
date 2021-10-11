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
        <p> I am a Software Engineer in Atlanta, looking to contribute my ability to build and work on applications with a team of highly motivated individuals</p>
        <br></br>
        <p> I was first exposed to coding in 8th grade and found interest in it ever since. I fell in love with the satisfaction you get at the end of all your hard work, nothing beats running through your whole application and it running smoothly. On my free time, I enjoy playing old and new video games, traveling, or spending time with my family.  </p>
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
