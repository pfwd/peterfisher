---
type: "blog"
slug: "/how-to-create-draft-post-in-gatsbyjs"
date: "2022-02-18"
title: "How to create draft blog posts in Gatsbyjs"
excerpt: "A guide a filtering out draft blog posts using GraphQL with GatsbyJS"
status: published
---
Today I was at the [PHP UK conference](https://www.phpconference.co.uk) and whilst I was listening to the talks I started jotting down notes in Markdown ready for possible future blog posts.
Most of these Markdown files are littered with spelling mistakes and brain dumps.  None of them are ready for publication. 

The trouble I have is that there isn't anyway (yet) to set a mark a blog post as published or in a draft state.

There are a few of ways I could define a posts status.
1. Create a boolean called `published` and set it to `true` or `false`
2. Filter the posts by date and only allow posts to be **published** if they have a date in the past
3. Create a variable called `status` with the value of `draft` or `published`

The third option is the most flexible as it allows for multiple statues to be defined.

To do this first add the status variable to each of the posts frontmatter like so
```markdown
---
type: "blog"
slug: "/how-to-create-draft-post-in-gatsbyjs"
date: "2022-02-18"
title: "How to create draft blog posts in Gatsbyjs"
excerpt: "Something Something"
status: draft
---
```

The GraphQL filter also needs to be adjusted to filter posts that have a status of published.

```javascript
export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"},  status: {eq: "published"}}}, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            status
          }
        }
      }
    }
  }
`
```

Now re-run the GatsbyJS develop command to test the changes
```bash
npm run develop
```
You should only be seeing posts that have a status of published

Now I can get back to crafting the draft blog posts without worry that a post might accidentally be published. 