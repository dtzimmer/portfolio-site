import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.projects.nodes

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects and Websites</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <div>
              <GatsbyImage
                image={getImage(
                  project.frontmatter.thumb.childImageSharp.gatsbyImageData
                )}
                alt={project.frontmatter.title}
              />
              <div className={styles.buttoncontainer}>
                <Link
                  to={"/projects/" + project.frontmatter.slug}
                  key={project.id}
                >
                  Details
                </Link>
                <a
                  href={project.frontmatter.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
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
          url
        }
        id
      }
    }
  }
`
