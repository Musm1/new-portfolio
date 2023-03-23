import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

export const fetchExperiences= async () => {
    const query= groq`
    *[_type == "experience"]{
        ...,
        technologies[]->
    }
    `;
    const experiences= await sanityClient.fetch(query);
    return experiences;
}