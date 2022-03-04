import { useState, useEffect } from "react";
import { getEpisodes} from "../../services/api";
import EpisodeList from "./EpisodeList";

export default function Episodes() {

    const [episodes, setEpisodes] = useState(null);
    const [info, setInfo] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        CallAPI();

    }, [page]);

    async function CallAPI() {
        const res = await getEpisodes(page);
        setEpisodes(res.results);
        setInfo(res.info.pages);
    }

    if (episodes == null) {
        return <div>No hay nada</div>;
    } else {
        return (
          <EpisodeList props={episodes} setPage={setPage} page={page} info={info}/>
        );
    }
}