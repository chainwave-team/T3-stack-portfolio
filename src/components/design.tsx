import React from 'react'
import { Styled } from 'theme-ui'

export default function design() {
  return (
    <div>
      <Styled.h1>H1</Styled.h1>
      <Styled.h2>H2</Styled.h2>
      <Styled.h3>H3</Styled.h3>
      <Styled.h4>H4</Styled.h4>
      <Styled.h5>H5</Styled.h5>
      <Styled.h6>H6</Styled.h6>
      <Styled.p>Paragraph</Styled.p>

      <Styled.p>List :</Styled.p>
      <Styled.ul>
        <Styled.li>Coucou</Styled.li>
        <Styled.li>Coucou</Styled.li>
        <Styled.li>Coucou</Styled.li>
        <Styled.li>Coucou</Styled.li>
      </Styled.ul>
    </div>
  )
}
