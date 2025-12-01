 
const BookCard = ({ singleList, handleCancel }) => {
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

            <td
            onClick={() => handleCancel(singleList._id)} className="btn btn-sm btn-error mt-1 text-white font-semibold">
                Cancel
            </td>

        </tr>
    );
};

export default BookCard;
