 
const BookCard = ({ singleList, handleCancel, index }) => {
    return (
        <tr>
            <td className="md:pl-15">{index+1}</td>
            <td className="font-semibold text-base-300">{singleList.carName}</td>

            <td className="text-base-300">{singleList.carType}</td>

            <td className="font-semibold text-base-300">
                ৳{singleList.rentPricePerDay}<span className="text-accent">/day</span>
            </td>

            <td>
                <span className="text-base-300">
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
            onClick={() => handleCancel(singleList._id)} className="mt-4 md:mt-1 btn btn-sm btn-error text-white font-semibold">
                Cancel
            </td>

        </tr>
    );
};

export default BookCard;
