'use client'
import { useState, useEffect } from 'react';
import { CheckCircle2, ShoppingCart } from 'lucide-react';

const notifications = [
    "Ana L. de São Paulo, SP acabou de comprar",
    "Júlia S. de Rio de Janeiro, RJ comprou há 5 minutos",
    "Beatriz C. de Belo Horizonte, MG garantiu o seu",
    "Mariana A. de Salvador, BA acabou de comprar",
    "Letícia F. de Brasília, DF comprou há 8 minutos",
    "Gabriela P. de Curitiba, PR garantiu o seu",
    "Laura M. de Fortaleza, CE acabou de comprar",
    "Sofia R. de Recife, PE comprou há 2 minutos",
    "Manuela G. de Porto Alegre, RS garantiu o seu",
    "Isabella T. de Campinas, SP acabou de comprar",
    "Helena B. de Goiânia, GO comprou há 15 minutos",
    "Valentina V. de Manaus, AM garantiu o seu",
    "Alice O. de Belém, PA acabou de comprar",
    "Luiza D. de São Luís, MA comprou há 7 minutos",
    "Yasmin N. de Guarulhos, SP garantiu o seu",
    "Lívia E. de Florianópolis, SC acabou de comprar",
    "Clara J. de Maceió, AL comprou há 11 minutos",
    "Elisa X. de Natal, RN garantiu o seu",
    "Maria Eduarda Z. de João Pessoa, PB acabou de comprar",
    "Larissa K. de Teresina, PI comprou há 4 minutos",
];


export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      const randomTime = Math.floor(Math.random() * 15) + 2;
      const notificationText = notifications[randomIndex].includes('minutos') 
        ? notifications[randomIndex].replace(/\d+/, randomTime.toString())
        : notifications[randomIndex];

      setCurrentNotification(notificationText);
      setKey(prevKey => prevKey + 1); // Reset animation
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Notification is visible for 5 seconds
    };

    const initialTimeout = setTimeout(showRandomNotification, 7000); // First notification after 7s
    const interval = setInterval(showRandomNotification, 12000); // Subsequent notifications every 12s

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      key={key}
      className={`fixed bottom-4 left-4 z-50 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {isVisible && (
        <div className="bg-background/80 backdrop-blur-sm border border-accent/30 rounded-xl shadow-2xl shadow-accent/20 p-4 flex items-center space-x-4 max-w-xs">
          <div className="relative">
            <ShoppingCart className="text-accent h-7 w-7" />
            <CheckCircle2 className="absolute -bottom-1 -right-1 text-green-500 bg-background rounded-full h-4 w-4" />
          </div>
          <p className="text-sm text-foreground/90 font-medium">{currentNotification}</p>
        </div>
      )}
    </div>
  );
}
