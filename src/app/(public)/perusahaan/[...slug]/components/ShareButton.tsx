"use client";

import * as React from "react";
import { Button, Snackbar, IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";

export default function ShareButton({ title }: { title: string }) {
    const [open, setOpen] = React.useState(false);

    const handleShare = async () => {
        const shareData = {
            title,
            text: `Baca artikel menarik: ${title}`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setOpen(true);
            }
        } catch (err) {
            console.error("Gagal membagikan link:", err);
        }
    };

    return (
        <>
            <Button
                variant="outlined"
                startIcon={<ShareIcon />}
                onClick={handleShare}
            >
                Bagikan
            </Button>

            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                message="Link berhasil disalin ke clipboard!"
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </>
    );
}
