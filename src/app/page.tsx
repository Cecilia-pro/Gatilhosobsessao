'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  Flame,
  Magnet,
  Crown,
  BookOpen,
  Headphones,
  Map,
  Target,
  Users,
  Lock,
  MessageSquare,
  Scroll,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SocialProof } from '@/components/social-proof';
import React from 'react';

const CtaButton = ({ className }: { className?: string }) => {
  const href = "#pricing";
  return (
    <Link href={href} className="w-full">
      <Button
        className={`w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 ${className}`}
        size="lg"
      >
        EU QUERO ACESSAR AGORA
      </Button>
    </Link>
  );
}

export default function Home() {

  const benefits = [
    {
      icon: Flame,
      title: 'Reacender a chama no seu relacionamento, fazendo-o te desejar como no primeiro dia.',
    },
    {
      icon: Magnet,
      title: 'Atrair o homem dos seus sonhos e fazê-lo lutar pela sua atenção, se você é solteira.',
    },
    {
      icon: Crown,
      title: 'Dominar a mente masculina e se tornar a mulher que ele precisa ter ao lado, a que ele não consegue esquecer.',
    },
  ];

  const secrets = [
    {
      icon: '1',
      title: 'A Ferida Primordial Masculina',
      description: 'Todo homem carrega uma insegurança profunda, um desejo de provar seu valor. Você será o espelho que o fará enxergar o potencial dele, e ele se tornará viciado em buscar sua aprovação e admiração. Ele vai querer ser o homem que você vê nele.',
    },
    {
      icon: '2',
      title: 'O Paradoxo da Presença',
      description: 'O cérebro masculino é viciado no desafio, no mistério. Quanto mais você está sempre disponível, mais ele te desvaloriza. Aprenda a ser como a lua: presente, mas em fases. Visível, mas misteriosa. Ele vai te querer por completo, porque você não se entrega por inteiro.',
    },
    {
      icon: '3',
      title: 'O Confronto com a Sombra',
      description: 'Homens temem não ser suficientes. Ao tocar nessa vulnerabilidade com respeito, você cria uma conexão tão profunda que ele se vicia na sensação de ser visto por você, em sua totalidade. Ele vai se abrir para você como nunca se abriu para ninguém.',
    },
  ];

  const features = [
    {
      icon: Map,
      title: 'Trilhas Personalizadas',
      description: 'Para casadas, namorando ou solteiras. Conteúdo específico para sua realidade.',
    },
    {
      icon: Headphones,
      title: 'Aulas e Audiobooks Exclusivos',
      description: 'Aprenda os segredos da psicologia masculina no seu ritmo, onde e quando quiser.',
    },
    {
      icon: Target,
      title: 'Missões Diárias',
      description: 'Pequenas ações que geram grandes resultados, ativando o instinto de conquista dele.',
    },
    {
      icon: Lock,
      title: 'Comunidade Secreta',
      description: 'Conecte-se com mulheres que estão na mesma jornada, troque experiências e receba apoio.',
    },
    {
      icon: Scroll,
      title: 'Biblioteca de Scripts',
      description: 'Saiba exatamente o que dizer e como agir em qualquer situação para despertar o desejo e o respeito dele.',
    },
  ];

  const faqItems = [
    {
      question: 'Será que funciona mesmo para mim?',
      answer: 'Sim. Os princípios dos Gatilhos da Obsessão são universais e aplicáveis a qualquer mulher, em qualquer fase do relacionamento. As trilhas personalizadas garantem que você receba o conteúdo exato para sua situação.',
    },
    {
      question: 'Não tenho tempo para aulas longas.',
      answer: 'Perfeito! Nosso app foi desenhado para a mulher moderna. Aulas curtas, áudios práticos e missões diárias que se encaixam na sua rotina.',
    },
    {
      question: 'Minha compra é discreta?',
      answer: 'Absolutamente. Sua privacidade é nossa prioridade. A cobrança aparecerá de forma discreta na sua fatura.',
    },
    {
      question: 'E se eu não gostar?',
      answer: 'Temos tanta certeza do poder do nosso método que oferecemos uma garantia incondicional de 7 dias. Se você não sentir a transformação, devolvemos seu dinheiro, sem perguntas.',
    },
  ];

  return (
    <div className="flex flex-col items-center bg-background text-foreground overflow-x-hidden">
      <SocialProof />

      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center text-center p-4 pt-12 pb-8 md:pt-20 md:pb-16">
          <div className="relative z-10 flex flex-col items-center space-y-6 max-w-3xl">
              <h1 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
                  O SEGREDO QUE NENHUM HOMEM QUER QUE VOCÊ DESCUBRA: <span className="text-primary">Ative os Gatilhos da Obsessão e Faça ELE Implorar Pela Sua Presença!</span>
              </h1>
              <Image src="https://i.imgur.com/SHWcBfo.gif" alt="Gatilhos da Obsessão" width={300} height={50} className="rounded-lg" />
              <p className="text-lg md:text-xl text-foreground/90">
                  Cansada de ser a mulher que dá tudo e recebe migalhas? De ver o desejo dele esfriar e a paixão se perder no dia a dia? Você não está sozinha. Milhões de mulheres como você se sentem invisíveis, trocadas, ou presas em relacionamentos mornos, enquanto outras parecem ter o poder de hipnotizar qualquer homem que desejam. Qual é o segredo delas? É hora de você descobrir.
              </p>
              <div className="bg-black/50 border border-primary/50 p-6 rounded-lg shadow-lg">
                  <h2 className="font-bold text-xl text-primary">A Dor Que Ninguém Vê:</h2>
                  <p className="mt-2 text-lg text-foreground">
                      Você se dedica, se esforça, tenta de tudo... e ele simplesmente se afasta. Você se pergunta: "O que eu fiz de errado?" A verdade é que o problema não é você. <span className="font-bold">É o código que você não conhece.</span>
                  </p>
              </div>
              <div className="w-full max-w-sm pt-4">
                <CtaButton className="animate-pulse-glow" />
              </div>
          </div>
      </section>
      
      <main className="w-full max-w-4xl flex flex-col items-center text-center p-4 md:p-6">
        
        {/* Problem/Solution Section */}
        <section className="w-full flex flex-col items-center space-y-8 py-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">PARE DE IMPLORAR AMOR. COMECE A INSPIRAR OBSESSÃO.</h2>
          <p className="text-xl">Imagine ter o poder de:</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                  <benefit.icon className="w-8 h-8 text-primary mt-1 shrink-0" />
                  <p className="text-lg text-foreground/90">{benefit.title}</p>
              </div>
            ))}
          </div>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl pt-8">
            Este não é mais um "curso de sedução". É um sistema de ativação emocional feminina baseado em neurociência, psicologia junguiana e energia feminina que vai transformar você na mulher que ele persegue, valoriza e ama obsessivamente.
          </p>
        </section>

        {/* Secrets Section */}
        <section className="w-full flex flex-col items-center space-y-8 py-16 bg-card rounded-xl p-6 md:p-10">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-accent">O Que Eles <span className="text-primary">NUNCA</span> Vão Te Contar</h2>
          <p className="text-lg md:text-xl text-foreground/90">(Mas Você Vai Usar a Seu Favor):</p>
          <div className="w-full flex flex-col space-y-8">
            {secrets.map((secret, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 p-4 border-b border-border/50 last:border-b-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{secret.icon}</span>
                  </div>
                  <div className="flex flex-col">
                      <h3 className="font-headline text-2xl font-bold text-primary">{secret.title}</h3>
                      <p className="mt-2 text-base text-foreground/80">{secret.description}</p>
                  </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Presentation Section */}
        <section className="w-full flex flex-col items-center space-y-8 py-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">APRESENTANDO: Gatilhos da Obsessão</h2>
            <p className="text-xl text-accent font-semibold">Seu Guia Definitivo Para o Magnetismo Feminino Inesquecível</p>
            <p className="text-lg md:text-xl text-foreground/90 max-w-3xl">Chega de teorias vazias. Nosso aplicativo oferece um caminho prático e direto para você:</p>
            
            <div className="w-full flex flex-col md:flex-row items-center gap-10 pt-8">
                <div className="w-full md:w-1/2">
                    <Image src="https://i.imgur.com/ZVtyRFf.jpeg" alt="Mockup do App Gatilhos da Obsessão" width={500} height={500} className="rounded-lg shadow-lg shadow-primary/20" data-ai-hint="app mockup"/>
                </div>
                <div className="w-full md:w-1/2 flex flex-col space-y-6 text-left">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
                           <feature.icon className="w-7 h-7 text-primary mt-1 shrink-0" />
                           <div>
                                <h3 className="font-bold text-lg">{feature.title}</h3>
                                <p className="text-foreground/80">{feature.description}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-xl font-bold text-accent pt-8">Não é mágica. É ciência. É psicologia. É o poder que sempre esteve dentro de você, esperando para ser ativado.</p>
        </section>

        {/* Specialist Section */}
        <section className="w-full flex flex-col items-center space-y-6 py-16 bg-card rounded-xl p-6 md:p-10">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">QUEM ESTÁ POR TRÁS DESTE CONHECIMENTO REVOLUCIONÁRIO?</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 pt-6">
              <Image src="https://i.imgur.com/3DIGwpL.jpeg" alt="Dra. Helena Campos" width={250} height={250} className="rounded-full border-4 border-primary shadow-lg" data-ai-hint="specialist photo"/>
              <div className="flex flex-col text-center md:text-left">
                  <h3 className="font-headline text-3xl font-bold text-primary">Dra. Helena Campos</h3>
                  <p className="text-lg text-accent font-semibold">Especialista em Comportamento e Vínculos Femininos</p>
                  <p className="mt-4 text-foreground/80">
                  Médica e terapeuta comportamental (CRM fictício 142567-SP), com mais de 10 anos dedicados a desvendar os mistérios da mente masculina e da dinâmica dos relacionamentos. Criadora do aclamado "Código da Conexão", Dra. Helena Campos já ajudou milhares de mulheres a restaurar sua energia feminina, reacender a paixão e construir relacionamentos onde são verdadeiramente valorizadas e desejadas. Sua abordagem combina neurociência, psicologia junguiana e técnicas comprovadas para que você se torne a mulher inesquecível que ele não consegue viver sem.
                  </p>
              </div>
          </div>
        </section>

        {/* Final Offer Section */}
        <section id="pricing" className="w-full flex flex-col items-center space-y-6 py-16 my-8 text-white bg-gradient-to-br from-secondary to-black rounded-xl p-6 md:p-10 border-2 border-primary shadow-2xl shadow-primary/20">
          <h2 className="font-headline text-3xl md:text-5xl font-bold">SUA CHANCE DE TRANSFORMAR SUA VIDA AMOROSA</h2>
          <p className="text-lg text-foreground/80">Você pagaria facilmente R$ 317,90 para ter acesso a TUDO ISSO... Mas somente hoje, leve tudo isso por um valor exclusivo, nunca visto antes:</p>
          <div className="text-center bg-black/30 rounded-lg p-6 w-full max-w-md my-4 border border-border">
            <p className="text-sm text-foreground/80">OFERTA ESPECIAL POR APENAS</p>
            <p className="font-headline text-7xl md:text-8xl text-primary" style={{ textShadow: '0 0 15px hsl(var(--primary) / 0.5)' }}>R$ 29,90</p>
          </div>
          <p className="text-md text-yellow-400 font-semibold">Oferta por Tempo Limitado: Clique agora e garanta acesso imediato ao aplicativo e a todos os segredos que farão ele te perseguir, te valorizar e te amar como nunca antes!</p>
          <div className="w-full max-w-md pt-4">
            <CtaButton className="bg-primary hover:bg-primary/90 animate-pulse-glow" />
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="w-full flex flex-col items-center space-y-6 py-12 max-w-3xl">
          <h2 className="font-headline text-3xl md:text-4xl">DÚVIDAS FREQUENTES (FAQ)</h2>
          <Accordion type="single" collapsible className="w-full text-left">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b-border/50">
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
      
      <footer className="w-full text-center p-6 border-t border-border/20 mt-10">
          <p className="font-bold text-lg text-primary">Aja agora. O homem que você deseja está esperando pela mulher que você está prestes a se tornar.</p>
          <div className="text-xs text-muted-foreground mt-4">
            <Link href="#" className="underline">Termos de Uso</Link> | <Link href="#" className="underline">Política de Privacidade</Link>
            <p className="mt-2">Copyright © 2024. Todos os direitos reservados.</p>
          </div>
      </footer>
    </div>
  );
}
