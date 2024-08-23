import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const NavLinks = [
  {
    id: 1,
    title: 'Product',
    links: [
      {
        id: 1,
        name: 'Blog',
        href: '/',
      },
      {
        id: 2,
        name: 'Partners',
        href: '/',
      },
      {
        id: 3,
        name: 'Premium',
        href: '/',
      },
    ],
  },
  {
    id: 1,
    title: 'Resources',
    links: [
      {
        id: 1,
        name: 'Support',
        href: '/',
      },
      {
        id: 2,
        name: 'Events',
        href: '/',
      },
      {
        id: 3,
        name: 'Privacy Policy',
        href: '/',
      },
    ],
  },
  {
    id: 1,
    title: 'Company',
    links: [
      {
        id: 1,
        name: 'Company',
        href: '/',
      },
      {
        id: 2,
        name: 'Contact us',
        href: '/',
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer id="site-footer " className="border-b border-[#FFFFFF80]">
      <div
        className="px-5"
        style={{
          background:
            'linear-gradient(360deg, rgba(185, 8, 118, 0.21), rgba(3, 1, 2, 0))',
        }}
      >
        <div className="m-auto w-full max-w-[1188px] pt-[94px] pb-[67px] text-center">
          <div className="flex pb-[60px]">
            <img
              src="/white-logo.png"
              alt="CoFoundersLab"
              className="hidden w-full max-w-[200px] dark:block md:max-w-[275px] lg:max-w-[362px]"
            />
            <img
              src="/logo.png"
              alt="CoFoundersLab"
              className="block w-full max-w-[200px] dark:hidden md:max-w-[275px] lg:max-w-[362px]"
            />
          </div>

          <div className="flex xs:flex-wrap xs:gap-y-6 lg:flex-nowrap">
            {NavLinks.map((nav, index) => {
              return (
                <div
                  key={index}
                  className="flex w-auto flex-1 flex-col xs:basis-full sm:basis-1/2 md:basis-1/3 md:p-2"
                >
                  <h4 className="footer-heading mb-3 text-left text-lg font-medium text-black dark:text-white md:text-2xl md:leading-9">
                    {nav.title}
                  </h4>
                  <ul id="footer-menu-1" className="footer-menu text-left">
                    {nav.links.map((link, index) => {
                      return (
                        <li className="footer-menu-item" key={index}>
                          <Link href={link.href} className="footer-menu-link block py-1.5 text-base font-light text-[#344054] dark:opacity-75 dark:font-extralight dark:text-white md:text-xl md:leading-6">
                              {link.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            <div className="flex w-auto basis-1/3 flex-col md:flex-1 md:p-2 lg:basis-1/2">
              <h4 className="footer-heading mb-3 text-left text-lg font-medium text-black dark:text-white md:text-2xl md:leading-9">
                Join Newsletter
              </h4>
              <form
                action=""
                id="newsletter-form"
                className="footer-newsletter-form flex h-[62px] max-w-[328px] justify-between rounded-xl border border-[#00000080] bg-[#FFFFFF26] p-1 dark:border-[#FFFFFF80]"
              >
                <input
                  type="email"
                  className="w-[210px] border-0 bg-transparent px-7 text-sm font-normal leading-4 text-[#8F8F8F] outline-0"
                  name="email"
                  id="email"
                  placeholder="Type email here"
                />
                <input
                  type="submit"
                  className="cursor-pointer rounded-xl bg-[#33A0FF] p-4 leading-4 text-white"
                  value="Subscribe"
                />
              </form>
            </div>
            <div className="flex w-auto flex-1 basis-full flex-col md:basis-1/2 md:p-2">
              <h4 className="footer-heading mb-3 text-left text-lg font-medium text-black dark:text-white md:text-2xl md:leading-9">
                Connect with us
              </h4>
              <div className="flex items-center gap-4 pt-2">
                <FaFacebookF
                  size={32}
                  className="text-[#344054] dark:text-white"
                />
                <FaYoutube
                  size={32}
                  className="text-[#344054] dark:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
