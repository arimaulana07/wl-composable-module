import type { ApiCallPayload, ApiResponseWrapper } from "./types/useCommons.type";
import { endpoint } from "../apiCollections";
import { useState, useRuntimeConfig, useFetch } from "#imports";


const getToken = async () => {
  const { public: publicConfig } =useRuntimeConfig()
  const { url, method } = endpoint.requestToken
  
  const response = await $fetch(url, { 
    method,
    body: {
      grant_type: publicConfig.grantType,
      client_id: publicConfig.clientId,
      client_secret: publicConfig.clientSecret
    },
  });
  return response
}

export const useWlFetch =
  async <T>({ action, body = null , params = null }: ApiCallPayload, loop = 0): Promise<ApiResponseWrapper<T>> => {
    const token = useState('token', () => null)

    const { url } = endpoint[action];
    const { data } = await useFetch<ApiResponseWrapper<T>>(url, {
      body,
      params: params as object,
      headers: {
        Authorizarion: `Bearer ${token}`
      }
    })

    return JSON.parse(data.value as unknown as string)
}
