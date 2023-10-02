import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/4c5f4747-2d58-444d-adc8-91586c3b981c/github/main', token: '9e5eaa5ea2dec883808d969cfdb65eb267b4b776', queries });
export default client;
  