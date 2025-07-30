import { Box, BoxProps } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps extends BoxProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0,
  sx,
  ...props 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animations = {
    fadeInUp: {
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      opacity: isVisible ? 1 : 0,
    },
    fadeInLeft: {
      transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
      opacity: isVisible ? 1 : 0,
    },
    fadeInRight: {
      transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
      opacity: isVisible ? 1 : 0,
    },
    fadeIn: {
      opacity: isVisible ? 1 : 0,
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        ...animations[animation],
        transition: 'all 0.8s ease-out',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}