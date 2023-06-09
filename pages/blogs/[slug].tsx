import BlogHeader from '@/components/Header/BlogHeader';
import { sanityClient, urlFor } from '@/sanity';
import { Post } from '@/typings';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react'
import PortableText from 'react-portable-text';

interface Props {
    post: Post
}

const slug = ({post}: Props) => {
  return (
    <main className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    shrink-0 overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-thumb-[#49f70a]/80 scrollbar-track-black '>
         <Head>
            <title>{post.title} </title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BlogHeader/>
        <img 
            src={urlFor(post.mainImage).url()}
            className="mx-auto w-[1200px] h-[400px]"
        />
        <article className='max-w-5xl p-5 mx-auto bg-[rgb(49,47,47)] mt-5'>
            <div className='bg-[rgb(35,32,32)] p-5'>
            <h1 className='mb-3 text-3xl '>
                {post.title}
            </h1>
            <h2 className='mb-2 text-xl font-light text-slate-300'>{post.description}</h2>
            <div className='flex items-center space-x-2'>
                <img src={urlFor(post.author.image).url()} className="w-10 h-10 rounded-full"/>
                <p className='text-lg font-light'>
                    Blog post by <span className='text-green-400'>{post.author.name}</span> - Published at {new Date(post._createdAt).toLocaleString()}
                </p>
            </div>
            <div className='mt-6'>
                <PortableText
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                    content={post.body}
                />
            </div>
            </div>
        </article>
        <hr className='max-w-2xl my-5 mx-auto border-[#49f70a]'/>
    </main>
  )
}

export default slug

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
      _id,
      slug {
          current
      }
  }`;
  const posts= await sanityClient.fetch(query);
  const paths= posts.map((post: Post)=>({
      params: {
          slug: post.slug.current
      }
  }))
  return {
      paths,
      fallback: false ,
  }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const query= `*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      author->{
          name,image
      },
      description,
      mainImage,
      slug,
      body,
      categories[]->,
      title
  }`
  const post= await sanityClient.fetch(query, {
      slug: params?.slug,
  });

  if(!post){
      return {
          notFound: true
      }
  }
  return {
      props:{
          post
      }
  }
}