import React from 'react'
import GatsbyLink from 'gatsby-link'

const Link = props => {
  if (props.to.startsWith('/')) {
    return <GatsbyLink {...props} >{props.children}</GatsbyLink>
  }

  return (
    <a {...props} href={props.to} target='_blank' rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

export default Link