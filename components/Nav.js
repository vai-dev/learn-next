import React from 'react';
import Link from 'next/link';
import navStyle from '../styles/Nav.module.css'
export default function Nav() {
    return (
        <div className={ navStyle.container}>
            <ul className={ navStyle.flex }>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}
