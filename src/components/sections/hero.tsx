import Container, { InnerContainer } from '../layouts/container';
import { Avatar, AvatarFallback } from '../ui/avatar';
import Button from '../ui/button';
import { Block, Heading, Text } from '../ui/typography';
import For from '../utils/for';

const Hero = () => {
  return (
    <Container className="h-fit">
      <InnerContainer className="space-y-5 py-20 relative">
        <Block>
          <Heading>Promosi mudah, Diskon berlapis, Pasti laku!</Heading>
          <Text>
            Softcomp itu solusi POS yang simpel, praktis, dan gampang dipakai
            buat bisnis fashion, minimarket, sampai toko retail kecil-menengah.
          </Text>
        </Block>
        <div className="space-x-2">
          <Button>Coba gratis 1 bulan</Button>
          <Button variant={'outline'}>Jadwalkan demo</Button>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex -space-x-2">
            <For each={['E', 'P', 'E', 'N']}>
              {(char, key) => (
                <Avatar key={key} className="border-2 border-card">
                  <AvatarFallback>{char}</AvatarFallback>
                </Avatar>
              )}
            </For>
          </div>
          <Text>500+ businesses trust Softcomp</Text>
        </div>
      </InnerContainer>
    </Container>
  );
};
export default Hero;
