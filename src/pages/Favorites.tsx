import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CharityCard from "../components/CharityCard"
import { Typography } from "@mui/material"

import styles from "./Favorites.module.css"

interface Data {
  name: string
  logoUrl: string
  location: string
}

const Favorites = () => {
  const [favItems, setFavItems] = useState<Data[]>([])
  const [check, setCheck] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favoriteList") || "[]")
    const cacheData = data ? data : []
    if (!check) {
      setCheck(true)
      setFavItems(cacheData)
    }
  }, [favItems])

  return (
    <div className={styles.container}>
      <div>
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 30 },
            mt: { xs: 23, sm: 18 },
            textAlign: "center",
          }}
        >
          My Favorite List:
        </Typography>
      </div>
      <div>
        {favItems.length > 0 ? (
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
            {favItems.map((data, id) => (
              <div key={id}>
                <CharityCard key={id} data={{ ...data }} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <Typography
              sx={{
                color: "gray",
                fontWeight: 700,
                textAlign: "center",
                fontSize: { xs: 15, sm: 25 },
              }}
            >
              No Favorites!
            </Typography>
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorites
