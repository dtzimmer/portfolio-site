import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const image = getImage(data.file)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Quality</h2>
          <h3>Develop & Design</h3>
          <p>Quality Assurance & Front-end Software Engineer</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={image} alt={data.file.name} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Collaboration {
    file(relativePath: { eq: "Collaboration.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [PNG, AUTO, WEBP]
        )
      }
      name
    }
  }
`
