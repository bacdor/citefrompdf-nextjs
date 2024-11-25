'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import s from './Navbar.module.css';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link href="/" className={s.logo} aria-label="Logo">
          <Image
            src="/logo-pdf500.svg"
            alt="DocuQuote Logo"
            width={32}
            height={32}
          />
        </Link>
        <Link href="/" className={s.link}>
          <span className="ml-2 text-lg font-bold">DocuQuote</span>
        </Link>
        <nav className="ml-6 space-x-2 lg:block">
          {user && (
            <>
              <Link href="/dashboard" className={s.link}>
                Dashboard
              </Link>
              <Link href="/account" className={s.link}>
                Account
              </Link>
            </>
          )}
          <Link href="/#pricing" className={s.link}>
            Pricing
          </Link>
        </nav>
      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
            <input type="hidden" name="pathName" value={usePathname()} />
            <button type="submit" className={s.link}>
              Sign out
            </button>
          </form>
        ) : (
          <Link href="/signin/email_signin" className={s.link}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
