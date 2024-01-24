import Image from "next/image";
import icon_admin from "../../../public/icon_admin.png";
import Link from "next/link";

export default function SidebarAdmin() {
	return (
		<div className="bg-black flex w-full h-10 text-white mx-auto justify-between items-center md:h-screen md:w-72 md:mx-0 md:block md:text-black">
			<div className="w-10 md:w-36 md:mx-auto">
				<Image src={icon_admin} alt=""></Image>
			</div>
			<div className="flex md:hidden">
				<ul className="flex space-x-2">
					<li>
						<Link href="#">Kelola User</Link>
					</li>
					<li>
						<Link href="#">Kelola Obat</Link>
					</li>
					<li>
						<Link href="#">Kelola Laporan</Link>
					</li>
				</ul>
			</div>
			<div className="hidden md:block bg-white h-10 w-[280px] mx-auto rounded-md text-center leading-[40px] cursor-pointer active:bg-slate-400 mt-10">
				<Link href="#">Kelola User</Link>
			</div>
			<div className="hidden md:block bg-white h-10 w-[280px] mx-auto rounded-md text-center leading-[40px] cursor-pointer active:bg-slate-400 mt-5">
				<Link href="#">Kelola Obat</Link>
			</div>
			<div className="hidden md:block bg-white h-10 w-[280px] mx-auto rounded-md text-center leading-[40px] cursor-pointer active:bg-slate-400 mt-5">
				<Link href="#">Kelola Laporan</Link>
			</div>
			<div className="hidden md:block bg-white h-10 w-[280px] mx-auto rounded-md text-center leading-[40px] cursor-pointer active:bg-slate-400 mt-5">
				<Link href="#">Logout</Link>
			</div>
		</div>
	);
}
