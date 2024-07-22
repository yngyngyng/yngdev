// Core packages
import { LazyMotion, domAnimation } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import api from '../axiosConfig'
import Head from 'next/head'
import 'vanilla-cookieconsent/dist/cookieconsent.css'
import CookieConsentComponent from '../components/utils/cookieConsent.util'

// Utils
import SetGridGap from '../components/utils/set.grid.util'

// Structure
import Layout from '../components/layout/layout'

// CSS reset (https://github.com/elad2412/the-new-css-reset.git)
import '../node_modules/the-new-css-reset/css/reset.css'

// Fontsource local font import (https://github.com/fontsource/fontsource)
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/600.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

// Devicon import (https://github.com/devicons/devicon)
import '../node_modules/devicon/devicon.min.css'

// Global css
import '../styles/css/variables.css'
import '../styles/css/global.css'
import 'react-toastify/dist/ReactToastify.css'

// Google Analytics
import { GoogleAnalytics } from 'nextjs-google-analytics'

/**
 * _app.jsx
 *
 * @param {?} Component
 * @param {?} pageProps
 * @returns
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>yngdev ‒ The best of Notion, AI & Tech</title>
      </Head>
      <div>
        <ToastContainer toastStyle={{ borderRadius: '1rem' }} />
      </div>
      <CookieConsentComponent />
      <GoogleAnalytics trackPageViews />
      <LazyMotion features={domAnimation}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
          <SetGridGap />
        </Layout>
      </LazyMotion>
    </>
  )
}

MyApp.getInitialProps = async () => {
  const footerData = (await api('internal/data/footer')).data.data[0]

  if (!footerData) {
    return { notFound: true }
  }

  const colorsData = (await api('internal/data/colors')).data.data[0]

  if (!colorsData) {
    return { notFound: true }
  }

  const indexColors = colorsData.index[0]
  const productColors = colorsData.products[0]
  const articleColors = colorsData.articles[0]

  const featuredProducts = (await api('internal/data/products', {})).data
    .data[0].featured

  if (!featuredProducts) {
    return { notFound: true }
  }

  const heroData = (await api('internal/data/hero')).data.data[0].data[0]

  if (!heroData) {
    return { notFound: true }
  }

  const navbarData = (await api('internal/data/navbar')).data.data[0].items

  if (!navbarData) {
    return { notFound: true }
  }

  const settings = (await api('internal/data/settings')).data.data[0]

  if (!settings) {
    return { notFound: true }
  }

  return {
    pageProps: {
      footerData,
      indexColors,
      productColors,
      articleColors,
      featuredProducts,
      heroData,
      navbarData,
      settings
    }
  }
}
