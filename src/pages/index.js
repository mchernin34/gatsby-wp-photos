import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header'
import PhotoRow from '../components/PhotoRow'

const photos = props.data.allWordpressPost.edges

const displayPhotos = () => {
  const photoArray = []
  let photoRow = []
  let count = 0

  photos.map(photo => {
    if (photo.node.featured_media) {
      photoArray.push(photo)
    }
  })

  return photoArray.map(photo => {
    if (photoRow.length === 3) {
      photoRow = []
    }

    photoRow.push(photo)
    count++

    if (photoRow.length === 3) {
      return returnRow(photoRow, count)
    } else if (photoArray.length - count === 0) {
      return returnRow(photoRow, count)
    }
  })
}

const returnRow = (photos, count) => {
  return <PhotoRow photos={photos} key={count} />
}

const IndexPage = props => {
  const bio = props.data.allWordpressWpMe.edges[0].node.description
  const username = props.data.allWordpressWpMe.edges[0].node.name
  const avatar =
    props.data.allWordpressWpMe.edges[0].node.avatar_urls.wordpress_96

  return (
    <div>
      <Header bio={bio} username={username} src={avatar} />
      {displayPhotos()}
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
