import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <Link className='' href='/nfts'>NFTs</Link>
        <Link className='' href='/profiles'>Profile</Link>
        <Link className='' href='/gallery'>Gallery</Link>
        
    </div>
  )
}

export default Navbar