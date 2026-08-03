import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <p>

          © {new Date().getFullYear()} Shams Tabrez Ahmed

        </p>

        <nav>

          <ul className="footer-nav">

            <li>
              <Link href="https://github.com/seucra">
                GitHub
              </Link>
            </li>

            <li>
              <Link href="/journal">
                Journal
              </Link>
            </li>

            <li>
              <Link href="https://linkedin.com/in/s-t-ahmed">
                LinkedIn
              </Link>
            </li>

            <li>
              <Link href="mailto:admin@seucra.tech">
                Email
              </Link>
            </li>

          </ul>

        </nav>

      </div>

    </footer>
  );
}
