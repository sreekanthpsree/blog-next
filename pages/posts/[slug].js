import PostContent from "../../components/posts/post-details/post-content";
import { getAllPaths, getAllPosts, getPostData } from "../../lib/post-utils";

function SinglePostPage(props) {
  return <PostContent post={props.postData} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      postData,
    },
    revalidate: 100,
  };
}
export function getStaticPaths() {
  const filePaths = getAllPaths();
  getAllPosts();
  const paramsPaths = filePaths.map((filePaths) => {
    const path = filePaths.replace(/\.md$/, "");
    return {
      params: { slug: path },
    };
  });
  return {
    paths: paramsPaths,
    fallback: false,
  };
}

export default SinglePostPage;
