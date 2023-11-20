import { useEffect, useState } from "react"
import axios from "axios"
import causes from "../utils/causes.json"
import CharityCard from "../components/CharityCard"
import styles from "./Home.module.css"

interface Data {
  name: string
  logoUrl: string
  location: string
}

const Home = () => {
  const [lists, setLists] = useState<Data[]>([])

  const causeList = causes.causes

  useEffect(() => {
    const randCause = causeList[Math.floor(Math.random() * causeList.length)]
    async function loadCharity() {
      try {
        const response = await axios.get(
          "https://partners.every.org/v0.2/search/" +
            randCause +
            "?take=6&apiKey=" +
            import.meta.env.VITE_API_KEY
        )
        setLists(response.data.nonprofits)
      } catch (error) {
        console.error(error)
        console.log(randCause)
      }
    }
    loadCharity()
  }, [])

  return (
    <div>
      <div className={styles.imgContainer}>
        <img
          src="../src/assets/header.jpg"
          alt=""
          width="100%"
          style={{ marginTop: 80 }}
          className={styles.headerImg}
        />
      </div>
      <div className={styles.marginBlock}></div>
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
              <CharityCard key={id} data={{ ...data }} />
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

export default Home
