import { Typography } from "@mui/material";

export default function Head({ title }: { title: string }) {
    return (
        <Typography variant="h4" gutterBottom>
            {title}
        </Typography>
    );
}