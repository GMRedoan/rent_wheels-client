import { use } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../provider/authContext";
import Swal from "sweetalert2";

const ListCard = ({ singleList, handleDelate }) => {
  const { user } = use(AuthContext)
  const handleUpdate = (e) => {
    e.preventDefault()
    const form = e.target
    const carName = form.carName.value
    const carType = form.carType.value
    const rentPricePerDay = form.rentPricePerDay.value
    const location = form.location.value
    const description = form.description.value
    const updatedCar = {
      carName, rentPricePerDay, carType, location, description
    }
    // update data in DB
    fetch(`https://rent-wheels-server-jet.vercel.app/cars/${singleList._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCar)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount === 0) {
          document.getElementById(`modal-${singleList._id}`).close()
          return Swal.fire({
            title: "Nothing is changed",
            icon: "info",
            confirmButtonColor: "#42A5F5",
          })
        }
        document.getElementById(`modal-${singleList._id}`).close()
        Swal.fire({
          title: "Car Updated Successfully!",
          icon: "success",
          confirmButtonColor: "#67AB4F",
        });
      })
  }
  return (
    <tr>
      <td className="md:pl-35 font-semibold text-black">{singleList.carName}</td>

      <td className="text-black">{singleList.carType}</td>

      <td className="font-semibold text-black">
        ৳{singleList.rentPricePerDay}<span className="text-accent">/day</span>
      </td>

      <td>
        {/* status */}
        {
          singleList.status == 'Unavailable' ? <div className='badge badge-warning'>{singleList.status}</div> : <div className='badge badge-success'>{singleList.status}</div>
        }
      </td>

      <td className="flex gap-3">

        {/* Modal section */}

        <button className="btn btn-sm btn-info text-white flex items-center gap-1" onClick={() => document.getElementById(`modal-${singleList._id}`).showModal()}><FaEdit /> Update</button>

        <dialog id={`modal-${singleList._id}`} className="modal modal-bottom sm:modal-middle">
          <div className="mx-4 mb-10 max-w-5xl">

            <div className="max-w-7xl mx-auto">

              {/* form start here */}
              <form onSubmit={handleUpdate} className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Car Name</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      required
                      pattern=".*\S.*"
                      name="carName"
                      defaultValue={singleList.carName}
                      className="input input-bordered w-full" />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Category</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <select
                      required
                      name="carType"
                      defaultValue={singleList.carType}
                      className="select select-bordered w-full">

                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Hatchback</option>
                      <option>Luxury</option>
                      <option>Electric</option>
                    </select>
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Rent Price (per day)</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      required
                      pattern=".*\S.*"
                      name="rentPricePerDay"
                      type="number"
                      defaultValue={singleList.rentPricePerDay}
                      className="input input-bordered w-full"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Location</span>
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      required
                      pattern=".*\S.*"
                      name="location"
                      defaultValue={singleList.location}
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Provider Name</span>
                    </label>
                    <input
                      readOnly
                      name="providerName"
                      defaultValue={user.displayName}
                      className="input input-bordered w-full bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-medium">Provider Email</span>
                    </label>
                    <input
                      readOnly
                      name="email"
                      defaultValue={user.email}
                      className="input input-bordered w-full bg-gray-50" />
                  </div>

                </div>

                <div className="mt-6">
                  <label className="label">
                    <span className="label-text font-medium">Description</span>
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    required
                    pattern=".*\S.*"
                    minLength={20}
                    name="description"
                    defaultValue={singleList.description}
                    className="textarea textarea-bordered w-full min-h-[140px]"
                  />
                </div>

                <div className="flex justify-center items-center gap-3 mt-3">
                  <button type="submit" className="btn btn-primary hover:bg-secondary text-white px-14">
                    Update Car
                  </button>
                  <button
                    type="button"
                    className="px-10 md:px-18 btn bg-red-500 text-white hover:bg-red-700"
                    onClick={() => document.getElementById(`modal-${singleList._id}`).close()}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>

        <button onClick={() => handleDelate(singleList._id)} className="btn btn-sm btn-error text-white flex items-center gap-1">
          <FaTrash /> Delete
        </button>
      </td>
    </tr>
  );
};

export default ListCard;
