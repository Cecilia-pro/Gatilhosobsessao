'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  HeartPulse,
  Gem,
  Unlock,
  Flame,
  ShieldOff,
  Gift,
  ShieldCheck,
  ChevronRight,
  Minus,
  Plus,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CountdownTimer } from '@/components/countdown-timer';
import { SocialProof } from '@/components/social-proof';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const CtaButton = ({ className }: { className?: string }) => (
  <Link href="#pricing" className="w-full">
    <Button
      className={`w-full h-14 text-lg font-bold bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse-glow shadow-lg shadow-accent/30 ${className}`}
      size="lg"
    >
      EU QUERO COMEÇAR AGORA
    </Button>
  </Link>
);

const ImageCarousel = ({ imageIds }: { imageIds: string[] }) => {
  const images = PlaceHolderImages.filter((img) => imageIds.includes(img.id));
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-md"
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div className="p-1">
              <Card className="overflow-hidden">
                <CardContent className="flex aspect-auto items-center justify-center p-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={400}
                    height={400}
                    data-ai-hint={image.imageHint}
                    className="object-contain w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-foreground -left-2" />
      <CarouselNext className="text-foreground -right-2" />
    </Carousel>
  );
};

export default function Home() {
  const benefits = [
    {
      icon: HeartPulse,
      title: 'ELE NÃO TE PROCURA MAIS?',
      description:
        'Ative o modo predador dele! Comece HOJE o Protocolo da Obsessão Masculina e faça ele se rastejar atrás de você implorando por mais.',
    },
    {
      icon: Unlock,
      title: 'DIGA ADEUS AO NERVOSISMO E INSEGURANÇA',
      description:
        'Com as técnicas que ensinamos, você se sentirá a mulher mais segura e confiante do mundo.',
    },
    {
      icon: Gem,
      title: 'FORTALEÇA SUA FEMINILIDADE',
      description:
        'Aplique as técnicas AGORA e faça com que ele te veja com outros olhos. Ele te verá como a mulher que ele sempre sonhou, melhor que qualquer outra mulher.',
    },
    {
      icon: Flame,
      title: 'NÃO SINTA MAIS MEDO',
      description:
        'Use e abuse das técnicas e torne-se uma mulher de verdade na cama. Dê a ele um chá de ppk tão incrível que ele ficará viciado e nunca mais irá te esquecer.',
    },
  ];

  const bonuses = [
    {
      title: 'BÔNUS 01 - MAMADA DA BEZERRA',
      description: 'Aprenda as técnicas que farão seu parceiro se tremer e gritar igual um bezerro quando quer leite!🔥',
      value: 'R$ 49,00',
      image: 'https://i.imgur.com/ufgwqwS.png',
    },
    {
      title: 'BÔNUS 02 - YOGA ÍNTIMA',
      description: 'Desperte sua energia s3xual, destrua a monotonia e atinja níveis de pr@zer que você nunca imaginou.',
      value: 'R$ 87,00',
      image: 'https://i.imgur.com/HItnNDj.png',
    },
     {
      title: 'BÔNUS 03 - AUDIOBOOK',
      description: 'A voz que vai explodir sua mente, romper limites e transformar sua vida enquanto você ouve.',
      value: 'R$ 77,00',
      image: 'https://i.imgur.com/NSdfYEI.png',
    },
  ];

  const faqItems = [
    {
      question: 'QUANDO VOU RECEBER O ACESSO?',
      answer: 'O acesso é enviado imediatamente para o seu e-mail após a confirmação do pagamento. Para compras no cartão de crédito ou PIX, a liberação é instantânea. Para boleto, pode levar até 48 horas.',
    },
    {
      question: 'É SEGURO REALIZAR A COMPRA?',
      answer: 'Sim, 100% seguro. Utilizamos a plataforma de pagamentos mais segura do Brasil. Seus dados são criptografados e protegidos, e a compra é totalmente confidencial.',
    },
    {
      question: 'TEM GARANTIA?',
      answer: 'Sim! Oferecemos uma garantia incondicional de 30 dias. Se por qualquer motivo você não gostar ou achar que não valeu a pena, basta solicitar o reembolso dentro do prazo e devolveremos 100% do seu dinheiro.',
    },
    {
      question: 'QUAIS AS FORMAS DE PAGAMENTO?',
      answer: 'Aceitamos PIX e Cartão de Crédito, com parcelamento em até 4 vezes. Todas as opções são seguras e rápidas.',
    },
    {
        question: 'O QUE ACONTECE DEPOIS QUE FIZER MINHA INSCRIÇÃO?',
        answer: 'Você receberá um e-mail com todas as instruções e seus dados de acesso à nossa área de membros exclusiva. Lá você encontrará todo o material organizado para começar sua transformação.',
    },
    {
        question: 'COMO SABER SE ESSE PROGRAMA PODE ME AJUDAR?',
        answer: 'Se você deseja reacender a paixão, se sentir mais confiante e poderosa na sua relação, e ter o homem que você ama obcecado por você, então este programa é exatamente o que você precisa.',
    }
  ];

  return (
    <div className="flex flex-col items-center bg-background text-foreground overflow-x-hidden">
      <SocialProof />
      <main className="w-full max-w-3xl flex flex-col items-center text-center p-4 md:p-6 pb-24 md:pb-8">
        
        <section className="w-full flex flex-col items-center space-y-6 py-12 md:py-20">
          <h1 className="font-headline text-4xl md:text-6xl text-primary leading-tight">
            Descubra os <span className="text-accent">SEGREDOS</span> para fazer qualquer homem <span className="text-accent">IMPLORAR POR VOCÊ</span>.
          </h1>
          <Image src="https://i.imgur.com/5xou6DY.gif" alt="Mulher sedutora" width={400} height={225} className="rounded-lg my-4" />
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
            Comece AGORA e tenha qualquer homem aos seus pés.
          </p>
          <div className="w-full max-w-sm pt-4">
            <CtaButton />
          </div>
        </section>

        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/50 border-border/50 text-left">
              <CardHeader className="flex flex-row items-center gap-4">
                <benefit.icon className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-xl text-primary m-0 p-0">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>
        
        <section className="w-full flex flex-col items-center space-y-6 py-12 bg-card rounded-xl p-8 my-8 border border-destructive/50 shadow-lg shadow-destructive/10">
           <ShieldOff className="w-16 h-16 text-destructive" />
           <h2 className="font-headline text-3xl md:text-4xl text-destructive">NÃO SEJA TRAÍDA</h2>
           <p className="text-lg text-foreground/90 max-w-2xl">
           Vamos ser sinceros... Se você não consegue dar o prazer que ele merece, uma hora ele vai buscar isso com outra mulher... Estudos comprovam que a falta de sexo é o maior causador de <span className="font-bold text-destructive">TRAIÇÕES, TÉRMINOS E DIVÓRCIOS.</span>
           </p>
        </section>


        <section className="w-full flex flex-col items-center space-y-6 py-12">
          <ImageCarousel imageIds={['carousel-1-1', 'carousel-1-2', 'carousel-1-3']} />
          <p className="text-sm text-foreground/70">(Toque na seta ao lado)</p>
          <p className="text-lg text-foreground/90 max-w-2xl pt-4">
            Alunas que aplicaram o método e tiveram resultados <span className="font-bold text-primary">IMEDIATOS</span>.
          </p>
        </section>

        <section className="w-full flex flex-col items-center space-y-6 py-12">
          <ImageCarousel imageIds={['carousel-2-1', 'carousel-2-2', 'carousel-2-3']} />
           <p className="text-sm text-foreground/70">(Toque na seta ao lado)</p>
        </section>

        <section className="w-full flex flex-col items-center space-y-6 py-12">
          <ImageCarousel imageIds={['carousel-3-1', 'carousel-3-2', 'carousel-3-3']} />
          <p className="text-sm text-foreground/70">(Toque na seta ao lado)</p>
        </section>
        
        <section className="w-full flex flex-col items-center space-y-6 py-12">
          <ImageCarousel imageIds={['carousel-4-1', 'carousel-4-2', 'carousel-4-3']} />
          <p className="text-sm text-foreground/70">(Toque na seta ao lado)</p>
        </section>

        <section className="w-full flex flex-col items-center space-y-8 py-16">
          <h2 className="font-headline text-3xl md:text-4xl text-accent">Garanta agora mais 3 Bônus exclusivos:</h2>
          <div className="w-full grid grid-cols-1 gap-6">
            {bonuses.map((bonus, index) => (
               <Card key={index} className="bg-card border-accent/50 text-left relative overflow-hidden shadow-2xl shadow-accent/40 ring-2 ring-accent/50">
                 <div className="absolute top-0 left-0 bg-accent text-accent-foreground px-3 py-1 text-sm font-bold z-10">
                    BÔNUS {index + 1}
                 </div>
                 {bonus.image && (
                    <div className="flex justify-center p-4 pt-12 md:p-6 md:pt-12">
                        <Image src={bonus.image} alt={bonus.title} width={300} height={300} className="rounded-md" />
                    </div>
                  )}
                 <CardHeader className={bonus.image ? 'pt-2' : 'pt-10'}>
                   <CardTitle className="font-headline text-2xl text-accent text-center">{bonus.title}</CardTitle>
                 </CardHeader>
                 <CardContent className="px-6">
                   <p className="text-foreground/80 pb-4 text-center">{bonus.description}</p>
                   <div className="flex items-center justify-between bg-card/50 p-3 rounded-lg border">
                    <span className="line-through text-muted-foreground">{bonus.value}</span>
                    <span className="font-bold text-green-400 text-xl" style={{ textShadow: '0 0 8px hsl(140 100% 50% / 0.7)' }}>GRÁTIS HOJE</span>
                   </div>
                 </CardContent>
               </Card>
            ))}
          </div>
        </section>

        <section id="pricing" className="w-full flex flex-col items-center space-y-4 py-12 bg-card rounded-xl p-6 md:p-10 my-8 border-2 border-accent shadow-2xl shadow-accent/20">
          <h2 className="font-headline text-3xl md:text-5xl text-accent">OFERTA ESPECIAL POR TEMPO LIMITADO</h2>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl">
            Acesso completo ao <span className="font-bold">Protocolo da Obsessão Masculina</span> + <span className="font-bold">3 Bônus Exclusivos</span> de <span className="line-through">R$317,90</span> por apenas:
          </p>
          <div className="bg-background/50 rounded-lg p-4 md:p-6 w-full max-w-md my-4 border border-border">
            <p className="font-headline text-6xl md:text-8xl text-accent" style={{ textShadow: '0 0 15px hsl(var(--accent) / 0.5)' }}>R$ 27,90</p>
            <p className="text-lg text-foreground/80">Pagamento único, sem mensalidades.</p>
          </div>
          <div className="w-full max-w-sm pt-4">
            <CtaButton />
          </div>
          <div className="flex items-center space-x-2 pt-4">
            <span className="text-sm text-green-500 animate-pulse">⚠️ OFERTA VÁLIDA SOMENTE AGORA</span>
            <div className="bg-green-500/20 text-green-500 text-sm font-bold px-2 py-1 rounded">
              <CountdownTimer />
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center space-y-6 py-12">
           <Card className="bg-card border-green-500/50 text-center relative overflow-hidden p-8 max-w-2xl">
            <Image src="https://i.imgur.com/HadBWwf.png" alt="Selo de Garantia" width={150} height={150} className="mx-auto mb-4" />
             <h2 className="font-headline text-3xl md:text-4xl text-green-500">Sua Garantia de 30 Dias</h2>
             <p className="text-lg text-foreground/90 mt-4">
                Você terá 30 dias para entrar, experimentar e se não gostar, poderá pedir o dinheiro de volta. Eu prometo que vai valer a pena. Caso você entre e acredite que não valeu a pena, é só solicitar sua garantia dentro do prazo que <span className="font-bold">devolvemos 100% do seu dinheiro</span> na mesma hora.
             </p>
           </Card>
        </section>

         <section className="w-full flex flex-col items-center space-y-4 py-12 text-center">
          <p className="text-lg font-bold text-green-500">Essa oferta é válida por tempo LIMITADO.</p>
          <p className="text-md text-foreground/80 max-w-xl">Após o término do período promocional, o preço voltará ao normal. Se você fechar essa página, pode perder a chance de aproveitar essa oportunidade única por esse valor.</p>
          <div className="w-full max-w-sm pt-6">
            <CtaButton />
          </div>
        </section>


        <section className="w-full flex flex-col items-center space-y-6 py-12 max-w-2xl">
          <h2 className="font-headline text-3xl md:text-4xl">DÚVIDAS FREQUENTES</h2>
          <Accordion type="single" collapsible className="w-full text-left">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="font-bold text-lg hover:no-underline text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

      </main>
      
      <footer className="w-full text-center p-4 border-t border-border">
          <p className="text-sm text-muted-foreground">Copyright © 2024. Todos os direitos reservados – Venenofeminino.online</p>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-3 border-t border-accent/20 z-40 md:hidden">
        <CtaButton />
      </div>
    </div>
  );
}
