import Image from "next/image";
import Link from "next/link";
import Kasir from "../../public/kasir.png";

export default function kasir() {
	return (
		<div className="container md:flex bg-white">
			<div className="h-full w-full bg-black md:w-72 md:h-[1000px] flex justify-center  md:block">
				<h1 className="text-white text-center p-2 md:pt-10 w-64 ml-16 md:ml-0">
					APOTEKER
				</h1>
				<div className="hidden md:w-52 md:flex md:mx-auto mt-5">
					<Image src={Kasir} alt="apotek" />
				</div>
				<div className="text-white text-center mt-5 hidden md:block">
					<h1>
						KELOLA <br />
						TRANSAKSI
					</h1>
				</div>
				<Link href="#">
					<div className="text-white w-[70px] p-1 bg-lime-600 md:mx-auto rounded-md border-2 border-solid border-white active:bg-lime-700 md:mt-52">
						<h1>Log out</h1>
					</div>
				</Link>
			</div>
			<div className="w-full">
				<div className="mt-2 mb-3">
					<h1 className="font-bold text-center">Form Transaksi</h1>
				</div>
				<div className="ml-3">
					<form action="">
						<div className="md:flex justify-center items-start">
							<div className="md:mr-24 mr-24">
								<div className="border-solid border-b-2 border-slate-400">
									<label htmlFor="kode">
										<h1 className="font-semibold">Type Resep</h1>
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
										<h1 className="font-semibold">No Resep</h1>
										<input
											type="text"
											id="nama"
											className="w-72 focus:outline-none"
											placeholder="masukkan no resep"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="expired_date">
										<h1 className="font-semibold">Tanggal Resep</h1>
										<input
											type="date"
											id="expired_date"
											className="w-72 focus:outline-none"
											placeholder="masukkan no resep"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="name">
										<h1 className="font-semibold">Nama Pasien</h1>
										<input
											type="text"
											id="name"
											className="w-72 focus:outline-none"
											placeholder="masukkan nama pasien"
										/>
									</label>
								</div>
							</div>
							<div className="h-72 bg-green-500 w-2 hidden md:block" />
							<div className="md:ml-24 mr-24 md:mr-0">
								<div className="border-solid border-b-2 border-slate-400">
									<label htmlFor="jumlah">
										<h1 className="font-semibold">Nama Dokter</h1>
										<input
											type="text"
											id="jumlah"
											className="w-72 focus:outline-none"
											placeholder="masukkan nama dokter"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="nama_obat">
										<h1 className="font-semibold">Nama Obat</h1>
										<input
											type="text"
											id="nama_obat"
											className="w-72 focus:outline-none"
											placeholder="masukkan nama obat"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="harga">
										<h1 className="font-semibold">Harga</h1>
										<input
											type="text"
											id="harga"
											className="w-72 focus:outline-none"
											placeholder="masukkan Harga"
										/>
									</label>
								</div>
								<div className="mt-5 border-solid border-b-2 border-slate-400">
									<label htmlFor="quantity">
										<h1 className="font-semibold">Quantity</h1>
										<input
											type="text"
											id="quantity"
											className="w-72 focus:outline-none"
											placeholder="masukkan quantity"
										/>
									</label>
								</div>
							</div>
						</div>
						<div className="mt-2 md:ml-28">
							<input
								type="button"
								value="Tambah"
								className="bg-slate-300 p-1 border active:bg-slate-500 cursor-pointer rounded-md"
							/>
						</div>
					</form>
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
				</div>
				<div className="relative flex flex-col md:w-[900px] h-72 overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border md:left-[58px] ">
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
										Role
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										Nama
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										Username
									</p>
								</th>
								<th className="p-4 border-b border-gray-300 bg-gray-200">
									<p className="block font-sans text-sm antialiased font-normal leading-none text-gray-900 opacity-70">
										Email
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
				<div className="mt-3 ml-28">
					<h1>24000</h1>
					<div className="mt-3 flex">
						<h1 className="rounded-md bg-slate-200 p-1 w-min cursor-pointer">
							Bayar
						</h1>
						<input
							type="text"
							className="ml-3 focus:outline-none border-solid border-b-2 border-slate-400"
						/>
					</div>
					<div className="mt-3 flex">
						<p>Kembali</p>
						<p className="ml-3">7000</p>
					</div>
				</div>
			</div>
		</div>
	);
}
