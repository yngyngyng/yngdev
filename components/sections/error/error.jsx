// Section structure
import Section from '../../structure/section'
import Container from '../../structure/container'
import Link from 'next'

// Section general blocks
import SectionTitle from '../../blocks/error.title.block'

// Section specific blocks
import Newsletter from '../../blocks/input.form.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Error
 *
 * @returns {jsx} <Error />
 */
export default function Error() {
  return (
    <Section classProp={about.section}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          cssId="error"
          preTitle="404 - Not found"
          title="👀 Looking for something...?"
          subTitle="Well, its not here"
          linkToHome="Go back to Homepage"
          CTA="or subscribe to our Newsletter."
        />
        <section className={about.content}>
          <div className={about.copy}>
            <Newsletter containerClass={about.container} />
          </div>
        </section>
      </Container>
    </Section>
  )
}
