import Link from "next/link";

export default async function Home() {
 return (
  <div>
   <Link href={"/posts"}>see all posts</Link>
  </div>
 );
}
