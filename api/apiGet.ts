import { OutData } from "./interfaces/outData";
import { API_URL } from "./vars";

export async function apiGet<T>(url: string) {
  const response = await fetch(`${API_URL}/${url}`);
  const data: OutData<T> = await response.json();

  console.log(url);
  return data;
}
