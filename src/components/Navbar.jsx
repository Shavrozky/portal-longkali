// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [anchorProfil, setAnchorProfil] = useState(null);
  const [anchorLayanan, setAnchorLayanan] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(13, 12, 10, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Logo Brand Adat */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                border: "1.5px solid #D4AF37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#D4AF37",
                fontFamily: '"Cinzel", serif',
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
            >
              LK
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cinzel", serif',
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#F5F2EB",
                  lineHeight: 1.1,
                }}
              >
                LONG KALI
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#D4AF37",
                  letterSpacing: "0.15em",
                  fontSize: "0.65rem",
                  display: "block",
                }}
              >
                BUMI DAYA TAKA
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav Items */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              color="inherit"
              href="#beranda"
              sx={{ fontSize: "0.85rem" }}
            >
              Beranda
            </Button>

            {/* Dropdown Profil */}
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon sx={{ color: "#D4AF37" }} />}
              onClick={(e) => setAnchorProfil(e.currentTarget)}
              sx={{ fontSize: "0.85rem" }}
            >
              Profil
            </Button>
            <Menu
              anchorEl={anchorProfil}
              open={Boolean(anchorProfil)}
              onClose={() => setAnchorProfil(null)}
              PaperProps={{
                sx: {
                  backgroundColor: "#171512",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  minWidth: 180,
                },
              }}
            >
              <MenuItem
                onClick={() => setAnchorProfil(null)}
                component="a"
                href="#sejarah"
              >
                Sejarah
              </MenuItem>
              <MenuItem
                onClick={() => setAnchorProfil(null)}
                component="a"
                href="#visi-misi"
              >
                Visi dan Misi
              </MenuItem>
              <MenuItem
                onClick={() => setAnchorProfil(null)}
                component="a"
                href="#kepala-daerah"
              >
                Kepala Daerah
              </MenuItem>
              <MenuItem
                onClick={() => setAnchorProfil(null)}
                component="a"
                href="#peta"
              >
                Peta Kota
              </MenuItem>
            </Menu>

            <Button
              color="inherit"
              href="#program-kerja"
              sx={{ fontSize: "0.85rem" }}
            >
              Program Kerja
            </Button>

            {/* Dropdown Layanan */}
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon sx={{ color: "#D4AF37" }} />}
              onClick={(e) => setAnchorLayanan(e.currentTarget)}
              sx={{ fontSize: "0.85rem" }}
            >
              Layanan
            </Button>
            <Menu
              anchorEl={anchorLayanan}
              open={Boolean(anchorLayanan)}
              onClose={() => setAnchorLayanan(null)}
              PaperProps={{
                sx: {
                  backgroundColor: "#171512",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  minWidth: 230,
                },
              }}
            >
              <MenuItem onClick={() => setAnchorLayanan(null)}>
                Administrasi Kependudukan
              </MenuItem>
              <MenuItem onClick={() => setAnchorLayanan(null)}>
                Ketenagakerjaan
              </MenuItem>
              <MenuItem onClick={() => setAnchorLayanan(null)}>
                Perizinan
              </MenuItem>
              <MenuItem onClick={() => setAnchorLayanan(null)}>
                Kesehatan
              </MenuItem>
              <MenuItem onClick={() => setAnchorLayanan(null)}>IMTN</MenuItem>
            </Menu>

            <Button
              color="inherit"
              href="#info-penting"
              sx={{ fontSize: "0.85rem" }}
            >
              Info Penting
            </Button>
          </Box>

          {/* Tombol Mobile */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#D4AF37" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { backgroundColor: "#12100E", width: 260, p: 2 } }}
      >
        <List>
          {[
            "Beranda",
            "Sejarah & Profil",
            "Program Kerja",
            "Layanan Warga",
            "Info Penting",
          ].map((text) => (
            <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={text} sx={{ color: "#F5F2EB" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
