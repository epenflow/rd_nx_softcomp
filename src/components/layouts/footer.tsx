'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Moon as BaseMoon,
  Sun as BaseSun,
  Facebook,
  Instagram,
  Send,
  Twitter,
  type LucideIcon
} from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn } from '~/lib/utils';
import Button, { buttonVariants } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField
} from '../ui/form';
import Input, { type InputProps } from '../ui/input';
import For from '../utils/for';
import Container, { InnerContainer } from './container';

const Sun = motion.create(BaseSun);
const Moon = motion.create(BaseMoon);

const Footer = () => {
  const { navigation } = resources;

  return (
    <Container className="h-fit">
      <InnerContainer className="p-0">
        <div className="px-8 border-b border-dashed">
          <div className="border-x border-dashed py-5 px-2 flex items-center justify-between text-foreground">
            <h1 className="text-xl font-medium">Softcomp.io</h1>
            <DarkMode />
          </div>
        </div>

        <div className="px-8">
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
            <GetInTouchWithUs />
          </div>
        </div>

        <div className="px-8 border-b border-dashed flex items-center justify-between">
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
        </div>

        <div className="px-8">
          <p className="border-x border-dashed py-5 text-center text-xs md:text-sm font-medium w-full">
            Copyright © {new Date().getFullYear()} PT Karya Digital Inovasi. All
            rights reserved.
          </p>
        </div>
      </InnerContainer>
    </Container>
  );
};

const DarkMode = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const onPress = React.useCallback(() => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [resolvedTheme, setTheme]);

  return (
    <div className="flex items-center gap-2">
      <h1 className="text-sm font-medium grid [&_span]:[grid-area:1/1] h-fit overflow-hidden">
        <motion.span
          animate={{
            opacity: resolvedTheme === 'dark' ? 0 : 1,
            y: resolvedTheme === 'dark' ? '-100%' : '0%'
          }}
          transition={{ duration: 0.5 }}>
          Light
        </motion.span>
        <motion.span
          animate={{
            opacity: resolvedTheme === 'dark' ? 1 : 0,
            y: resolvedTheme === 'dark' ? '0%' : '100%'
          }}
          transition={{ duration: 0.5 }}>
          Dark
        </motion.span>
      </h1>

      <Button
        onClick={onPress}
        className="grid [&_svg]:[grid-area:1/1] overflow-hidden">
        <Moon
          animate={{
            opacity: resolvedTheme === 'dark' ? 1 : 0,
            y: resolvedTheme == 'light' ? '100%' : '0%',
            x: resolvedTheme == 'light' ? '100%' : '0%'
          }}
          transition={{ duration: 0.5 }}
          className="size-4"
        />
        <Sun
          animate={{
            opacity: resolvedTheme === 'light' ? 1 : 0,
            y: resolvedTheme == 'dark' ? '-100%' : '0%',
            x: resolvedTheme == 'dark' ? '-100%' : '0%'
          }}
          transition={{ duration: 0.5 }}
          className="size-4"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

const getInTouchWithUsSchema = z.object({
  email: z.string().min(1, 'Email is required').email()
});
type GetInTouchWithUsSchema = z.infer<typeof getInTouchWithUsSchema>;
const GetInTouchWithUs = () => {
  const { socials } = resources;
  const form = useForm<GetInTouchWithUsSchema>({
    resolver: zodResolver(getInTouchWithUsSchema),
    defaultValues: {
      email: ''
    }
  });

  const socialToDisplay = React.useMemo(
    () => (
      <ul className="lg:flex items-center gap-2 hidden">
        <For each={socials}>
          {(value, key) => (
            <Link
              key={key}
              href={value.href}
              className={cn(
                buttonVariants({ variant: 'secondary', size: 'icon' }),
                'border'
              )}>
              <value.icon />
            </Link>
          )}
        </For>
      </ul>
    ),
    [socials]
  );

  const handleSubmit = () => {};

  return (
    <div
      className={cn(
        'bg-card',
        'p-2 md:p-8',
        'relative overflow-hidden',
        'border-t md:border-t-0 md:border-l border-dashed'
      )}>
      <span className="absolute [--polka-color:var(--border)] [--polka-space:8px_8px] w-full h-full polka top-0 left-0" />
      <div className="bg-accent p-2 rounded-md relative z-10 border">
        <div
          className={cn(
            'bg-card border rounded-md space-y-2.5 md:space-y-5',
            'p-4 md:p-8'
          )}>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium text-foreground flex flex-col">
              Get in Touch with Us ✉️
            </h1>
            {socialToDisplay}
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <InputWithButton {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

const InputWithButton: React.FC<InputProps> = ({ ...props }) => {
  const { error } = useFormField();

  return (
    <div className="relative flex items-center">
      <Input {...props} placeholder="Submit your email" />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className={cn(
          'absolute right-0 hover:bg-card bg-card border rounded-l-none',
          error && 'border-destructive text-destructive'
        )}>
        <Send />
      </Button>
    </div>
  );
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
