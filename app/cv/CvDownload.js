"use client";

import {useState} from "react";
import dictionary from "@data/dictionary.json";
import Button from "@ui/Button";
import Modal from "@ui/Modal";
import Link from "next/link";

const CvDownload = () => {
	const [showModal, setShowModal] = useState(false);
	const handleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<Button
				className="w-full md:w-64 max-w-full mx-auto mt-16 md:mt-20"
				onClick={handleModal}>
				{dictionary.cv.download}
			</Button>
			<Modal isModalShowing={showModal} hideModal={handleModal}>
				<h5 className="text-center text-baseLarge mb-6">
					Wybierz wersję językową
				</h5>
				<div className="relative sm:grid sm:grid-cols-2 sm:gap-10">
					<div className="text-center mb-3 sm:mb-0">
						<Link href="#" title="Krystian_Kurlej_CV_PL.pdf">
							<Button className="w-full">🇵🇱 Pobierz</Button>
						</Link>
					</div>
					<div className="text-center">
						<Link href="#" title="Krystian_Kurlej_CV_EN.pdf">
							<Button className="w-full">🇬🇧 Download</Button>
						</Link>
					</div>
					<span className="hidden separator sm:block absolute h-full w-[1px] bg-black left-[50%] -translate-x-[50%]"></span>
				</div>
			</Modal>
		</>
	);
};

export default CvDownload;
