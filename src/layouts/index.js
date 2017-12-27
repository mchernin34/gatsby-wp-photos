import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const TemplateWrapper = ({ children }) => {
  const Container = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
    padding-top: 0;
  `

  return (
    <div>
      <Container>{children()}</Container>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
