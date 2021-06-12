import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.projects.nodes
  // const image = getImage(data.projects.nodes.frontma)

  // console.log("IMMMMMAAAGGGEEE", image)

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and Websites</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={getImage(
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  )}
                  alt={project.frontmatter.title}
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

//export projects query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [PNG, AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
  }
`
