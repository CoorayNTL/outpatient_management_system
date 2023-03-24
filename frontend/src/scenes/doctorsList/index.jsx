import { Star } from "@mui/icons-material";
import avatar from "../../assets/profile.jpeg";
import {useNavigate} from "react-router-dom";

const DoctorList = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div class="grid grid-cols-3 gap-3">
                <div className="flex flex-col card p-3 ml-4 mt-8 h-52 bg-neutral text-neutral-content shadow-md rounded-md">
                    <div className="flex flex-row items-center justify-between">
                        <img
                            className="rounded-full h-20 w-20"
                            src={avatar}
                            alt="Patient Avatar"
                        />
                        <h1>
                            <p className="flex flex-row items-center">
                                <span className="text-xl">4.2</span>{" "}
                                <Star sx={{ color: "#f59e0b", fontSize: 32 }} />
                            </p>
                        </h1>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Ronald Spectre</h4>

                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <p className="mt-2 font-semibold">Anesthesiology</p>

                                <p className=" font-semibold">MBBS, FCPS, FICS (USA)</p>
                            </div>
                            <div>
                                <p className="mt-2 text-sm font-semibold">Sun - Fri</p>

                                <p className="text-xs font-semibold">10.00 am to 1.00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col card p-3 ml-4 mt-8 h-52 bg-neutral text-neutral-content shadow-md rounded-md">
                    <div className="flex flex-row items-center justify-between">
                        <img
                            className="rounded-full h-20 w-20"
                            src={avatar}
                            alt="Patient Avatar"
                        />
                        <h1>
                            <p className="flex flex-row items-center">
                                <span className="text-xl">4.2</span>{" "}
                                <Star sx={{ color: "#f59e0b", fontSize: 32 }} />
                            </p>
                        </h1>
                    </div>
                    <div className="mt-4">
                        <button onClick={() => {
                            navigate("/doctor-appointment")
                        }} className="text-lg font-semibold">Ronald Spectre</button>

                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <p className="mt-2 font-semibold">Anesthesiology</p>

                                <p className=" font-semibold">MBBS, FCPS, FICS (USA)</p>
                            </div>
                            <div>
                                <p className="mt-2 text-sm font-semibold">Sun - Fri</p>

                                <p className="text-xs font-semibold">10.00 am to 1.00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col card p-3 ml-4 mt-8 h-52 bg-neutral text-neutral-content shadow-md rounded-md">
                    <div className="flex flex-row items-center justify-between">
                        <img
                            className="rounded-full h-20 w-20"
                            src={avatar}
                            alt="Patient Avatar"
                        />
                        <h1>
                            <p className="flex flex-row items-center">
                                <span className="text-xl">4.2</span>{" "}
                                <Star sx={{ color: "#f59e0b", fontSize: 32 }} />
                            </p>
                        </h1>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Ronald Spectre</h4>

                        <div className="flex flex-row items-center justify-between">
                            <div>
                                <p className="mt-2 font-semibold">Anesthesiology</p>

                                <p className=" font-semibold">MBBS, FCPS, FICS (USA)</p>
                            </div>
                            <div>
                                <p className="mt-2 text-sm font-semibold">Sun - Fri</p>

                                <p className="text-xs font-semibold">10.00 am to 1.00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DoctorList;