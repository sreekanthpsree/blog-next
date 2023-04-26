import classes from "./post-item.module.css";
import Image from "next/image";
import Link from "next/link";

function PostItem(props) {
  const { title, image, paragraph, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} height={300} width={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{paragraph}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
