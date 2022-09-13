import type { GetStaticPathsResult, GetStaticProps, GetStaticPropsResult, NextPage, NextPageContext } from 'next'
import { Layout } from '../components/Layout';
import { client } from '../libs/client';

interface Product {
  id: string,
  name: string,
  description: string,
  price: number,
  size: string[],
  color: string[],
  image: object,
  material: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
}

interface Props {
  products: Product[]
}

const Home: NextPage = (props:Props) => {
  console.log(props)
  return (
    <>
      <Layout>
        <div className='container'>
          <div>sample</div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const data = await client.get({endpoint: 'products'})

  return {
    props: {
      product: data.contents,
    }
  }
}

export default Home
