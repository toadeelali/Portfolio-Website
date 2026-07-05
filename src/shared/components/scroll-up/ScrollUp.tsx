import translationEN from 'locales/en/translation.json'

import ArrowUpIcon from '../../../assets/images/icons/arrow-up.svg'

const ScrollUp = () => {
  const scrollTop = () =>
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

  return (
    <button
      className="relative mt-8 flex size-8 items-center justify-center overflow-hidden rounded-full border-[3px] border-primary transition-all duration-[0.06s] active:top-px md:mt-0 [&:hover_.scroll-arrow]:animate-scroll-up"
      onClick={scrollTop}
      title={translationEN['scroll-up'].title}
    >
      <span className="scroll-arrow relative size-[18px]">
        <ArrowUpIcon />
      </span>
    </button>
  )
}

export default ScrollUp
