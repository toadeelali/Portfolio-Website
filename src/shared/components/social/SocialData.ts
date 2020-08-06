import {ReactComponent as LinkedinLogo} from 'assets/images/social/linkedin.svg'
import {ReactComponent as TwitterLogo} from 'assets/images/social/twitter.svg'
import {ReactComponent as GithubLogo} from 'assets/images/social/github.svg'
// import {ReactComponent as SpotifyLogo} from 'assets/images/social/spotify.svg'
import translationEN from 'locales/en/translation.json'
import {SocialEnum} from './SocialEnum'

export interface SocialModel {
  name: string
  url: string
  logo: any
  title: string
}

export const SocialData = (): SocialModel[] => {
  const {social} = translationEN
  return [
    {
      name: 'GitHub',
      url: SocialEnum.githubUrl,
      logo: GithubLogo,
      title: social.titles.github
    },
    {
      name: 'LinkedIn',
      url: SocialEnum.linkedinUrl,
      logo: LinkedinLogo,
      title: social.titles.linkedin
    },
    {
      name: 'Twitter',
      url: SocialEnum.twitterUrl,
      logo: TwitterLogo,
      title: social.titles.twitter
    }
  ]
}
