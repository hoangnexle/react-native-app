import RestClient from './rest-client'
import Methods from './methods'
import Urls from ''

export default class BaseApi {
  constructor () {
    this.Urls = Urls
    this.Methods = Methods
  }

  execute (method, endpoint, headers = undefined, isAuthen = true, body = undefined) {
    const restClient = new RestClient(method, endpoint)
    return restClient.execute(headers, body, isAuthen)
  }
}
