import Link from "next/link";
import  TableDemo  from "./Table";

const DashboardHome = () => {
  return (
    <div>
      <div className=" text-center">
        All Order List
        <Link href={"/"} className="pl-5">
          {" "}
          Home
        </Link>
      </div>
      <div>
        <TableDemo/>
      </div>
    </div>
  );
};

export default DashboardHome;
