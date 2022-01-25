import PropTypes from "prop-types"
import React from "react"
import Link from "./link";

const TalkList = ({data}) => (<>
        <h2><Link to={data.slug}>{data.title}</Link></h2>
        <div dangerouslySetInnerHTML={{ __html: data.brief }} />
    </>
)

TalkList.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        brief: PropTypes.string.isRequired
    }),
}

export default TalkList
