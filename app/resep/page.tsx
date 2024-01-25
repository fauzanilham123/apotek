import apotek from "../../public/apoteker.png";
import Image from "next/image";
import Link from "next/link";

export default function resep() {
	return (
		<div className="container md:flex bg-white">
			<div className="h-full w-full bg-black md:w-72 md:h-screen flex justify-center  md:block">
				<h1 className="text-white text-center p-2 md:pt-10 w-64 ml-16 md:ml-0">
					APOTEKER
				</h1>
				<div className="hidden md:w-36 md:flex md:mx-auto mt-5">
					<Image src={apotek} alt="apotek" />
				</div>
				<div className="text-white text-center mt-5 hidden md:block">
					<h1>
						KELOLA <br />
						RESEP
					</h1>
				</div>
				<Link href="#">
					<div className="text-white w-[70px] p-1 bg-lime-600 md:mx-auto rounded-md border-2 border-solid border-white active:bg-lime-700 md:mt-52">
						<h1>Log out</h1>
					</div>
				</Link>
			</div>

			<div className="mx-auto">
				<div className="mt-2 mb-3">
					<h1 className="font-bold text-center">Kelola Resep</h1>
				</div>
				<div className="md:ml-[700px] mb-1 mt-3 md:mt-0">
					<label htmlFor="cari">
						<h1 className="inline mr-2">Cari</h1>
						<input
							type="text"
							className="focus:outline-none border-solid border-b-2 border-slate-400"
							id="cari"
						/>
					</label>
				</div>
				<div className="relative flex flex-col md:w-[930px] h-[588px] overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
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
										No_resep
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										Tanggal
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										Nama Dokter
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										Nama_obat_dibeli
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										Nama Pasien
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										Quantity
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
										aksi
									</p>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="p-4 border-b border-blue-gray-50">
									<p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
										Id
									</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
										No_resep
									</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
										23/04/18
									</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<p>tes</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<p>tes</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<p>tes</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<p>tes</p>
								</td>
								<td className="p-4 border-b border-blue-gray-50">
									<Link
										href="#"
										className="block font-sans text-sm antialiased font-medium leading-normal text-blue-900"
									>
										Edit
									</Link>
									<Link
										href="#"
										className="block font-sans text-sm antialiased font-medium leading-normal text-red-900"
									>
										Hapus
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
