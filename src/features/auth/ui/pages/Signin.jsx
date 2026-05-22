import { useAuth } from "../../hooks/useAuth";

export const Signin = () => {
  const { register, handleSubmit, errors, onLogInSubmit, navigate } = useAuth();

  return (
    <div className="max-w-sm rounded-xl bg-[#FFFFFF] px-4 py-6 shadow">
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(onLogInSubmit)}
      >
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-semibold">Welcome back</h2>
          <p className="text-sm text-zinc-500">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-sm font-medium">Email</span>
          </div>
          <label htmlFor="email">
            <input
              className="w-full rounded-md border border-zinc-300 px-2 py-1.5 text-sm focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:outline-0"
              type="email"
              id="email"
              placeholder="siddhantmul18@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                  message: "Enter a valid email address",
                },
              })}
            />
          </label>
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Password</span>
            <span className="cursor-pointer border-b border-[#FFFFFF] hover:border-black">
              Forgot your password?
            </span>
          </div>
          <label htmlFor="password">
            <input
              className="w-full rounded-md border border-zinc-300 px-2 py-1.5 text-sm focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:outline-0"
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
          </label>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-zinc-950 p-2 text-sm text-white hover:bg-zinc-950/90"
          >
            Login
          </button>
        </div>

        <div className="grid grid-cols-3 items-center gap-0.5">
          <span className="h-0.5 bg-zinc-100"></span>
          <p className="text-sm text-zinc-500">Or continue with</p>
          <span className="h-0.5 bg-zinc-100"></span>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <button
              type="button"
              className="w-full cursor-pointer rounded-md border border-zinc-300 p-2 text-sm hover:bg-zinc-50"
            >
              Login with Google
            </button>
          </div>
          <div>
            <p className="text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="cursor-pointer border-b border-black hover:text-black"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
