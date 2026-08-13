'use client'

import { useEffect, useRef } from 'react';

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
}

export default function ReCaptcha({ onChange }: ReCaptchaProps) {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    const scriptId = 'recaptcha-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    let intervalId: any;

    const renderRecaptcha = () => {
      if (window.grecaptcha && recaptchaRef.current && widgetIdRef.current === null) {
        try {
          widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
            callback: (token: string) => {
              onChange(token);
            },
            'expired-callback': () => {
              onChange(null);
            },
            'error-callback': () => {
              onChange(null);
            },
          });
        } catch (e) {
          console.error('Error rendering reCAPTCHA:', e);
        }
      }
    };

    if (window.grecaptcha) {
      renderRecaptcha();
    } else {
      intervalId = setInterval(() => {
        if (window.grecaptcha) {
          renderRecaptcha();
          clearInterval(intervalId);
        }
      }, 100);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [onChange]);

  return (
    <div className="flex justify-start my-4">
      <div ref={recaptchaRef} />
    </div>
  );
}

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLDivElement | string,
        parameters: {
          sitekey: string;
          callback: (token: string) => void;
          'expired-callback'?: () => void;
          'error-callback'?: () => void;
        }
      ) => number;
      reset: (widgetId?: number) => void;
    };
  }
}
