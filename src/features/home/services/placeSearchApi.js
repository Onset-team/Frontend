import axios from 'axios';
import { errorMessages } from '@/utils/httpErrorsMessage';
import api from '@/apis/axiosInstance';

export async function placeSearchApi({keyword}) {

  try {
    const res = await api.get('/places/search', {
      params: { keyword },
      withCredentials: true
    });

    return res;
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
