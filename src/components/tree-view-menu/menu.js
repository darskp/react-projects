export const sideMenu = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    Children: [
      {
        label: "Details",
        to: "/profile/details",
        Children: [
          {
            label: "Location",
            to: "/profile/details/location",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    Children: [
      {
        label: "Account",
        to: "/settings/account",
      },
      {
        label: "Security",
        to: "/settings/security",
        Children: [
          {
            label: "Login",
            to: "/settings/security/login",
          },
          {
            label: "Register",
            to: "/settings/security/register",
          },
        ],
      },
    ],
  },
];
