import React from 'react'
import { StyledRegularVideoItem } from './RegularVideoItem.styles';
import { Video } from 'pexels';

interface IRegularVideoItemProps {
    vidoe: Video;
}

function RegularVideoItem({video} : IRegularVideoItemProps) {

    console.log(video)

  return (
    <StyledRegularVideoItem>RegularVideoItem</StyledRegularVideoItem>
  )
}

export default RegularVideoItem