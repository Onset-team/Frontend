import axios from 'axios';
import { errorMessages } from '@/utils/httpErrorsMessage';
import api from '@/apis/axiosInstance';

export async function authApi() {
  try {
    const res = await api.get('/api/users/google');

    console.log('isNewUser:', res.data.isNewUser);

    return {
      success: true,
      data: res.data,
      statusCode: res.status,
    };
  } catch (error) {
    // console.error(error);
    const status = error.response?.status;

    return {
      success: false,
      error: errorMessages[status] || error.message,
      statusCode: status,
    };
  }
}
