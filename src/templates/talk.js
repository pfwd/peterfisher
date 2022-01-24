import React from "react";
import Layout from "../components/layout";
import {graphql} from 'gatsby'

const template = ({data}) => {
    let talk = data.allSitePage.edges[0].node.pageContext
    return (<>
        <Layout>
            <h2>{talk.title}</h2>
            <h3>Events</h3>
            <ul>
                {talk.events.map(event => (
                    <li><a href={event.link} target={'_blank'} rel="noreferrer">{event.title}</a> in {event.location} {event.date}</li>
                ))}
            </ul>
        </Layout>
    </>)
}
export default template

export const query = graphql`
    query($path: String!) {
        allSitePage(filter:{ path: { eq: $path }}) {
            edges {
                node {
                    id
                    pageContext
                }
            }
        }
    }
`