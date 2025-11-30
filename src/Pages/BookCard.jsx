import { FaEdit, FaTrash } from "react-icons/fa";

const BookCard = ({ singleList }) => {
    return (
        <tr>
            <td className="md:pl-25 font-semibold">{singleList.carName}</td>

            <td>{singleList.carType}</td>

            <td className="font-semibold">
                ৳{singleList.rentPricePerDay}<span className="text-accent">/day</span>
            </td>

            <td>
                <span>
                    {singleList.providerName}
                </span>
            </td>

            <td>
                <span className="text-blue-500">
                    {singleList.providerEmail}
                </span>
            </td>

            <td>
                <span className="pl-8 text-primary font-bold">
                    {singleList.location}
                </span>
            </td>

        </tr>
    );
};

export default BookCard;
