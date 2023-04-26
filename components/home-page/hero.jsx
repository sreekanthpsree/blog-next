import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sree.jpg"
          alt="Image of sree"
          width={300}
          height={280}
        />
      </div>
      <h1>Hi, I am sree</h1>
      <p>
        I blog about web development - especially framework like React and next
      </p>
    </section>
  );
}

export default Hero;
