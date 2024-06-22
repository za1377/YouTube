import { MdHome, MdPodcasts } from 'react-icons/md'
import { MdHistory } from 'react-icons/md'
import { SiYoutubegaming, SiYoutubemusic, SiYoutubeshorts } from 'react-icons/si'
import { BsCollectionPlay } from 'react-icons/bs'
import { PiLightbulbBold, PiMonitorPlayFill, PiMusicNoteBold } from 'react-icons/pi'
import { MdOutlineFeedback } from 'react-icons/md'
import { IoMdAddCircleOutline, IoMdHelpCircleOutline } from 'react-icons/io'
import { CgFlag, CgMediaLive } from 'react-icons/cg'
import { PiGearBold } from 'react-icons/pi'
import { FaYoutube } from 'react-icons/fa'
import { LiaFireAltSolid } from 'react-icons/lia'
import { BiMoviePlay } from 'react-icons/bi'
import { RiNewspaperLine } from 'react-icons/ri'
import { GiHanger, GiTrophyCup } from 'react-icons/gi'
import {TbBrandYoutubeKids} from 'react-icons/tb'

export const MENU_SMALL = [
    { name: "home", icon: <MdHome /> },
    { name: "shorts", icon: <SiYoutubeshorts /> },
    { name: "subscriptions", icon: <BsCollectionPlay /> },
    { name: "you", icon: <PiMonitorPlayFill /> },
    { name: "history", icon: <MdHistory /> },
]

export const MENU_LARGE = [
    {
        title: "",
        list: [
            { name: "home", icon: <MdHome /> },
            { name: "shorts", icon: <SiYoutubeshorts /> },
            { name: "subscription", icon: <BsCollectionPlay /> },
        ]

    },
    {
        title: "",
        list: [
            { name: "you", icon: <PiMonitorPlayFill /> },
            { name: "history", icon: <MdHistory /> },
        ]

    },
    {
        title: "explore",
        list: [
            { name: "trending", icon: <LiaFireAltSolid /> },
            { name: "music", icon: <PiMusicNoteBold /> },
            { name: "moviesTv", icon: <BiMoviePlay /> },
            { name: "live", icon: <CgMediaLive /> },
            { name: "gaming", icon: <SiYoutubegaming /> },
            { name: "news", icon: <RiNewspaperLine /> },
            { name: "sport", icon: <GiTrophyCup /> },
            { name: "learning", icon: <PiLightbulbBold /> },
            { name: "fashionBeauty", icon: <GiHanger /> },
            { name: "podcasts", icon: <MdPodcasts /> },
        ]

    },
    {
        title: "",
        list: [
            { name: "browesChannels", icon: <IoMdAddCircleOutline /> },
        ]

    },
    {
        title: "moreFromYoutube",
        list: [
            { name: "youtubePermium", icon: <FaYoutube color='red' /> },
            { name: "youtubeMusic", icon: <SiYoutubemusic color='red' /> },
            { name: "youtubeKids", icon: <TbBrandYoutubeKids color='red' /> },
        ]

    },
    {
        title: "",
        list: [
            { name: "settings", icon: <PiGearBold /> },
            { name: "reportHistory", icon: <CgFlag /> },
            { name: "help", icon: <IoMdHelpCircleOutline /> },
            { name: "sendFeedback", icon: <MdOutlineFeedback /> },
        ]

    },
]