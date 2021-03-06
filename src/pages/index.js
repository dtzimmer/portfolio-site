import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const languageImages = data.languages.nodes

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.details}>
          <h2>Quality</h2>
          <h3>Develop & Design</h3>
          <h4>Quality Assurance & Front-end Software Engineer</h4>
        </div>
      </section>
      <div>
        <Link className={styles.btn} to="/projects">
          My Portfolio Projects
        </Link>
      </div>
      <div>
        <Link className={styles.btn} to="/about">
          Work Experience
        </Link>
      </div>
      <div>
        <Link className={styles.btn} to="/contact">
          Contact Me
        </Link>
      </div>
      <section className={styles.section}>
        <div className={styles.details}>
          <h3>Skills</h3>
          <p>
            Professional Experience in coding with these languages and tools
          </p>
        </div>
        <div className={styles.container}>
          {languageImages.map((language, index) => (
            <div key={index}>
              <GatsbyImage
                image={getImage(...language.childrenImageSharp)}
                alt={language.name}
              />
              <p>{language.name}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Collaboration {
    languages: allFile(filter: { relativeDirectory: { eq: "languages" } }) {
      nodes {
        childrenImageSharp {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [PNG, AUTO, WEBP]
          )
        }
        name
        id
      }
    }
  }
`
