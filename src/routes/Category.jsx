import { useSelector } from "react-redux";
import { selectFileById } from "@/redux/Slices/jsonSlice";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  addToast,
} from "@heroui/react";
import BackToUp from "@uiw/react-back-to-top";

import { LinkIcon } from "@/icons/LinkIcon";
import { BackIcon } from "@/icons/BackIcon";
import SectionCard from "../components/SectionCard";

export default function Category() {
  const { category_id } = useParams();
  const location = useLocation();
  // Get the json data from the redux store
  const sectionData = useSelector((state) =>
    selectFileById(state, category_id)
  );
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;

  // Scroll to the section if a hash is present in the URL
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the '#' from the hash
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  const copyAndAlert = (link) => {
    window.history.replaceState(null, "", link);

    navigator.clipboard.writeText(link).then(() => {
      addToast({
        title: "Link copied to clipboard!",
        timeout: 2000,
        hideIcon: true,
        color: "success",
        className: "dark text-foreground bg-background",
      });
    });
  };

  const copyCategoryLink = () => {
    const link = `${
      window.location.origin
    }${base}#/${location.pathname.substring(1)}`;
    copyAndAlert(link);
  };

  const copySectionLink = (sectionId) => {
    const link = `${
      window.location.origin
    }${base}#/${location.pathname.substring(1)}#${sectionId}`;
    copyAndAlert(link);
  };

  const returnToHome = () => {
    navigate(`/`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-8 overflow-x-auto">
      <div className="flex flex-col items-start *:w-full lg:full">
        <Button startContent={<BackIcon />} onPress={returnToHome}>
          Return
        </Button>
      </div>
      <div className="lg:w-7/8 *:w-full flex flex-col items-center justify-center">
        <Button
          className="bg-clear text-xl font-bold truncate"
          startContent={<LinkIcon />}
          disableRipple
          onPress={() => copyCategoryLink()}
        >
          <h1 className="text-2xl font-bold">{sectionData?.title}</h1>
        </Button>

        <SectionCard
          sectionData={sectionData}
          copySectionLink={copySectionLink}
        />
      </div>
      <BackToUp>Top</BackToUp>
    </div>
  );
}
