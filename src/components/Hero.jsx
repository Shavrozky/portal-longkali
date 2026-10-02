// src/components/Hero.jsx
import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import heroImage from "../assets/hero-longkali.jpg";

export default function Hero() {
  return (
    <Box
      id="beranda"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
      }}
    >
      {/* Overlay Dramatis: Efek Vignette dan Kabut Hitam */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at center, rgba(13, 12, 10, 0.45) 0%, rgba(13, 12, 10, 0.95) 100%),
            linear-gradient(to bottom, rgba(13, 12, 10, 0.8) 0%, transparent 40%, rgba(13, 12, 10, 0.95) 100%)
          `,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, pt: 12 }}>
        <Box sx={{ maxWidth: 850 }}>
          {/* Lencana Tradisi Paser */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              px: 2,
              py: 0.75,
              mb: 3,
              border: "1px solid rgba(212, 175, 55, 0.5)",
              backgroundColor: "rgba(23, 21, 18, 0.75)",
              backdropFilter: "blur(6px)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#D4AF37",
                fontFamily: '"Cinzel", serif',
                letterSpacing: "0.2em",
                fontWeight: 600,
              }}
            >
              TANAH ULAYAT PASER TELAKE
            </Typography>
          </Box>

          {/* Tagline Utama */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "4rem", md: "5rem" },
              fontWeight: 800,
              color: "#F5F2EB",
              lineHeight: 1.1,
              textShadow: "0 4px 24px rgba(0,0,0,0.85)",
              mb: 3,
            }}
          >
            Long Kali, <br />
            <span style={{ color: "#D4AF37", fontStyle: "italic" }}>
              Kampung Halaman Kami
            </span>
          </Typography>

          {/* Narasi Emosional */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#D0C9BD",
              lineHeight: 1.8,
              maxWidth: 680,
              mb: 4,
              fontWeight: 300,
            }}
          >
            Di mana deru arus Sungai Telake mengalirkan riwayat para leluhur,
            jalanan panjang yang selalu memanggil pulang, dan falsafah{" "}
            <em>Oso Man Sampeang Labo Bepekat</em> dijaga abadi dalam setiap
            hembusan angin utara Paser.
          </Typography>

          {/* Aksi */}
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              href="#sejarah"
              sx={{
                backgroundColor: "#D4AF37",
                color: "#0D0C0A",
                fontWeight: 700,
                px: 3.5,
                py: 1.25,
                fontSize: "0.9rem",
                fontFamily: '"Cinzel", serif',
                letterSpacing: "0.05em",
                "&:hover": { backgroundColor: "#EEDC82" },
              }}
            >
              Telusuri Kisah
            </Button>
            <Button
              variant="outlined"
              href="#layanan"
              sx={{
                borderColor: "rgba(245, 242, 235, 0.4)",
                color: "#F5F2EB",
                px: 3.5,
                py: 1.25,
                fontSize: "0.9rem",
                "&:hover": {
                  borderColor: "#D4AF37",
                  backgroundColor: "rgba(212, 175, 55, 0.08)",
                },
              }}
            >
              Layanan Warga
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
