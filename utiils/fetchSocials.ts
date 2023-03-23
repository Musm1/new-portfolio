import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

export const fetchSocial= async () => {
    const query= groq`
    *[_type == "social"]
    `
    const socials= await sanityClient.fetch(query);
    return socials;
}