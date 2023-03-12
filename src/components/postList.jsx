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

export default PostList
