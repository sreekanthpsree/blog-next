import { Fragment } from "react";
import AllPosts from "../../components/posts/allposts";
import { getAllPosts } from "../../lib/post-utils";
import Head from "next/head";

function AllPostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All my posts</title>
        <meta
          name="description"
          content="A list of all programming tutorials"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default AllPostPage;
