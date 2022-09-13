import Head from 'next/head'
import type { ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { ProductList } from '../ProductList'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Furniture Design</title>
      </Head>

      <Header />

      <main>
        <div className='container'>{<ProductList />}</div>
      </main>

      <Footer />
    </>
  )
}
