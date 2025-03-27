import React from 'react'
import SavatchaModal from './SavatchaModal'
import Link from 'next/link'
import Categories from './Categories'

function HomePage() {
  return (
    <div className="container mx-auto py-4">
                    <div className="flex justify-between">
                        <Link href={"/"}><h2>LOGO</h2></Link>
                        <SavatchaModal />
                    </div>
                    <div>
                        <Categories />
                    </div>
                </div>
  )
}

export default HomePage