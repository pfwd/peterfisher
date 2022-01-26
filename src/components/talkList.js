import PropTypes from "prop-types"
import React from "react"
import Link from "./link";

const TalkList = ({data}) => (<>
        <div className='talk-info-container'>
            <h2><Link to={`/talks`+ data.slug}>{data.title}</Link></h2>
            <div className="talk-info">{data.events[0].date} {data.events[0].title} in {data.events[0].location}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.brief }} />
    </>
)

TalkList.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }),
}

export default TalkList
