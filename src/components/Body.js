import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
	<section className="section-1 bg-black text-white">
		<div className="my-container">
			<div className="content flex gap-4">
				<Sidebar />
				<Outlet />
			</div>
		</div>
	</section>
  );
};

export default Body;
