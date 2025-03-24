import React from 'react'
import SavatchaModal from './SavatchaModal'
import Link from 'next/link'

function HomePage() {
  return (
    <div className="container mx-auto py-4">
                    <div className="flex justify-between">
                        <Link href={"/"}><h2>LOGO</h2></Link>
                        <SavatchaModal />
                    </div>
                    <div>
                        <ul className="flex w-full justify-between mt-4">
                            <li>
                                <a href="#">Texnologiya</a>
                            </li>
                            <li>
                                <a href="#">Ta&apos;lim</a>
                            </li>
                            <li>
                                <a href="#">Salomatlik</a>
                            </li>
                            <li>
                                <a href="#">Biznes</a>
                            </li>
                            <li>
                                <a href="#">O&apos;yin-kulgi</a>
                            </li>
                            <li>
                                <a href="#">Sayohat</a>
                            </li>
                            <li>
                                <a href="#">Sport</a>
                            </li>
                            <li>
                                <a href="#">Hayot tarzi</a>
                            </li>
                        </ul>
                    </div>
                </div>
  )
}

export default HomePage