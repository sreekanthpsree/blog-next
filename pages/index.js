import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featuredpost";
import { getFeaturedPosts } from "../lib/post-utils";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>My blog</title>
        <meta name="description" content="Blog about programming" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
    revalidate: 100,
  };
}

export default HomePage;
