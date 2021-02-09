import React from 'react';
import * as S from './styled'

export default function Banner({children, ...props}) { 
  return(
    <S.Banner {...props}>{children}</S.Banner>
)
  
}