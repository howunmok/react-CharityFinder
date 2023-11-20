import SearchBar from "./components/SearchBar"

import styles from "./Header.module.css"
import { Link } from "react-router-dom"
//mui

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"

import FavoriteButton from "./components/FavoriteButton"

const Header = () => {
  return (
    // <Stack direction="row" alignItems="center">
    //   <p>Ch</p>
    //   <SearchBar />
    // </Stack>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Link to="/">
            {/* <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { sm: "block" } }}
            >
              Charity Finder
            </Typography> */}
            <img src="./public/assets/cflogo.png" alt="CF logo" width={110} />
          </Link>
          <div className={styles.headerTools}>
            <SearchBar />
            <FavoriteButton />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
