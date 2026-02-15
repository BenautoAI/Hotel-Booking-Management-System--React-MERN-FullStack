import { Link } from "react-router-dom";
import { ArrowLeft, Mail, AlertCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8">
        {/* Modern Card Container */}
        <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-200 rounded-full opacity-30"></div>

          {/* Header */}
          <CardHeader className="text-center relative z-10 pb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              Forgot Password
            </CardTitle>
            <CardDescription className="text-gray-600">
              Reset your account password
            </CardDescription>
          </CardHeader>

          {/* Content */}
          <CardContent className="space-y-6">
            {/* Coming Soon Notice */}
            <div className="p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    Coming Soon
                  </h3>
                  <p className="text-sm text-yellow-800 mb-4">
                    Password reset functionality is currently under development.
                    The backend endpoints for password recovery are not yet
                    available.
                  </p>
                  <p className="text-sm text-yellow-800">
                    In the meantime, if you've forgotten your password, please
                    contact support for assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Sign In Link */}
            <div className="text-center pt-4">
              <Link to="/sign-in">
                <Button
                  variant="outline"
                  className="w-full py-3 px-4 rounded-md border-2 border-primary-600 text-primary-600 hover:bg-primary-50 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Sign In
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            Need help?{" "}
            <a href="#" className="text-primary-600 hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
