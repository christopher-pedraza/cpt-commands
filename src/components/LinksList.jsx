import { Link } from "@heroui/link";

export default function LinksList({ jsonData }) {
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
