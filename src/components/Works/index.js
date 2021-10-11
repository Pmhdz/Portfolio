import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Content from "../Common/Content"
import Wrapper from "../Common/Wrapper"

import { WorksContainer, WorkItem, WorkImage} from "./styled"


const Works= () => (
    <>
        <Wrapper>
            <Content>
                <h1>Projects</h1>
                <p>Here are some projects that i have worked on so far. They are also visible on my GitHub.</p>
                  <ul>
                  <li> <a href="https://pmhdz.github.io/PabloProject-Client/">Tic Tac Toe</a> </li>
                  <li> <a href="https://pmhdz.github.io/carsales-client/">Car Sales</a> </li>
                  <a href="https://agents-dev-team-project-3.github.io/lean2/">Lean2 E-COM</a> 
                  <li><a href="https://pmhdz.github.io/tickets-react/">Pick It Ticket</a> </li>
                </ul>
                <WorksContainer>
                    <WorkItens/>
                </WorksContainer>
            
            </Content>
        </Wrapper>
    </> 
)

const WorkItens = () => {
    const data = useStaticQuery(graphql`
    {
        allFile(filter: {relativeDirectory: {eq: "works"}}) {
          edges {
            node {
              childImageSharp {
                id
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)
      
    return (
        <WorkItem>
          {data.allFile.edges.map((image, key) => (
                <a href="https://github.com/Pmhdz" target="_blank" rel="noopener noreferrer">
                    <WorkImage
                        key={key}
                        fluid={image.node.childImageSharp.fluid}
                    />
                </a>
            ))}
        </WorkItem>
      )

}

export default Works
