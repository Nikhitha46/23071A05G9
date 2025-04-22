import { SignIn } from "@clerk/clerk-react";

const Login = () => (
  <div className="flex justify-center mt-10">
    <SignIn routing="path" path="/sign-in" />
  </div>
);

export default Login;
