import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

export const fetchSkills= async () => {
    const query= groq`
    *[_type == "skill"]
    `;
    const skills= await sanityClient.fetch(query);
    return skills;
}