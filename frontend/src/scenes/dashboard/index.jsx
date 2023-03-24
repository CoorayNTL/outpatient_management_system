import {
  Bookmark,
  FireTruck,
  LanguageOutlined,
  People,
  Person,
} from "@mui/icons-material";

const Dashboard = () => {
  return (
    <div>
      <div className="mt-4 ml-4 flex flex-row items-center justify-evenly">
        <div className="flex flex-row w-56 border-solid border-2 border-red-500 items-center justify-center card p-3 mt-8 h-36 shadow-md rounded-md">
          <div className="mr-2">
            <People sx={{ color: "#ef4444", fontSize: 40 }} />
          </div>
          <div>
            <h4 className="text-xl font-semibold">New Users</h4>
            <h4 className="text-xl font-semibold text-red-500">2.24K</h4>
          </div>
        </div>
        <div className="flex flex-row w-56 border-solid border-2 border-green-500 items-center justify-center card p-3 mt-8 h-36 shadow-md rounded-md">
          <div className="mr-2">
            <Person sx={{ color: "#14b8a6", fontSize: 40 }} />
          </div>
          <div>
            <h4 className="text-xl font-semibold">Unique Users</h4>
            <h4 className="text-xl font-semibold text-green-500">2.24K</h4>
          </div>
        </div>
        <div className="flex flex-row w-56 border-solid border-2 border-purple-500 items-center justify-center card p-3 mt-8 h-36 shadow-md rounded-md">
          <div className="mr-2">
            <LanguageOutlined sx={{ color: "#a855f7", fontSize: 40 }} />
          </div>
          <div>
            <h4 className="text-xl font-semibold">Website Users</h4>
            <h4 className="text-xl font-semibold text-purple-500">2.24K</h4>
          </div>
        </div>
        <div className="flex flex-row w-56 border-solid border-2 border-blue-500 items-center justify-center card p-3 mt-8 h-36 shadow-md rounded-md">
          <div className="mr-2">
            <Bookmark sx={{ color: "#3b82f6", fontSize: 40 }} />
          </div>
          <div>
            <h4 className="text-xl font-semibold">Mentions</h4>
            <h4 className="text-xl font-semibold text-blue-500">2.24K</h4>
          </div>
        </div>
        <div className="flex flex-row w-56 border-solid border-2 border-amber-500 items-center justify-center card p-3 mt-8 h-36 shadow-md rounded-md">
          <div className="mr-2">
            <FireTruck sx={{ color: "#f59e0b", fontSize: 40 }} />
          </div>
          <div>
            <h4 className="text-xl font-semibold">Total Sales</h4>
            <h4 className="text-xl font-semibold text-amber-500">2.24K</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
