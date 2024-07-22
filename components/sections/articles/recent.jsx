import Section from '../../structure/section'
import Container from '../../structure/container'
import Image from 'next/image'

import SectionTitle from '../../blocks/section.title.block'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/articles/recent.module.scss'

export default function Recent({ mediumArticles }) {
  const feed = mediumArticles.feed
  const articles = mediumArticles.items

  return (
    <Section classProp="borderBottom">
      <Container spacing={'verticalXXXXLrg'}>
        <SectionTitle
          cssId="recent"
          title="Blog"
          preTitle="Informative"
          subTitle="Latest from our wisdom sharing world 📚"
        />
        <section className={css.projects}>
          {articles.map(
            (
              { title, pubDate, link, author, description, categories },
              index
            ) => {
              const date = new Date(pubDate).toDateString()
              const image = description
                .toString()
                .match(/<img[^>]+src="([^">]+)"/)[1]
              return (
                <>
                  <article key={index} className={css.project}>
                    <span className={css.featuredImage}>
                      <img
                        src={image}
                        alt="Article thumbnail"
                        width="500"
                        height="250"
                      />
                    </span>
                    <span className={css.header}>
                      <a href={link} rel="noreferrer" target="_blank">
                        {title}{' '}
                        <Icon icon={['fas', 'arrow-up-right-from-square']} />
                      </a>
                    </span>
                    <span className={css.descriptionContainer}></span>
                    <span className={css.details}>
                      <p>By {author}</p>
                      <p className={css.pushedAt}>{date}</p>
                    </span>
                    <span className={css.topicsContainer}>
                      {categories.map((e, index) => {
                        return (
                          <span key={index} className={css.topics}>
                            <Icon icon={['fab', 'medium']} /> {e}
                          </span>
                        )
                      })}
                    </span>
                  </article>
                </>
              )
            }
          )}
        </section>
      </Container>
    </Section>
  )
}
