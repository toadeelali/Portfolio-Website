import { Provider } from 'react-redux'
import createMockStore from 'redux-mock-store'

import { render } from '@testing-library/react'
import Gists from './Gists'
import { gistsService } from './services/GistsService'
import { gistsCollectionMock } from '../../../test/mocks/gists.mock'

describe.skip('Gists', () => {
  let mockStore: any
  let spy: any
  let setGistsLocalStorage: any

  beforeEach(() => {
    mockStore = createMockStore()

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: vi.fn(() => JSON.stringify(gistsCollectionMock)),
        setItem: vi.fn(() => gistsCollectionMock)
      },
      writable: true
    })

    spy = vi.spyOn(gistsService, 'saveGists')
    setGistsLocalStorage = gistsService.saveGists(gistsCollectionMock.data as any)
  })

  test.skip('get and set gists to local storage', () => {
    const { queryByText, queryAllByTestId } = render(
      <Provider store={mockStore({})}>
        <Gists />
      </Provider>
    )

    const spy = vi.spyOn(gistsService, 'saveGists')
    const setGistsLocalStorage = gistsService.saveGists(undefined as any)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(setGistsLocalStorage).toEqual(Promise.resolve({}))
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
    expect(window.localStorage.setItem).toHaveBeenCalledWith('ADEEL-ALI:GISTS', '{"data":undefined}')

    expect(queryByText('Sorry, something went wrong! Please, try again later.')).toBeInTheDocument()
    expect(queryAllByTestId('gist-item')).toHaveLength(0)

    spy.mockRestore()
  })

  test.skip('check gist items', () => {
    const { queryAllByTestId } = render(
      <Provider store={mockStore({})}>
        <Gists />
      </Provider>
    )

    expect(spy).toHaveBeenCalledTimes(1)
    expect(setGistsLocalStorage).toEqual(Promise.resolve(gistsCollectionMock))
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'ADEEL-ALI:GISTS',
      `${JSON.stringify(gistsCollectionMock)}`
    )

    expect(queryAllByTestId('gist-item')).toHaveLength(8)
    spy.mockRestore()
  })
})
