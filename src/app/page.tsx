"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import { Post } from "../../types";
import { urlFor } from "@/sanity/lib/image";
import Container from "../../ui/container";
import Grid from "../../ui/grid";
import Heading from "../../ui/heading";
import Text from "../../ui/text";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/post")
      .then((res) => res.json())
      .then((data) => setPosts(data.documents))
      .catch((err) => setError(err.message));
  }, []);

  console.log(posts);

  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <Navigation />
      <Header
        heading="Coming Soon"
        video="https://www.youtube.com/embed/nM3WLF-O_Qs?autoplay=1&mute=1&playsinline=1&modestbranding=1&showinfo=0&controls=0&disablekb=1&rel=0&start=18"
      />

      <div className="blog w-full flex flex-col items-center justify-center">
        <div>
          <h1 className="uppercase text-yellow-500 font-spicy py-2 md:text-3xl">
            events
          </h1>
        </div>
        <div className="p-4">
          {posts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            <Container>
              <Grid>
                {posts.map((post) => (
                  <div key={post._id} className="p-4">
                    <Image
                      src={urlFor(post.mainImage).width(800).height(500).url()}
                      alt={post.title}
                      width={800}
                      height={500}
                      property="true"
                      quality={100}
                      className="rounded mb-2"
                    />

                    <Heading
                      type="h2"
                      className="!text-xl font-sans !text-black !font-semibold"
                    >
                      {post.title}
                    </Heading>

                    <Text className="!text-sm !text-black !font-sans !text-left">
                      {post?.excerpt}
                    </Text>
                  </div>
                ))}
              </Grid>
            </Container>
          )}
        </div>
      </div>
    </section>
  );
}
