import React from 'react'
import { RegularVideoThumbnailsContainer, StyledHomePageVideos } from './HomePageVideos.styles'
import { useAppContext } from '../../context/App.context'
import RegularVideoItem from '../regularVideoItem/RegularVideoItem';

function HomePageVideos() {

    const { videos } = useAppContext();

    const FIRST_VIDEO_SECTION = videos.splice(0,8)
    const SECOND_VIDEO_SECTION = videos.splice(8, 20)
    const THIRD_VIDEO_SECTION = videos.splice(20,28)
    return (
        <StyledHomePageVideos>
            <RegularVideoThumbnailsContainer>
                {
                    FIRST_VIDEO_SECTION.map( (video, index) => (
                        <RegularVideoItem vidoe={video} />
                    ))
                }
            </RegularVideoThumbnailsContainer>
        </StyledHomePageVideos>
    )
}

export default HomePageVideos