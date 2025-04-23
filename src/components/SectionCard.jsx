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

import { LinkIcon } from "@/icons/LinkIcon";

export default function SectionCard({ sectionData }) {
    const copySectionLink = (sectionId) => {
        const link = `${
            window.location.origin
        }${base}#/${location.pathname.substring(1)}#${sectionId}`;
        copyAndAlert(link);
    };

    return (
        <>
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
                                    <span className="text-lg">Description</span>
                                </TableColumn>
                                <TableColumn>
                                    <span className="text-lg">Parameters</span>
                                </TableColumn>
                            </TableHeader>
                            <TableBody>
                                {section?.commands.map((command, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            {command.mode ? (
                                                <Tooltip
                                                    content={command.mode}
                                                    showArrow={true}
                                                    placement="top-start"
                                                    className="dark text-foreground bg-background"
                                                >
                                                    {command.command}
                                                </Tooltip>
                                            ) : (
                                                command.command
                                            )}
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
        </>
    );
}
