import { useSelector } from "react-redux";
import { selectFileById } from "@/redux/Slices/jsonSlice";
import { useParams, useLocation } from "react-router-dom";
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
    Tooltip,
} from "@heroui/react";

import { LinkIcon } from "@/icons/link";

export default function Category() {
    const { category_id } = useParams();
    const location = useLocation();
    // Get the json data from the redux store
    const sectionData = useSelector((state) =>
        selectFileById(state, category_id)
    );

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

    const copySectionLink = (sectionId) => {
        const link = `${window.location.origin}${location.pathname}#${sectionId}`;
        navigator.clipboard.writeText(link).then(() => {
            alert("Link copied to clipboard!");
        });
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">{sectionData?.title}</h1>
                {sectionData?.sections.map((section, index) => (
                    <Card
                        fullWidth
                        key={index}
                        className="mb-4 mt-4 p-2"
                        id={section.id}
                    >
                        <CardHeader className="text-xl font-bold">
                            <Button
                                className="bg-clear text-xl font-bold"
                                startContent={<LinkIcon />}
                                disableRipple
                                onPress={() => copySectionLink(section.id)}
                            >
                                {section.title}
                            </Button>
                        </CardHeader>
                        <CardBody className="flex flex-col">
                            <Table key={index}>
                                <TableHeader>
                                    <TableColumn>Command</TableColumn>
                                    <TableColumn>Description</TableColumn>
                                    <TableColumn>Parameters</TableColumn>
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
        </div>
    );
}
