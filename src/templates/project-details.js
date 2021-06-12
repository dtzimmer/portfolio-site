import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  console.log("THIS DATA HERE", data)
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.details}>
          <h2>{title}</h2>
          <h3>{stack}</h3>
        </div>
        <GatsbyImage image={getImage(featuredImg)} alt={title} />
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
      }
    }
  }
`
