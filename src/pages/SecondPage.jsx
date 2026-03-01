import PageRenderer from "../renderer/PageRenderer";
import { secondPageConfig } from "../configs/pages/second.page";

export default function SecondPage() {
  return <PageRenderer pageConfig={secondPageConfig} />;
}
