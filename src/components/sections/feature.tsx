import {
  BarChart2,
  CheckCircle,
  CreditCard,
  ShoppingBag,
  Tablet,
  type LucideIcon
} from 'lucide-react';
import { cn } from '~/lib/utils';
import Container, { InnerContainer } from '../layouts/container';
import { buttonVariants } from '../ui/button';
import { Block, Heading, Text } from '../ui/typography';
import For from '../utils/for';

const Feature = () => {
  const { features } = resources;
  return (
    <Container className="h-fit">
      <InnerContainer className="relative [--offset-width:calc(100%-4rem)] overflow-clip">
        <div
          className={cn(
            'absolute h-full w-(--offset-width) [--polka-color:var(--border)] polka',
            'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          )}
        />
        <div
          className={cn(
            'absolute size-svw hidden md:block',
            'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
            'bg-radial-[at_50%_50%] from-indigo-600 via-card to-transparent'
          )}
        />
        <div className="border-x border-dashed py-10 px-2 flex flex-col items-center justify-center gap-5 relative z-10">
          <h4
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'sm' }),
              'border'
            )}>
            Fitur
          </h4>
          <Block center className="text-center">
            <Heading>Semua yang Dibutuhkan untuk Berkembang</Heading>
            <Text>
              Softcomp menyediakan semua alat yang Anda perlukan untuk mengelola
              bisnis retail secara efisien.
            </Text>
          </Block>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <For each={features}>
              {(feature, key) => (
                <div
                  key={key}
                  className="flex flex-col items-center p-6 text-center border rounded-xl bg-card">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <feature.icon className="size-6 text-primary" />
                  </div>
                  <h5 className="mb-2 text-xl font-bold">{feature.title}</h5>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </InnerContainer>
    </Container>
  );
};
export default Feature;

const resources = {
  features: [
    {
      icon: ShoppingBag,
      title: 'Penjualan Mudah',
      description:
        'Antarmuka yang simpel dan intuitif untuk transaksi cepat dan layanan pelanggan.'
    },
    {
      icon: BarChart2,
      title: '14 Jenis Promosi',
      description:
        'Buat diskon berlapis dan promosi untuk meningkatkan penjualan secara efektif.'
    },
    {
      icon: CreditCard,
      title: 'Berbagai Metode Pembayaran',
      description:
        'Terima berbagai metode pembayaran untuk memberikan fleksibilitas bagi pelanggan Anda.'
    },
    {
      icon: Tablet,
      title: 'Lintas Platform',
      description:
        'Gunakan di perangkat apa saja - desktop, tablet, atau ponsel untuk fleksibilitas maksimal.'
    },
    {
      icon: CheckCircle,
      title: 'Manajemen Inventaris',
      description:
        'Pantau level stok Anda secara real-time dan dapatkan peringatan saat barang hampir habis.'
    },
    {
      icon: BarChart2,
      title: 'Laporan Detail',
      description:
        'Dapatkan wawasan tentang kinerja bisnis Anda dengan analitik komprehensif.'
    }
  ] satisfies Array<{
    title: string;
    description: string;
    icon: LucideIcon;
  }>
};
