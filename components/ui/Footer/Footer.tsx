import Link from 'next/link';
import Image from 'next/image';

import GitHub from '@/components/icons/GitHub';

export default function Footer() {
  return (
    <footer className="footer px-10 pt-12 pb-24 bg-zinc-900">
      <aside className="flex flex-col items-start">
        <Link
          href="/#main"
          className="flex items-center space-x-2 !focus:outline-none"
        >
          <Image
            src="/logo-pdf500.svg"
            alt="Citing App Logo"
            width={64}
            height={64}
          />
          <h3 className="text-3xl font-bold text-zinc-200">DocuQuote.io</h3>
        </Link>

        <p>
          Get the right quotes to your in-text citations. <br />
          <span style={{ opacity: 0.6 }}>
            Copyright &copy; {new Date().getFullYear()} - All rights reserved
          </span>
        </p>
      </aside>

      <nav>
        <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <Link
              href="/#main"
              className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
            >
              Main
            </Link>
          </li>
          <li className="py-3 md:py-0 md:pb-4">
            <Link
              href="/#features"
              className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
            >
              Features
            </Link>
          </li>
          <li className="py-3 md:py-0 md:pb-4">
            <Link
              href="/#pricing"
              className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
            >
              Pricing
            </Link>
          </li>
          <li className="py-3 md:py-0 md:pb-4">
            <Link
              href="/#faq"
              className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
            >
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
              LEGAL
            </p>
          </li>
          <li className="py-3 md:py-0 md:pb-4">
            <Link
              href="/privacy-policy"
              className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
            >
              Privacy Policy
            </Link>
          </li>
          <li className="py-3 md:py-0 md:pb-4">
            <Link
              href="/tos"
              className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
            >
              Terms of Use
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-col flex-initial md:flex-1">
          <li className="py-3 md:py-0 md:pb-4">
            <p className="font-bold text-white transition duration-150 ease-in-out hover:text-zinc-200">
              SOCIAL
            </p>
          </li>
          <li className="py-3 md:py-0 md:pb-4">
            <a
              href="https://www.linkedin.com/in/dorian-bachlaj-82b92b181/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
