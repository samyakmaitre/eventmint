/** @format */

import { useSelector } from "react-redux";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import LoginImg from "../../assets/images/login.png";
import SignupImg from "../../assets/images/signup.png";
import Header from "../Header";

function Template({ formType }) {
	const { loading } = useSelector((state) => state.auth);

	return (
        <div>
            <Header/>
			<div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-slate-700">
				{loading ? (
					<div className="spinner"></div>
				) : (
					<div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
						<div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
							<h1 className="text-[30px] text-yellow-50 font-semibold leading-[2.375rem] text-richblack-5">
								{formType === "signup"?"Signup Page": "Login Page"}
							</h1>
							<p className="mt-4 text-[1.125rem] leading-[1.625rem] mb-2">
								<span className="font-edu-sa font-bold italic text-blue-100">
									{"Welcome to user in my platform"}
								</span>
							</p>
							{formType === "signup" ? <SignupForm /> : <LoginForm />}
						</div>
						<div className="relative mx-auto w-11/12 mt-[50px] max-w-[450px] md:mx-0">
							<img
								src={formType === "signup" ? SignupImg : LoginImg}
								alt="Pattern"
								width={558}
								height={504}
								loading="lazy"
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Template;
