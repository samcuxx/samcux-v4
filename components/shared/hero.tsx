// this is the hero section of the website
// it will contain my name, a description of myself
// BSamuel Amoah
// Senior Software Developer
//I’m a software engineer specializing in several programming tools to deliver quality results to client. I have expert knowledge in frontend engineering, softwares testing and web3 development.
// i will add my social links : github, youtube, instagram, twitter, linkedin


import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const hero = () => {
  return (
    <div>
      <div>
        <h1>Samuel Amoah</h1>
        <p>Senior Software Developer</p>
        <p>I’m a software engineer specializing in several programming tools to deliver quality results to client. I have expert knowledge in frontend engineering, softwares testing and web3 development.</p>
      </div>
      <div>
        <Image src="https://nextjs.org/icons/next.svg" alt="Samuel Amoah" width={180} height={38} />
      </div>

      <div>
        <ul>
            <li>
                <Link href="https://github.com/samuelamoah">
                    <Image src="https://nextjs.org/icons/next.svg" width={20} height={20} alt="Github" />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/samuelamoah">
                    <Image src="https://nextjs.org/icons/next.svg" width={20} height={20} alt="Github" />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/samuelamoah">
                    <Image src="https://nextjs.org/icons/next.svg" width={20} height={20} alt="Github" />
                </Link>
            </li>
            <li>
                <Link href="https://github.com/samuelamoah">
                    <Image src="https://nextjs.org/icons/next.svg" width={20} height={20} alt="Github" />
                </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default hero

