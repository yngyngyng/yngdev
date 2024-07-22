import About from '../components/sections/index/about'
import Hero from '../components/sections/index/hero'
import Error from '../components/sections/error/error'

import Color from '../components/utils/page.colors.util'
//
export default function HomePage({ indexColors, featuredProducts, heroData }) {
  return (
    <>
      <Color colors={indexColors} />
      <Error />
    </>
  )
}
