import axios, { AxiosResponse } from "axios";
import { api } from "@/api.json";

async function fetcher<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(`${api}/api/${url}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

export default fetcher;

