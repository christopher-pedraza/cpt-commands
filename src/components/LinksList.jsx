import { Link } from "@heroui/link";
import { useSelector } from "react-redux";
import { selectFiles } from "@/redux/Slices/jsonSlice";
import { Card, CardBody, CardHeader } from "@heroui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function LinksList() {
  // Get the json data from the redux store
  const jsonData = useSelector(selectFiles);

  return (
    <div className="w-4/5 h-auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {jsonData.map((data, index) => (
            <Card key={index} className="m-4" fullWidth>
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
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
