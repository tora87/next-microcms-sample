import Head from "next/head"
import type { ReactNode } from "react"
import { Header } from './Header'

interface Props{
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return(
    <>
      <Head>
        <title>Furniture Design</title>
      </Head>

      <Header />

      <main>
        <div className="contents-wrapper">
          {children}
        </div>
      </main>

      {/* TODO: フッターの実装 */}
    </>
  )
}
