import PropTypes from "prop-types"
import React from "react"
import Link from "./link";

const TalkList = ({data}) => (<>
        <h2><Link to={data.slug}>{data.title}</Link></h2>
    </>
)

TalkList.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }),
}

export default TalkList
