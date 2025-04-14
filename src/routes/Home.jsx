import LinksList from "@/components/LinksList";

export default function Home() {
    // import all the json files from @jsons folder
    const jsonFiles = import.meta.glob("@/jsons/*.json", { eager: true });
    const jsonData = Object.values(jsonFiles).map((file) => file.default);

    console.log(jsonFiles);
    console.log(jsonData);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <LinksList jsonData={jsonData} />
        </div>
    );
}
