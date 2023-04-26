import classes from "./allposts.module.css";
import PostsGrid from "./posts-grid";

function AllPosts(props) {
  console.log(props);
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
