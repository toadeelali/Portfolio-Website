import {Provider} from 'react-redux'
import createMockStore from 'redux-mock-store'

import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gists from './Gists'
import {GistsService} from './services/GistsService'
import {gistsCollectionMock} from '../../../test/mocks/gists.mock'

describe.skip('Gists', () => {
  let mockStore: any
  let spy: any
  let setGistsLocalStorage: any

  beforeEach(() => {
    mockStore = createMockStore()

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => JSON.stringify(gistsCollectionMock)),
        setItem: jest.fn(() => gistsCollectionMock)
      },
      writable: true
    })

    spy = jest.spyOn(GistsService, 'setGistsLocalStorage')
    setGistsLocalStorage = GistsService.setGistsLocalStorage(gistsCollectionMock.data)
  })

  test.skip('get and set gists to local storage', () => {
    const {queryByText, queryAllByTestId} = render(
      <Provider store={mockStore({})}>
        <Gists />
      </Provider>
    )

    const spy = jest.spyOn(GistsService, 'setGistsLocalStorage')
    const setGistsLocalStorage = GistsService.setGistsLocalStorage(undefined as any)

    expect(spy).toHaveBeenCalledTimes(1)
    expect(setGistsLocalStorage).toEqual(Promise.resolve({}))
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
    expect(window.localStorage.setItem).toHaveBeenCalledWith('ADEEL-ALI:GISTS', '{"data":undefined}')

    expect(queryByText('Sorry, something went wrong! Please, try again later.')).toBeInTheDocument()
    expect(queryAllByTestId('gist-item')).toHaveLength(0)

    spy.mockRestore()
  })

  test.skip('check gist items', () => {
    const {queryAllByTestId} = render(
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
