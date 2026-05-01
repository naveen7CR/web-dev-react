import { use, useEffect } from "react";


function Search() {
    const [search, setSearch] = useState("")

    useEffect(() => {
        const getData = () => {
            console.log("Data has been fetched")
            console.log(search)


        }
        const timer = setTimeout(getData, 500)
        return () => {
            clearTimeout(timer)
        }
    }, [search])
}