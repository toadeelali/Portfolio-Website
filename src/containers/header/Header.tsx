import {useState, useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {HeaderData} from './HeaderData'
import * as actions from './redux/HeaderActions'
import Personality from 'shared/components/personality/Personality'
import {HeaderEnum} from './models/HeaderEnum'

const Header = () => {
  const headerData = HeaderData()
  const dispatch = useDispatch()
  const [stateRef, setStateRef]: any = useState({count: 0, active: '', launched: false})
  const languageState = useSelector((state: any) => state.language)
  const personalityState = useSelector((state: any) => state.personality)

  const onClickPicture = useCallback(() => {
    setStateRef({active: 'active', count: stateRef.count})

    setTimeout(() => {
      setStateRef({active: undefined, count: stateRef.count < headerData.length - 1 ? stateRef.count + 1 : 0})
    }, HeaderEnum.animationDelay)
  }, [stateRef.count, headerData])

  const togglePersonality = useCallback(
    (personality: any) => {
      dispatch(actions.setPersonality(personality))
      document.body.className = document.body.className.replace(/primary-color-\w+/g, '')
      document.body.classList.add(`primary-color-${personality.color}`)
    },
    [dispatch]
  )

  useEffect(() => {
    if (!stateRef.launched) {
      dispatch(actions.getPersonality())
      togglePersonality({...headerData[stateRef.count]})
      setStateRef({...stateRef, launched: true})
    }
  }, [stateRef, languageState, dispatch, togglePersonality, headerData])

  return (
    <section className="section pt-12 text-center sm:pt-8">
      <div className="section-content">
        <header className="inline-flex flex-col items-center text-left sm:flex-row sm:min-w-80 sm:pt-6">
          <div className="relative">
            <span className="absolute z-10 -translate-y-5 translate-x-0 rotate-[-35deg] rounded-[5px] bg-primary px-1.5 py-0.5 text-[0.65rem] text-white opacity-0 before:absolute before:left-1/2 before:top-[calc(100%-1px)] before:block before:border-x-8 before:border-t-8 before:border-x-transparent before:border-t-[var(--color-primary)] before:-translate-x-1/2 [.home-initialized_&]:animate-hint">
              Click me!
            </span>
            <Personality
              active={stateRef.active}
              events={{
                onClick: onClickPicture
              }}
              image={{
                src: personalityState?.data?.picture,
                alt: 'Adeel Ali'
              }}
            />
          </div>

          <h1 className="flex flex-col text-center sm:ml-2.5 sm:text-left">
            <div className="pt-2.5 text-[1.2rem] leading-8 sm:p-0 sm:leading-[1.4]">Hi, my name is</div>
            <div className="pt-2.5 text-[2.4rem] font-semibold leading-[0.95] sm:pt-1.5 sm:text-[2.6rem] sm:leading-[2.7rem]">Adeel Ali</div>
            <div className="text-primary text-[1.45rem] leading-[2.4rem] sm:text-[1.6rem] sm:leading-8">{personalityState?.data?.position}</div>
          </h1>
        </header>

        <div className="mx-auto mb-8 mt-12 max-w-[78%] text-center text-[1.2rem] leading-[2.1rem] sm:max-w-[78%] lg:my-16 lg:max-w-[70%]">
          <p className="mb-4 inline-block border-b border-dashed border-primary pb-4 text-[1.6rem] font-light leading-[2.2rem] lg:mb-2.5 lg:text-[2.26rem] lg:leading-[3.2rem]">{personalityState?.data?.tagLine}</p>
          <p className="text-[1.2rem] leading-[1.9rem] lg:mx-auto lg:w-[87%] lg:text-[1.33rem] lg:leading-8">
            <span dangerouslySetInnerHTML={{__html: personalityState?.data?.description}} />
            <strong>
              <em className="text-primary text-[1.2rem] leading-[1.9rem] lg:text-[1.33rem] lg:leading-8"> {personalityState?.data?.bio}</em>
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Header
