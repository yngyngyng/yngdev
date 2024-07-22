// Section scss
import section from '../../styles/blocks/section.title.module.scss'

/**
 * Section header component
 *
 * @param {string} * strings for header
 * @returns
 */
export default function SectionTitle({
  preTitle,
  title,
  subTitle,
  linkToHome,
  cssId,
  CTA
}) {
  return (
    <>
      <div className={`${section.title}`} id={cssId}>
        <h4>{preTitle}</h4>
        <h2>{title}</h2>
        <p className="subtitle">
          {subTitle}. <a href="/">{linkToHome}</a>, {CTA}
        </p>
      </div>
    </>
  )
}
