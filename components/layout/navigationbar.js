import Link from "next/link";
import classes from "./navigationbar.module.css";
import Logo from "./logo";

function NavigationBar() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
