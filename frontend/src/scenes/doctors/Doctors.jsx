import {
  Bookmark,
  FireTruck,
  LanguageOutlined,
  People,
  Person,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Doctors = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-4 ml-4 flex flex-row items-center justify-evenly">
        <div className="flex flex-row w-56 border-solid border-2 border-red-500 items-center justify-center card p-3 mt-8 h-36 shadow-md rounded-md">
          <div className="mr-2">
            <People sx={{ color: "#ef4444", fontSize: 40 }} />
          </div>
          <button
            className="text-xl font-semibold"
            onClick={() => {
              navigate("/doctors-list");
            }}
          >
            Doctors
          </button>
        </div>
        <div className="flex flex-row w-56 border-solid border-2 border-green-500 items-center justify-center card p-3 mt-8 h-36 shadow-md rounded-md">
          <div className="mr-2">
            <Person sx={{ color: "#14b8a6", fontSize: 40 }} />
          </div>
          <h4 className="text-xl font-semibold">Vaccination</h4>
        </div>
        <div className="flex flex-row w-56 border-solid border-2 border-purple-500 items-center justify-center card p-3 mt-8 h-36 shadow-md rounded-md">
          <div className="mr-2">
            <LanguageOutlined sx={{ color: "#a855f7", fontSize: 40 }} />
          </div>
          <h4 className="text-xl font-semibold">Tests</h4>
        </div>
        <div className="flex flex-row w-56 border-solid border-2 border-blue-500 items-center justify-center card p-3 mt-8 h-36 shadow-md rounded-md">
          <div className="mr-2">
            <Bookmark sx={{ color: "#3b82f6", fontSize: 40 }} />
          </div>
          <h4 className="text-xl font-semibold">Medicine</h4>
        </div>
        <div className="flex flex-row w-56 border-solid border-2 border-amber-500 items-center justify-center card p-3 mt-8 h-36 shadow-md rounded-md">
          <div className="mr-2">
            <FireTruck sx={{ color: "#f59e0b", fontSize: 40 }} />
          </div>
          <h4 className="text-xl font-semibold">Trainer</h4>
        </div>
      </div>
    </div>
  );
};
export default Doctors;
