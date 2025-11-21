import axios from 'axios';
import { errorMessages } from '@/utils/httpErrorsMessage';
import api from '@/apis/axiosInstance';

export async function agreementApi() {
  try {
    const res = await api.post('/users/agreements', { withCredentials: true });

    return res;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      statusCode: error.status,
      errorCode: error.code,
      message: error.message,
      timestamp: error.timestamp,
      raw: error.raw,
    };
  }
}
