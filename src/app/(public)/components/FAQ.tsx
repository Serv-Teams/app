import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Container
            id="faq"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Typography
                component="h2"
                variant="h4"
                sx={{
                    color: 'text.primary',
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                FAQ
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Apa itu "Serv"?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                        >
                            Serv adalah sebuah tim yang berisikan para ahli di bidangnya
                            yang berfokus membantu para pelaku bisnis
                            memperjualkan jasa/produk di bagian pemasaran, khususnya
                            pemasaran berbentuk digital/non fisik.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Apa itu pemasaran berbentuk digital?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                        >
                            Pemasaran berbentuk digital adalah promosi bisnis
                            melalui saluran digital seperti landing page,
                            optimasi mesin pencari &#40;SEO&#41;, email,
                            atau iklan berbayar daring.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3d-content"
                        id="panel3d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Mengapa pemasaran berbentuk digital sangat penting?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                        >
                            Pemasaran berbentuk digital menyediakan cara bagi perusahaan
                            untuk mengembangkan audiens mereka, meningkatkan laba,
                            dan membangun hubungan yang lebih baik dengan
                            pelanggan lama dan baru.
                            Pemasaran berbentuk digital juga memungkinkan para pelaku bisnis
                            untuk menargetkan audiens yang lebih spesifik atau khusus dan
                            lebih mudah untuk mengukur hasilnya.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4d-content"
                        id="panel4d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Berapa lama waktu yang seharusnya saya habiskan untuk pemasaran lewat Google Ads/Facebook Ads?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                        >
                            Hal ini sangat bergantung di mana Anda memasarkan bisnis Anda.
                            Namun, satu hal yang dapat kami katakan adalah sering kali meremehkan waktu
                            yang pas untuk memasarkan lewat Google Ads/Facebook Ads.
                            Tim kami meluangkan waktu beberapa jam per minggu untuk membuat grafis,
                            menulis konten, berinteraksi dengan pelaku bisnis lain, dan mengikuti tren terkini.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel5'}
                    onChange={handleChange('panel5')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4d-content"
                        id="panel4d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Apa arti dari istilah-istilah di layanan kami?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                        >
                            1. Landing Page: https://www.biznetgio.com/news/apa-itu-landing-page<br />
                            2. SEO: https://developers.google.com/search/docs/fundamentals/do-i-need-seo?hl=id<br />
                            3. Google Ads: https://support.google.com/google-ads/answer/6319?hl=id<br />
                            4. Facebook Ads: https://revou.co/panduan-teknis/pengenalan-dasar-facebook-ads<br />
                            5. Whatsapp Chatbot: https://yellow.ai/id/blog/whatsapp-chatbot/<br />
                            6. Domain Website: https://www.hostinger.co.id/tutorial/apa-itu-domain/<br />
                            7. VPS: https://www.biznetgio.com/news/apa-itu-vps
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === 'panel6'}
                    onChange={handleChange('panel6')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4d-content"
                        id="panel4d-header"
                    >
                        <Typography component="h3" variant="subtitle2">
                            Berapa rincian harga per layanan yang diberikan?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                        >
                            Paket Utama:<br />
                            1.) 1 Landing Page: Rp. 100.000,-<br />
                            2.) SEO: Rp. 70.000,-<br />
                            3.) Google Ads: Rp. 65.000,-<br />
                            4.) Meta Ads: Rp. 50.000,-<br />
                            5.) Whatsapp Chatbot: Rp. 40.000,-<br /><br />

                            Paket Opsional:<br />
                            1.) Hosting (Domain & VPS): Rp. 70.000,-<br />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}