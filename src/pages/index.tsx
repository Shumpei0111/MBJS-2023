import { MainVisual } from "@/layout/home/MainVisual"
import { DefaultLayout } from "@/layout/default";
import { useState } from "react";

export default function Home() {
  const [isShowInner, setIsShowInner] = useState<boolean>(false);

  const handleShowInner = ():void => {
    setIsShowInner(true);
  }

  return (
    <DefaultLayout isShowInner={isShowInner}>
      <MainVisual isShowInner={isShowInner} handleShowInner={handleShowInner} />
    </DefaultLayout>
  )
}
