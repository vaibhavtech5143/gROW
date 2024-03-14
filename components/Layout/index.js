import React from 'react';
import Head from "next/head";


export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Vaibhav Singh</title>
      </Head>



      <main>{children}</main>

    </div>
  )
}
