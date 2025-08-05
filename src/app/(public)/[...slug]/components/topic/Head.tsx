import { Typography } from "@mui/material";

export default function Head({ title }: { title: string }) {
    return (
        <Typography variant="h2" gutterBottom>
            {title}
        </Typography>
    );
}