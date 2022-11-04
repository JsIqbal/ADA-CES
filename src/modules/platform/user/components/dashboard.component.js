import UserTable from "../../view/table.component";
import DashboardItem from "./dashboard-item.component";

const Dashboard = (props) => {
    return (
        <>
            <h1 className="text-center">This is Admin Dashboard</h1>
            <div className="d-flex flex-wrap justify-content-center">
                <br/>
                <DashboardItem title="Page 1" link='/admin/dashboard/page-1'/>
                <DashboardItem title="Page 2" link='/admin/dashboard/page-2'/>
                <DashboardItem title="Page 3" link='/admin/dashboard/page-3'/>
            </div>
            <div>
                <UserTable />
            </div>
        </>
    );
};

export default Dashboard;