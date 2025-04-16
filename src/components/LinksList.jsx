import { Link } from "@heroui/link";

import { useSelector } from "react-redux";
import { selectFiles } from "@/redux/Slices/jsonSlice";

import { Card, CardBody, CardHeader, ScrollShadow } from "@heroui/react";

export default function LinksList() {
    // Get the json data from the redux store
    const jsonData = useSelector(selectFiles);

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 w-4/5 h-auto">
            {jsonData.map((data, index) => (
                <Card key={index} className="self-start">
                    <CardHeader>
                        <Link href={`${data.id}`}>{data.title}</Link>
                    </CardHeader>
                    <CardBody>
                        {data.sections.map((section, index) => (
                            <div key={index} className="ml-4">
                                <Link href={`${data.id}#${section.id}`}>
                                    {section.title}
                                </Link>
                            </div>
                        ))}
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}
