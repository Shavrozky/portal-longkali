// src/App.jsx
import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SejarahBudaya from "./components/SejarahBudaya";
import ProfilSection from "./components/ProfilSection";
import LayananSection from "./components/LayananSection";
import InfoDanBudaya from "./components/InfoDanBudaya";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
        <Navbar />
        <Hero />
        <SejarahBudaya />
        <ProfilSection />
        <LayananSection />
        <InfoDanBudaya />

        {/* Footer Berwibawa */}
        <Box
          component="footer"
          sx={{
            py: 8,
            borderTop: "1px solid rgba(212, 175, 55, 0.2)",
            backgroundColor: "#090807",
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={4}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: '"Cinzel", serif', color: "#D4AF37" }}
                >
                  PORTAL RESMI WILAYAH LONG KALI
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#8A8275", mt: 1, maxWidth: 450 }}
                >
                  Penjaga gerbang utara Kabupaten Paser. Menghubungkan tradisi
                  tanah ulayat Paser Telake dengan keterbukaan layanan digital
                  masyarakat.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ textAlign: { xs: "left", md: "right" } }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#D4AF37",
                    letterSpacing: "0.15em",
                    display: "block",
                  }}
                >
                  DAYA TAKA • BUMI PASER TELAKE
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "#5A544A", display: "block", mt: 0.5 }}
                >
                  © {new Date().getFullYear()} Komunitas & Pemerintahan Wilayah
                  Long Kali, Kalimantan Timur.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
