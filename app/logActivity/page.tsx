import Link from "next/link";
import SidebarAdmin from "../components/sidebarAdmin/page";

export default function LogActivity() {
	return (
		<div className="md:flex">
			<div>
				<SidebarAdmin />
			</div>
			<div className="mx-auto">
				<div className="mt-2 mb-3">
					<h1 className="font-bold text-center">Log Activity</h1>
				</div>
				<div className="relative flex flex-col md:w-[930px] h-[588px] overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
					<table className="w-full text-left table-auto min-w-max">
						<thead>
							<tr>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										id
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										username
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										waktu
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										aktifitas
									</p>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="p-4 border-b border-blue-gray-50">
									<p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
										John Michael
									</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
										Manager
									</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
										23/04/18
									</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<Link
										href="#"
										className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
									>
										Edit
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			{/* <div className="block">
				<table className="table-auto">
					<thead>
						<tr>
							<th>Song</th>
							<th>Artist</th>
							<th>Year</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
							<td>Malcolm Lockyer</td>
							<td>1961</td>
						</tr>
						<tr>
							<td>Witchy Woman</td>
							<td>The Eagles</td>
							<td>1972</td>
						</tr>
						<tr>
							<td>Shining Star</td>
							<td>Earth, Wind, and Fire</td>
							<td>1975</td>
						</tr>
					</tbody>
				</table>
			</div> */}
		</div>
	);
}
