import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Photo from './Photo'

const PhotoRow = props => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `

  return (
    <Container>
      {props.photos.map(photo => {
        return (
          <Photo
            src={photo.node.featured_media.localFile.childImageSharp.sizes.src}
            sizes={
              photo.node.featured_media.localFile.childImageSharp.sizes.sizes
            }
            key={photo.node.id}
            link={photo.node.date + photo.node.slug}
          />
        )
      })}
    </Container>
  )
}

PhotoRow.PropTypes = {
  photos: PropTypes.array
}

export default PhotoRow
