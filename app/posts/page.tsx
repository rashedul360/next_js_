import { Metadata } from "next";
import Link from "next/link";
import React from "react";
async function getPosts() {
 const res = await fetch("https://jsonplaceholder.typicode.com/posts");
 const posts = await res.json();
 return posts;
}
export type Post = {
 title: String;
 id: string;
};
export const metadata: Metadata = {
 title: "posts",
 description: "all posts are here",
};

const page = async () => {
 const posts = await getPosts();
 return (
  <div>
   {posts.map((post: Post) => (
    <div key={post.id}>
     <Link href={`/posts/${post.id}`}>
      <p>{post?.title}</p>
     </Link>
    </div>
   ))}
  </div>
 );
};

export default page;
