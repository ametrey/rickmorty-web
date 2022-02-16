import { Button } from "react-bootstrap";

import "./Paginator.css";

export default function Paginator({ setPage, page, maxpages }) {
  return (
    <div className="paginator">
      <Button
        className="button-page"
        onClick={() => {
          if (page === 1) {
            setPage(1);
          } else {
            setPage(page - 1);
          }
        }}
      >
        {"<"}
      </Button>
      <Button
        className="button-page"
        onClick={() => {
          if (page === maxpages) {
            setPage(maxpages);
          } else {
            setPage(page + 1);
          }
        }}
      >
        {">"}
      </Button>
    </div>
  );
}
