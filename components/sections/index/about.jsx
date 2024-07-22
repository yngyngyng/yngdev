// Section structure
import Section from '../../structure/section'
import Container from '../../structure/container'

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'

// Section specific blocks
import Newsletter from '../../blocks/input.form.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          cssId="newsletter"
          title="🕊️ Newsletter"
          preTitle="Latest in universe"
          subTitle="Once a week (or once a fortnite) we'll curate the very latest and best
					news from interest areas such as AI, tech, development and coding. Straight to the point, no fuffle, pure joy."
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
