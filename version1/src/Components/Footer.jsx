import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Services",
    items: [
      { name: "UI Design" },
      { name: "UX Design" },
      { name: "Software Development" },
      { name: "Web Development" },
    ],
  },
  {
    title: "Socials",
    items: [
      { name: "LinkedIn", href: "https://www.linkedin.com/in/tushar-singh-329082225/" },
      { name: "Twitter", href: "https://x.com/tusharrr_31" },
      { name: "Github", href: "https://github.com/tusharrr-31" },
      { name: "Instagram", href: "https://www.instagram.com/tusharrr.31" },
    ],
  },
  {
    title: "Contact",
    items: [
      { name: "+91 7505169765" },
      { name: "tusharrrx31@gmail.com", href: "mailto:tusharrrx31@gmail.com" },
      { name: "Ghaziabad, U.P." },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full pt-16">
      {/* Background Animation */}
      <div className="responsibility-section">
        <div className="animat-bg"></div>

        {/* Content Wrapper */}
        <div className="responsibility-content">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 ml-10 text-left font-secondary">
                {LINKS.map(({ title, items }) => (
                  <ul key={title}>
                    <Typography
                      variant="small"
                      color="white"
                      className="mb-3 font-medium opacity-40"
                    >
                      {title}
                    </Typography>
                    {items.map(({ name, href }) => (
                      <li key={name}>
                        <Typography
                          as="a"
                          href={href || "#"}
                          target={href ? "_blank" : "_self"}
                          rel={href ? "noopener noreferrer" : ""}
                          color="white"
                          className="py-1.5 font-normal hover:scale-[1.045] transition-transform duration-1000 no-underline"
                        >
                          {name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>

              {/* Footer Tagline */}
              <Typography className="w-full h-full text-primary flex font-primary items-end justify-end font-bold text-6xl leading-tight sm:pt-10">
                Be Creative,<br />
                Be Solutive
              </Typography>
            </div>

            {/* Bottom Footer Section */}
            <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
              <Typography
                variant="small"
                className="mb-4 text-center font-normal font-primary text-white md:mb-0"
              >
                Designed and Developed with affection by me ✨
              </Typography>
              <div className="mb-4 text-center font-normal font-primary text-white md:mb-0">
                <a
                  href="https://github.com/tusharrr-31/reactportfolio"
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Want to use this template for your portfolio?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
