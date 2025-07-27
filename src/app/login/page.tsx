import {
  Box,
  Button,
  Card,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import PasswordInput from "./passwordInput";
import EmailInput from "./emailInput";
import Logo from "../assets/logo";

export default function Login() {
  return (
    <div className="relative bg-[#5D5FEF] h-screen overflow-hidden grid place-content-center">
      <div className="absolute bg-[linear-gradient(-130.99deg,rgba(255,255,255,0.4)_-16.86%,rgba(255,255,255,0)_44.99%)] w-[2512.28564453125px] h-[1533.718017578125px] bottom-0 left-0 rounded-full -translate-x-450 translate-y-325 2xl:-translate-x-400 2xl:translate-y-300 z-0"></div>
      <div className="absolute bg-[linear-gradient(100deg,rgba(255,255,255,0.4)_-16.86%,rgba(255,255,255,0)_44.99%)] w-[2512.28564453125px] h-[1533.718017578125px] bottom-0 left-0 rounded-full translate-x-60 -translate-y-90 2xl:translate-x-100 2xl:-translate-y-125 z-0"></div>
      <Container
        maxWidth="xs"
        sx={{ backgroundColor: "white", borderRadius: 4, py: 4 }}
        className="z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <Logo className="size-16" />
          <Typography
            component="h1"
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              mb: 6,
            }}
          >
            Stockflow
          </Typography>
        </div>
        <Box component="form">
          <EmailInput />
          <PasswordInput />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#6358DC",
            }}
            fullWidth
          >
            Login
          </Button>
          <Typography
            component="p"
            variant="body2"
            sx={{ textAlign: "center", mt: 1 }}
          >
            Belum punya akun?
            <Button
              href="#"
              sx={{
                textTransform: "none",
                color: "#6358DC",
              }}
            >
              Daftar Toko Baru
            </Button>
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
