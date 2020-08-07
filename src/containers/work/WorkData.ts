export interface WorkModel {
  title: string
  position: string
  url: string
  country: string
  year: string
  status?: string
}

export const WorkData = (): WorkModel[] => [
  {
    title: 'Knowledge Platform Pte. Ltd.',
    position: 'Principal Software Engineer',
    url: 'https://www.knowledgeplatform.com/',
    country: 'Current',
    year: '2014',
    status: 'current'
  },
  {
    title: 'East West Infiniti Pvt. Ltd.',
    position: 'Software Engineer',
    year: '2013',
    country: '2014',
    url: 'http://eastwestin.com/'
  },
  {
    title: 'Ranic Automation',
    position: 'Software Developer',
    country: '2013',
    year: '2012',
    url: 'https://ranicautomation.com/'
  }
];