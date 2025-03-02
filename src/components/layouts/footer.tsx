'use client';
import { Facebook, Instagram, Twitter, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { cn, withMemo } from '~/lib/utils';
import DarkMode from '../base/dark-mode';
import GetInTouchWithUs from '../base/get-in-the-touch-with-us';
import { buttonVariants } from '../ui/button';
import For from '../utils/for';
import Container, { InnerContainer } from './container';

const Footer: React.FC = withMemo(() => {
  const { navigation, socials } = resources;

  return (
    <Container className="h-fit">
      <InnerContainer className="p-0">
        <FooterContent className="border-b border-dashed">
          <div className="border-x border-dashed py-5 px-2 flex items-center justify-between text-foreground">
            <h1 className="text-xl font-medium">Softcomp.io</h1>
            <DarkMode />
          </div>
        </FooterContent>

        <FooterContent>
          <div
            className={cn(
              'border-x border-b border-dashed',
              'grid grid-cols-1 md:grid-cols-2'
            )}>
            <p className="flex flex-col gap-2 text-pretty my-auto p-2">
              <span>
                Solusi Point of Sale (POS) milik Softcomp terintegrasi secara
                mulus dengan operasi bisnis Anda untuk transaksi yang efisien.
              </span>
              <span>
                Ini menyederhanakan proses penjualan, mengelola inventaris dan
                data pelanggan, dan meningkatkan produktivitas staf dengan
                antarmuka yang mudah digunakan.
              </span>
            </p>
            <GetInTouchWithUs socials={socials} />
          </div>
        </FooterContent>

        <FooterContent className="border-b border-dashed flex items-center justify-between">
          <ul className="flex items-center gap-2 border-x border-dashed w-full py-5">
            <For each={navigation}>
              {(value, key) => (
                <Link
                  key={key}
                  href={value.href}
                  className={cn(
                    buttonVariants({ variant: 'link', size: 'sm' })
                  )}>
                  {value.label}
                </Link>
              )}
            </For>
          </ul>
        </FooterContent>

        <FooterContent>
          <p className="border-x border-dashed py-5 text-center text-xs md:text-sm font-medium w-full">
            Copyright © {new Date().getFullYear()} PT Karya Digital Inovasi. All
            rights reserved.
          </p>
        </FooterContent>
      </InnerContainer>
    </Container>
  );
});
Footer.displayName = 'Footer';

type FooterContentProps = React.ComponentProps<'div'>;
const FooterContent: React.FC<FooterContentProps> = ({
  className,
  ...props
}) => {
  return <div className={cn('px-8', className)} {...props} />;
};

const resources = {
  navigation: [
    {
      label: 'POS',
      href: '/pos'
    },
    {
      label: 'About',
      href: '/pos'
    },
    {
      label: 'Contact',
      href: '/pos'
    }
  ] satisfies Array<{ label: string; href: string }>,
  socials: [
    {
      href: '#',
      icon: Facebook
    },
    {
      href: '#',
      icon: Instagram
    },
    {
      href: '#',
      icon: Twitter
    }
  ] satisfies Array<{ icon: LucideIcon; href: string }>
};
export default Footer;
