import { Cookies } from "react-cookie";

const cookies = new Cookies();

export function setCookie(key: string, value: string, options?: any) {
  cookies.set(key, value, { ...options });
}

export function getCookie(key: string) {
  return cookies.get(key);
}
