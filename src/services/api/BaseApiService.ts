import axios from "axios";
import { BASE_API } from "../../config";

const axiosInstance = axios.create({
  baseURL: BASE_API,
});

// data service
export default class BaseApiService {
    get(path: string): Promise<any> {
        return axiosInstance.get(path);
    }

    post(path: string, data: any): Promise<any> {
        return axiosInstance.post(path, data);
    }
}
