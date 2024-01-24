import React from "react";
import Image from "next/image";
import apotek from "../../public/apotek.png";
import icon from "../../public/icon.png";

export default function login() {
	return (
		<div className="container bg-white md:flex md:mb-auto">
			<div className="h-full w-full bg-black md:w-72 md:h-screen">
				<h1 className="text-white text-center p-2 md:p-10 md:mt-12">
					APOTEK <br /> MEKAR ASIH
					<div className="hidden md:w-32 md:flex md:mx-auto mt-20">
						<Image src={apotek} alt="apotek" />
					</div>
				</h1>
			</div>
			<div className="flex justify-center mb-10 w-auto mx-auto md:h-screen md:mt-12">
				<div>
					<div className="h-80 bg-green-500 w-2 mt-14 mr-5 md:mr-28"></div>
				</div>
				<div className="mt-5 md:w-[500px]">
					<div className="mx-auto w-32 md:w-40">
						<Image src={icon} alt="icon"></Image>
					</div>
					<div className="text-center mt-2 md:w-full font-semibold">
						<p>Silahkan Login Dahulu !</p>
					</div>
					<form action="" method="post">
						<div className="w-72 mx-auto mt-5 md:w-full">
							<label htmlFor="nama">
								<p className="font-semibold mb-2">User Name</p>
								<div className="border-solid border-b-2 border-slate-400 w-full">
									<input
										type="text"
										placeholder="masukkan nama"
										className="focus:outline-none w-full"
										id="nama"
									/>
								</div>
							</label>
						</div>
						<div className="w-72 mx-auto mt-5 md:w-full md:mt-10">
							<label htmlFor="nama">
								<p className="font-semibold mb-2">Password</p>
								<div className="border-solid border-b-2 border-slate-400 ">
									<input
										type="text"
										placeholder="masukkan password"
										className="focus:outline-none w-full"
										id="nama"
									/>
								</div>
							</label>
						</div>
						<div className="mt-6 font-bold">
							<input
								type="button"
								value="Login"
								className="bg-slate-300 p-1 border active:bg-slate-500"
							/>
						</div>
					</form>
				</div>
				<div>
					<div className="h-80 bg-green-500 w-2 mt-14 ml-5 md:ml-28"></div>
				</div>
			</div>
		</div>
	);
}
