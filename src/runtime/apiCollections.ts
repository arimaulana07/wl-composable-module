interface EndPointProperties {
  url: string,
  method: 'get' | 'post',
}

interface EndPoint {
  [key: string]: EndPointProperties,
  requestToken: EndPointProperties,
  departure: EndPointProperties,
  destination: EndPointProperties,
  schedule: EndPointProperties,
  seats: EndPointProperties,
  listPayment: EndPointProperties,
  calculatePrice: EndPointProperties
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
  },
  schedule: {
    url: '/api/reservation/schedule',
    method: 'get'
  },
  seats: {
    url: '/api/reservation/seats',
    method: 'get'
  },
  listPayment: {
    url: '/api/reservation/list-payment',
    method: 'get'
  },
  calculatePrice: {
    url: '/api/reservation/calculate-price',
    method: 'get'
  },
  booking: {
    url: '/api/reservation/booking',
    method: 'post'
  },
  detailBooking: {
    url: '/api/reservation/booking',
    method: 'get'
  }
}
