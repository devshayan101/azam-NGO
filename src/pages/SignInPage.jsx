import { SignIn } from "@clerk/clerk-react";
import  "./SignInPage.scss"
const SignInPage = () => (
  <div className="signInBox-wraper">
    <center>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </center>
  </div>
);
 
export default SignInPage;