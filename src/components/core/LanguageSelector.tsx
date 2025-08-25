import { Select, MenuItem, FormControl, Box } from '@mui/material';
import { useTranslation } from '../../hooks/useTranslation';

const languages = [
  { code: 'pt-BR', label: 'PT', flag: '🇧🇷' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
];

export const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useTranslation();

  return (
    <FormControl size="small">
      <Select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        sx={{
          color: 'white',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
          '& .MuiSvgIcon-root': {
            color: 'white',
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};