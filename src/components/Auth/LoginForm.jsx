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
				className="flex w-full font-semibold flex-col gap-y-6  border-[2px] border-black p-6 rounded-md">
				<label className="w-full">
					<p className="mb-1 text-[1rem] leading-[1.375rem] font-semibold text-richblack-5">
						Email Address
					</p>
					<input
						required
						type="text"
						name="email"
						value={email}
						onChange={handleOnChange}
						placeholder="Enter email address"
						className="form-style  w-full font-semibold p-2 rounded-md bg-white border-[1px] border-black text-black"
					/>
				</label>
				<label className="relative">
					<p className="mb-1 text-[1rem] leading-[1.375rem] font-semibold text-richblack-5">
						Password
					</p>
					<input
						required
						type={showPassword ? "text" : "password"}
						name="password"
						value={password}
						onChange={handleOnChange}
						placeholder="Enter Password"
						className="form-style w-full font-semibold !pr-10 p-2 border-[1px] bg-white rounded-md border-black  text-black"
					/>
					<span
						onClick={() => setShowPassword((prev) => !prev)}
						className="absolute right-3 top-[26px] z-[10] cursor-pointer">
						{showPassword ? (
							<AiOutlineEyeInvisible
								fontSize={24}
								fill="#000000"
							/>
						) : (
							<AiOutlineEye
								fontSize={24}
								fill="#000000"
							/>
						)}
					</span>
				</label>
				<button
					type="submit"
					className="mt-6 font-semibold py-[8px] px-[12px] p-2 text-white bg-red-600 hover:bg-red-700  rounded-md border-[2px] border-red-800">
					Sign In
				</button>

				<div className="flex gap-2 flex-col mt-2">
					<div className="flex gap-2 justify-center items-center">
						<span className="h-[1px] bg-black w-[70%]"></span>
						<span>OR</span>
						<span className="h-[1px] bg-black w-[70%]"></span>
					</div>
					<div className="flex flex-row gap-2 justify-center items-center">
						<div className=" font-normal select-none">
							Don't have an account?
						</div>
						<button
							className="text-blue-700 hover:text-blue-950 font-semibold cursor-pointer"
							onClick={() => navigate("/signup")}>
							New Account
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
