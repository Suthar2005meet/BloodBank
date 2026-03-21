import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const SignUp = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const password = watch('password')

  const submitHandle = async (data) => {
    try {
      const { confirmPassword, ...userData } = data
      console.log(userData)
      const res = await axios.post('/user/add', userData)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  const inputClass = (hasError) =>
    `w-full px-4 py-3 rounded-xl text-white text-sm placeholder-neutral-600 bg-white/5 border transition-all duration-200 focus:outline-none focus:ring-2 ${
      hasError
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
        : 'border-white/10 focus:border-red-600 focus:ring-red-700/30'
    }`

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className="flex items-center gap-3 text-white font-bold text-2xl tracking-widest uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center text-base shadow-lg shadow-red-900/40">
              <i className="fas fa-tint"></i>
            </span>
            BloodLink
          </div>
          <nav>
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              <li>
                <Link to="/" className="text-sm text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-sm text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main
        className="min-h-screen flex items-center justify-center py-20 px-4"
        style={{
          background:
            "radial-gradient(ellipse at 65% 20%, rgba(201,0,0,0.15) 0%, transparent 55%), radial-gradient(ellipse at 15% 80%, rgba(163,0,0,0.1) 0%, transparent 50%), #0a0a0a",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div className="w-full max-w-lg">

          {/* Card */}
          <div
            className="rounded-2xl border border-white/10 p-10 shadow-2xl shadow-black/60"
            style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))" }}
          >
            {/* Title */}
            <div className="text-center mb-8">
              <div
                className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center text-2xl text-red-500"
                style={{
                  background: "linear-gradient(135deg, rgba(201,0,0,0.2), rgba(163,0,0,0.08))",
                  border: "1px solid rgba(201,0,0,0.25)",
                }}
              >
                <i className="fas fa-user-plus"></i>
              </div>
              <h2
                className="text-4xl font-bold text-white tracking-wide mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Create Account
              </h2>
              <p className="text-neutral-500 text-sm">
                Register to join the BloodLink community and save lives.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(submitHandle)} className="space-y-5">

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  User Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className={inputClass(errors.user)}
                  {...register("user", { required: "Name is required" })}
                />
                {errors.user && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <i className="fas fa-circle-exclamation text-[10px]"></i>
                    {errors.user.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass(errors.email)}
                  {...register('email', { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <i className="fas fa-circle-exclamation text-[10px]"></i>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password + Confirm — 2 col on md */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className={inputClass(errors.password)}
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-xs text-red-400 flex items-start gap-1">
                      <i className="fas fa-circle-exclamation text-[10px] mt-0.5"></i>
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className={inputClass(errors.confirmPassword)}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) => value === password || "Passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <i className="fas fa-circle-exclamation text-[10px]"></i>
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

              </div>

              {/* Role + Phone — 2 col on md */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Role */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    Role
                  </label>
                  <select
                    className={`${inputClass(errors.role)} appearance-none`}
                    {...register('role', { required: "Role is required" })}
                  >
                    <option value="" className="bg-neutral-900">-- Select Role --</option>
                    <option value="donar" className="bg-neutral-900">Donor</option>
                    <option value="hospital" className="bg-neutral-900">Hospital</option>
                    <option value="staff" className="bg-neutral-900">Staff</option>
                  </select>
                  {errors.role && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <i className="fas fa-circle-exclamation text-[10px]"></i>
                      {errors.role.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                    Phone No.
                  </label>
                  <input
                    type="text"
                    placeholder="+91 98765 43210"
                    className={inputClass(errors.phone)}
                    {...register('phone', { required: "Phone number is required" })}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <i className="fas fa-circle-exclamation text-[10px]"></i>
                      {errors.phone.message}
                    </p>
                  )}
                </div>

              </div>

              {/* Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="123 Street, City, State"
                  className={inputClass(errors.address)}
                  {...register('address', { required: "Address is required" })}
                />
                {errors.address && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <i className="fas fa-circle-exclamation text-[10px]"></i>
                    {errors.address.message}
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-white/5 pt-2" />

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-br from-red-600 to-red-900 text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-red-800 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <i className="fas fa-user-plus"></i>
                Create Account
              </button>

              {/* Login link */}
              <p className="text-center text-neutral-500 text-sm pt-1">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors duration-200"
                >
                  Login Here
                </Link>
              </p>

            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-red-800 flex items-center justify-center text-xs">
              <i className="fas fa-tint text-white"></i>
            </span>
            <span
              className="text-neutral-500 text-sm font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              BloodLink
            </span>
          </div>
          <p className="text-neutral-600 text-xs text-center">
            &copy; 2025 BloodLink — Centralized Blood Management System.
          </p>
        </div>
      </footer>
    </>
  )
}