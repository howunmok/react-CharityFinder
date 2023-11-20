import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
// import { Link } from "react-router-dom"
import axios from "axios"
import SearchResultCard from "../components/SearchResultCard"
import { Typography } from "@mui/joy"

interface Data {
  name: string
  coverImageUrl: string
  location: string
  description: string
}

const SearchResult = () => {
  // const location = useLocation()
  // const props = location.state
  const { causes } = useParams()

  const [lists, setLists] = useState<Data[]>([])

  useEffect(() => {
    async function loadSearchResult() {
      try {
        const response = await axios.get(
          "https://partners.every.org/v0.2/search/" +
            encodeURIComponent(causes ?? "default_value") +
            "?take=30&apiKey=" +
            import.meta.env.VITE_API_KEY
        )
        setLists(response.data.nonprofits)
      } catch (error) {
        console.error(error)
      }
    }
    if (causes) {
      loadSearchResult()
    }
  }, [causes])

  return (
    <div style={{ marginTop: 150 }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: 20, sm: 30 },
          mt: { xs: 23 },
        }}
      >
        Search Result For: {causes}
      </Typography>
      {lists.length > 0 ? (
        <div
          style={{
            border: "border-box",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: 50,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 30,
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          {lists.map((data, id) => (
            <div key={id}>
              <SearchResultCard key={id} data={data} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div>No Items Found</div>
        </div>
      )}
    </div>
  )
}

export default SearchResult
