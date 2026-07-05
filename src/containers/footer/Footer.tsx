import translationEN from 'locales/en/translation.json'
import ScrollUp from 'shared/components/scroll-up/ScrollUp'
import Social from 'shared/components/social/Social'
import Theme from 'shared/components/theme/Theme'

const Footer = () => {
  const {footer} = translationEN

  return (
    <footer className="section">
      <div className="section-content flex flex-col justify-between">
        <div className="mb-8 flex flex-col items-center justify-between text-center sm:mb-6 sm:flex-row">
          <Social props={{className: 'mb-8 sm:mb-0'}} />
          <div className="inline-flex w-91 flex-col items-center justify-between sm:flex-row">
            <Theme />
            <ScrollUp />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between text-center sm:flex-row">
          <p className="mb-2 text-[0.9rem] sm:mb-0">© 2021 Adeel Ali - {footer.copyright}</p>
          <p className="text-[0.8rem]">
            <span>
              Made with a lot of <em>anxiety</em> during&nbsp;
            </span>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="link italic"
              href="https://www.google.com/search?q=covid+19&rlz=1C1GCEA_enES841ES841&oq=covid+19&aqs=chrome..69i57j0l4j69i60l3.1589j0j4&sourceid=chrome&ie=UTF-8"
            >
              a quarantine time.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
