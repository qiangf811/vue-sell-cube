import request from './request'

const ERR_OK = 0

export function get (url) {
  return function (params) {
    return request.get(url, params).then(
      ({ data: res }) => {
        const { errno, data } = res
        if (errno === ERR_OK) {
          return data
        }
        return {}
      }
    ).catch((err) => {
      console.error(err)
    })
  }
}
