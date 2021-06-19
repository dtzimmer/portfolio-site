import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/about.module.css"

export default function About({ data }) {
  const byu = data.history.nodes[5]
  const hawthorn = data.history.nodes[1]
  const helio = data.history.nodes[2]
  const brightbytes = data.history.nodes[3]
  const mastercontrol = data.history.nodes[4]
  const frazil = data.history.nodes[0]
  console.log("YOLO", data)

  return (
    <Layout>
      <Link className={styles.backbutton} to="/">
        &laquo; Back to Home
      </Link>
      <div className={styles.about}>
        <h2>About Me</h2>
        <h3>Background and Work History</h3>
        <div className={styles.timeline}>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div>
                <h3>2014</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className={styles.cardright}>
              <div>
                <GatsbyImage image={getImage(byu)} alt={byu.name} />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div>
                <GatsbyImage image={getImage(hawthorn)} alt={hawthorn.name} />
              </div>
            </div>
            <div className={styles.cardright}>
              <div>
                <h3>2014-2018</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div>
                <h3>2018</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className={styles.cardright}>
              <div>
                <GatsbyImage image={getImage(helio)} alt={helio.name} />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div>
                <GatsbyImage
                  image={getImage(brightbytes)}
                  alt={brightbytes.name}
                />
              </div>
            </div>
            <div className={styles.cardright}>
              <div>
                <h3>2014-2018</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div>
                <h3>2018</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className={styles.cardright}>
              <div>
                <GatsbyImage
                  image={getImage(mastercontrol)}
                  alt={mastercontrol.name}
                />
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div>
                <GatsbyImage image={getImage(frazil)} alt={frazil.name} />
              </div>
            </div>
            <div className={styles.cardright}>
              <div>
                <h3>2014-2018</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query History {
    history: allFile(filter: { relativeDirectory: { eq: "history" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 200, formats: PNG, placeholder: BLURRED)
        }
        name
      }
    }
  }
`
