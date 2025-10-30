'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fbq = (window as any).fbq;
    if (typeof fbq === 'function') {
      fbq('track', 'PageView');
    }
  }, [pathname, searchParams]);

  return null;
}
