import husband from 'assets/images/photos/husband.jpg'
import headphones from 'assets/images/photos/headphones.jpg'
import drawing from 'assets/images/photos/drawing.jpg'
import dude from 'assets/images/photos/dude.jpg'
import i18n from 'i18n'

export interface HeaderModel {
  name: string
  picture: any
  position: any
  bio: any
  TagLine:string
  color: string
}

export const HeaderData = (): HeaderModel[] => [
  {
    name: 'default',
    picture: husband,
    position: i18n.t('position.software-engineer'),
    bio: i18n.t('header.default.bio-end'),
    TagLine: 'I build things for the web and love what I do.',
    color: 'orange'
  },
  {
    name: 'headphones',
    picture: headphones,
    position: i18n.t('position.mobile-apps-developer'),
    bio: i18n.t('header.headphones.bio-end'),
    TagLine: 'I build things for the web and love what I do.',
    color: 'purple'
  },
  {
    name: 'drawing',
    picture: drawing,
    position: i18n.t('position.front-end-developer'),
    TagLine: 'I build things for the web and love what I do.',
    bio: i18n.t('header.drawing.bio-end'),
    color: 'cyan'
  },
  {
    name: 'dude',
    picture: dude,
    position: i18n.t('position.games-developer'),
    bio: i18n.t('header.dude.bio-end'),
    TagLine: 'I build things for the web and love what I do.',
    color: 'yellow'
  }
]
