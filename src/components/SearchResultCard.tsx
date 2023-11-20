import React from "react"
import { Link } from "react-router-dom"
import AspectRatio from "@mui/joy/AspectRatio"
import Button from "@mui/joy/Button"
import Card from "@mui/joy/Card"
import CardContent from "@mui/joy/CardContent"
import IconButton from "@mui/joy/IconButton"
import Typography from "@mui/joy/Typography"
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined"

interface SearchResultCardProps {
  data: {
    name: string
    coverImageUrl: string
    location: string
    description: string
  }
}

const SearchResultCard: React.FC<SearchResultCardProps> = ({ data }) => {
  return (
    <Link to={`/charity/${data.name}`} state={data}>
      <Card sx={{ width: 300 }}>
        <div>
          <Typography level="title-lg">{data.name}</Typography>

          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
          >
            <BookmarkAdd />
          </IconButton>
        </div>
        <AspectRatio minHeight="120px" maxHeight="200px">
          {data.coverImageUrl ? (
            <img src={data.coverImageUrl} alt="" />
          ) : (
            <img src="../src/assets/defaultCharity.jpg" alt="" />
          )}
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography fontSize="sm" fontWeight="sm">
              {data.location}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            Explore
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}

export default SearchResultCard
