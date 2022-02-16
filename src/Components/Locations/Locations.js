import { useState, useEffect } from "react";
import { getLocations} from "../../services/api";
import Item from "../Item/Item";

export default function Locations() {

    const [locations, setLocations] = useState(null);
    const [info, setInfo] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        CallAPI();

    }, [page]);

    async function CallAPI() {
        const res = await getLocations(page);
        setLocations(res.results);
        setInfo(res.info.pages);
    }

    if (locations == null) {
        return <div>No hay nada</div>;
    } else {
        return (
          <Item props={locations} setPage={setPage} page={page} info={info}/>
        );
    }
}