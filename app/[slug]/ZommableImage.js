"use client";

import {useState} from "react";
import Image from "next/image";
import style from "@css/project.module.css";

const ZommableImage = ({width, height, src, alt}) => {
	const [imageZoomed, setImageZoomed] = useState(false);

	return (
		<>
			<Image
				className="w-full wrapper mt-8 mb-8 cursor-zoom-in"
				onClick={() => setImageZoomed(true)}
				width={width}
				height={height}
				src={src}
				alt={alt}
			/>
			<div
				className={`${
					style.imageBackground
				} fixed top-0 left-0 w-full h-screen cursor-zoom-out z-50 duration-200 ${
					imageZoomed ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setImageZoomed(false)}>
				<Image
					width={width}
					height={height}
					src={src}
					alt={alt}
					className="fixed-center duration-300 w-[90vw] h-[90svh] object-contain object-center-center"
				/>
			</div>
		</>
	);
};

export default ZommableImage;
