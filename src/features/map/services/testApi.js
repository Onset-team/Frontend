import axios from "axios";
import { errorMessages } from "@/utils/httpErrorsMessage";

export async function testApiCall() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
      success: true,
      data: res.data,
      statusCode: res.status
    };
  } catch (error) {
    // console.error(error);
    const status = error.response?.status;

    return {
      success: false,
      error: errorMessages[status] || error.message,
      statusCode: status
    };
  }
}
