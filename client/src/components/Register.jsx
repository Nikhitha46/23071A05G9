import { SignUp } from "@clerk/clerk-react";

const Register = () => (
  <div className="flex justify-center mt-10">
    <SignUp routing="path" path="/sign-up" />
  </div>
);

export default Register;
