import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../conifg";

export function useContent(selectedType = "all") {
    const [contents, setContents] = useState([]);

    function refresh() {
        const query = selectedType && selectedType !== "all" ? `?type=${selectedType}` : "";
        axios.get(`${BACKEND_URL}/api/v1/content${query}`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response) => { setContents(response.data.content) })
    }

    useEffect(() => {
        refresh()
        let interval = setInterval(() => {
            refresh()
        }, 10 * 1000)

        return () => {
            clearInterval(interval);
        }
    }, [selectedType])

    return { contents, refresh }
}