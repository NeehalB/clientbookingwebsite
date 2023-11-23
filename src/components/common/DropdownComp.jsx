import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function DropdownComp({ destinationData }) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        className="bg-white border-secondary-subtle text-black "
      >
        Where do you want to go ?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {destinationData?.map(({ destination_name, _id }, index) => {
          return (
            <Link
              key={index}
              className="d-block px-3 py-2 text-decoration-none text-black"
              to={`/destination/${_id}`}
            >
              {destination_name}
            </Link>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComp;
