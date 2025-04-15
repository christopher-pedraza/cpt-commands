import { Link } from "@heroui/link";

import { useSelector } from "react-redux";
import { selectFiles } from "@/redux/Slices/jsonSlice";

export default function LinksList() {
    // Get the json data from the redux store
    const jsonData = useSelector(selectFiles);

    return (
        <div>
            {jsonData.map((data, index) => (
                <div key={index}>
                    <Link href={`${data.id}`}>{data.title}</Link>
                    {data.sections.map((section, index) => (
                        <div key={index} className="ml-4">
                            <Link href={`${data.id}#${section.id}`}>
                                {section.title}
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
