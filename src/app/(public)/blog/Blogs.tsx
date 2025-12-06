// // // // 'use client'

// // // // import * as React from 'react';
// // // // import AvatarGroup from '@mui/material/AvatarGroup';
// // // // import Box from '@mui/material/Box';
// // // // import Grid from '@mui/material/Grid';
// // // // import Typography from '@mui/material/Typography';
// // // // import { styled } from '@mui/material/styles';
// // // // import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
// // // // import { Link } from '@mui/material';



// // // // const StyledTypography = styled(Typography)({
// // // //     display: '-webkit-box',
// // // //     WebkitBoxOrient: 'vertical',
// // // //     WebkitLineClamp: 2,
// // // //     overflow: 'hidden',
// // // //     textOverflow: 'ellipsis',
// // // // });

// // // // const TitleTypography = styled(Typography)(({ theme }) => ({
// // // //     position: 'relative',
// // // //     textDecoration: 'none',
// // // //     '&:hover': { cursor: 'pointer' },
// // // //     '& .arrow': {
// // // //         visibility: 'hidden',
// // // //         position: 'absolute',
// // // //         right: 0,
// // // //         top: '50%',
// // // //         transform: 'translateY(-50%)',
// // // //     },
// // // //     '&:hover .arrow': {
// // // //         visibility: 'visible',
// // // //         opacity: 0.7,
// // // //     },
// // // //     '&:focus-visible': {
// // // //         outline: '3px solid',
// // // //         outlineColor: 'hsla(210, 98%, 48%, 0.5)',
// // // //         outlineOffset: '3px',
// // // //         borderRadius: '8px',
// // // //     },
// // // //     '&::before': {
// // // //         content: '""',
// // // //         position: 'absolute',
// // // //         width: 0,
// // // //         height: '1px',
// // // //         bottom: 0,
// // // //         left: 0,
// // // //         backgroundColor: (theme.vars || theme).palette.text.primary,
// // // //         opacity: 0.3,
// // // //         transition: 'width 0.3s ease, opacity 0.3s ease',
// // // //     },
// // // //     '&:hover::before': {
// // // //         width: '100%',
// // // //     },
// // // // }));

// // // // export default function Blogs({ blogs, profiles }: { blogs: any[], profiles: any[] }) {
// // // //     const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(
// // // //         null,
// // // //     );

// // // //     const handleFocus = (index: number) => {
// // // //         setFocusedCardIndex(index);
// // // //     };

// // // //     const handleBlur = () => {
// // // //         setFocusedCardIndex(null);
// // // //     };

// // // //     let fmt = new Intl.DateTimeFormat('id-ID', {
// // // //         dateStyle: "long",
// // // //         // timeStyle: "short",
// // // //         timeZone: "UTC",
// // // //         // hour12: false
// // // //     });

// // // //     return (
// // // //         <div>
// // // //             <Typography variant="h2" gutterBottom>
// // // //                 Blogs
// // // //             </Typography>
// // // //             <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
// // // //                 {blogs.map((b: any, index: any) => (
// // // //                     <Grid key={index} size={{ xs: 12, sm: 6 }}>
// // // //                         <Box
// // // //                             sx={{
// // // //                                 display: 'flex',
// // // //                                 flexDirection: 'column',
// // // //                                 justifyContent: 'space-between',
// // // //                                 gap: 1,
// // // //                                 height: '100%',
// // // //                             }}
// // // //                         >
// // // //                             <Typography gutterBottom variant="caption" component="div">
// // // //                                 {b.topic}
// // // //                             </Typography>

// // // //                             {profiles.map(
// // // //                                 (p: any, index: any) =>
// // // //                                     b.corporateId === p._id && (
// // // //                                         <Link key={index} href={`/perusahaan/${p.slug}/blog/${b.slug}`} underline='none' color='#ff914d'>
// // // //                                             <TitleTypography
// // // //                                                 gutterBottom
// // // //                                                 variant="h6"
// // // //                                                 onFocus={() => handleFocus(index)}
// // // //                                                 onBlur={handleBlur}
// // // //                                                 tabIndex={0}
// // // //                                                 className={focusedCardIndex === index ? 'Mui-focused' : ''}
// // // //                                             >
// // // //                                                 {b.title}
// // // //                                                 <NavigateNextRoundedIcon
// // // //                                                     className="arrow"
// // // //                                                     sx={{ fontSize: '1rem' }}
// // // //                                                 />
// // // //                                             </TitleTypography>
// // // //                                         </Link>
// // // //                                     )
// // // //                             )}

// // // //                             <StyledTypography variant="body2" color="text.secondary" gutterBottom>
// // // //                                 {b.content}
// // // //                             </StyledTypography>

// // // //                             <Box
// // // //                                 sx={{
// // // //                                     display: 'flex',
// // // //                                     flexDirection: 'row',
// // // //                                     gap: 2,
// // // //                                     alignItems: 'center',
// // // //                                     justifyContent: 'space-between',
// // // //                                 }}
// // // //                             >
// // // //                                 <Box
// // // //                                     sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
// // // //                                 >
// // // //                                     <AvatarGroup max={3}>
// // // //                                         {profiles.map(
// // // //                                             (p: any, index: any) =>
// // // //                                                 b.corporateId === p._id && (
// // // //                                                     <Box
// // // //                                                         component="iframe"
// // // //                                                         src={p.logo}
// // // //                                                         title={p.name}
// // // //                                                         aria-label={p.slug}
// // // //                                                         key={index}
// // // //                                                         sx={{
// // // //                                                             width: 24,
// // // //                                                             height: 24,
// // // //                                                             borderRadius: "50%",
// // // //                                                             border: "none",
// // // //                                                             overflow: "hidden",
// // // //                                                             display: "inline-block",
// // // //                                                         }}
// // // //                                                     />
// // // //                                                 )
// // // //                                         )}
// // // //                                     </AvatarGroup>
// // // //                                     <Typography variant="caption">
// // // //                                         {profiles.map(
// // // //                                             (p: any) =>
// // // //                                                 b.corporateId === p._id && (
// // // //                                                     p.name
// // // //                                                 )
// // // //                                         )}
// // // //                                     </Typography>
// // // //                                 </Box>
// // // //                                 <Typography variant="caption">{fmt.format(new Date(b.createdAt))}</Typography>
// // // //                             </Box>
// // // //                         </Box>
// // // //                     </Grid>
// // // //                 ))}
// // // //             </Grid>
// // // //         </div>
// // // //     );
// // // // }

// // // 'use client'

// // // import * as React from 'react';
// // // import AvatarGroup from '@mui/material/AvatarGroup';
// // // import Box from '@mui/material/Box';
// // // import Grid from '@mui/material/Grid';
// // // import Typography from '@mui/material/Typography';
// // // import { styled } from '@mui/material/styles';
// // // import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
// // // import { Link, Pagination } from '@mui/material';

// // // const StyledTypography = styled(Typography)({
// // //     display: '-webkit-box',
// // //     WebkitBoxOrient: 'vertical',
// // //     WebkitLineClamp: 2,
// // //     overflow: 'hidden',
// // //     textOverflow: 'ellipsis',
// // // });

// // // const TitleTypography = styled(Typography)(({ theme }) => ({
// // //     position: 'relative',
// // //     textDecoration: 'none',
// // //     '&:hover': { cursor: 'pointer' },
// // //     '& .arrow': {
// // //         visibility: 'hidden',
// // //         position: 'absolute',
// // //         right: 0,
// // //         top: '50%',
// // //         transform: 'translateY(-50%)',
// // //     },
// // //     '&:hover .arrow': {
// // //         visibility: 'visible',
// // //         opacity: 0.7,
// // //     },
// // //     '&:focus-visible': {
// // //         outline: '3px solid',
// // //         outlineColor: 'hsla(210, 98%, 48%, 0.5)',
// // //         outlineOffset: '3px',
// // //         borderRadius: '8px',
// // //     },
// // //     '&::before': {
// // //         content: '""',
// // //         position: 'absolute',
// // //         width: 0,
// // //         height: '1px',
// // //         bottom: 0,
// // //         left: 0,
// // //         backgroundColor: (theme.vars || theme).palette.text.primary,
// // //         opacity: 0.3,
// // //         transition: 'width 0.3s ease, opacity 0.3s ease',
// // //     },
// // //     '&:hover::before': {
// // //         width: '100%',
// // //     },
// // // }));

// // // export default function Blogs({ blogs, profiles }: { blogs: any[], profiles: any[] }) {
// // //     const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);
// // //     const [page, setPage] = React.useState(1);

// // //     const blogsPerPage = 10;
// // //     const totalPages = Math.ceil(blogs.length / blogsPerPage);

// // //     const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
// // //         setPage(value);
// // //         window.scrollTo({ top: 0, behavior: 'smooth' });
// // //     };

// // //     const startIndex = (page - 1) * blogsPerPage;
// // //     const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

// // //     const handleFocus = (index: number) => setFocusedCardIndex(index);
// // //     const handleBlur = () => setFocusedCardIndex(null);

// // //     let fmt = new Intl.DateTimeFormat('id-ID', {
// // //         dateStyle: "long",
// // //         timeZone: "UTC",
// // //     });

// // //     return (
// // //         <div>
// // //             <Typography variant="h2" gutterBottom>
// // //                 Blogs
// // //             </Typography>

// // //             <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
// // //                 {currentBlogs.map((b: any, index: any) => (
// // //                     <Grid key={index} size={{ xs: 12, sm: 6 }}>
// // //                         <Box
// // //                             sx={{
// // //                                 display: 'flex',
// // //                                 flexDirection: 'column',
// // //                                 justifyContent: 'space-between',
// // //                                 gap: 1,
// // //                                 height: '100%',
// // //                             }}
// // //                         >
// // //                             <Typography gutterBottom variant="caption" component="div">
// // //                                 {b.topic}
// // //                             </Typography>

// // //                             {profiles.map(
// // //                                 (p: any, index: any) =>
// // //                                     b.corporateId === p._id && (
// // //                                         <Link key={index} href={`/perusahaan/${p.slug}/blog/${b.slug}`} underline='none' color='#ff914d'>
// // //                                             <TitleTypography
// // //                                                 gutterBottom
// // //                                                 variant="h6"
// // //                                                 onFocus={() => handleFocus(index)}
// // //                                                 onBlur={handleBlur}
// // //                                                 tabIndex={0}
// // //                                                 className={focusedCardIndex === index ? 'Mui-focused' : ''}
// // //                                             >
// // //                                                 {b.title}
// // //                                                 <NavigateNextRoundedIcon
// // //                                                     className="arrow"
// // //                                                     sx={{ fontSize: '1rem' }}
// // //                                                 />
// // //                                             </TitleTypography>
// // //                                         </Link>
// // //                                     )
// // //                             )}

// // //                             <StyledTypography variant="body2" color="text.secondary" gutterBottom>
// // //                                 {b.content}
// // //                             </StyledTypography>

// // //                             <Box
// // //                                 sx={{
// // //                                     display: 'flex',
// // //                                     flexDirection: 'row',
// // //                                     gap: 2,
// // //                                     alignItems: 'center',
// // //                                     justifyContent: 'space-between',
// // //                                 }}
// // //                             >
// // //                                 <Box
// // //                                     sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
// // //                                 >
// // //                                     <AvatarGroup max={3}>
// // //                                         {profiles.map(
// // //                                             (p: any, index: any) =>
// // //                                                 b.corporateId === p._id && (
// // //                                                     <Box
// // //                                                         component="iframe"
// // //                                                         src={p.logo}
// // //                                                         title={p.name}
// // //                                                         aria-label={p.slug}
// // //                                                         key={index}
// // //                                                         sx={{
// // //                                                             width: 24,
// // //                                                             height: 24,
// // //                                                             borderRadius: "50%",
// // //                                                             border: "none",
// // //                                                             overflow: "hidden",
// // //                                                             display: "inline-block",
// // //                                                         }}
// // //                                                     />
// // //                                                 )
// // //                                         )}
// // //                                     </AvatarGroup>
// // //                                     <Typography variant="caption">
// // //                                         {profiles.map(
// // //                                             (p: any) =>
// // //                                                 b.corporateId === p._id && p.name
// // //                                         )}
// // //                                     </Typography>
// // //                                 </Box>
// // //                                 <Typography variant="caption">{fmt.format(new Date(b.createdAt))}</Typography>
// // //                             </Box>
// // //                         </Box>
// // //                     </Grid>
// // //                 ))}
// // //             </Grid>

// // //             {/* Pagination */}
// // //             <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
// // //                 <Pagination
// // //                     count={totalPages}
// // //                     page={page}
// // //                     onChange={handlePageChange}
// // //                     color="primary"
// // //                     size="medium"
// // //                     shape="rounded"
// // //                 />
// // //             </Box>
// // //         </div>
// // //     );
// // // }

// // 'use client'

// // import * as React from 'react';
// // import {
// //     AvatarGroup,
// //     Box,
// //     Grid,
// //     Typography,
// //     Pagination,
// //     FormControl,
// //     InputLabel,
// //     MenuItem,
// //     Select,
// //     SelectChangeEvent,
// //     Link,
// // } from '@mui/material';
// // import { styled } from '@mui/material/styles';
// // import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

// // const StyledTypography = styled(Typography)({
// //     display: '-webkit-box',
// //     WebkitBoxOrient: 'vertical',
// //     WebkitLineClamp: 2,
// //     overflow: 'hidden',
// //     textOverflow: 'ellipsis',
// // });

// // const TitleTypography = styled(Typography)(({ theme }) => ({
// //     position: 'relative',
// //     textDecoration: 'none',
// //     '&:hover': { cursor: 'pointer' },
// //     '& .arrow': {
// //         visibility: 'hidden',
// //         position: 'absolute',
// //         right: 0,
// //         top: '50%',
// //         transform: 'translateY(-50%)',
// //     },
// //     '&:hover .arrow': {
// //         visibility: 'visible',
// //         opacity: 0.7,
// //     },
// //     '&:focus-visible': {
// //         outline: '3px solid',
// //         outlineColor: 'hsla(210, 98%, 48%, 0.5)',
// //         outlineOffset: '3px',
// //         borderRadius: '8px',
// //     },
// //     '&::before': {
// //         content: '""',
// //         position: 'absolute',
// //         width: 0,
// //         height: '1px',
// //         bottom: 0,
// //         left: 0,
// //         backgroundColor: (theme.vars || theme).palette.text.primary,
// //         opacity: 0.3,
// //         transition: 'width 0.3s ease, opacity 0.3s ease',
// //     },
// //     '&:hover::before': {
// //         width: '100%',
// //     },
// // }));

// // export default function Blogs({ blogs, profiles }: { blogs: any[]; profiles: any[] }) {
// //     const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);
// //     const [page, setPage] = React.useState(1);
// //     const [selectedTopic, setSelectedTopic] = React.useState('Semua');

// //     const blogsPerPage = 10;
// //     const fmt = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeZone: 'UTC' });

// //     // 🔹 Ambil semua topic unik dari data blogs
// //     const topics = React.useMemo(() => {
// //         const unique = Array.from(new Set(blogs.map((b) => b.topic)));
// //         return ['Semua', ...unique];
// //     }, [blogs]);

// //     // 🔹 Filter blogs berdasarkan topic terpilih
// //     const filteredBlogs =
// //         selectedTopic === 'Semua'
// //             ? blogs
// //             : blogs.filter((b) => b.topic === selectedTopic);

// //     // 🔹 Pagination berdasarkan hasil filter
// //     const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
// //     const startIndex = (page - 1) * blogsPerPage;
// //     const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

// //     const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
// //         setPage(value);
// //         window.scrollTo({ top: 0, behavior: 'smooth' });
// //     };

// //     const handleFocus = (index: number) => setFocusedCardIndex(index);
// //     const handleBlur = () => setFocusedCardIndex(null);

// //     const handleTopicChange = (event: SelectChangeEvent) => {
// //         setSelectedTopic(event.target.value);
// //         setPage(1); // reset ke halaman pertama
// //     };

// //     return (
// //         <Box>
// //             <Typography variant="h2" gutterBottom>
// //                 Blogs
// //             </Typography>

// //             {/* 🔽 Filter Berdasarkan Topik */}
// //             <FormControl size="small" sx={{ mb: 3, minWidth: 240 }}>
// //                 <InputLabel id="filter-topic-label">Filter Berdasarkan Topik</InputLabel>
// //                 <Select
// //                     labelId="filter-topic-label"
// //                     value={selectedTopic}
// //                     label="Filter Berdasarkan Topik"
// //                     onChange={handleTopicChange}
// //                 >
// //                     {topics.map((topic) => (
// //                         <MenuItem key={topic} value={topic}>
// //                             {topic}
// //                         </MenuItem>
// //                     ))}
// //                 </Select>
// //             </FormControl>

// //             <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
// //                 {currentBlogs.map((b: any, index: any) => (
// //                     <Grid key={index} size={{ xs: 12, sm: 6 }}>
// //                         <Box
// //                             sx={{
// //                                 display: 'flex',
// //                                 flexDirection: 'column',
// //                                 justifyContent: 'space-between',
// //                                 gap: 1,
// //                                 height: '100%',
// //                             }}
// //                         >
// //                             <Typography gutterBottom variant="caption" component="div">
// //                                 {b.topic}
// //                             </Typography>

// //                             {profiles.map(
// //                                 (p: any, index: any) =>
// //                                     b.corporateId === p._id && (
// //                                         <Link
// //                                             key={index}
// //                                             href={`/perusahaan/${p.slug}/blog/${b.slug}`}
// //                                             underline="none"
// //                                             color="#ff914d"
// //                                         >
// //                                             <TitleTypography
// //                                                 gutterBottom
// //                                                 variant="h6"
// //                                                 onFocus={() => handleFocus(index)}
// //                                                 onBlur={handleBlur}
// //                                                 tabIndex={0}
// //                                                 className={focusedCardIndex === index ? 'Mui-focused' : ''}
// //                                             >
// //                                                 {b.title}
// //                                                 <NavigateNextRoundedIcon
// //                                                     className="arrow"
// //                                                     sx={{ fontSize: '1rem' }}
// //                                                 />
// //                                             </TitleTypography>
// //                                         </Link>
// //                                     )
// //                             )}

// //                             <StyledTypography variant="body2" color="text.secondary" gutterBottom>
// //                                 {b.content}
// //                             </StyledTypography>

// //                             <Box
// //                                 sx={{
// //                                     display: 'flex',
// //                                     flexDirection: 'row',
// //                                     gap: 2,
// //                                     alignItems: 'center',
// //                                     justifyContent: 'space-between',
// //                                 }}
// //                             >
// //                                 <Box
// //                                     sx={{
// //                                         display: 'flex',
// //                                         flexDirection: 'row',
// //                                         gap: 1,
// //                                         alignItems: 'center',
// //                                     }}
// //                                 >
// //                                     <AvatarGroup max={3}>
// //                                         {profiles.map(
// //                                             (p: any, index: any) =>
// //                                                 b.corporateId === p._id && (
// //                                                     <Box
// //                                                         component="iframe"
// //                                                         src={p.logo}
// //                                                         title={p.name}
// //                                                         aria-label={p.slug}
// //                                                         key={index}
// //                                                         sx={{
// //                                                             width: 24,
// //                                                             height: 24,
// //                                                             borderRadius: '50%',
// //                                                             border: 'none',
// //                                                             overflow: 'hidden',
// //                                                             display: 'inline-block',
// //                                                         }}
// //                                                     />
// //                                                 )
// //                                         )}
// //                                     </AvatarGroup>
// //                                     <Typography variant="caption">
// //                                         {profiles.map((p: any) => b.corporateId === p._id && p.name)}
// //                                     </Typography>
// //                                 </Box>
// //                                 <Typography variant="caption">
// //                                     {fmt.format(new Date(b.createdAt))}
// //                                 </Typography>
// //                             </Box>
// //                         </Box>
// //                     </Grid>
// //                 ))}
// //             </Grid>

// //             {/* 🔸 Pagination */}
// //             <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
// //                 <Pagination
// //                     count={totalPages}
// //                     page={page}
// //                     onChange={handlePageChange}
// //                     color="primary"
// //                     size="medium"
// //                     shape="rounded"
// //                 />
// //             </Box>
// //         </Box>
// //     );
// // }

// 'use client'

// import * as React from 'react';
// import {
//     AvatarGroup,
//     Box,
//     Grid,
//     Typography,
//     Pagination,
//     FormControl,
//     InputLabel,
//     MenuItem,
//     Select,
//     SelectChangeEvent,
//     Link,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

// const StyledTypography = styled(Typography)({
//     display: '-webkit-box',
//     WebkitBoxOrient: 'vertical',
//     WebkitLineClamp: 2,
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
// });

// const TitleTypography = styled(Typography)(({ theme }) => ({
//     position: 'relative',
//     textDecoration: 'none',
//     '&:hover': { cursor: 'pointer' },
//     '& .arrow': {
//         visibility: 'hidden',
//         position: 'absolute',
//         right: 0,
//         top: '50%',
//         transform: 'translateY(-50%)',
//     },
//     '&:hover .arrow': {
//         visibility: 'visible',
//         opacity: 0.7,
//     },
//     '&:focus-visible': {
//         outline: '3px solid',
//         outlineColor: 'hsla(210, 98%, 48%, 0.5)',
//         outlineOffset: '3px',
//         borderRadius: '8px',
//     },
//     '&::before': {
//         content: '""',
//         position: 'absolute',
//         width: 0,
//         height: '1px',
//         bottom: 0,
//         left: 0,
//         backgroundColor: (theme.vars || theme).palette.text.primary,
//         opacity: 0.3,
//         transition: 'width 0.3s ease, opacity 0.3s ease',
//     },
//     '&:hover::before': {
//         width: '100%',
//     },
// }));

// export default function Blogs({ blogs, profiles }: { blogs: any[]; profiles: any[] }) {
//     const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);
//     const [page, setPage] = React.useState(1);
//     const [selectedTopic, setSelectedTopic] = React.useState('Semua');
//     const [sortOrder, setSortOrder] = React.useState<'Terbaru' | 'Terlama'>('Terbaru');

//     const blogsPerPage = 10;
//     const fmt = new Intl.DateTimeFormat('id-ID', { dateStyle: 'long', timeZone: 'UTC' });

//     // 🔹 Ambil semua topic unik dari data blogs
//     const topics = React.useMemo(() => {
//         const unique = Array.from(new Set(blogs.map((b) => b.topic)));
//         return ['Semua', ...unique];
//     }, [blogs]);

//     // 🔹 Filter blogs berdasarkan topic terpilih
//     let filteredBlogs =
//         selectedTopic === 'Semua'
//             ? blogs
//             : blogs.filter((b) => b.topic === selectedTopic);

//     // 🔹 Urutkan berdasarkan createdAt (tanggal)
//     filteredBlogs = filteredBlogs.sort((a, b) => {
//         const dateA = new Date(a.createdAt).getTime();
//         const dateB = new Date(b.createdAt).getTime();
//         return sortOrder === 'Terbaru' ? dateB - dateA : dateA - dateB;
//     });

//     // 🔹 Pagination berdasarkan hasil filter
//     const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
//     const startIndex = (page - 1) * blogsPerPage;
//     const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

//     const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
//         setPage(value);
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const handleFocus = (index: number) => setFocusedCardIndex(index);
//     const handleBlur = () => setFocusedCardIndex(null);

//     const handleTopicChange = (event: SelectChangeEvent) => {
//         setSelectedTopic(event.target.value);
//         setPage(1);
//     };

//     const handleSortChange = (event: SelectChangeEvent) => {
//         setSortOrder(event.target.value as 'Terbaru' | 'Terlama');
//         setPage(1);
//     };

//     return (
//         <Box>
//             <Typography variant="h2" gutterBottom>
//                 Blogs
//             </Typography>

//             {/* 🔽 Filter Berdasarkan Topik & Urutan Tanggal */}
//             <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
//                 <FormControl size="small" sx={{ minWidth: 200 }}>
//                     <InputLabel id="filter-topic-label">Filter Berdasarkan Topik</InputLabel>
//                     <Select
//                         labelId="filter-topic-label"
//                         value={selectedTopic}
//                         label="Filter Berdasarkan Topik"
//                         onChange={handleTopicChange}
//                     >
//                         {topics.map((topic) => (
//                             <MenuItem key={topic} value={topic}>
//                                 {topic}
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>

//                 <FormControl size="small" sx={{ minWidth: 200 }}>
//                     <InputLabel id="filter-date-label">Urutkan Berdasarkan</InputLabel>
//                     <Select
//                         labelId="filter-date-label"
//                         value={sortOrder}
//                         label="Urutkan Berdasarkan"
//                         onChange={handleSortChange}
//                     >
//                         <MenuItem value="Terbaru">Terbaru</MenuItem>
//                         <MenuItem value="Terlama">Terlama</MenuItem>
//                     </Select>
//                 </FormControl>
//             </Box>

//             {/* 🔹 List Blog */}
//             <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
//                 {currentBlogs.map((b: any, index: any) => (
//                     <Grid key={index} size={{ xs: 12, sm: 6 }}>
//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 justifyContent: 'space-between',
//                                 gap: 1,
//                                 height: '100%',
//                             }}
//                         >
//                             <Typography gutterBottom variant="caption" component="div">
//                                 {b.topic}
//                             </Typography>

//                             {profiles.map(
//                                 (p: any, index: any) =>
//                                     b.corporateId === p._id && (
//                                         <Link
//                                             key={index}
//                                             href={`/perusahaan/${p.slug}/blog/${b.slug}`}
//                                             underline="none"
//                                             color="#ff914d"
//                                         >
//                                             <TitleTypography
//                                                 gutterBottom
//                                                 variant="h6"
//                                                 onFocus={() => handleFocus(index)}
//                                                 onBlur={handleBlur}
//                                                 tabIndex={0}
//                                                 className={focusedCardIndex === index ? 'Mui-focused' : ''}
//                                             >
//                                                 {b.title}
//                                                 <NavigateNextRoundedIcon
//                                                     className="arrow"
//                                                     sx={{ fontSize: '1rem' }}
//                                                 />
//                                             </TitleTypography>
//                                         </Link>
//                                     )
//                             )}

//                             <StyledTypography variant="body2" color="text.secondary" gutterBottom>
//                                 {b.content}
//                             </StyledTypography>

//                             <Box
//                                 sx={{
//                                     display: 'flex',
//                                     flexDirection: 'row',
//                                     gap: 2,
//                                     alignItems: 'center',
//                                     justifyContent: 'space-between',
//                                 }}
//                             >
//                                 <Box
//                                     sx={{
//                                         display: 'flex',
//                                         flexDirection: 'row',
//                                         gap: 1,
//                                         alignItems: 'center',
//                                     }}
//                                 >
//                                     <AvatarGroup max={3}>
//                                         {profiles.map(
//                                             (p: any, index: any) =>
//                                                 b.corporateId === p._id && (
//                                                     <Box
//                                                         component="iframe"
//                                                         src={p.logo}
//                                                         title={p.name}
//                                                         aria-label={p.slug}
//                                                         key={index}
//                                                         sx={{
//                                                             width: 24,
//                                                             height: 24,
//                                                             borderRadius: '50%',
//                                                             border: 'none',
//                                                             overflow: 'hidden',
//                                                             display: 'inline-block',
//                                                         }}
//                                                     />
//                                                 )
//                                         )}
//                                     </AvatarGroup>
//                                     <Typography variant="caption">
//                                         {profiles.map((p: any) => b.corporateId === p._id && p.name)}
//                                     </Typography>
//                                 </Box>
//                                 <Typography variant="caption">
//                                     {fmt.format(new Date(b.createdAt))}
//                                 </Typography>
//                             </Box>
//                         </Box>
//                     </Grid>
//                 ))}
//             </Grid>

//             {/* 🔸 Pagination */}
//             <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
//                 <Pagination
//                     count={totalPages}
//                     page={page}
//                     onChange={handlePageChange}
//                     color="primary"
//                     size="medium"
//                     shape="rounded"
//                 />
//             </Box>
//         </Box>
//     );
// }

'use client'

import * as React from 'react';
import {
    AvatarGroup,
    Box,
    Grid,
    Typography,
    Pagination,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Link,
    OutlinedInput,
    InputAdornment,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

const TitleTypography = styled(Typography)(({ theme }) => ({
    position: 'relative',
    textDecoration: 'none',
    '&:hover': { cursor: 'pointer' },
    '& .arrow': {
        visibility: 'hidden',
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
    },
    '&:hover .arrow': {
        visibility: 'visible',
        opacity: 0.7,
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '3px',
        borderRadius: '8px',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        width: 0,
        height: '1px',
        bottom: 0,
        left: 0,
        backgroundColor: (theme.vars || theme).palette.text.primary,
        opacity: 0.3,
        transition: 'width 0.3s ease, opacity 0.3s ease',
    },
    '&:hover::before': {
        width: '100%',
    },
}));

export default function Blogs({ blogs, profiles }: { blogs: any[]; profiles: any[] }) {
    const [focusedCardIndex, setFocusedCardIndex] = React.useState<number | null>(null);
    const [page, setPage] = React.useState(1);
    const [selectedTopic, setSelectedTopic] = React.useState('Semua');
    const [sortOrder, setSortOrder] = React.useState<'Terbaru' | 'Terlama'>('Terbaru');
    const [searchQuery, setSearchQuery] = React.useState('');

    const blogsPerPage = 10;
    const fmt = new Intl.DateTimeFormat('id-ID', { month: 'long', year: "numeric", timeZone: 'UTC' });

    // 🔹 Ambil semua topic unik
    const topics = React.useMemo(() => {
        const unique = Array.from(new Set(blogs.map((b) => b.topic)));
        return ['Semua', ...unique];
    }, [blogs]);

    // 🔹 Filter berdasarkan pencarian teks, topik, dan urutan tanggal
    const filteredBlogs = React.useMemo(() => {
        let result = blogs;

        // Filter pencarian teks
        if (searchQuery.trim() !== '') {
            const lower = searchQuery.toLowerCase();
            result = result.filter(
                (b) =>
                    b.title.toLowerCase().includes(lower) ||
                    b.content.toLowerCase().includes(lower)
            );
        }

        // Filter topik
        if (selectedTopic !== 'Semua') {
            result = result.filter((b) => b.topic === selectedTopic);
        }

        // Urutkan berdasarkan tanggal
        result = result.sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            return sortOrder === 'Terbaru' ? dateB - dateA : dateA - dateB;
        });

        return result;
    }, [blogs, searchQuery, selectedTopic, sortOrder]);

    // 🔹 Pagination
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const startIndex = (page - 1) * blogsPerPage;
    const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFocus = (index: number) => setFocusedCardIndex(index);
    const handleBlur = () => setFocusedCardIndex(null);

    const handleTopicChange = (event: SelectChangeEvent) => {
        setSelectedTopic(event.target.value);
        setPage(1);
    };

    const handleSortChange = (event: SelectChangeEvent) => {
        setSortOrder(event.target.value as 'Terbaru' | 'Terlama');
        setPage(1);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setPage(1);
    };

    return (
        <Box>
            <Typography variant="h2" gutterBottom>
                Blogs
            </Typography>

            {/* 🔍 Search Bar */}
            <Box sx={{ mb: 3 }}>
                <OutlinedInput
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Cari berdasarkan judul atau konten..."
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchRoundedIcon color="action" />
                        </InputAdornment>
                    }
                    sx={{ width: '100%', maxWidth: 400 }}
                />
            </Box>

            {/* 🔽 Filter Berdasarkan Topik & Urutan Tanggal */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                <FormControl size="small" sx={{ minWidth: 200 }}>
                    <InputLabel id="filter-topic-label">Filter Berdasarkan Topik</InputLabel>
                    <Select
                        labelId="filter-topic-label"
                        value={selectedTopic}
                        label="Filter Berdasarkan Topik"
                        onChange={handleTopicChange}
                    >
                        {topics.map((topic) => (
                            <MenuItem key={topic} value={topic}>
                                {topic}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 200 }}>
                    <InputLabel id="filter-date-label">Urutkan Berdasarkan</InputLabel>
                    <Select
                        labelId="filter-date-label"
                        value={sortOrder}
                        label="Urutkan Berdasarkan"
                        onChange={handleSortChange}
                    >
                        <MenuItem value="Terbaru">Terbaru</MenuItem>
                        <MenuItem value="Terlama">Terlama</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* 🔹 List Blog */}
            <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
                {currentBlogs.length === 0 ? (
                    <Typography variant="body1" sx={{ mx: 2 }}>
                        Tidak ada hasil yang ditemukan.
                    </Typography>
                ) : (
                    currentBlogs.map((b: any, index: any) => (
                        <Grid key={index} size={{ xs: 12, sm: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: 1,
                                    height: '100%',
                                }}
                            >
                                <Typography gutterBottom variant="caption" component="div">
                                    {b.topic}
                                </Typography>

                                {profiles.map(
                                    (p: any, index: any) =>
                                        b.companyId === p._id && (
                                            <Link
                                                key={index}
                                                href={`/perusahaan/${p.slug}/blog/${b.slug}`}
                                                underline="none"
                                                color="#ff914d"
                                            >
                                                <TitleTypography
                                                    gutterBottom
                                                    variant="h6"
                                                    onFocus={() => handleFocus(index)}
                                                    onBlur={handleBlur}
                                                    tabIndex={0}
                                                    className={focusedCardIndex === index ? 'Mui-focused' : ''}
                                                >
                                                    {b.title}
                                                    <NavigateNextRoundedIcon
                                                        className="arrow"
                                                        sx={{ fontSize: '1rem' }}
                                                    />
                                                </TitleTypography>
                                            </Link>
                                        )
                                )}

                                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                    {b.content}
                                </StyledTypography>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: 2,
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: 1,
                                            alignItems: 'center',
                                        }}
                                    >
                                        <AvatarGroup max={3}>
                                            {profiles.map(
                                                (p: any, index: any) =>
                                                    b.companyId === p._id && (
                                                        <Box
                                                            component="iframe"
                                                            src={p.logo}
                                                            title={p.name}
                                                            aria-label={p.slug}
                                                            key={index}
                                                            sx={{
                                                                width: 24,
                                                                height: 24,
                                                                borderRadius: '50%',
                                                                border: 'none',
                                                                overflow: 'hidden',
                                                                display: 'inline-block',
                                                            }}
                                                        />
                                                    )
                                            )}
                                        </AvatarGroup>
                                        <Typography variant="caption">
                                            {profiles.map((p: any) => b.companyId === p._id && p.name)}
                                        </Typography>
                                    </Box>
                                    <Typography variant="caption">
                                        {fmt.format(new Date(b.createdAt))}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                )}
            </Grid>

            {/* 🔸 Pagination */}
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    size="medium"
                    shape="rounded"
                />
            </Box>
        </Box>
    );
}
