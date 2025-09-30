// 'use client';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import { useColorScheme } from '@mui/material/styles';

// export default function ModeSwitch() {
//     const { mode, setMode } = useColorScheme();
//     if (!mode) {
//         return null;
//     }
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 justifyContent: 'flex-end',
//                 mt: 1,
//                 p: 1,
//             }}
//         >
//             <FormControl>
//                 <InputLabel id="mode-select-label">Theme</InputLabel>
//                 <Select
//                     labelId="mode-select-label"
//                     id="mode-select"
//                     value={mode}
//                     onChange={(event) => setMode(event.target.value as typeof mode)}
//                     label="Theme"
//                 >
//                     <MenuItem value="system">System</MenuItem>
//                     <MenuItem value="light">Light</MenuItem>
//                     <MenuItem value="dark">Dark</MenuItem>
//                 </Select>
//             </FormControl>
//         </Box>
//     );
// }

'use client';

import Button from "@mui/material/Button";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function ThemeToggleButton() {
    const { mode, setMode } = useColorScheme();
    const [isMounted, setIsMounted] = useState(false);

    // Ensure component is mounted on client-side to prevent hydration issues
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Render nothing on the server
    }

    return (
        <IconButton aria-label="mode"
            onClick={() => {
                setMode(mode === "light" ? "dark" : "light");
            }}
            sx={{
                color: mode === "light" ? "black" : "white",
            }}
        >
            {mode === "light" ? <LightMode /> : <DarkMode />}
        </IconButton>
    );
}