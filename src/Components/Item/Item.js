import ItemList from "../ItemList/ItemList";
import Paginator from "../Paginator/Paginator";


export default function Item ({props, setPage, page,info}) {
    return(
        <div>
        <div className="container">
            {props?.map((object, key) => (
                <ItemList character={object} key={key}>
                    {" "}
                </ItemList>
            ))}
        </div>
        <Paginator setPage={setPage} page={page} maxpages={info} />
    </div>
    )
}