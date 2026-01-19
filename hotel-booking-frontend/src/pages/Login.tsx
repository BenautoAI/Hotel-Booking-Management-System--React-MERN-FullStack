import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useMutationWithLoading } from "../hooks/useLoadingHooks";
import * as apiClient from "../api-client";
import useAppContext from "../hooks/useAppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";

export type LoginFormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>();

  const mutation = useMutationWithLoading(apiClient.signIn, {
    onSuccess: async () => {
      showToast({
        title: "Login Successful",
        description: "Welcome back! You have been successfully logged in.",
        type: "SUCCESS",
      });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      showToast({
        title: "Login Failed",
        description: error.message,
        type: "ERROR",
      });
    },
    loadingMessage: "Logging you in...",
  });

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    // Map username to email for API compatibility
    mutation.mutate({ email: data.username, password: data.password } as any, {
      onSettled: () => setIsLoading(false),
    });
  });

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      <div className="max-w-md w-full">
        {/* Login Card */}
        <Card className="relative overflow-hidden border-0 shadow-2xl bg-white rounded-3xl">
          {/* Header */}
          <CardHeader className="text-center pb-6 pt-10">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Login
            </CardTitle>
          </CardHeader>

          {/* Form */}
          <CardContent className="px-8 pb-10">
            <form className="space-y-5" onSubmit={onSubmit}>
              {/* Username Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-700"
                >
                  Username
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="username"
                    type="text"
                    className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Type your username"
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                </div>
                {errors.username && (
                  <div className="flex items-center mt-1">
                    <Badge
                      variant="outline"
                      className="text-red-500 border-red-200 bg-red-50"
                    >
                      <Sparkles className="w-4 h-4 mr-1" />
                      {errors.username.message}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-12 py-3 w-full border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Type your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute inset-y-0 right-0 pr-3 h-full"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <div className="flex items-center mt-1">
                    <Badge
                      variant="outline"
                      className="text-red-500 border-red-200 bg-red-50"
                    >
                      <Sparkles className="w-4 h-4 mr-1" />
                      {errors.password.message}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-cyan-500 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg uppercase tracking-wide"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Logging in...
                  </div>
                ) : (
                  "LOGIN"
                )}
              </Button>

              {/* Divider with Social Login Text */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500">
                    Or Sign Up Using
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors duration-200 shadow-md"
                  aria-label="Login with Facebook"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center transition-colors duration-200 shadow-md"
                  aria-label="Login with Twitter"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors duration-200 shadow-md"
                  aria-label="Login with Google"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500">
                    Or Sign Up Using
                  </span>
                </div>
              </div>

              <div className="text-center">
                <Link
                  to="/register"
                  className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200 uppercase tracking-wide"
                >
                  SIGN UP
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
