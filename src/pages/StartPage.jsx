import PageRenderer from "../renderer/PageRenderer";
import { startPageConfig } from "../configs/pages/start.page";

export default function StartPage() {
  return <PageRenderer pageConfig={startPageConfig} />;
}
