import { Router } from "next/dist/client/router";
import Seo from "../components/Seo";

export default function top() {
  return (
    <div>
      <Seo title={"Top"}/>  
      <h1>top</h1>
    </div>
  );
}
