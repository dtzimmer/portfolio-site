import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg, url } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Link className={styles.backbutton} to="/projects">
        &laquo; Back to Projects
      </Link>
      <div className={styles.container}>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h3>{stack}</h3>
        </div>
        <a href={url} target="_blank" rel="noreferrer">
          <GatsbyImage image={getImage(featuredImg)} alt={title} />
        </a>
      </div>
      <div className={styles.htmlcontainer}>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectPages($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [PNG, AUTO, WEBP]
            )
          }
        }
        url
      }
    }
  }
`
