import Item from "../Item";
import Paginator from "../Paginator/Paginator";


export default function ItemList ({props, setPage, page,info}) {
    return(
        <div>
        <div className="container">
            {props?.map((object, key) => (
                <Item character={object} key={key}>
                    {" "}
                </Item>
            ))}
        </div>
        <Paginator setPage={setPage} page={page} maxpages={info} />
    </div>
    )
}