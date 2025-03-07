import Image from "next/image";
import MetaInfo from "./meta-info";
import { HTMLAttributes } from "react";

interface IBlogPosts extends HTMLAttributes<HTMLElement> {
  image: string;
  data: string;
  author: string;
  createdAt: Date;
  title: string;
}

export default function DetailsPosts({
  image,
  data,
  author,
  createdAt,
  title,
  ...rest
}: IBlogPosts) {
  const { className, ...props } = rest;
  return (
    <section className="mb-10" {...props}>
      <Image src={image} alt="post-image" width={744} height={440} />
      <MetaInfo date={createdAt} name={author} className={className} />
      <h1 className="text-4xl mb-4">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </section>
  );
}
