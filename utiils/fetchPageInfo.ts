import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

export const fetchPageInfo= async () => {
    const query= groq`
    *[_type == "pageInfo"][0]
    `;
    const pageInfo= await sanityClient.fetch(query);
    return pageInfo;
}