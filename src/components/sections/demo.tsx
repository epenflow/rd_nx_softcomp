import { cn } from '~/lib/utils';
import Container, { InnerContainer } from '../layouts/container';

const Demo = () => {
  return (
    <Container>
      <InnerContainer>
        <div
          className={cn(
            'w-full border-x border-dashed h-full bg-card py-8 px-2',
            'flex flex-col gap-2 justify-center items-center'
          )}>
          <h1>Gratis Coba POS 1 Bulan</h1>
          <p>
            Mulai hanya dengan Rp150.000 per bulan setelahnya, Anda bisa
            menikmati semua fitur lengkap POS untuk meningkatkan efisiensi dan
            kemudahan bisnis Anda!
          </p>
        </div>
      </InnerContainer>
    </Container>
  );
};
export default Demo;
