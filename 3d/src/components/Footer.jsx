import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<footer className="bg-tertiary font-sans w-[100vw]">
  <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="flex justify-center text-teal-600 sm:justify-start opacity-80">
          <div className='flex flex-col'>
            <div 
              className="font-bold text-3xl italic text-white tracking-wide drop-shadow-lg mr-2" 
              style={{ fontFamily: "'Playfair Display', serif" }}
          >
              GearPoint
          </div>
          <div
              className="text-xs text-gray-400 pl-1"
              style={{ fontFamily: "'Roboto', sans-serif" }}
          >
              where every ride begins
          </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg"  color='white' width="3.5rem" height="3.5rem" viewBox="0 0 48 48">
                          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16.003 19.964c2.088 1.128 3.955 2.2 3.897 3.326m-.437-15.53c.384-.8.774-1.695 1.166-1.948c.997-.053 2.185.087
                              3.016.597c.502.306.964.67 1.276 1.25c1.117.604 1.187 1.311 2.414 1.808l-2.588-.742l.04.45">
                                  </path>
                                  <path d="M24.551 9.074c-.238.814-.614 1.655-1.276 2.37c.168.26.394.401.443.909c-.537-.091-.71.029-.72.505m-4.855
                                  16.097l-1.396 2.28l-.201 1.158c.462.56.787 1.825 1.142 2.936c1.163.298 2.75 1.127.846 1.204l-3.653-1.615c-.185-.332-.224-.87.353-1.559a54
                                  54 0 0 1 1.246-7.564c-1.384-1.367-3.063-2.622-4.885-3.462c-.295-.84-.93-1.12-1.49-1.524c-.608-.514-1.015-1.356-1.3-2.468c.123-1.19.372-1.522.587-2.085c.692-1.167 
                                  1.485-1.715 1.872-2.608c.864-.465 1.354-1.265 2.259-2.049a58 58 0 0 0 2.61-1.51c1.11-.635 2.297-.22 2.583-.72c.274.066.54-.084.672-.297l-.016-.664l-.397-.469">
                                      </path>
                                      <path d="M20.878 30.938c-.55.21-1.131.38-1.73.48l-1.005-2.463m1.355-.62c.143.451.345.772.52 1.152c.322.01.654-.002.982-.025m1.632-16.152c-.401-.56-.59-1.047-.505-1.538c-.643-.196-1.188-.252-1.997.1c.076 1.26-.382 2.252-1.01 2.994c.98-.094 1.937-.355 2.963-.151l2.205.043c.584.491.853 1.048 1.272 1.573l-1.282.022c-.515-.413-1.023-.833-1.675-1.074c-1.35.11.159.319-2.186.41c-.441.448-.804.47-1.852.425l.144.826l.681.363l1.454 1.034c.548.1 1.06.168 1.671.32l.909-.08l.492.96l-.407.079c-.233-.105-.104-.397-.699-.315c-.743-.313-1.487-.331-2.231-.257l-3.59-1.125c.209-.32-.12-1.487-.18-2.068c-.675.304-1.563.537-2.509.75l.346.81c2.066.57 3.7 1.117 5.448 2.146c.562.549.695 1.16.69 2.188l-.794 1.177l-.163 1.024"></path></g><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M31.79 23.997a7.33 7.33 0 1 1-2.95 5.878c0-1.179.278-2.291.771-3.277M16.92 37.472a6.31 6.31 0 1 1-4.209-7.601"></path><path d="M37.923 29.69a1.671 1.671 0 1 1-1.672-1.672h0c.924 0 1.672.748 1.672 1.671m-25.777 6.269c0 .8-.649 1.449-1.449 1.449h0c-.8 0-1.449-.65-1.449-1.45h0c0-.8.649-1.448 1.45-1.448h0c.8 0 1.448.649 1.448 1.449"></path><path d="m34.621 29.345l-8.992-9.74l-6.125 6.648"></path><path d="m26.514 20.564l-1.994 2.681l-2.555 8.265l-.924 1.344m6.886-11.379l.521.436m.682 3.027l1.584.053m-9.526 8.935c0 .577-.468 1.045-1.045 1.045h0a1.045 1.045 0 0 1-1.046-1.045h0c0-.577.468-1.045 1.046-1.045h0c.577 0 1.045.468 1.045 1.045m-7.323 1.946a39 39 0 0 1-1.73.257m1.27-12.41l2.638 4.049M10.8 24.227l2.757-.802m1.581 5.373l-3.586 5.991"></path><path d="M12.217 35.852c.125 1.204.098 2.03-.287 3.044c1.012.199 3.116-.187 4.573-.71m.582-4.724l.845-.278m-6.003 1.972l1.536-.504m5.755.286l-1.021 2.15m6.081-18.825l1.52 1.55M24.774 15.7l.444 2.114l-1.328 1.137l-1.257.04">
                                          </path></g>
            </svg>
            
        </div>

        <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
        Welcome to GearPoint!
        GearPoint is your ultimate destination for premium bikes and accessories. Designed with a user-friendly interface and robust admin tools, GearPoint offers a seamless experience for enthusiasts and administrators alike.
        </p>

        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Facebook</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Instagram</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">Twitter</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-teal-700 transition hover:text-teal-700/75"
            >
              <span className="sr-only">GitHub</span>
              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-white-900 opacity-80">About Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="#">
                Bingi Umesh
              </a>
            </li>

            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="#">
                Koppula Meher Prakash
              </a>
            </li>

            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="#">
                Pogula Rajkumar
              </a>
            </li>

            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="#"> Bollepali Ramu </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-white-900 opacity-80">Our Services</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="#">
              Free shipping
              </a>
            </li>

            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="#"> EMI </a>
            </li>

            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="#"> 24/7 online support </a>
            </li>

            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="#"> Cash on Delivery </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-white-900 opacity-80">Helpful Links</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="https://www.linkedin.com/in/umesh-bingi-03u/"> Linked IN </a>
            </li>

            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="https://www.linkedin.com/in/meher-prakash-4634a925b/"> Linked IN </a>
            </li>

            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="https://www.linkedin.com/in/rajkumar-pogula-250317258">Linked IN</a>
            </li>
            <li>
              <a className="text-white-700 opacity-50 transition hover:text-white-700/75" href="#"> Linked IN </a>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-white-900 opacity-80">Contact Us</p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="ml-[-90px] text-white-700 opacity-50 transition hover:text-white-700/75">GearPointURMR@gmail.com</span>
              </a>
            </li>

            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="ml-[-120px] text-white-700 opacity-50 transition hover:text-white-700/75">9913364815</span>
              </a>
            </li>

            <li
              className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <address className="ml-[-28px] text-white-700 opacity-50 transition hover:text-white-700/75">
                JNTUH UCEJ, jagitial 505501
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-6">
      <div className="text-center sm:flex sm:justify-between sm:text-left">
        <p className="text-sm text-gray-500">
          <span className="block sm:inline">All rights reserved.</span>

          <a
            className="inline-block ml-2 text-teal-600 underline transition hover:text-teal-600/75"
            href="#"
          >
            Terms & Conditions
          </a>
          
          <a
            className="inline-block ml-2 text-teal-600 underline transition hover:text-teal-600/75 "
            href="#"
          >
            Privacy Policy
          </a>

        </p>
        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">&copy; 2024 GearPoint</p>
      </div>
    </div>
  </div>
</footer>
        </>
    );
}

export default Footer;
