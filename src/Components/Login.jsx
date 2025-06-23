import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import loginIllustration from "../assets/login1.png";
import sekkaLogo from "../assets/Sekka Logo.png";
import googleLogo from "../assets/google.png";
import { FiSun, FiMoon } from "react-icons/fi";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialEmail, setInitialEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setRememberMe(true);
      setInitialEmail(savedEmail);
    }
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    setLoading(true);
    try {
      const response = await fetch("https://lawngreen-walrus-394451.hostingersite.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(values)
      });

      const data = await response.json();

      if (data.code === "success") {
        localStorage.setItem("authToken", data.data.token);
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", values.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }
        navigate("/");
      } else {
        setErrors({ submit: data.message || "Login failed" });
      }
    } catch (err) {
      setErrors({ submit: "An error occurred. Please try again." });
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-[#F1F0FE] text-gray-800"}`}>
      <div className="flex h-screen">
        <div className="hidden lg:flex w-1/2 h-full">
          <img src={loginIllustration} alt="Login Illustration" className="w-full h-full object-cover" />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col p-8">
          <div className="flex justify-center mb-12">
            <img src={sekkaLogo} alt="Sekka Logo" className="h-28 object-contain" />
          </div>

          <Formik
            initialValues={{ email: initialEmail, password: "" }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className={`w-full max-w-md mx-auto p-8 rounded-lg -mt-9 backdrop-blur-sm ${darkMode ? "bg-opacity-100" : "bg-[#F1F0FE]"}`}>
                <h2 className="text-3xl mb-8 text-left">Login</h2>

                {errors.submit && (
                  <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-center">
                    {errors.submit}
                  </div>
                )}

                {/* Email */}
                <div className="relative mb-4">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={`w-full p-3 pl-10 rounded border ${
                      darkMode ? "bg-[#262832] border-[#262832]" : "bg-white border-gray-300"
                    } ${errors.email && touched.email ? "border-red-500" : ""}`}
                  />
                  <span className="absolute left-3 top-3.5 text-[#7B61FF]">
                    {/* Email Icon */}
                    📧
                  </span>
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Password */}
                <div className="relative mb-4">
                  <Field
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                    className={`w-full p-3 pl-10 rounded border ${
                      darkMode ? "bg-[#262832] border-[#262832]" : "bg-white border-gray-300"
                    } ${errors.password && touched.password ? "border-red-500" : ""}`}
                  />
                  <span className="absolute left-3 top-3.5 text-[#7B61FF]">🔒</span>
                  <span
                    className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 text-[#7B61FF] border-[#7B61FF] rounded"
                    />
                    <label htmlFor="rememberMe" className="text-sm ml-2 text-[#A4A4A4]">
                      Remember me
                    </label>
                  </div>
                  <a href="./forgetpassword" className="text-sm text-[#A4A4A4] hover:text-[#7B61FF] hover:underline">
                    Forgot Your Password?
                  </a>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#7B61FF] hover:bg-[#6e50ff] text-white py-3 px-4 rounded transition duration-200 mb-4 flex justify-center items-center"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-center text-sm">
                  Don't have an account?{" "}
                  <a href="./register" className="text-[#7B61FF] hover:underline font-medium">
                    Register
                  </a>
                </p>

                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-sm text-gray-500">OR</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Google button */}
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10/12 py-3 px-4 rounded-xl border flex items-center justify-center ml-8 space-x-2 ${
                    darkMode
                      ? "bg-[#262832] border-[#262832] hover:bg-gray-600"
                      : "bg-white border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <img src={googleLogo} alt="Google logo" className="h-5 w-5" />
                  <span>Google</span>
                </a>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 p-2 rounded-full bg-[#7B61FF] text-white"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
};

export default Login;
