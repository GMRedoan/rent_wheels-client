import { FaEdit, FaTrash } from "react-icons/fa";

const ListCard = ({ singleList }) => {
  return (
    <tr>
      <td className="md:pl-35 font-semibold">{singleList.carName}</td>

      <td>{singleList.carType}</td>

      <td className="font-semibold">
        ৳{singleList.rentPricePerDay}<span className="text-accent">/day</span>
      </td>

      <td>
        <span
          className={`badge ${
            singleList.status === "available"
              ? "badge-success"
              : "badge-error"
          }`}
        >
          {singleList.status}
        </span>
      </td>

      <td className="flex gap-3">
        <button className="btn btn-sm btn-info text-white flex items-center gap-1">
          <FaEdit /> Update
        </button>
        <button className="btn btn-sm btn-error text-white flex items-center gap-1">
          <FaTrash /> Delete
        </button>
      </td>
    </tr>
  );
};

export default ListCard;
