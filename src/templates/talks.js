import React from "react";
import Layout from "../components/layout";
import TalkList from "../components/talkList";
import { graphql } from 'gatsby'

const template =  ({data}) => {
    return (
        <Layout>
            <h1>Talks</h1>
            <p>I have given various talks ranging from web frameworks to Docker</p>

            { data.allSitePage.edges.map (({ node }) => (
                <TalkList data={node.pageContext} key={node.id}/>
            ))}
        </Layout>
    )
}
export default template

export const query = graphql `
    query {
        allSitePage(filter:{ path: { regex: "/(/talks/)([a-z-0-9]+)/" }}) {
            edges {
                node {
                    id
                    pageContext
                }
            }
        }
    }
`