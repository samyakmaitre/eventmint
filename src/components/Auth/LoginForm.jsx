/** @format */

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../../services/operations/authAPI";

function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false);

	const { email, password } = formData;

	const handleOnChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		dispatch(login(email, password, navigate));
	};

	return (
		<div className="">
			<form
				onSubmit={handleOnSubmit}
				className="flex w-full font-semibold flex-col gap-y-6 text-white border-[2px] border-black p-6 rounded-md">
				<label className="w-full">
					<p className="mb-1 text-[0.875rem] leading-[1.375rem] font-semibold text-richblack-5">
						Email Address <sup className="text-pink-200 font-semibold">*</sup>
					</p>
					<input
						required
						type="text"
						name="email"
						value={email}
						onChange={handleOnChange}
						placeholder="Enter email address"
						className="form-style  w-full font-semibold p-2 border-[1px] bg-slate-200 rounded-md  text-black"
					/>
				</label>
				<label className="relative">
					<p className="mb-1 text-[0.875rem] leading-[1.375rem] font-semibold text-richblack-5">
						Password <sup className="text-pink-200 font-semibold ">*</sup>
					</p>
					<input
						required
						type={showPassword ? "text" : "password"}
						name="password"
						value={password}
						onChange={handleOnChange}
						placeholder="Enter Password"
						className="form-style w-full font-semibold !pr-10 p-2 border-[1px] bg-slate-200 rounded-md  text-black"
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
				<button
					type="submit"
					className="mt-6 font-semibold py-[8px] px-[12px]   p-2 border-[1px] bg-yellow-400 hover:bg-yellow-500 rounded-md  text-black">
					Sign In
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
