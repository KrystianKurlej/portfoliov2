import {CloseIcon} from "@ui/Icons";

const Modal = ({children, hideModal, isModalShowing}) => {
	return (
		<div
			className={`modal-overlay fixed top-0 left-0 z-40 w-full h-full duration-300 ${
				isModalShowing ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
			onClick={hideModal}>
			<div
				className={`modal w-full md:w-auto fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50 p-5 md:rounded-xl shadow-2xl duration-500 ${
					isModalShowing ? "" : "mt-5"
				}`}>
				{children}
				<button className="absolute -top-6 right-0 md:-right-6 opacity-50">
					<CloseIcon width={24} height={24} />
				</button>
			</div>
		</div>
	);
};

export default Modal;
