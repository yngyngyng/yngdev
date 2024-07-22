import About from '../components/sections/index/about'
import Hero from '../components/sections/index/hero'
import FeaturedProducts from '../components/sections/products/featured'

import Color from '../components/utils/page.colors.util'

export default function HomePage({ indexColors, featuredProducts, heroData }) {
  return (
    <>
      <Color colors={indexColors} />
      <Hero content={heroData} />
      <FeaturedProducts content={featuredProducts} />
      <About />
    </>
  )
}
