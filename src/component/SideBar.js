import React from 'react'
import {
    HeartIcon,
    PlusCircleIcon,
    RssIcon,
} from "@heroicons/react/24/outline";
import IconButton from './IconButton';
import Divider from './Divider';

const SideBar = () => {
    return (
        <div className="text-gray-500 w-4/12 bg-black px-5 pt-5 pb-36 scrollbar-hidden overflow-y-scroll lg:text-xs border-r border-gray-900 h-screen  sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block ">
            <div className="space-y-4">
                <IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider />
                <IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider /><IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider /><IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider /><IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider />
                <IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider /><IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider /><IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider /><IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider /> <IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider /><IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider /><IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider /><IconButton icon={HeartIcon} label="My Favorite" />
                <IconButton icon={PlusCircleIcon} label="Playing..." />
                <IconButton icon={RssIcon} label="Your achievement" />
                <Divider />
            </div>
        </div>
    )
}

export default SideBar