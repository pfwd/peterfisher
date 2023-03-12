import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Peter Fisher PHP Contractor" />
      <ul>
        <li>
          <a href={"/slides/code-with-confidence-using-phpstan.html"}>
            Code with confidence using PHPStan
          </a>
        </li>
      </ul>
    </Layout>
  )
}
export default IndexPage
