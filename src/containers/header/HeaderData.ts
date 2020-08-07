import husband from 'assets/images/photos/husband.jpg'
import headphones from 'assets/images/photos/headphones.jpg'
import drawing from 'assets/images/photos/drawing.jpg'
import dude from 'assets/images/photos/dude.jpg'

import translationEN from 'locales/en/translation.json'

export type HeaderModelName = 'default' | 'headphones' | 'drawing' | 'dude'

export interface HeaderModel {
  id: Number
  name: HeaderModelName
  picture: any
  position: any
  bio: any
  color: string
  tagLine: string
  description: string
}

export const HeaderData = (): HeaderModel[] => {
  const {position, header} = translationEN
  return [
    {
      id: 0,
      name: 'default',
      picture: husband,
      position: position['software-engineer'],
      bio: header.default['bio-end'],
      color: 'orange',
      tagLine: 'I build things for the web and love what I do.',
      description:
        'Mainly focused on <strong>Front-end Development</strong> with a good <strong>UI/UX</strong> eye and always trying different things.'
    },
    {
      id: 1,
      name: 'headphones',
      picture: headphones,
      position: position['mobile-apps-developer'],
      bio: header.headphones['bio-end'],
      color: 'purple',
      tagLine: 'I build things for the web and love what I do.',
      description:
        'Mainly focused on <strong>Front-end Development</strong> with a good <strong>UI/UX</strong> eye and always trying different things.'
    },
    {
      id: 2,
      name: 'drawing',
      picture: drawing,
      position: position['front-end-developer'],
      bio: header.drawing['bio-end'],
      color: 'cyan',
      tagLine: 'I build things for the web and love what I do.',
      description:
        'Mainly focused on <strong>Front-end Development</strong> with a good <strong>UI/UX</strong> eye and always trying different things.'
    },
    {
      id: 3,
      name: 'dude',
      picture: dude,
      position: position['games-developer'],
      bio: header.dude['bio-end'],
      color: 'yellow',
      tagLine: 'I build things for the web and love what I do.',
      description:
        'Mainly focused on <strong>Front-end Development</strong> with a good <strong>UI/UX</strong> eye and always trying different things.'
    }
  ]
}
