import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header'

const IndexPage = props => {
  const bio = props.data.allWordpressWpMe.edges[0].node.description
  const username = props.data.allWordpressWpMe.edges[0].node.name
  const avatar =
    props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96

  return (
    <div>
      <Header bio={bio} username={username} src={avatar} />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allWordpressWpMe {
      edges {
        node {
          name
          description
          avatar_urls {
            wordpress_96
          }
        }
      }
    }
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "/YYYY/MM/DD/")
          featured_media {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
