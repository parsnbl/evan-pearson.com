'use client'
import React from 'react';
import Link from 'next/link';
import {css, Global} from '@emotion/react';


export default function Page() {
    return (
      <div>
          <header>
            <h1>Stuff</h1>
            <nav>
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                </ul>
            </nav>
          </header>
          <main>
            <Global styles={{fontFamily: 'sans-serif'}}/>

          </main>
          <footer>

          </footer>
      </div>

    );
}