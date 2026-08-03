import Link from "next/link";

const navigation = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/journey",
    label: "Journey",
  },
  {
    href: "/journal",
    label: "Journal",
  },
  {
    href: "/resume",
    label: "Resume",
  },
];

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-container">

        <Link
          href="/"
          className="navbar-brand"
        >
          Shams Tabrez Ahmed
        </Link>

        <nav>

          <ul className="navbar-nav">

            {navigation.map((item) => (

              <li key={item.href}>

                <Link href={item.href}>
                  {item.label}
                </Link>

              </li>

            ))}

          </ul>

        </nav>

      </div>

    </header>
  );
}
