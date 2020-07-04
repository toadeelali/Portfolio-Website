export interface RepositoryModel {
  icon: string
  name: string
  url: string
  description: string
  status: 'done' | 'in-progress' | 'to-do'
}

export const RepositoriesData = (t: any): RepositoryModel[] => [
  {
    icon: '🤖',
    name: t('repositories.repos.website.title'),
    url: 'https://github.com/wikz/Portfolio-Website',
    description: t('repositories.repos.website.description'),
    status: 'in-progress'
  },
  {
    icon: '🤖',
    name: 'Resource Preloader',
    url: 'https://github.com/wikz/Resource-Preloader',
    description: t('repositories.repos.project-1'),
    status: 'done'
  },
  {
    icon: '🤖',
    name: '1on1 Quiz',
    url: 'https://1on1quiz.com',
    description: t('repositories.repos.project-2'),
    status: 'in-progress'
  }
]