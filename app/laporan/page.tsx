import SidebarAdmin from "../components/sidebarAdmin/sidebarAdmin";

export default function laporan() {
	return (
		<div className="container bg-white md:flex">
			<div>
				<SidebarAdmin />
			</div>
			<div className="w-full">
				<div className="mt-2 mb-3">
					<h1 className="font-bold text-center">Laporan Penjualan</h1>
					<div className="flex justify-center">
						<p className="mr-2">Dari Tgl</p>
						<input
							type="date"
							className="mr-20 border border-solid border-black rounded-sm"
						/>
						<p className="ml-20">Sampai Tgl</p>
						<input
							type="date"
							className="ml-2 border border-solid border-black rounded-sm"
						/>
					</div>
				</div>
				<div className="relative flex flex-col md:w-[900px] h-screen overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border md:left-[58px] ">
					<table className="w-full text-left table-auto min-w-max">
						<thead>
							<tr>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										No
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										tanggal_transaksi
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										Total_bayar
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
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
