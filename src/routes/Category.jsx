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

    const copySectionLink = (sectionId) => {
        const link = `${
            window.location.origin
        }${base}#/${location.pathname.substring(1)}#${sectionId}`;
        copyAndAlert(link);
    };

    const copyCategoryLink = () => {
        const link = `${
            window.location.origin
        }${base}#/${location.pathname.substring(1)}`;
        copyAndAlert(link);
    };

    const returnToHome = () => {
        navigate(`/`);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-start w-3/4">
                <Button startContent={<BackIcon />} onPress={returnToHome}>
                    Return
                </Button>
            </div>
            <div className="w-3/4 flex flex-col items-center justify-center">
                <Button
                    className="bg-clear text-xl font-bold truncate"
                    startContent={<LinkIcon />}
                    disableRipple
                    onPress={() => copyCategoryLink()}
                >
                    <h1 className="text-2xl font-bold">{sectionData?.title}</h1>
                </Button>

                {sectionData?.sections.map((section, index) => (
                    <Card
                        fullWidth
                        key={index}
                        className="mb-4 mt-4 p-2"
                        id={section.id}
                    >
                        <CardHeader className="text-xl font-bold">
                            <Button
                                className="bg-clear text-xl font-bold truncate"
                                startContent={<LinkIcon />}
                                disableRipple
                                onPress={() => copySectionLink(section.id)}
                            >
                                {section.title}
                            </Button>
                        </CardHeader>
                        <CardBody className="flex flex-col">
                            <Table key={index} isStriped>
                                <TableHeader>
                                    <TableColumn>
                                        <span className="text-lg">Command</span>
                                    </TableColumn>
                                    <TableColumn>
                                        <span className="text-lg">
                                            Description
                                        </span>
                                    </TableColumn>
                                    <TableColumn>
                                        <span className="text-lg">
                                            Parameters
                                        </span>
                                    </TableColumn>
                                </TableHeader>
                                <TableBody>
                                    {section?.commands.map((command, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {command.command}
                                            </TableCell>
                                            <TableCell>
                                                {command.description}
                                            </TableCell>
                                            <TableCell>
                                                {command.parameters.map(
                                                    (parameter, index) => (
                                                        <div key={index}>
                                                            {parameter}
                                                        </div>
                                                    )
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <BackToUp>Top</BackToUp>
        </div>
    );
}
