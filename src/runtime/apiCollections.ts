interface EndPointProperties {
  url: string,
  method: 'get' | 'post',
}

interface EndPoint {
  [key: string]: EndPointProperties,
  requestToken: EndPointProperties,
  departure: EndPointProperties,
  destination: EndPointProperties,
}

export const endpoint: EndPoint = {
  requestToken: {
    url: '/api/token',
    method: 'post'
  },
  departure: {
    url: '/api/reservation/departure',
    method: 'get'
  },
  destination: {
    url: '/api/reservation/destination',
    method: 'get'
  }
}
