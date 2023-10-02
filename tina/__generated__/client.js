import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '9e5eaa5ea2dec883808d969cfdb65eb267b4b776', queries });
export default client;
  