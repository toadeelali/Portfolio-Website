export type HeaderModelName = 'default' | 'headphones' | 'drawing' | 'dude'

export interface SingleProjectModel {
  icon: string
  name: string
  url: string
  description: string
  status: 'done' | 'in-progress' | 'to-do'
}

export interface RepositoryModel {
  title: String
  subtitle: String
  seeMore: String
  collection: SingleProjectModel[]
}

export const RepositoriesData = (t: any): RepositoryModel[] => [
  {
    title: 'Featured work',
    subtitle: 'Some projects that I’ve finally finished... almost',
    seeMore: 'I might have more',
    collection: [
      {
        icon: '🤖',
        name: 'Portfolio Website',
        url: 'https://github.com/wikz/Portfolio-Website',
        description: "This one. Yep, you can check the cool stuff that I've used to build it",
        status: 'in-progress'
      },
      {
        icon: '🤖',
        name: 'Resource Preloader',
        url: 'https://github.com/wikz/Resource-Preloader',
        description:
          'A JavaScript based powerful resource pre-loader with concurrent download and dependency resolving option.',
        status: 'done'
      },
      {
        icon: '🤖',
        name: '1on1 Quiz',
        url: 'https://1on1quiz.com',
        description: '1on1 Quiz - Competitive gaming platform',
        status: 'in-progress'
      }
    ]
  },
  {
    title: 'Mobile Applications',
    subtitle: 'Some apps that I built',
    seeMore: 'I might have more',
    collection: [
      {
        icon: '🤖',
        name: 'Learn Smart Pakistan',
        url: 'https://play.google.com/store/apps/details?id=com.knowledgeplatform.lsp',
        description:
          'A cross-platform mobile application for Ultrabot(Learning Management System) with data storing and synching capability. Currently serving 250k+ students.',
        status: 'done'
      },
      {
        icon: '🤖',
        name: 'Ultrabot Prime',
        url: 'https://play.google.com/store/apps/details?id=com.knowledgeplatform.ultrabotprime',
        description: 'A cross-platform mobile LMS App created for M1 Singapore.',
        status: 'done'
      },
      {
        icon: '🤖',
        name: 'Literacy & Numeracy Placement',
        url: '',
        description: 'A multilingual app built in collaboration with World bank and used by 50k+ individual users.',
        status: 'done'
      }
    ]
  },
  {
    title: 'Applications',
    subtitle: "Some Web & desktop Applications I've worked on",
    seeMore: 'I might have more',
    collection: [
      {
        icon: '🤖',
        name: '1on1 Quiz',
        url: 'https://1on1quiz.com',
        description: '1on1 Quiz - Competitive gaming platform',
        status: 'in-progress'
      },
      {
        icon: '🤖',
        name: 'Voice Activated FM Audio Broadcast Logger',
        url: '#',
        description: 'An Audio logging software for Radio transmissions. Logs audio transmission in mp3 audio clips.',
        status: 'done'
      },
      {
        icon: '🤖',
        name: 'Audio Broadcast Profanity Delay System',
        url: '#',
        description: 'A software being used in Radio transmission broadcasting industry.',
        status: 'done'
      }
    ]
  },
  {
    title: 'CrossPlatform Games',
    subtitle: 'Some games that I’ve launched successfully',
    seeMore: 'I might have more',
    collection: [
      {
        icon: '🤖',
        name: 'Dino Eggs',
        url: 'http://gamesdemo.knowledgeplatform.com/demos/dino-eggs/',
        description:
          'A multi-level online game covering 120+ mastery topics of mathematics for middle school students.',
        status: 'done'
      },
      {
        icon: '🤖',
        name: 'Factor Monsters',
        url: 'https://apps.apple.com/pk/app/factor-monsters/id987903121',
        description: 'A drill to master different skills pertaining to factorization.',
        status: 'done'
      },
      {
        icon: '🤖',
        name: 'Mind Tussle',
        url: 'https://apps.apple.com/pk/app/mind-tussle/id1052659847',
        description: 'Improve mental math in an online 1-on-1, time-bound 3 levels game.',
        status: 'done'
      },
      {
        icon: '🤖',
        name: 'Martian Multiples',
        url: 'https://apps.apple.com/pk/app/martian-multiples/id1101691574',
        description: 'A game to master skills of finding Least common multiples and Highest common factors.',
        status: 'done'
      },
      {
        icon: '🤖',
        name: 'Kampong',
        url: 'http://gamesdemo.knowledgeplatform.com/demos/kampong/',
        description: 'A card game based on adaptive templates for primary content.',
        status: 'done'
      }
    ]
  }
]
