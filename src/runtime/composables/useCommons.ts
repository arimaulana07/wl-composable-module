import { ref } from "#imports";
import type { ApiCallPayload, ApiResponseWrapper } from "./types/useCommons.type";
import { endpoint } from "../apiCollections";
import { useRuntimeConfig, useFetch } from "#imports";

const token = ref(null);
const fetchToken = async () => {
  const { public: publicConfig } = useRuntimeConfig()
  const { url, method } = endpoint.requestToken
  
  const response = await useFetch(url, { 
    method,
    body: {
      grant_type: publicConfig.grantType,
      client_id: publicConfig.clientId,
      client_secret: publicConfig.clientSecret
    },
  });
  console.log('token', (response.data.value as any).tiketux?.result.access_token);
  return (response.data.value as any).tiketux?.result.access_token;
}


export const useWlFetch =
  async <T>({ action, body = null , params = null }: ApiCallPayload, loop = 0): Promise<ApiResponseWrapper<T>> => {
    if (loop > 3) throw new Error('Looping Detected!');

    console.log('token ' + action, token.value)

    const { url, method } = endpoint[action];
    try {
      const data = await $fetch<ApiResponseWrapper<T>>(url, {
        method,
        body,
        params: params as object,
        headers: {
          Authorization: `Bearer ${token.value}`,
          'Content-Type': 'application/json',
        }
      });
      console.log({ action, data })
      return data;
    } catch (error) {
      console.log('error', error?.response);
      if (error?.data?.statusCode == 401) {
        const newToken = await fetchToken();
        token.value = newToken;
        return await useWlFetch<T>({ action, body, params }, loop + 1)
      }
      throw new Error(error)
    }
    

    // if (error.value?.statusCode == 401) {
    //   
    // }
  
    
}
