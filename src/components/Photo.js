import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Photo = props => {
  const Container = styled.div`
    width: calc(100% / 3);
    padding: 0.2em;
  `

  const StyledImg = styled(Img)`
    width: auto;
    height: auto;
  `

  return (
    <Container>
      <Link to={props.link}>
        <StyledImg src={props.src} sizes={props.sizes} />
      </Link>
    </Container>
  )
}

Photo.PropTypes = {
  src: PropTypes.string,
  sizes: PropTypes.object,
  link: PropTypes.string
}

export default Photo
