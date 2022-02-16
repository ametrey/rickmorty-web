import { useState, useEffect } from "react";
import { getCharacters } from "../../services/api";
import Item from "../Item/Item";

export default function Characters() {

    const [characters, setCharacters] = useState(null);
    const [info, setInfo] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        CallAPI();

    }, [page]);

    async function CallAPI() {
        const res = await getCharacters(page);
        setCharacters(res.results);
        setInfo(res.info.pages);
    }

    if (characters == null) {
        return <div>No hay nada</div>;
    } else {
        return (
          <Item props={characters} setPage={setPage} page={page} info={info}/>
        );
    }
}

