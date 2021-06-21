import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/about.module.css"

export default function About({ data }) {
  console.log("DATAAA", data)
  const array = data.workexperience.nodes
  console.log("ARRAY", array)

  const _ = require("lodash")
  let orderedArray = _.orderBy(array, ["name"], ["asc"])

  console.log("ORDERED ARRAY", orderedArray)
  const byu = orderedArray[1]
  const helio = orderedArray[3]
  const brightbytes = orderedArray[0]
  const mastercontrol = orderedArray[4]
  const frazil = orderedArray[2]

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
                <GatsbyImage image={getImage(byu)} alt={byu.name} />
                <h4>2014</h4>
                <p>
                  Graduated from Brigham Young University (Provo) in Elementary
                  Education
                </p>
              </div>
            </div>
            <div className={styles.cardright}>
              <div></div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div></div>
            </div>
            <div className={styles.cardright}>
              <div>
                <h4>2014-2018</h4>
                <p>Taught 4th and 5th Grade in Texas and Utah</p>
                <ul>
                  <li>
                    Integrated effective use of education technology in the
                    classroom to increase learning outcomes in all areas.
                  </li>
                  <li>
                    Supervised and mentored a student teacher to obtain
                    necessary knowledge and skills of effective teaching.
                  </li>
                  <li>
                    Collaborated with grade-level teams to plan effective
                    lessons, assessments, and activities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div>
                <GatsbyImage image={getImage(helio)} alt={helio.name} />
                <h4>2018</h4>
                <p>
                  Graduated from Helio Training with a certification in Full
                  Stack Web Development
                </p>
              </div>
            </div>
            <div className={styles.cardright}>
              <div></div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div></div>
            </div>
            <div className={styles.cardright}>
              <div>
                <GatsbyImage
                  image={getImage(brightbytes)}
                  alt={brightbytes.name}
                />
                <h4>2018</h4>
                <p>
                  Jr. Full-Stack Engineer using JavaScript, React, Redux,
                  Elixir, Postgres
                </p>
                <ul>
                  <li>
                    Developed the front-end of the Impact Tool that measured
                    student performance and growth based on app usage and
                    academic assessments.
                  </li>
                  <li>
                    Collaborated as a team member in an agile-scrum framework to
                    deliver and deploy product updates.
                  </li>
                  <li>
                    Created test coverage using Mocha, Cypress, and Applitools
                    testing libraries and tools.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div>
                <GatsbyImage
                  image={getImage(mastercontrol)}
                  alt={mastercontrol.name}
                />
                <h4>2019</h4>
                <p>
                  Software Quality Engineer I using Selenium (automated
                  testing), Ruby, JavaScript, AngularJS, Java
                </p>
                <ul>
                  <li>
                    Expanded automated test coverage for the Checklist Tool
                    which enabled clients to conduct clinical trials by tracking
                    documentation and assigning tasks.
                  </li>
                  <li>
                    Wrote test plans to ensure quality working software that
                    validated the new features and functionality.
                  </li>
                  <li>
                    Collaborated with team in an agile software development
                    system to deliver features in a timely manner.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.cardright}>
              <div></div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.cardleft}>
              <div></div>
            </div>
            <div className={styles.cardright}>
              <div>
                <GatsbyImage image={getImage(frazil)} alt={frazil.name} />
                <h4>2020</h4>
                <p>
                  Quality Assurance Engineer using SQL, WebDriver.io (automated
                  testing), JavaScript
                </p>
                <ul>
                  <li>
                    Identified, triaged, documented, and tracked defects in Jira
                    and performed manual regression testing and manual database
                    testing to ensure that defects have been resolved on the
                    frontend and backend.
                  </li>
                  <li>
                    Wrote automated testing scripts with WebDriver.io using
                    JavaScript.
                  </li>
                  <li>
                    Helped to architect database designs and SQL queries to
                    improve the efficiency of the Fraznet software.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query WorkExperience {
    workexperience: allFile(
      filter: { relativeDirectory: { eq: "workexperience" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 200, formats: PNG, placeholder: BLURRED)
        }
        name
      }
    }
  }
`
