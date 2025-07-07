
// Language switch component using MUI
import React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import BrIcon from '../../assets/br.png';
import UsIcon from '../../assets/us.png';
import { Box, Typography } from '@mui/material';

// Custom styled switch with language icons
const LanguageSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 12,
                backgroundImage: `url(${UsIcon})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '24px'
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#303030' : '#303030',
        width: 32,
        height: 32,
        '&:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            color: '#fff',
            backgroundImage: `url(${BrIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '24px'
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

// Language switcher component
const LanguageSwitcher: React.FC = () => {
    const [language, setLanguage] = React.useState<'en' | 'pt'>('pt');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLanguage(event.target.checked ? 'en' : 'pt');
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            width: "100%",
            bgcolor: "#191919",
            py: 2,
        }}>
            <Typography variant="caption" mb={1}>Idioma</Typography>
            <FormControlLabel
                control={<LanguageSwitch checked={language === 'en'} onChange={handleChange} />}
                label={language === 'pt' ? 'BRASIL' : 'USA'}
            />
        </Box>
    )
}

export default LanguageSwitcher
