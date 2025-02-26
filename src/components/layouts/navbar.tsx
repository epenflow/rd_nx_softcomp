import Link from 'next/link';
import { cn } from '~/lib/utils';
import { buttonVariants } from '../ui/button';
import For from '../utils/for';

const Navbar = () => {
  const { navigation } = resources;

  return (
    <header
      className={cn(
        'top-0 sticky w-full z-50 overflow-x-hidden',
        'border-b border-dashed',
        'bg-card'
      )}>
      <nav
        className={cn(
          'border-x border-dashed',
          'container h-12',
          'flex items-center justify-between'
        )}>
        <h1
          className={cn(
            buttonVariants({ variant: 'link', size: 'sm' }),
            'p-0'
          )}>
          <Link href="/">Softcomp</Link>
        </h1>
        <ul className={cn('flex items-center gap-2.5', 'ml-3')}>
          <For each={navigation}>
            {(value, key) => (
              <li
                key={key}
                className={buttonVariants({ variant: 'link', size: 'sm' })}>
                <Link href={value.href}>{value.label}</Link>
              </li>
            )}
          </For>
        </ul>
        <section className="flex gap-2">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: 'default', size: 'sm' }))}>
            Login
          </Link>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'border'
            )}>
            Demo
          </Link>
        </section>
      </nav>
    </header>
  );
};
export default Navbar;

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
  ] satisfies Array<{ label: string; href: string }>
};
