// import React from "react"
import styles from "./NotFound.module.css"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <img
        src="../src/assets/404.jpg"
        alt="404 error"
        style={{
          width: "80%",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className={styles.notFound}
      />
      <Link to="/">
        <img
          src="../src/assets/cflogocolored.jpeg"
          alt="CF logo"
          style={{
            width: "20%",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </Link>
    </div>
  )
}

export default NotFound
