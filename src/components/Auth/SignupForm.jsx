
/** @format */

import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa"; // Import Google icon
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/operations/authAPI";
import { auth, provider, signInWithPopup } from "./Firebase"; // Import Firebase auth and provider

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
	const [passwordStrength, setPasswordStrength] = useState("");

	const { firstName, lastName, email, password, confirmPassword } = formData;

	const handleOnChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));

		if (e.target.name === "password") {
			checkPasswordStrength(e.target.value);
		}
	};

	const checkPasswordStrength = (password) => {
		let strength = "Weak";
		if(password.length > 7) {
			const UpperCase = /[A-Z]/.test(password);
			const LowerCase = /[a-z]/.test(password);
			const Numbers = /\d/.test(password);
			const SpecialCharacter  = /[!@#$%^&*(),.?":{}|<>]/.test(password);
			const length = password.length;

			if (length > 7) {
				if (
					UpperCase &&
					LowerCase &&
					Numbers &&
					SpecialCharacter &&
					length >= 10
				) {
					strength = "Strong";
				} else if (
					(UpperCase && LowerCase && Numbers && length >= 7) ||
					(LowerCase && SpecialCharacter && length >= 7)
				) {
					strength = "Medium";
				}
			}
		}

		setPasswordStrength(strength);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error("Passwords Do Not Match");
			return;
		}

		if (passwordStrength === "Weak") {
			toast.error("Password is too weak. Please use a stronger password.");
			return;
		}

		dispatch(
			signUp(firstName, lastName, email, password, confirmPassword, navigate)
		);

		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
				// Handle user data (e.g., save to state or send to backend)
				console.log("Google User signed in: ", user);
				navigate("/"); // Redirect after successful sign-in
			})
			.catch((error) => {
				console.error("Error during Google Sign-In: ", error);
				toast.error("Google Sign-In Failed");
			});
	};

	return (
		<div className="py-2">
			<form
				onSubmit={handleOnSubmit}
				className="flex w-full font-semibold flex-col gap-y-6 text-black border-[2px] border-black p-6 rounded-md">
				<div className="flex gap-x-4">
					<label className="w-full">
						<p className="mb-1 text-[0.95rem] leading-[1.375rem]">
							First Name
						</p>
						<input
							required
							type="text"
							name="firstName"
							value={firstName}
							onChange={handleOnChange}
							placeholder="Enter first name"
							className="form-style w-full p-2 border-[1px] bg-white border-black rounded-md text-black"
						/>
					</label>
					<label className="w-full">
						<p className="mb-1 text-[0.95rem] leading-[1.375rem]">
							Last Name
						</p>
						<input
							required
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleOnChange}
							placeholder="Enter last name"
							className="form-style p-2 border-[1px] border-black bg-white rounded-md w-full text-black"
						/>
					</label>
				</div>
				<label className="w-full">
					<p className="mb-1 text-[0.95rem] leading-[1.375rem]">
						Email Address
					</p>
					<input
						required
						type="text"
						name="email"
						value={email}
						onChange={handleOnChange}
						placeholder="Enter email address"
						className="form-style w-full p-2 border-[1px] bg-white border-black rounded-md text-black"
					/>
				</label>
				<div className="flex gap-x-4">
					<label className="relative w-full">
						<p className="mb-1 text-[0.95rem] leading-[1.375rem] text-richblack-5">
							Create Password
						</p>
						<div className="flex items-center">
							<input
								required
								type={showPassword ? "text" : "password"}
								name="password"
								value={password}
								onChange={handleOnChange}
								placeholder="Enter Password"
								className="form-style w-full !pr-10 p-2 border-[1px] bg-white border-black rounded-md text-black"
							/>
							<span
								onClick={() => setShowPassword((prev) => !prev)}
								className="absolute right-3 top-[35px] z-[10] cursor-pointer">
								{showPassword ? (
									<AiOutlineEyeInvisible fontSize={24} fill="#000000" />
								) : (
									<AiOutlineEye fontSize={24} fill="#000000" />
								)}
							</span>
						</div>

						<p className={`mt-1 ${passwordStrength === "Weak" ? "text-red-600" : passwordStrength === "Medium" ? "text-yellow-500" : "text-green-600"}`}>
							{passwordStrength && `Password Strength: ${passwordStrength}`}
						</p>

					</label>
					<label className="relative w-full">
						<p className="mb-1 text-[0.95rem] leading-[1.375rem] text-richblack-5">
							Confirm Password
						</p>
						<div className="flex items-center">
							<input
								required
								type={showConfirmPassword ? "text" : "password"}
								name="confirmPassword"
								value={confirmPassword}
								onChange={handleOnChange}
								placeholder="Confirm Password"
								className="form-style w-full !pr-10 border-black p-2 border-[1px] bg-white rounded-md text-black"
							/>
							<span
								onClick={() => setShowConfirmPassword((prev) => !prev)}
								className="absolute right-3 top-[35px] z-[10] cursor-pointer text-black">
								{showConfirmPassword ? (
									<AiOutlineEyeInvisible fontSize={24} fill="#000000" />
								) : (
									<AiOutlineEye fontSize={24} fill="#000000" />
								)}
							</span>
						</div>
					</label>
				</div>
				<button
					type="submit"
					className="mt-6 font-semibold py-[8px] px-[12px] text-white p-2 border-[1px] rounded-md bg-red-600 hover:bg-red-700 border-red-800">
					Create Account
				</button>
				{/* Google Sign-In Button */}
				<button
					type="button"
					onClick={handleGoogleSignIn}
					className="mt-4 font-semibold py-[8px] px-[12px] text-white p-2 border-[1px] rounded-md bg-blue-600 hover:bg-blue-700 border-blue-800 flex items-center justify-center">
					<FaGoogle className="mr-2" /> {/* Add Google icon here */}
					Sign in with Google
				</button>
				<div className="flex gap-2 flex-col mt-2">
					<div className="flex gap-2 justify-center items-center">
						<span className="h-[1px] bg-black w-[70%]"></span>
						<span>OR</span>
						<span className="h-[1px] bg-black w-[70%]"></span>
					</div>
					<div className="flex flex-row gap-2 justify-center items-center">
						<div className="font-normal text-black select-none">
							Have an account?
						</div>
						<button
							className="text-blue-700 hover:text-blue-950 font-semibold cursor-pointer"
							onClick={() => navigate("/login")}>
							Sign in
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignupForm;
