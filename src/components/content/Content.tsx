import React from 'react'
import { LoadingBackDrop, StyledContent } from './Content.styles'
import Categories from '../categories/Categories'
import { useAppContext } from '../../context/App.context'

function Content() {

  const {isFetchingVideos} = useAppContext();

  return (
    <StyledContent>
      <Categories />
      {isFetchingVideos && <LoadingBackDrop />}
    </StyledContent>
  )
}

export default Content