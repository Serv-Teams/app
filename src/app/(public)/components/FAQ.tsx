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
                            melalui saluran digital seperti company profile,
                            Search Engine Optimization (SEO), email,
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
                            Berapa lama waktu yang dihabiskan untuk pemasaran lewat Google Ads/Meta Ads?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            variant="body2"
                            gutterBottom
                            sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                        >
                            Waktu yang dihabiskan untuk pemasaran lewat Google Ads dan Meta Ads bervariasi,
                            namun umumnya kampanye kesadaran membutuhkan minimal satu minggu atau lebih
                            untuk mendapatkan data yang signifikan, sementara optimalisasi penuh pada Google Ads
                            bisa memakan waktu hingga tiga bulan. Untuk Meta Ads,
                            kampanye pertimbangan disarankan berjalan selama 5-6 minggu untuk melihat hasil yang ideal.
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
                            1. Company Profile: <br />
                            halaman web yang didesain secara khusus untuk memperkenalkan perusahaan secara menyeluruh kepada publik.<br />
                            2. SEO (Search Engine Optimization): <br />
                            adalah praktik atau sekumpulan teknik yang bertujuan untuk meningkatkan visibilitas dan peringkat sebuah website<br />
                            di hasil pencarian (SERP) mesin telusur seperti Google,
                            dengan cara membuat konten yang relevan dan berkualitas tinggi
                            agar mudah ditemukan oleh mesin pencari dan pengguna.<br />
                            3. Google Ads: <br />
                            adalah platform periklanan daring yang dimiliki oleh Google,
                            yang memungkinkan pengiklan untuk membuat iklan yang ditampilkan di hasil pencarian Google,
                            di situs web mitra Google, dan di platform lainnya.<br />
                            4. Meta Ads: <br />
                            adalah platform periklanan daring yang dimiliki oleh Meta Platforms Inc.
                            (sebelumnya dikenal sebagai Facebook Inc.),
                            yang memungkinkan pengiklan untuk membuat iklan yang ditampilkan di berbagai platform Meta,
                            termasuk Facebook, Instagram, Messenger, dan Audience Network.<br />
                            5. TikTok Ads: <br />
                            adalah platform periklanan daring yang dimiliki oleh TikTok,
                            yang memungkinkan pengiklan untuk membuat iklan yang ditampilkan di aplikasi TikTok.<br />
                            6. Email Ads: <br />
                            adalah bentuk pemasaran digital yang melibatkan pengiriman pesan komersial atau promosi
                            melalui email kepada sekelompok orang atau pelanggan potensial.<br />
                            7. WhatsApp Chatbot: <br />
                            adalah program komputer yang dirancang untuk berinteraksi dengan pengguna melalui aplikasi WhatsApp,
                            dengan tujuan memberikan layanan otomatis seperti menjawab pertanyaan,
                            memberikan informasi produk, atau membantu dalam proses pemesanan.<br />
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
}