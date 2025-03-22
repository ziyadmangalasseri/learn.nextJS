import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      welcom to blog page<br/>
      <Link href={"/blog/post2"}>post-2</Link><br/>
      <Link href={"/blog/post3"}>post-3</Link><br/>
      <Link href={"/blog/post4"}>post-4</Link>
    </div>
  );
};

export default Page;
