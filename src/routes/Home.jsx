import LinksList from "@/components/LinksList";
import { useDispatch } from "react-redux";
import { setFiles } from "@/redux/Slices/jsonSlice";

export default function Home() {
    const dispatch = useDispatch();
    // import all the json files from @jsons folder
    const jsonFiles = import.meta.glob("@/jsons/*.json", { eager: true });
    const jsonData = Object.values(jsonFiles).map((file) => file.default);

    // dispatch the json data to the redux store
    dispatch(setFiles(jsonData));

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <LinksList />
        </div>
    );
}
