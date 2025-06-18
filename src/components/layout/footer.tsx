import { Copyright } from "lucide-react";

import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-3">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} | Forked with ❤️️ by Prashant | Credits:
          &nbsp;
          <Link
            noCustomization
            externalLink
            href="https://github.com/shahsagarm"
          >
            Sagar Shah
          </Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
