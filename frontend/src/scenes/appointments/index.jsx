import avatar from "../../assets/profile.jpeg";
import {useNavigate} from "react-router-dom";

const Appointments = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-4 ml-4 flex flex-row items-center justify-evenly">
        <div className="card w-56 p-2 h-28 bg-neutral text-neutral-content shadow-md rounded-md">
          <div className="card-body items-center text-center">
            <p className="text-lg">Total Appointments</p>
            <div className="card-actions justify-end">
              <p className="text-xl font-semibold mt-2 text-red-500">
                12 Today
              </p>
            </div>
          </div>
        </div>

        <div className="card w-56 p-2 h-28 bg-neutral text-neutral-content shadow-md rounded-md">
          <div className="card-body items-center text-center">
            <p className="text-lg">Online Consult</p>
            <div className="card-actions justify-end">
              <p className="text-xl font-semibold mt-2 text-red-500">
                12 Today
              </p>
            </div>
          </div>
        </div>

        <div className="card w-56 p-2 h-28 bg-neutral text-neutral-content shadow-md rounded-md">
          <div className="card-body items-center text-center">
            <p className="text-lg">Clinic Visit</p>
            <div className="card-actions justify-end">
              <p className="text-xl font-semibold mt-2 text-red-500">
                12 Today
              </p>
            </div>
          </div>
        </div>

        <div className="card w-56 p-2 h-28 bg-neutral text-neutral-content shadow-md rounded-md">
          <div className="card-body items-center text-center">
            <p className="text-lg">Pending </p>
            <div className="card-actions justify-end">
              <p className="text-xl font-semibold mt-2  text-red-500">
                12 Today
              </p>
            </div>
          </div>
        </div>

        <div className="card w-56 p-2 h-28 bg-neutral text-neutral-content shadow-md rounded-md">
          <div className="card-body items-center text-center">
            <p className="text-lg">Cancelled </p>
            <div className="card-actions justify-end">
              <p className="text-xl font-semibold mt-2 text-red-500">
                12 Today
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-row items-center justify-evenly">
          <div className="mt-10">
            <h1 className="text-2xl text-center">Today's Appointments</h1>
            <div className="flex flex-row items-center justify-evenly card p-3 mt-8 h-36 bg-neutral text-neutral-content shadow-md rounded-md">
              <div className="">
                <img
                  className="rounded-full h-14 w-14"
                  src={avatar}
                  alt="Patient Avatar"
                />
              </div>
              <div className="mt-4">
                <div>
                  <button onClick={() => navigate("/doctor-prescription")} className="text-lg font-semibold">Patient Name</button>
                  <p className="mt-2">
                    <span className=" font-semibold">Patient Age: </span>22
                  </p>
                  <p className="">
                    <span className=" font-semibold">Patient Age: </span>22
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl text-center">Upcoming Appointments</h1>
            <div className="flex flex-row items-center justify-evenly card p-3 mt-8 h-36 bg-neutral text-neutral-content shadow-md rounded-md">
              <div className="">
                <img
                  className="rounded-full h-14 w-14"
                  src={avatar}
                  alt="Patient Avatar"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Patient Name</h4>
                <p className="mt-2">
                  <span className=" font-semibold">Patient Age: </span>22
                </p>
                <p className="">
                  <span className=" font-semibold">Patient Age: </span>22
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Appointments;
