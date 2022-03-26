import Head from "next/head"
import type { ReactNode } from "react"

interface Props{
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return(
    <>
      <Head>
        <title>Furniture Design</title>
      </Head>

      {/* TODO: ヘッダーの実装 */}

      <main>{children}</main>

      {/* TODO: フッターの実装 */}
    </>
  )
}
