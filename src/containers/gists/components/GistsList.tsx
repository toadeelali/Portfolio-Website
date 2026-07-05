import {GistDOMModel, GistLogoDOMModel} from '../models'
import TechLogo from 'shared/components/tech-logo/TechLogo'
import {gistLogosService} from '../services/GistLogosService'
import Message from './Message'

interface Props {
  collection: GistDOMModel[] | any
  logos: GistLogoDOMModel[] | any
  className?: string
  noGistsMessage?: string
}

const GistsList = (props: Props) => {
  return (
    <>
      {!props.collection?.length ? (
        <Message show={!props.collection?.length} message={props.noGistsMessage || ''} />
      ) : (
        <ul className={`mx-auto my-12 grid grid-cols-1 gap-y-8 justify-items-center sm:my-16 sm:mb-8 sm:grid-cols-2 lg:max-w-[800px] ${props.className || ''}`} data-testid="gists-list">
          {props.collection.map((gist: GistDOMModel, i: number) => (
            <li key={i} className="flex w-[90%] items-center" data-testid="gist-item">
              <TechLogo
                logoClassName="w-8 mr-3"
                source={gistLogosService.getLogo(props.logos, gist.language.toLowerCase())}
              />
              <a className="link text-[0.9rem] transition-all duration-[0.06s]" href={gist.url} title={`${gist.language}: ${gist.title}`}>
                {gist.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default GistsList
