import { Icons } from '~/components/icons';

export const siteConfig = {
  name: "Educom Guidance",
  year: 2023,
  poweredBy: {
    name: "Bajaj Technologies",
    link: "/",
  },
  contact: {
    email: "educomguidance@gmail.com",
    primaryNumber: "+91-8188808878",
    secondaryNumber: "+91-8103158082",
    address:
      "5th Floor, Dhananjay Plaza, near Chellaram Diabetes Hospital, Bavdhan, Pune, Maharashtra 411021",
  },
  links: [
    {
      to: "https://www.facebook.com/EducomGuidance",
      title: "Facebook",
      Icon: Icons.Facebook,
    },
    {
      to: "https://www.instagram.com/educom_guidance/",
      title: "Instagram",
      Icon: Icons.Instagram,
    },
  ],
  style: {
    primaryColor: "#00ADE6",
  },
  FORM_URL:
    "https://script.google.com/macros/s/AKfycbxoEfrEOEUzT25LdBmuo-O02v-9I0LfByfKYx8PQLJh_mCxmStX_VMPWyd74WrQJ4W9/exec",
};
export type SiteConfig = typeof siteConfig;
