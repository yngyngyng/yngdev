import OtherProducts from '../../components/sections/products/recent'
import FeaturedProducts from '../../components/sections/products/featured'
import api from '../../axiosConfig'

import Color from '../../components/utils/page.colors.util'

export default function Projects({
  products,
  productColors,
  featuredProducts
}) {
  return (
    <>
      <Color colors={productColors} />
      <FeaturedProducts content={featuredProducts} />
      <OtherProducts products={products} />
    </>
  )
}

export async function getServerSideProps() {
  const products = (
    await api('external/gumroad/products', {})
  ).data.data.products.sort((a, b) => a.price - b.price)

  if (!products) {
    return { notFound: true }
  }

  return { props: { products } }
}
