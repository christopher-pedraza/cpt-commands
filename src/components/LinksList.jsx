import { Link } from "@heroui/link";

import { useSelector } from "react-redux";
import { selectFiles } from "@/redux/Slices/jsonSlice";

export default function LinksList() {
    // Get the json data from the redux store
    const jsonData = useSelector(selectFiles);

    return (
        <div>
            {jsonData.map((data, index) => (
                <Link href={`${data.id}`} key={index}>
                    {data.title}
                </Link>
            ))}
        </div>
    );
}
