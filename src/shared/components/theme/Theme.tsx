import {useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {storageService} from '../../services/StorageService'

import {ThemeService} from './services/ThemeService'
import {ThemeEnum} from './models/ThemeEnum'
import * as actions from './redux/ThemeActions'

const Theme = () => {
  const dispatch = useDispatch()
  const themeState = useSelector((state: any) => state.theme)

  const toggleTheme = () =>
    themeState.value === ThemeEnum.light ? storeTheme(ThemeEnum.dark) : storeTheme(ThemeEnum.light)

  const storeTheme = useCallback(
    (theme: string) => {
      const cond = theme === ThemeEnum.dark ? ThemeEnum.dark : ThemeEnum.light

      storageService.setItem('theme', cond)
      dispatch(actions.setTheme(theme))
    },
    [dispatch]
  )

  useEffect(() => {
    const [savedTheme] = storageService.getItem('theme', false)
    const preferColorScheme = ThemeService.getPreferColorScheme()

    if (preferColorScheme && !savedTheme) {
      dispatch(actions.setTheme(preferColorScheme))
    } else if (savedTheme) {
      storeTheme(savedTheme)
    } else {
      storeTheme(ThemeEnum.light)
    }
  }, [dispatch, storeTheme])

  useEffect(() => {
    ThemeService.isDarkTheme(themeState.value)
      ? document.body.classList.add(ThemeEnum.darkMode)
      : document.body.classList.remove(ThemeEnum.darkMode)
  }, [themeState.value])

  const getButtonLabel = (): string =>
    ThemeService.isDarkTheme(themeState.value)
      ? `${ThemeEnum.light.toUpperCase()} MODE`
      : `${ThemeEnum.dark.toUpperCase()} MODE`

  const isDark = ThemeService.isDarkTheme(themeState.value)

  return (
    <button
      className={`px-3.5 py-2.5 text-[0.7rem] shadow-[0_0_4px_0_rgba(17,22,26,0.16)] transition-all duration-[0.06s] hover:relative hover:top-px hover:left-px hover:bg-primary hover:shadow-none active:bg-primary active:shadow-[inset_2px_2px_2px_var(--color-black)] ${isDark ? 'bg-white text-black active:shadow-[inset_2px_2px_2px_var(--color-black-full)] hover:text-white' : 'bg-black text-white'}`}
      onClick={toggleTheme}
    >
      {getButtonLabel()}
    </button>
  )
}

export default Theme
