import { useState, useEffect } from 'react';
import { Fab, Tooltip, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslation } from '../../../hooks/useTranslation';

export default function BackToTopButton() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={isVisible}>
      <Tooltip title={t('backToTop.tooltip')}>
        <Fab
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            background: 'linear-gradient(90deg, #ff8a00, #e52e71)',
            color: 'white',
            zIndex: 1000,
            '&:hover': {
              background: 'linear-gradient(90deg, #e67700, #d12761)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip >
    </Zoom>
  );
}