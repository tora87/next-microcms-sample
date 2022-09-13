import styles from './ProductList.module.scss'
import { FC } from "react";

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

export const ProductList: FC = () => {
  return (
    <h1 className={styles.h1}>商品一覧</h1>
  )
}
