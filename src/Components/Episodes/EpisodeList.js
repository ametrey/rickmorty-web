
import Paginator from "../Paginator/Paginator";
import EpisodeCard from "./EpisodeCard";


export default function EpisodeList ({props, setPage, page,info}) {
    return(
        <div>
        <div className="container">
            {props?.map((object, key) => (
                
                <EpisodeCard props={object} key={key}>
                    {" "}
                </EpisodeCard>
                
            ))}
        </div>
        <Paginator setPage={setPage} page={page} maxpages={info} />
    </div>
    )
}