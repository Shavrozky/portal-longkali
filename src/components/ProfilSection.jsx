// src/components/ProfilSection.jsx
import React from "react";
import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import LandmarkIcon from "@mui/icons-material/AccountBalance";
import ExploreIcon from "@mui/icons-material/Explore";
import { visiMisiData } from "../data/portalData";

export default function ProfilSection() {
  return (
    <Box
      id="visi-misi"
      sx={{
        py: 12,
        backgroundColor: "#12100E",
        borderTop: "1px solid rgba(212, 175, 55, 0.15)",
      }}
    >
      <Container maxWidth="lg">
        {/* Banner Petuah Adat */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            mb: 10,
            textAlign: "center",
            backgroundColor: "rgba(23, 21, 18, 0.85)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            position: "relative",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#D4AF37",
              letterSpacing: "0.25em",
              display: "block",
              mb: 1,
              textTransform: "uppercase",
            }}
          >
            Falsafah Paser Telake
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Cinzel", serif',
              color: "#F5F2EB",
              fontWeight: 700,
              fontStyle: "italic",
              mb: 1.5,
              fontSize: { xs: "1.4rem", md: "2.1rem" },
            }}
          >
            "{visiMisiData.semboyan}"
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#B8B2A7", maxWidth: 650, mx: "auto" }}
          >
            {visiMisiData.artiSemboyan}
          </Typography>
        </Paper>

        {/* Visi dan Misi */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
            >
              <LandmarkIcon sx={{ color: "#D4AF37" }} />
              <Typography
                variant="caption"
                sx={{
                  color: "#D4AF37",
                  letterSpacing: "0.15em",
                  fontWeight: 600,
                }}
              >
                ARAH PEMBANGUNAN
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{
                color: "#F5F2EB",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                mb: 3,
              }}
            >
              Visi Wilayah
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#D0C9BD", lineHeight: 1.8, fontSize: "1.05rem" }}
            >
              {visiMisiData.visi}
            </Typography>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography
              variant="h5"
              sx={{ fontFamily: '"Cinzel", serif', color: "#F5F2EB", mb: 3 }}
            >
              Misi & Prioritas Utama
            </Typography>
            <Stack spacing={2.5}>
              {visiMisiData.misi.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    gap: 2,
                    p: 2.5,
                    backgroundColor: "#171512",
                    borderLeft: "3px solid #D4AF37",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Cinzel", serif',
                      color: "#D4AF37",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      minWidth: "28px",
                    }}
                  >
                    0{idx + 1}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#B8B2A7", lineHeight: 1.7 }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Peta & Batas Wilayah */}
        <Box
          id="peta"
          sx={{
            mt: 12,
            pt: 8,
            borderTop: "1px solid rgba(255, 255, 255, 0.07)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <ExploreIcon sx={{ color: "#D4AF37" }} />
            <Typography
              variant="caption"
              sx={{
                color: "#D4AF37",
                letterSpacing: "0.15em",
                fontWeight: 600,
              }}
            >
              KARTOGRAFI & TATA RUANG
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{ color: "#F5F2EB", mb: 4, fontFamily: '"Cinzel", serif' }}
          >
            Batas & Posisi Spasial
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#171512",
                  border: "1px solid rgba(212, 175, 55, 0.15)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#D4AF37", fontWeight: 600 }}
                >
                  SISI UTARA & TIMUR
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#F5F2EB", mt: 1, fontWeight: 700 }}
                >
                  Kabupaten PPU
                </Typography>
                <Typography variant="body2" sx={{ color: "#8A8275", mt: 0.5 }}>
                  Berbatasan langsung dengan Kecamatan Babulu.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#171512",
                  border: "1px solid rgba(212, 175, 55, 0.15)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#D4AF37", fontWeight: 600 }}
                >
                  SISI BARAT
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#F5F2EB", mt: 1, fontWeight: 700 }}
                >
                  Hulu Pedalaman
                </Typography>
                <Typography variant="body2" sx={{ color: "#8A8275", mt: 0.5 }}>
                  Koridor hutan lindung mengarah ke Kutai Barat.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#171512",
                  border: "1px solid rgba(212, 175, 55, 0.15)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#D4AF37", fontWeight: 600 }}
                >
                  SISI SELATAN
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#F5F2EB", mt: 1, fontWeight: 700 }}
                >
                  Poros Tanah Grogot
                </Typography>
                <Typography variant="body2" sx={{ color: "#8A8275", mt: 0.5 }}>
                  Jalur Trans-Kaltim menuju Long Ikis dan Kuaro.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "#171512",
                  border: "1px solid rgba(212, 175, 55, 0.15)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "#D4AF37", fontWeight: 600 }}
                >
                  URAT NADI UTAMA
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#F5F2EB", mt: 1, fontWeight: 700 }}
                >
                  Sungai Telake
                </Typography>
                <Typography variant="body2" sx={{ color: "#8A8275", mt: 0.5 }}>
                  Membelah kecamatan dari rimba hulu hingga teluk.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
