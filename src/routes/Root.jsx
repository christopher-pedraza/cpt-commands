import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { setFiles } from "@/redux/Slices/jsonSlice";

export default function Root() {
  const dispatch = useDispatch();
  // import all the json files from @jsons folder
  const jsonFiles = import.meta.glob("@/jsons/*.json", { eager: true });
  const jsonData = Object.values(jsonFiles).map((file) => file.default);

  // dispatch the json data to the redux store
  dispatch(setFiles(jsonData));

  return (
    <>
      <Outlet />
    </>
  );
}
