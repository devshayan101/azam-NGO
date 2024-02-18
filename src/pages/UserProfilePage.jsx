import { UserProfile } from "@clerk/clerk-react";
import { CustomProfilePage, CustomTerms } from "../components";
import { CustomIcon } from "../icons";
 
const UserProfilePage = () => (
  <UserProfile path="/user-profile" routing="path">

    <UserProfile.Page label="Custom Page" labelIcon={<CustomIcon />} url="custom-page">
        <CustomProfilePage />
    </UserProfile.Page>
    <UserProfile.Page label="Terms" labelIcon={<CustomIcon />} url="terms">
        <CustomTerms />
    </UserProfile.Page>

  </UserProfile>
);


export default UserProfilePage;