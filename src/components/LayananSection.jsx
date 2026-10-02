// src/components/LayananSection.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { layananDetail } from "../data/portalData";

export default function LayananSection() {
  const [activeTab, setActiveTab] = useState(0);
  const selectedService = layananDetail[activeTab];

  return (
    <Box id="layanan" sx={{ py: 14, backgroundColor: "#0D0C0A" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
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
            Pelayanan Terpadu Warga
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "#F5F2EB", fontFamily: '"Cinzel", serif' }}
          >
            Layanan & Administrasi Desa
          </Typography>
          <Typography variant="body1" sx={{ color: "#8A8275", mt: 1 }}>
            Petunjuk persyaratan resmi pengurusan berkas, tanah ulayat, dan
            rekomendasi warga.
          </Typography>
        </Box>

        {/* Tab Navigasi Layanan */}
        <Tabs
          value={activeTab}
          onChange={(e, val) => setActiveTab(val)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 4,
            borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
            "& .MuiTabs-indicator": { backgroundColor: "#D4AF37", height: 3 },
            "& .MuiTab-root": {
              color: "#8A8275",
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 600,
              fontSize: "0.9rem",
              "&.Mui-selected": { color: "#D4AF37" },
            },
          }}
        >
          {layananDetail.map((item, idx) => (
            <Tab key={item.id} label={item.label} />
          ))}
        </Tabs>

        {/* Detail Panel Layanan Terpilih */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: "#171512",
            border: "1px solid rgba(212, 175, 55, 0.25)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 2,
              mb: 3,
            }}
          >
            <Box>
              <Chip
                label={selectedService.kategori}
                size="small"
                sx={{
                  backgroundColor: "rgba(212, 175, 55, 0.1)",
                  color: "#D4AF37",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  mb: 1.5,
                  fontWeight: 600,
                  fontSize: "0.75rem",
                }}
              />
              <Typography
                variant="h4"
                sx={{ color: "#F5F2EB", fontFamily: '"Cinzel", serif' }}
              >
                {selectedService.label}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<AssignmentIcon />}
              sx={{
                borderColor: "#D4AF37",
                color: "#D4AF37",
                fontSize: "0.8rem",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#EEDC82",
                  backgroundColor: "rgba(212, 175, 55, 0.08)",
                },
              }}
            >
              Unduh Formulir Terkait
            </Button>
          </Box>

          <Typography
            variant="body1"
            sx={{ color: "#D0C9BD", lineHeight: 1.8, mb: 4, maxWidth: 800 }}
          >
            {selectedService.ringkasan}
          </Typography>

          <Box sx={{ pt: 3, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#F5F2EB",
                letterSpacing: "0.05em",
                mb: 2,
                fontWeight: 700,
              }}
            >
              DOKUMEN PERSYARATAN WAJIB:
            </Typography>
            <List disablePadding>
              {selectedService.syarat.map((syarat, sIdx) => (
                <ListItem key={sIdx} disableGutters sx={{ py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon
                      sx={{ color: "#D4AF37", fontSize: "1.2rem" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={syarat}
                    primaryTypographyProps={{
                      sx: { color: "#A8A092", fontSize: "0.9rem" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
