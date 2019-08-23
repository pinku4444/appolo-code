import { RESTDataSource } from 'apollo-datasource-rest';
import configuration from '../config/configuration';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = configuration.serviceUrl;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async me(id) {
    const data = await this.get(`user/me`);
    return data;
  }

};

