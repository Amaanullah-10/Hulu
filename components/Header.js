import React from 'react'
import Image from 'next/image';
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';
function Header() {
  return (
    <header>
        <div className="flex flex-col md:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} /> 
                
            </div>
            <Image className="object-contain animate-pulse hover:ring-offset-blue-500" src="https://links.papareact.com/ua6" width={200} height={100} alt="hulu-logo" />
        </div>
    </header>
  )
}

export default Header