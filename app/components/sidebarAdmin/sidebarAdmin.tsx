import Image from "next/image";
import icon_admin from "../../../public/icon_admin.png";
import Link from "next/link";

export default function SidebarAdmin() {
	return (
		<div className="bg-black flex w-full h-10 text-white mx-auto justify-between items-center md:h-screen md:w-72 md:mx-0 md:block md:text-black">
			<div className="w-10 md:w-36 md:mx-auto pt-10">
				<Image src={icon_admin} alt="" />
			</div>
			<div className="flex md:hidden">
				<ul className="flex space-x-2">
					<Link href="/user">
						<li>Kelola User</li>
					</Link>
					<Link href="/obat">
						<li>Kelola Obat</li>
					</Link>
					<Link href="/laporan">
						<li>Kelola Laporan</li>
					</Link>
				</ul>
			</div>
			<Link href="/user">
				<div className="hidden md:block bg-white h-10 w-[280px] mx-auto rounded-md text-center leading-[40px] cursor-pointer active:bg-slate-400 mt-10">
					Kelola User
				</div>
			</Link>
			<Link href="/obat">
				<div className="hidden md:block bg-white h-10 w-[280px] mx-auto rounded-md text-center leading-[40px] cursor-pointer active:bg-slate-400 mt-5">
					Kelola Obat
				</div>
			</Link>
			<Link href="/laporan">
				<div className="hidden md:block bg-white h-10 w-[280px] mx-auto rounded-md text-center leading-[40px] cursor-pointer active:bg-slate-400 mt-5">
					Kelola Laporan
				</div>
			</Link>
			<Link href="#">
				<div className="hidden md:block bg-white h-10 w-[280px] mx-auto rounded-md text-center leading-[40px] cursor-pointer active:bg-slate-400 mt-5">
					Logout
				</div>
			</Link>
		</div>
	);
}
