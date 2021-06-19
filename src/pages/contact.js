import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function Contact() {
  return (
    <Layout>
      <Link className={styles.backbutton} to="/">
        &laquo; Back to Home
      </Link>
      <div className={styles.about}>
        <h2>Contact Me</h2>
        <h3>daniel.zimmerman@gmail.com</h3>
      </div>
    </Layout>
  )
}
