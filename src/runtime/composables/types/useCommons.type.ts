export interface ApiCallPayload {
  action: string;
  body?: object | null ;
  params?: object | null ;
}

export interface ApiResponseWrapper<T> {
  tiketux: {
    result: T;
  }
}
