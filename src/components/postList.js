import PropTypes from "prop-types"
import React from "react"
import Link from "./link"

const PostList = ({ data }) => (
  <>
    <h2>
      <Link to={`/blog` + data.slug}>{data.title}</Link>
    </h2>
    <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
  </>
)

PostList.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }),
}

export default PostList
