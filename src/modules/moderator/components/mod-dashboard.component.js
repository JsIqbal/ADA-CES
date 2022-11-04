import DashboardItem from "./dashboard-item.component";
import UserTable from "../../platform/view/table.component";

const ModDashboard = (props) => {
    return (
        <>
            <h1 className="text-center">This is Moderator Dashboard</h1>
            <div className="d-flex flex-wrap justify-content-center">
                <br/>
                <DashboardItem title="Page 1" link='/moderator/dashboard/page-1'/>
                <DashboardItem title="Page 2" link='/moderator/dashboard/page-2'/>
                <DashboardItem title="Page 3" link='/moderator/dashboard/page-3'/>
            </div>
            <div>
                <UserTable />
            </div>
        </>
    );
};

export default ModDashboard;