import axios from 'axios'

export const api = {
  base: 'https://wp-headless.fr/wp-json',
  wpRoute: '/wp/v2',
  acfRoute: '/acf/v3'
}

/**
 * @returns {Promise<AxiosResponse<Array> | void>}
 */
export const getPosts = () => {
  return axios
    .get(`${api.base + api.wpRoute}/projets?_embed`)
    .then(res => res.data)
    .catch(error => console.log(error))
}

/**
 * @returns {Promise<AxiosResponse<Object> | void>}
 */
export const getOptions = () => {
  return axios
    .get(`${api.base + api.acfRoute}/options/options`)
    .then(res => res.data.acf)
    .catch(error => console.log(error))
}
