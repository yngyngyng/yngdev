import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children, footerData, navbarData, settings }) {
  return (
    <>
      <Navbar content={navbarData} settings={settings} />
      <main>{children}</main>
      <Footer content={footerData} settings={settings} />
    </>
  )
}
