import SidebarAdmin from "../components/sidebarAdmin/sidebarAdmin";
import Link from "next/link";

export default function Obat() {
	return (
		<div className="md:flex bg-white">
			<div>
				<SidebarAdmin />
			</div>
			<div className="w-full">
				<div className="mt-2 mb-3">
					<h1 className="font-bold text-center">Kelola Obat</h1>
				</div>
				<div className="ml-3">
					<form action="">
						<div className="md:flex justify-center items-start">
							<div className="md:mr-24 mr-24">
								<div className="border-solid border-b-2 border-slate-400">
									<label htmlFor="kode">
										<h1 className="font-semibold">Kode Obat</h1>
										<input
											type="text"
											id="kode"
											className="w-72 focus:outline-none"
											placeholder="masukkan kode obat"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="nama">
										<h1 className="font-semibold">Nama Obat</h1>
										<input
											type="text"
											id="nama"
											className="w-72 focus:outline-none"
											placeholder="masukkan nama obat"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="expired_date">
										<h1 className="font-semibold">Expired date</h1>
										<input
											type="date"
											id="expired_date"
											className="w-72 focus:outline-none"
										/>
									</label>
								</div>
							</div>
							<div className="h-52 bg-green-500 w-2 hidden md:block" />
							<div className="md:ml-24 mr-24 md:mr-0">
								<div className="border-solid border-b-2 border-slate-400">
									<label htmlFor="jumlah">
										<h1 className="font-semibold">Jumlah</h1>
										<input
											type="text"
											id="jumlah"
											className="md:w-72 focus:outline-none"
											placeholder="masukkan jumlah"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="harga">
										<h1 className="font-semibold">Harga Per Unit</h1>
										<input
											type="text"
											id="harga"
											className="w-72 focus:outline-none"
											placeholder="masukkan harga"
										/>
									</label>
								</div>
							</div>
						</div>
						<div className="mt-2 md:ml-24">
							<input
								type="button"
								value="Tambah"
								className="bg-slate-300 p-1 border active:bg-slate-500 cursor-pointer rounded-md"
							/>
						</div>
					</form>
					<div className="md:ml-[700px] mb-1 mt-3 md:mt-0">
						<h1 className="inline mr-2">Cari</h1>
						<input
							type="text"
							className="focus:outline-none border-solid border-b-2 border-slate-400"
						/>
					</div>
				</div>
				<div className="relative flex flex-col md:w-[900px] w-auto h-72 overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border md:left-[58px] ">
					<table className="w-full text-left table-auto min-w-max">
						<thead>
							<tr>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										Id
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										Kode Obat
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										Nama Obat
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										Expired Date
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										Jumlah
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										Aksi
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
								<td className="p-4 border-b border-blue-gray-50">Edit</td>
								<td className="p-4 border-b border-blue-gray-50">
									<p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
										tes@gmail.com
									</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<Link href="#">
										<p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-700">
											Edit
										</p>
									</Link>
									<Link href="#">
										<p className="block font-sans text-sm antialiased font-normal leading-normal text-red-700">
											Hapus
										</p>
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
