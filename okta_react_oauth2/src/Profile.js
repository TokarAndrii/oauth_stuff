import { withAuth } from "@okta/okta-react";
import React from "react";

const Profile = () => <div>Profile</div>;

export default withAuth(Profile);
