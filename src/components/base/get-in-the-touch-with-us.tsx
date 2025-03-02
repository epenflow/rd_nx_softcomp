import { zodResolver } from '@hookform/resolvers/zod';
import { Send, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { cn, withMemo } from '~/lib/utils';
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
import type { InputProps } from '../ui/input';
import Input from '../ui/input';
import For from '../utils/for';

const getInTouchWithUsSchema = z.object({
  email: z.string().min(1, 'Email is required').email()
});
type GetInTouchWithUsSchema = z.infer<typeof getInTouchWithUsSchema>;
type GetInTouchWithUsProps = {
  socials: {
    href: string;
    icon: LucideIcon;
  }[];
};
const GetInTouchWithUs: React.FC<GetInTouchWithUsProps> = withMemo(
  ({ socials }) => {
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
                        <InputWithSubmit {...field} />
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
  }
);
GetInTouchWithUs.displayName = 'GetInTouchWithUs';
export default GetInTouchWithUs;

const InputWithSubmit: React.FC<InputProps> = withMemo(({ ...props }) => {
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
});
InputWithSubmit.displayName = 'InputWithSubmit';
