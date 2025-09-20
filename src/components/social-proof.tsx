'use client'
import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const notifications = [
  "Simone Duarte comprou há 12 minutos",
  "Juliana P. de Belo Horizonte, MG acabou de comprar",
  "Marcela F. de São Paulo, SP comprou há 25 minutos",
  "Uma mulher em Rio de Janeiro, RJ acabou de comprar",
  "Patricia S. comprou há 3 minutos",
  "Fernanda L. de Salvador, BA acabou de comprar",
];

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * notifications.length);
      setCurrentNotification(notifications[randomIndex]);
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
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {isVisible && (
        <div className="bg-card border border-border rounded-lg shadow-2xl p-3 flex items-center space-x-3 max-w-sm">
          <CheckCircle2 className="text-green-500 h-6 w-6 flex-shrink-0" />
          <p className="text-sm text-card-foreground">{currentNotification}</p>
        </div>
      )}
    </div>
  );
}
