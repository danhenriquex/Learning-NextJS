import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="About">About</Link>
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  )
}

export default Navbar