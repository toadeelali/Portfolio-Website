import {SocialData, SocialModel} from './SocialData'

const brandColors: Record<string, string> = {
  twitter: 'hover:text-[var(--color-twitter)]',
  linkedin: 'hover:text-[var(--color-linkedin)]',
  github: 'hover:text-[var(--color-github)]',
  spotify: 'hover:text-[var(--color-spotify)]',
}

const Social = ({props}: any) => {
  const socialData = SocialData()

  return (
    <ul className={`flex w-full max-w-[200px] justify-between text-center md:max-w-[150px] ${props.className || ''}`}>
      {socialData.map((social: SocialModel, i: number) => (
        <li key={i}>
          <a className="relative inline-flex size-6" href={social.url} title={social.title}>
            <span className={`relative top-0 size-6 transition-all duration-[0.06s] hover:top-px ${brandColors[social.name.toLowerCase()] || ''}`}>
              <social.logo />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Social
