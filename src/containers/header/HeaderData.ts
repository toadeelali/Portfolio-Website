import husband from 'assets/images/photos/husband.jpg'
import headphones from 'assets/images/photos/headphones.jpg'
import drawing from 'assets/images/photos/drawing.jpg'
import dude from 'assets/images/photos/dude.jpg'
import i18n from 'i18n'

export type HeaderModelName = 'default' | 'headphones' | 'drawing' | 'dude'

export interface HeaderModel {
  name: HeaderModelName
  picture: any
  position: any
  bio: any
  color: string
  tagLine: string
  description: string
}

export const HeaderData = (): HeaderModel[] => [
  {
    name: 'default',
    picture: husband,
    position: i18n.t('position.software-engineer'),
    bio: i18n.t('header.default.bio-end'),
    color: 'orange',
    tagLine: 'I build things for the web and love what I do.',
    description: 'Mainly focused on <strong>Front-end Development</strong> with a good <strong>UI/UX</strong> eye and always trying different things.'
  },
  {
    name: 'headphones',
    picture: headphones,
    position: i18n.t('position.mobile-apps-developer'),
    bio: i18n.t('header.headphones.bio-end'),
    color: 'purple',
    tagLine: 'I build things for the web and love what I do.',
    description: 'Mainly focused on <strong>Front-end Development</strong> with a good <strong>UI/UX</strong> eye and always trying different things.'
  },
  {
    name: 'drawing',
    picture: drawing,
    position: i18n.t('position.front-end-developer'),
    bio: i18n.t('header.drawing.bio-end'),
    color: 'cyan',
    tagLine: 'I build things for the web and love what I do.',
    description: 'Mainly focused on <strong>Front-end Development</strong> with a good <strong>UI/UX</strong> eye and always trying different things.'
  },
  {
    name: 'dude',
    picture: dude,
    position: i18n.t('position.games-developer'),
    bio: i18n.t('header.dude.bio-end'),
    color: 'yellow',
    tagLine: 'I build things for the web and love what I do.',
    description: 'Mainly focused on <strong>Front-end Development</strong> with a good <strong>UI/UX</strong> eye and always trying different things.'
  }
]
