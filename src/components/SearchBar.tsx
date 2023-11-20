// import { Search } from "@mui/icons-material"
import { SyntheticEvent } from "react"
import FormControl from "@mui/joy/FormControl"

import Stack from "@mui/joy/Stack"
import Autocomplete from "@mui/joy/Autocomplete"
import causes from "../utils/causes.json"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
  const causeList = causes.causes

  const navigate = useNavigate()

  const handleSelect = (
    _: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    if (value !== null) {
      navigate("/search/" + encodeURIComponent(value))
    }
  }

  return (
    <div>
      <Stack spacing={2} sx={{ width: { xs: 150, sm: 300 } }}>
        <FormControl id="free-solo-demo">
          <Autocomplete
            placeholder="Type of Charity"
            options={causeList.map((causes) => causes)}
            onChange={handleSelect}
          />
        </FormControl>
      </Stack>
    </div>
  )
}

export default SearchBar
