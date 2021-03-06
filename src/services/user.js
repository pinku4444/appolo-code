import { RESTDataSource } from 'apollo-datasource-rest';
import {AuthenticationError} from 'apollo-server-express'
import configuration from '../config/configuration';

export class UserAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = configuration.serviceUrl;
	}

	willSendRequest(request) {
		request.headers.set('Authorization', this.context.token);
	}
	

	async me() {
		try {
			const data = await this.get(`user/me`);
			return data;
		}catch(err) {
			let error = err.extensions.response.body;
			this.context.errorHandler(error);
		}
		
	}
	
	async createUser(data) {
		try {
			const user = {...data}
			const tokenData = await this.post('user',user);
			return tokenData;
		}catch(err) {
			let error = err.extensions.response.body;
			this.context.errorHandler(error);
		}
	}
	
	async fetchUsers() {
		try {
			const data = await this.get(`user`);
			return data;

		}catch(err) {
			let error = err.extensions.response.body;
			this.context.errorHandler(error);
		
		}
    
  }

  async deleteUser(id) {
	  try {
		const data = await this.delete(`user/delete/${id}`);
		return data;

	  }catch(err) {
			let error = err.extensions.response.body;
			this.context.errorHandler(error);
	  }
    
  }
  async updateUser(id,data) {
    const userData = {...data};
    const response  = await this.put(`user/update/${id}`,userData);
    return response;
  }
  async loginUser(data) {
	  try {
		const response = await this.post(`auth/login`,data);
	  	return response;
	  }catch(err) {
		let error = err.extensions.response.body;
		this.context.errorHandler(error);
  }
	  
  }

};

