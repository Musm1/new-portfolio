import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

export const fetchProjects= async () => {
    const query= groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
    `;
    const project= await sanityClient.fetch(query);
    return project;
}