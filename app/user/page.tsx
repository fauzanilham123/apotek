import SidebarAdmin from "../components/sidebarAdmin/page";
import Link from "next/link";

export default function user() {
	return (
		<div className="md:flex bg-white">
			<div>
				<SidebarAdmin />
			</div>
			<div className="w-full">
				<div className="mt-2 mb-3">
					<h1 className="font-bold text-center">Kelola User</h1>
				</div>
				<div>
					<form action="">
						<div className="md:flex justify-center items-start">
							<div className="mr-5">
								<div className="border-solid border-b-2 border-slate-400">
									<label htmlFor="kode">
										<h1 className="font-semibold">Role</h1>
										<input
											type="text"
											id="kode"
											className="w-72 focus:outline-none"
											placeholder="masukkan role"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="nama">
										<h1 className="font-semibold">Nama</h1>
										<input
											type="text"
											id="nama"
											className="w-72 focus:outline-none"
											placeholder="masukkan nama"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="expired_date">
										<h1 className="font-semibold">Email</h1>
										<input
											type="email"
											id="expired_date"
											className="w-72 focus:outline-none"
											placeholder="masukkan email"
										/>
									</label>
								</div>
							</div>
							<div className="h-52 bg-green-500 w-2 hidden md:block" />
							<div className="ml-5">
								<div className="border-solid border-b-2 border-slate-400">
									<label htmlFor="jumlah">
										<h1 className="font-semibold">Username</h1>
										<input
											type="text"
											id="jumlah"
											className="w-72 focus:outline-none"
											placeholder="masukkan username"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="harga">
										<h1 className="font-semibold">Password</h1>
										<input
											type="text"
											id="harga"
											className="w-72 focus:outline-none"
											placeholder="masukkan password"
										/>
									</label>
								</div>
							</div>
						</div>
						<div className="mt-2 md:ml-[184px]">
							<input
								type="button"
								value="Tambah"
								className="bg-slate-300 p-1 border active:bg-slate-500 cursor-pointer rounded-md"
							/>
						</div>
					</form>
					<div className="ml-[700px] mb-1">
						<h1 className="inline mr-2">Cari</h1>
						<input
							type="text"
							className="focus:outline-none border-solid border-b-2 border-slate-400"
						/>
					</div>
				</div>
				<div className="relative flex flex-col md:w-[900px] h-72 overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border left-[58px] ">
					<table className="w-full text-left table-auto min-w-max">
						<thead>
							<tr>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										Id
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										Role
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										Nama
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										Username
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										Email
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
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
