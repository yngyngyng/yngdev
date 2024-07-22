// Section structure
import Section from '../../structure/section'
import Container from '../../structure/container'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/recent.module.scss'

export default function OtherProducts({ products }) {
  return (
    <Section classProp={css.section}>
      <Container classProp={css.container} spacing={'verticalXXXLrg'}>
        <h3>Other Products & Resources</h3>
        <div className={css.projects}>
          {products.map(
            ({ name, short_url, formatted_price, thumbnail_url }, index) => {
              return (
                <article key={index} className={css.project}>
                  <span className={css.header}>
                    <a href={short_url} rel="noreferrer" target="_blank">
                      {name}{' '}
                      <Icon icon={['fas', 'arrow-up-right-from-square']} />
                    </a>
                  </span>
                  <span className={css.details}>
                    <strong>{formatted_price}</strong>
                  </span>
                  <img
                    alt="thubm"
                    src={thumbnail_url}
                    width="112.5"
                    height="112.5"
                  />
                </article>
              )
            }
          )}
        </div>
      </Container>
    </Section>
  )
}
