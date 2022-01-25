import React from "react";
import Layout from "../components/layout";
import {graphql} from 'gatsby'
import AboutMe from "../components/aboutMe";

const template = ({data}) => {
    let talk = data.allSitePage.edges[0].node.pageContext
    return (<>
        <Layout>
            <h1>{talk.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: talk.content }} />

            {talk.slide_url !=='' && renderSlides(talk)}
            {talk.video_url !=='' && renderVideo(talk)}

            <h2>Events</h2>
            <ul>
                {talk.events.map(event => (
                    <li><a href={event.link} target={'_blank'} rel="noreferrer">{event.title}</a> in {event.location} {event.date}</li>
                ))}
            </ul>
            <AboutMe/>
        </Layout>
    </>)
}
export default template

const renderSlides = function(talk)
{
    return (<>
        <h2>Slides</h2>
        <iframe className="speakerdeck-iframe" frameBorder="0"
            src={talk.slide_url}
            title="Using a framework or not?" allowFullScreen="true" mozallowfullscreen="true"
            webkitallowfullscreen="true"
            className="talkIframe"
            data-ratio="1.78343949044586"></iframe>
    </>)
}

const renderVideo = function(talk)
{
    return (<>
        <h2>Video</h2>
        <iframe width="560" height="315" src={talk.video_url}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
    </>)
}

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