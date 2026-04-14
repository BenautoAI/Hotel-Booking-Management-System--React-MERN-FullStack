import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { useMutationWithLoading } from "../hooks/useLoadingHooks";
import * as apiClient from "../api-client";
import useAppContext from "../hooks/useAppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
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
  } = useForm<SignInFormData>();

  const mutation = useMutationWithLoading(apiClient.signIn, {
    onSuccess: async () => {
      showToast({
        title: "Sign In Successful",
        description:
          "Welcome back! You have been successfully signed in to your account.",
        type: "SUCCESS",
      });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      showToast({
        title: "Sign In Failed",
        description: error.message,
        type: "ERROR",
      });
    },
    loadingMessage: "Signing you in...",
  });

  const onSubmit = handleSubmit((data) => {
    setIsLoading(true);
    mutation.mutate(data, {
      onSettled: () => setIsLoading(false),
    });
  });

  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-xl w-full space-y-8">
        {/* Modern Card Container with Dark Theme */}
        <Card className="relative overflow-hidden border border-slate-700 shadow-2xl bg-slate-900/80 backdrop-blur-lg">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-full opacity-30"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full opacity-20"></div>

          {/* Header */}
          <CardHeader className="text-center relative z-10 pb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-2">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-slate-300">
              Sign in to your account
            </CardDescription>

            {/* Development Notice */}
            {!import.meta.env.PROD && (
              <div className="mt-4 p-3 bg-slate-800/50 border border-slate-600 rounded-lg">
                <p className="text-xs text-slate-400">
                  <strong>Dev Note:</strong> Auth persists between sessions. Use the header "Clear Auth" to reset.
                </p>
              </div>
            )}
          </CardHeader>

          {/* Form */}
          <CardContent className="space-y-6">
            <form className="space-y-6" onSubmit={onSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-200"
                >
                  Email Address
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    className="pl-12 pr-4 py-3 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                  />
                </div>
                {errors.email && (
                  <div className="flex items-center mt-1">
                    <Badge
                      variant="outline"
                      className="text-red-400 border-red-500/50 bg-red-950/40"
                    >
                      <Sparkles className="w-4 h-4 mr-1" />
                      {errors.email.message}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-200"
                >
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="pl-12 pr-12 py-3 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70"
                    placeholder="Enter your password"
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
                    className="absolute inset-y-0 right-0 pr-3 h-full text-slate-400 hover:text-slate-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <div className="flex items-center mt-1">
                    <Badge
                      variant="outline"
                      className="text-red-400 border-red-500/50 bg-red-950/40"
                    >
                      <Sparkles className="w-4 h-4 mr-1" />
                      {errors.password.message}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 border border-slate-600 rounded bg-slate-800 checked:bg-blue-600 cursor-pointer"
                  />
                  <label
                    htmlFor="remember"
                    className="text-slate-300 cursor-pointer hover:text-slate-200 transition-colors"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button with Gradient */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-lg text-white font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-300 hover:via-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <LogIn className="w-5 h-5 mr-2" />
                    Sign In
                  </div>
                )}
              </Button>

              {/* Registration Link */}
              <div className="text-center mt-6">
                <p className="text-slate-400 text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-xs text-slate-400">
            By signing in, you agree to our{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
