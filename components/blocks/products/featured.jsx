import Image from 'next/image'

import { useEffect } from 'react'
import { m, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Badges from '../../utils/badge.list.util'
import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/featured.module.scss'

export default function FeaturedProduct({ content }, index) {
  const { project, url, descriptionTitle, description, stack, price, images } =
    content

  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <m.section
      key={index}
      className={css.project}
      ref={ref}
      variants={container}
      initial={['rest', 'hidden']}
      whileHover="hover"
      animate={controls}
    >
      <div className={css.details} onClick={() => window.open(url, '_blank')}>
        <div className={css.projectHeader}>
          <div className={css.header}>
            <h2 className="highlight">{project}</h2>
          </div>
          <div className={css.description}>
            <p>
              <strong>{descriptionTitle}</strong> {description}
            </p>
          </div>
          <div className={css.stackContainer}>
            <Badges
              list={stack}
              block="stack"
              fullContainer={false}
              color={false}
            />
          </div>
          <div className={css.description}>
            <p>
              <Icon icon={['fas', 'dollar-sign']} />
              <strong> {price}</strong>{' '}
            </p>
          </div>
          <m.div variants={''} className={css.viewProject}>
            <Icon icon={['fas', 'arrow-right-to-bracket']} />
          </m.div>
        </div>
      </div>

      <div className={css.imageContainer}>
        <span className={`${css.imageAnimationContainer}`}>
          {images.map(({ key, url, hover, h, w }, index) => {
            hover = hover === 'left' ? hoverLeft : hoverRight
            return (
              <m.div key={`${index}-${key}`} variants={item}>
                <m.div variants={hover}>
                  <Image src={url} alt="x" height={h} width={w} />
                </m.div>
              </m.div>
            )
          })}
        </span>
      </div>
    </m.section>
  )
}

const container = {
  hidden: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.0625
    }
  },
  visible: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.25
    }
  },
  rest: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0
    }
  },
  hover: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0
    }
  }
}

const item = {
  hidden: {
    y: 75,
    opacity: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      duration: 0.35
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5
    }
  }
}

const hoverLeft = {
  rest: {
    x: -10,
    y: -10
  },
  hover: {
    y: -170,
    x: -30
  }
}

const hoverRight = {
  rest: {
    x: 0
  },
  hover: {
    x: 30,
    y: 60
  }
}
