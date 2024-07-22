import Recent from '../../components/sections/articles/recent'
import api from '../../axiosConfig'

import Color from '../../components/utils/page.colors.util'

//
export default function Articles({ mediumArticles, articleColors, settings }) {
  return (
    <>
      <Color colors={articleColors} />
      <Recent mediumArticles={mediumArticles} />
    </>
  )
}

export async function getServerSideProps() {
  const mediumArticles = (await api('external/medium/articles')).data.data

  if (!mediumArticles) {
    return { notFound: true }
  }

  return { props: { mediumArticles } }
}
