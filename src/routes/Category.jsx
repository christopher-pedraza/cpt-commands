import { useSelector } from "react-redux";
import { selectFileById } from "@/redux/Slices/jsonSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";

export default function Category() {
    const { category_id } = useParams();
    // Get the json data from the redux store
    const sectionData = useSelector((state) =>
        selectFileById(state, category_id)
    );

    // print the section data to the console
    useEffect(() => {
        console.log(sectionData);
    }, [sectionData]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">{sectionData?.title}</h1>
            <Button>Hola</Button>
            <Card fullWidth>
                <CardHeader className="text-xl font-bold">
                    {sectionData?.title}
                </CardHeader>
                <CardBody className="flex flex-col">
                    {sectionData?.sections.map((section, index) => (
                        <div key={index} className="m-2">
                            <h2 className="text-lg font-bold">
                                {section.title}
                            </h2>
                            <p>{section.description}</p>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </div>
    );
}
