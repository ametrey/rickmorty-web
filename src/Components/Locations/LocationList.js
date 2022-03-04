
import Paginator from "../Paginator/Paginator";
import LocationCard from "./LocationCard";


export default function LocationList ({props, setPage, page,info}) {
    return(
        <div>
        <div className="container">
            {props?.map((object, key) => (
                
                <LocationCard props={object} key={key}>
                    {" "}
                </LocationCard>
                
            ))}
        </div>
        <Paginator setPage={setPage} page={page} maxpages={info} />
    </div>
    )
}