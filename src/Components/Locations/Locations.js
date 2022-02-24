import { useState, useEffect } from "react";
import { getLocations} from "../../services/api";
import ItemList from "../ItemList/ItemList";


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
          <ItemList props={locations} setPage={setPage} page={page} info={info}/>
        );
    }
}