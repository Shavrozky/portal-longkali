// src/components/InfoDanBudaya.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Alert,
  AlertTitle,
} from "@mui/material";
import WavesIcon from "@mui/icons-material/Waves";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { peringatanSungai, khazanahBudaya } from "../data/portalData";

export default function InfoDanBudaya() {
  return (
    <Box id="info-penting" sx={{ py: 12, backgroundColor: "#12100E" }}>
      <Container maxWidth="lg">
        {/* Banner Peringatan Sungai Telake */}
        <Box sx={{ mb: 10 }}>
          <Alert
            icon={<WavesIcon sx={{ color: "#38BDF8" }} />}
            sx={{
              backgroundColor: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              color: "#E2E8F0",
              p: 3,
              "& .MuiAlert-icon": { alignItems: "center" },
            }}
          >
            <AlertTitle
              sx={{
                color: "#38BDF8",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.05em",
              }}
            >
              PANTAUAN HIDROLOGI: {peringatanSungai.sungai.toUpperCase()}
            </AlertTitle>
            <Typography variant="body2" sx={{ color: "#CBD5E1", mt: 0.5 }}>
              Status Saat Ini: <strong>{peringatanSungai.status}</strong> •
              Ketinggian Muka Air: <strong>{peringatanSungai.debit}</strong> (
              {peringatanSungai.pembaruan})
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "#94A3B8", display: "block", mt: 1 }}
            >
              {peringatanSungai.catatan}
            </Typography>
          </Alert>
        </Box>

        {/* Khazanah Kuliner, Ritus, & Kearifan Lokal */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="caption"
            sx={{
              color: "#D4AF37",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              display: "block",
              mb: 1,
            }}
          >
            Warisan Kehidupan Warga
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#F5F2EB", fontFamily: '"Cinzel", serif' }}
          >
            Khazanah & Kuliner Paser
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {khazanahBudaya.map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  backgroundColor: "#171512",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.2s, border-color 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#D4AF37",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#D4AF37",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.tipe}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#F5F2EB",
                      mt: 1,
                      mb: 2,
                      fontFamily: '"Cinzel", serif',
                    }}
                  >
                    {item.judul}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#A8A092", lineHeight: 1.8 }}
                  >
                    {item.uraian}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
