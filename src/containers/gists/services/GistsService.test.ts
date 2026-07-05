import {vi} from 'vitest'

import {gistsService} from './GistsService'

import {gistsResponseMock} from '../../../../test/mocks'

describe.skip('Gists Service', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: vi.fn(() => JSON.stringify(gistsResponseMock)),
        setItem: vi.fn(() => gistsResponseMock)
      },
      writable: true
    })
  })

  describe('Fetching Gists', () => {
    it('getGists: return fetched gists', async () => {
      const mockResponse = vi.fn()
      window.fetch = mockResponse
      mockResponse.mockResolvedValueOnce({
        json: () => Promise.resolve(gistsResponseMock)
      })

      const result = await gistsService.getGists()

      expect(result).toMatchSnapshot()
    })
  })

  describe('Local Storage', () => {
    it('saveGists: should set gists in local storage', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: vi.fn(() => gistsResponseMock)
        }
      })

      const now = Date.now()
      gistsService.saveGists({
        date: now,
        logos: [],
        collection: [
          {
            id: '1',
            url: 'https://example.com',
            files: [
              {
                filename: 'test.js',
                type: 'application/javascript',
                language: 'JavaScript',
                raw_url: 'https://example.com/gist',
                size: 1000
              }
            ],
            title: 'Gist Sample',
            language: 'JavaScript'
          }
        ]
      })

      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        'ADEEL-ALI:GISTS',
        `{"date":${now},"collection":[{"id":"1","url":"https://example.com","files":[{"filename":"test.js","type":"application/javascript","language":"JavaScript","raw_url":"https://example.com/gist","size":1000}],"title":"Gist Sample","language":"JavaScript"}]}`
      )
    })

    it('saveGists: should not call localStorage setItem', () => {
      Object.defineProperty(window, 'localStorage', {
        value: {
          setItem: vi.fn(() => gistsResponseMock)
        }
      })

      gistsService.saveGists(undefined as any)

      expect(window.localStorage.setItem).toHaveBeenCalledTimes(0)
    })
  })
})
