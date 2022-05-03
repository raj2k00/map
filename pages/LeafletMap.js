import { useMemo } from "react";
import dynamic from "next/dynamic";

function LeafletMap() {
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false, // This line is important. It's what prevents server-side render
      }),
    [
      /* list variables which should trigger a re-render here */
    ]
  );
  return <Map />;
}

export default LeafletMap;
