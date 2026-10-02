// src/components/SejarahBudaya.jsx
import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

export default function SejarahBudaya() {
  return (
    <Box id="sejarah" sx={{ py: 14, backgroundColor: "#0D0C0A" }}>
      <Container maxWidth="lg">
        {/* Sub-judul Adat */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
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
            Akar Peradaban & Petuah Leluhur
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              color: "#F5F2EB",
              mb: 2,
            }}
          >
            Arus Telake, Jiwa Long Kali
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 2,
              backgroundColor: "#D4AF37",
              mx: "auto",
              mt: 2,
            }}
          />
        </Box>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{
                color: "#D0C9BD",
                lineHeight: 1.9,
                mb: 3,
                fontSize: "1.05rem",
              }}
            >
              Jauh sebelum aspal membentang dari Penajam ke Tanah Grogot, denyut
              kehidupan Long Kali bertumpu pada perahu-perahu kayu yang membelah{" "}
              <strong>Sungai Telake</strong>. Sungai ini bukan sekadar perairan,
              melainkan saksi bisu jalur niaga zaman Swapraja Paser, tempat
              bertemunya suku Paser, Banjar, dan Bugis.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#A8A092", lineHeight: 1.9, fontSize: "0.95rem" }}
            >
              Masyarakat adat Paser Telake merawat petuah{" "}
              <em>"Oso Man Sampeang Labo Bepekat"</em>—satu kata, satu tujuan,
              bermusyawarah mufakat. Nilai ini menjadi fondasi bagaimana warga
              menyambut perubahan zaman tanpa melepaskan adat istiadatnya.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: "#171512",
                border: "1px solid rgba(212, 175, 55, 0.25)",
                position: "relative",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cinzel", serif',
                  color: "#D4AF37",
                  mb: 2,
                }}
              >
                Pilar Tradisi & Kearifan
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#F5F2EB", fontWeight: 600 }}
                  >
                    Petung Temui Taun
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#A8A092", fontSize: "0.85rem" }}
                  >
                    Ritual rasa syukur tahunan atas hasil bumi dan permohonan
                    keselamatan desa dari bala bencana.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#F5F2EB", fontWeight: 600 }}
                  >
                    Hutan Adat & Wilayah Ulayat
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#A8A092", fontSize: "0.85rem" }}
                  >
                    Kawasan tangkapan air hulu Telake yang dijaga secara
                    turun-temurun dari eksploitasi berlebih.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#F5F2EB", fontWeight: 600 }}
                  >
                    Persaudaraan Lintas Sungai
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#A8A092", fontSize: "0.85rem" }}
                  >
                    Keterbukaan masyarakat lokal yang menyatu dengan para
                    perantau di jalur utama Kalimantan Timur.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
