import React from "react"
import { Link } from "react-router-dom"

// styling extension
import Card from "@mui/joy/Card"
import CardContent from "@mui/joy/CardContent"
import Typography from "@mui/joy/Typography"
import AspectRatio from "@mui/joy/AspectRatio"
import CardOverflow from "@mui/joy/CardOverflow"

interface CharityCardProps {
  data: {
    name: string
    logoUrl: string
    location: string
  }
}

const CharityCard: React.FC<CharityCardProps> = ({ data }) => {
  return (
    <Link to={`/charity/${data.name}`} state={data}>
      <Card
        orientation="horizontal"
        variant="outlined"
        sx={{
          flex: "1 0 calc(33.333% - 20px)",
          height: "auto",
          margin: { xs: "auto", sm: "10px" },
          justifyContent: "center",
          boxSizing: "border-box",
          width: { xs: 300, sm: 400 },
        }}
        style={{
          justifyContent: "center",
        }}
      >
        <CardOverflow>
          <AspectRatio
            ratio="1"
            sx={{
              width: 100,
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            {data.logoUrl ? (
              <img src={data.logoUrl} alt={data.name} />
            ) : (
              <img src="../src/assets/defaultlogo.png" alt="Default Logo" />
            )}
          </AspectRatio>
        </CardOverflow>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography fontWeight="md" textColor="success.plainColor">
            {data.name}
          </Typography>
          <Typography level="body-sm">{data.location}</Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          color="primary"
          sx={{
            px: 0.5,
            writingMode: "vertical-rl",
            textTransform: "uppercase",
            borderLeft: "1px solid",
            borderColor: "divider",
          }}
        ></CardOverflow>
      </Card>
    </Link>
  )
}

export default CharityCard
