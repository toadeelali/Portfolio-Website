export interface WorkModel {
  title: string
  position: string
  url: string
  country: string
  year: string
  status?: string
  logo?: string
}

export const WorkData = (): WorkModel[] => [
  {
    title: 'Achieve.',
    position: 'Software Engineer',
    url: 'https://www.achievetestprep.com/',
    country: 'Current',
    year: '2021',
    status: 'current',
    logo: 'logo-achieve'
  },
  {
    title: 'Knowledge Platform Pte. Ltd.',
    position: 'Consultant',
    url: 'https://www.knowledgeplatform.com/',
    country: 'Current',
    year: '2021',
    status: 'current',
    logo: 'logo-kp'
  },
  {
    title: 'Knowledge Platform Pte. Ltd.',
    position: 'Principal Software Engineer',
    url: 'https://www.knowledgeplatform.com/',
    country: '2021',
    year: '2014',
    logo: 'logo-kp'
  },
  {
    title: 'East West Infiniti Pvt. Ltd.',
    position: 'Software Engineer',
    year: '2013',
    country: '2014',
    url: 'http://eastwestin.com/',
    logo: 'logo-ewi'
  },
  {
    title: 'Ranic Automation',
    position: 'Software Developer',
    country: '2013',
    year: '2012',
    url: 'https://ranicautomation.com/',
    logo: 'logo-ranic'
  }
]
