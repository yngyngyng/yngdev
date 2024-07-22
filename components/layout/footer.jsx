import { useState, useEffect } from 'react'

import Container from '../structure/container'
import Icon from '../utils/icon.util'
import { SiGumroad } from '@icons-pack/react-simple-icons'

import css from '../../styles/structure/footer.module.scss'

export default function Footer({ content, settings }) {
  return (
    <footer className={css.container}>
      <Container spacing={['verticalXXLrg', 'bottomLrg']}>
        <section className={css.sections}>
          <ul className={css.thanks}>
            <li>
              <h4>Resources</h4>
            </li>
            {content.resources.map(({ title, link, note }, index) => {
              return (
                <li key={index}>
                  <a href={link} rel="noreferrer" target="_blank">
                    {title}{' '}
                    <Icon icon={['fas', 'arrow-up-right-from-square']} />
                  </a>
                  <p>{note}</p>
                </li>
              )
            })}
          </ul>
          <ul className={css.links}>
            <li>
              <h4>Newsletter</h4>
            </li>
            {content.links.map(({ title, link, note }, index) => {
              return (
                <li key={index}>
                  <a href={link} rel="noreferrer" target="_blank">
                    {title}{' '}
                    <Icon icon={['fas', 'arrow-up-right-from-square']} />
                  </a>
                  <p>{note}</p>
                </li>
              )
            })}
          </ul>
          <ul className={css.social}>
            <li>
              <h4>Social</h4>
            </li>
            <li className={css.socialList}>
              {content.social.map(({ url, type, icon }, index) => {
                return (
                  <a key={index} href={url} rel="noreferrer" target="_blank">
                    <IconModule iconType={type} iconKey={icon} />
                  </a>
                )
              })}
            </li>
          </ul>
        </section>
        <section className={css.github}>
          <h5
            style={{
              maxWidth: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {settings.footer[0].caption}
          </h5>
          <p
            style={{
              maxWidth: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {settings.footer[0].copyright}
          </p>
        </section>
      </Container>
      <canvas id="gradient-canvas" className={''} data-transition-in></canvas>
    </footer>
  )
}

function IconModule({ iconKey, iconType, color }) {
  let colored = 'colored'
  if (color === false) {
    colored = ''
  }

  switch (iconType) {
    case 'far':
    case 'fas':
    case 'fab':
      return <Icon icon={[iconType, iconKey]} />
    case 'devicon':
      return <i className={`devicon-${iconKey}-plain ${colored}`} />
    case 'gumroad':
      return <SiGumroad size={31} />
    default:
      return ''
  }
}
