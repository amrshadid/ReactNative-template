import axios from 'axios';
import {BASE_API} from '../../Constants'

export const ExampleServices = async () => {
    let response;
    try {
      response = await axios.get(BASE_API + '/products/1');
      return response;

    } catch (error) {
      return error;
    }
  };