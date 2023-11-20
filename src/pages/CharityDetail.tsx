import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

import AspectRatio from "@mui/joy/AspectRatio"
import Card from "@mui/joy/Card"
import CardContent from "@mui/joy/CardContent"
import CardOverflow from "@mui/joy/CardOverflow"
import Divider from "@mui/joy/Divider"
import Typography from "@mui/joy/Typography"
import IconButton from "@mui/joy/IconButton"
import Link from "@mui/joy/Link"
import Favorite from "@mui/icons-material/Favorite"
import Avatar from "@mui/joy/Avatar"
import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Add from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"

import styles from "./CharityDetail.module.css"

const CharityDetail = () => {
  const location = useLocation()
  const props = location.state
  const [addBtn, setAddBtn] = useState(true)
  const [msg, setMsg] = useState(false)

  const data = localStorage.getItem("favoriteList")
  const cacheData = data ? JSON.parse(data) : []

  console.log(props)

  useEffect(() => {
    const data = localStorage.getItem("favoriteList")
    const cacheData = data ? JSON.parse(data) : []
    if (cacheData.length > 0) {
      for (let i = 0; i < cacheData.length; i++) {
        if (cacheData[i].ein == props.ein) {
          setAddBtn(false)
          break
        } else {
          setAddBtn(true)
        }
      }
    }
  }, [cacheData])

  const favItem = {
    ein: props.ein,
    id: props.id,
    coverImageUrl: props.coverImageUrl,
    logoUrl: props.logoUrl,
    name: props.name,
    location: props.location,
    description: props.description,
    profileUrl: props.profileUrl,
    tags: props.tags,
    websiteUrl: props.websiteUrl,
  }

  function addFav() {
    setMsg(true)
    setAddBtn(false)
    cacheData.push(favItem)
    localStorage.setItem("favoriteList", JSON.stringify(cacheData))
  }

  function rmFav() {
    const index = cacheData.findIndex(
      (obj: { ein: string }) => obj.ein === props.ein
    )
    cacheData.splice(index, 1)
    localStorage.setItem("favoriteList", JSON.stringify(cacheData))
    setAddBtn(true)
    setMsg(false)
  }

  return (
    <div className={styles.container} style={{ marginTop: 150 }}>
      <div className={styles.description}>
        <Card variant="outlined" sx={{ width: "90%" }}>
          <CardOverflow>
            <AspectRatio ratio="2">
              {props.coverImageUrl ? (
                <img src={props.coverImageUrl} alt="Cover Image" />
              ) : (
                <img
                  src="../public/assets/defaultCharity.jpg"
                  alt="Cover Image"
                />
              )}
            </AspectRatio>
            <IconButton
              aria-label="Like minimal photography"
              size="lg"
              variant="solid"
              color="danger"
              sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "1rem",
                bottom: 0,
                transform: "translateY(90%)",
              }}
              onClick={addFav}
            >
              <Favorite />
            </IconButton>
          </CardOverflow>

          <CardContent style={{ display: "flex", flexDirection: "row" }}>
            {props.logoUrl ? (
              <Avatar src={props.logoUrl} sx={{ "--Avatar-size": "4rem" }} />
            ) : (
              <Avatar
                src="../public/assets/defaultlogo.png"
                sx={{ "--Avatar-size": "4rem" }}
              />
            )}

            <Typography
              sx={{
                typography: {
                  xs: "title-sm",
                  sm: "title-lg",
                },
              }}
            >
              <Link
                href={props.websiteUrl}
                overlay
                underline="none"
                sx={{ ml: { xs: 2, sm: 3 }, mt: 1, mb: "auto" }}
              >
                {props.name}
                <br></br>
                {props.location}
              </Link>
            </Typography>
          </CardContent>
          <CardOverflow variant="soft">
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Typography level="body-lg">{props.description}</Typography>
            </CardContent>
          </CardOverflow>
        </Card>
      </div>

      <div className={styles.btnsAndTags}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          {addBtn ? (
            <Button
              startDecorator={<Add />}
              color="danger"
              onClick={addFav}
              sx={{
                mt: 5,
                fontSize: { xs: 18, sm: 20 },
                height: 80,
              }}
            >
              Add to your favorite list
            </Button>
          ) : (
            <Button
              startDecorator={<RemoveIcon />}
              color="warning"
              onClick={rmFav}
              sx={{
                mt: 5,
                fontSize: { xs: 18, sm: 20 },
                height: 80,
              }}
            >
              Remove from your favorite list
            </Button>
          )}
          <div style={{ height: "30px" }}>
            {msg
              ? msg && (
                  <div
                    style={{
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    <Typography level="title-lg">Added to your list</Typography>
                  </div>
                )
              : " "}
          </div>
          <a href={props.profileUrl} target="_blank">
            <Button
              endDecorator={<KeyboardArrowRight />}
              color="success"
              sx={{
                fontSize: { xs: 18, sm: 20 },
                height: 80,
                width: "100%",
              }}
            >
              Check it in Every.org
            </Button>
          </a>
        </Box>
      </div>
    </div>
  )
}

export default CharityDetail
