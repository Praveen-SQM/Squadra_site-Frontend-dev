import { VerifaliaRestClient } from "verifalia";

export const verifaliaClient = new VerifaliaRestClient({
  username: process.env.VERIFALIA_USERNAME||"kuldeep@squadramedia.com"!,
  password: process.env.VERIFALIA_PASSWORD!||"Kuldeepsquadramedia@18",
});
