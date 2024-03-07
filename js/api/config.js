export const BASEURL = "https://api.themoviedb.org/3/";
export const person = "Di Caprio";
import dotenv from 'dotenv';
dotenv.config();

export const OPTIONS = {
      method: "GET",
      headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_KEY}`,
      },
};
