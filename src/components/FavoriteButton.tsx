import React from "react"
import IconButton from "@mui/material/IconButton"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Button from "@mui/joy/Button"
import Typography from "@mui/joy/Typography"
import { Link } from "react-router-dom"

const FavoriteButton = () => {
  return (
    <Link to="/favorites">
      <Button
        color="danger"
        onClick={function () {}}
        variant="soft"
        sx={{ ml: 5 }}
      >
        <FavoriteBorder />
        <Typography sx={{ ml: 1, fontSize: { xs: 0, sm: 18 } }} color="danger">
          My Favorite List
        </Typography>
      </Button>
    </Link>
  )
}

export default FavoriteButton
