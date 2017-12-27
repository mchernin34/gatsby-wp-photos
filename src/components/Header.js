import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2em 2em;
`

const AvatarContainer = styled.span`
  flex-basis: 120px;
  height: 96px;
`

const AvatarImage = styled.img`
  margin-bottom: 0;
  border-radius: 50%;
  width: 96px;
`

const MetaContainer = styled.span`
  flex-basis: 500px;
  flex-grow: 1;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

const MetaHeading = styled.h3`
  margin-bottom: .2em
`

const MetaBio = styled.p`
  margin-bottom: 0;
`

const Header = () => {
  const bio =
    'Lorem Ipsum is simply dummy text that I want to appear on the screen.'
  const username = 'username'
  const fullname = 'Michael Chernin'
  const src =
    'https://en.gravatar.com/userimage/34297156/23c838b835467a2798164834b2c5cba1.jpeg'

  return (
    <Container>
      <AvatarContainer>
        <AvatarImage src={src} alt={fullname} />
      </AvatarContainer>
      <MetaContainer>
        <StyledLink to="/">
          <MetaHeading dangerouslySetInnerHTML={{ __html: username }} />
        </StyledLink>
        <MetaBio dangerouslySetInnerHTML={{ __html: bio }} />
      </MetaContainer>
    </Container>
  )
}

Header.PropTypes = {
  src: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string
}

export default Header
