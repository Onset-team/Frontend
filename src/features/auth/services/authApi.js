import axios from 'axios';
import { errorMessages } from '@/utils/httpErrorsMessage';
import api from '@/apis/axiosInstance';

export async function authApi({ credential, clientId, select_by }) {
  try {
    const res = await api.post('/users/google', {
      credential,
      clientId,
      select_by,
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
