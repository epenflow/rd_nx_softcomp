import Container, { InnerContainer } from '../layouts/container';
import Button from '../ui/button';
import { Block, Heading, Text } from '../ui/typography';

const Demo = () => {
  return (
    <Container className="h-fit">
      <InnerContainer>
        <div className="text-center w-full max-w-none border-x border-dashed py-10">
          <div className="border-y border-dashed max-w-none w-full py-10 space-y-5 px-2">
            <Block className="max-w-none">
              <Heading>Siap Transformasi Bisnis Anda?</Heading>
              <Text>
                Mulai uji coba gratis hari ini dan lihat perbedaan yang bisa
                dibuat Softcomp.
              </Text>
            </Block>
            <div className="space-x-2">
              <Button>Coba Gratis 1 Bulan</Button>
              <Button variant="outline">Jadwalkan Demo</Button>
            </div>
          </div>
        </div>
      </InnerContainer>
    </Container>
  );
};
export default Demo;
