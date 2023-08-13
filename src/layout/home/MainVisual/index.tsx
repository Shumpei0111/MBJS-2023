import { Count } from "@/layout/home/Count"
import { MainVisualArrowDown } from "@/features/home/MainVisualArrowDown";
import { ComponentProps } from "react"
import classNames from "classnames";

type Props = ComponentProps<typeof Count>

export const MainVisual: React.FC<Props> = ({ isShowInner, handleShowInner }
  ) => {
  return (
    <section data-section="MainVisual" className="relative">
      <div className="absolute top-0">
        <Count isShowInner={isShowInner} handleShowInner={handleShowInner} />
        <div className={classNames(["absolute duration-[2800ms] left-1/4 -translate-x-1/4", isShowInner ? "opacity-100 top-0 blur-none" : "opacity-0 -top-[600px] blur-md"])}>
          <div className={classNames(["absolute"])}>
            <div className="w-500">
              <img src={"/images/arm_and_sign.png"} alt="" className="w-full h-auto opacity-80"/>
            </div>
          </div>
        </div>
        <div className={classNames(["absolute right-[3vw] top-[45.6vh] duration-[2800ms]", isShowInner ? "opacity-100 top-0 blur-none" : "opacity-0 -top-[600px] blur-md"])}>
          <hgroup>
            <h2 className="uppercase text-40">Web front-end developer<br/>& Doujin creator</h2>
            <p className="text-20 before:content-['{'] before:pr-1 after:content-['}'] after:pl-1">Illustration : Graphic Design : Manga</p>
          </hgroup>
        </div>
        <MainVisualArrowDown />
      </div>
    </section>
  )
}