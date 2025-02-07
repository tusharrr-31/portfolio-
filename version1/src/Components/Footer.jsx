import { Typography } from "@material-tailwind/react";
 
const LINKS = [
  {
    title: "Services",
    items: ["UI Design","UX Design" , "Software Development", "Web Development" ],
  },
  {
    title: "Socials",
    items: ["LinkedIn", "Twitter", "Github", "Instagram"],
  },
  {
    title: "Contact",
    items: ["+91 7505169765", "tusharrrx31@gmail.com", "Ghaziabad, U.P."],
  },
];
 
const currentYear = new Date().getFullYear();
 
export default function Footer() {
  return (
    <footer className="relative w-full pt-16 bg-black">
      <div className="mx-auto w-full max-w-7xl ">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          
          <div className="grid grid-cols-3 justify-between gap-10 text-left font-secondary">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-white no-underline"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <Typography className="w-full h-full text-primary flex font-primary items-end justify-end  font-bold text-6xl leading-tight">
            Be Creative,<br />
            Be Solutive
          </Typography>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal font-primary text-white md:mb-0"
          >
            Designed and Developed with affection by me✨
          </Typography>
          <div className="mb-4 text-center font-normal font-primary text-white md:mb-0">
            <a href="" className="links">
            Want to use this template for your portfolio?
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}