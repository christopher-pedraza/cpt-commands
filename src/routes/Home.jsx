import LinksList from "@/components/LinksList";
import { useDispatch } from "react-redux";
import { addFiles } from "@/redux/Slices/jsonSlice";

export default function Home() {
    const dispatch = useDispatch();
    // import all the json files from @jsons folder
    const jsonFiles = import.meta.glob("@/jsons/*.json", { eager: true });
    const jsonData = Object.values(jsonFiles).map((file) => file.default);

    // dispatch the json data to the redux store
    dispatch(addFiles(jsonData));

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <LinksList />
        </div>
    );
}
