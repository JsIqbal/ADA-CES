import UserTable from "../../platform/view/table.component";
import DashboardItem from "./dashboard-item.component";

const ParentDashboard = (props) => {
    return (
        <>
            <h1 className="text-center">This is Parent Dashboard</h1>
            <div className="d-flex flex-wrap justify-content-center">
                <br/>
                <DashboardItem title="Page 1" link='/parent/dashboard/page-1'/>
                <DashboardItem title="Page 2" link='/parent/dashboard/page-2'/>
                <DashboardItem title="Page 3" link='/parent/dashboard/page-3'/>
            </div>
            <div>
                <UserTable />
            </div>
        </>
    );
};

export default ParentDashboard;