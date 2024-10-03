/** @format */

import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/operations/authAPI";

function SignupForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const { firstName, lastName, email, password, confirmPassword } = formData;

	// Handle input fields, when some value changes
	const handleOnChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle Form Submission
	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error("Passwords Do Not Match");
			return;
		}

		// Send data to backend for create account
		dispatch(
			signUp(firstName, lastName, email, password, confirmPassword, navigate)
		);

		// Reset
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<div>
			{/* Form */}
			<form
				onSubmit={handleOnSubmit}
				className="flex w-full font-semibold flex-col gap-y-6 text-white border-[2px] border-black p-6 rounded-md">
				<div className="flex gap-x-4">
					<label>
						<p className="mb-1 text-[0.875rem] leading-[1.375rem]">
							First Name <sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type="text"
							name="firstName"
							value={firstName}
							onChange={handleOnChange}
							placeholder="Enter first name"
							className="form-style w-full  p-2 border-[1px] bg-slate-200 rounded-md  text-black"
						/>
					</label>
					<label>
						<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
							Last Name <sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleOnChange}
							placeholder="Enter last name"
							className="form-style p-2 border-[1px] bg-slate-200 rounded-md w-full text-black"
						/>
					</label>
				</div>
				<label className="w-full">
					<p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
						Email Address <sup className="text-pink-200">*</sup>
					</p>
					<input
						required
						type="text"
						name="email"
						value={email}
						onChange={handleOnChange}
						placeholder="Enter email address"
						className="form-style w-full  p-2 border-[1px] bg-slate-200 rounded-md  text-black"
					/>
				</label>
				<div className="flex gap-x-4">
					<label className="relative">
						<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
							Create Password <sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type={showPassword ? "text" : "password"}
							name="password"
							value={password}
							onChange={handleOnChange}
							placeholder="Enter Password"
							className="form-style w-full !pr-10  p-2 border-[1px] bg-slate-200 rounded-md  text-black"
						/>
						<span
							onClick={() => setShowPassword((prev) => !prev)}
							className="absolute right-3 top-[26px] z-[10] cursor-pointer">
							{showPassword ? (
								<AiOutlineEyeInvisible
									fontSize={24}
									fill="#AFB2BF"
								/>
							) : (
								<AiOutlineEye
									fontSize={24}
									fill="#AFB2BF"
								/>
							)}
						</span>
					</label>
					<label className="relative">
						<p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
							Confirm Password <sup className="text-pink-200">*</sup>
						</p>
						<input
							required
							type={showConfirmPassword ? "text" : "password"}
							name="confirmPassword"
							value={confirmPassword}
							onChange={handleOnChange}
							placeholder="Confirm Password"
							className="form-style w-full !pr-10  p-2 border-[1px] bg-slate-200 rounded-md  text-black"
						/>
						<span
							onClick={() => setShowConfirmPassword((prev) => !prev)}
							className="absolute right-3 top-[26px] z-[10] cursor-pointer text-black">
							{showConfirmPassword ? (
								<AiOutlineEyeInvisible
									fontSize={24}
									fill="#AFB2BF"
								/>
							) : (
								<AiOutlineEye
									fontSize={24}
									fill="#AFB2BF"
								/>
							)}
						</span>
					</label>
				</div>
				<button
					type="submit"
					className="mt-6 font-semibold py-[8px] px-[12px] text-richblack-900  p-2 border-[1px] bg-yellow-400 hover:bg-yellow-500 rounded-md  text-black">
					Create Account
				</button>
			</form>
		</div>
	);
}

export default SignupForm;
