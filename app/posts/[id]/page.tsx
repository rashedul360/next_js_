import React from "react";

const getSinglePost = async (id: string) => {
 const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
 const post = await data.json();
 return post;
};
const Page = async ({
 params,
}: {
 params: {
  id: string;
 };
}) => {
 console.log(params.id);
 const post = await getSinglePost(params.id);
 console.log(post);

 return (
  <div>
   <div className="p-5 bg-red-400">
    <h2 className="text-2xl mt-2 font-bold text-center">dynamic post route</h2>
    <p>id:{post?.id}</p>
    <p>title:{post?.title}</p>
   </div>
  </div>
 );
};

export default Page;
