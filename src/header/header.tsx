import ButtonComponent from "../components/Button"
import DownButton from "../components/Button/downButton"
import ImageComponent from "../components/Image"
import { DropButtonPrimary, DropButtonSecondary, DropButtonThird, SmallPrimary, SmallSecondary } from "../utils/buttonType"
import ImageNames from "../utils/imageNames"

function Header() {
    return (
        <div className="w-full navbar_fixed bg-white flex fixed justify-center border-b border-red">
            <nav className="h-16 flex content-center justify-center w-full px-60">
                <div className="flex flex-row items-center justify-between w-full" >
                    <div className="flex items-center h-full">
                        <div className="h-9 px-2">
                            <ImageComponent name={ImageNames.logo} width={185} height={36} ></ImageComponent>
                        </div>

                        <div className="h-full" >
                            <DownButton title="Main Menu" xborder={DropButtonThird.xborder} type={DropButtonThird.type} style={DropButtonThird.style}></DownButton>
                        </div>
                        <div className="h-full" >
                            <DownButton title="Adobe Commerce" type={DropButtonSecondary.type} style={DropButtonSecondary.style}></DownButton>
                        </div>
                        <div className="h-full">
                            <DownButton title="Features" type={DropButtonPrimary.type} style={DropButtonPrimary.style}></DownButton>
                        </div>
                        <div className="h-full">
                            <DownButton title="Use Cases" type={DropButtonPrimary.type} style={DropButtonPrimary.style}></DownButton>
                        </div>
                        <div className="h-full">
                            <DownButton title="Pricing" type={DropButtonPrimary.type} style={DropButtonPrimary.style}></DownButton>
                        </div>
                        <div className="h-full">
                            <DownButton title="Resources" type={DropButtonPrimary.type} style={DropButtonPrimary.style}></DownButton>
                        </div>
                        <div className="h-full">
                            <DownButton title="Additional Products" type={DropButtonPrimary.type} style={DropButtonPrimary.style}></DownButton>
                        </div>
                        <div className="h-full content-center">
                            <ButtonComponent title="Get Started" type={SmallPrimary} ></ButtonComponent>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="h-full content-center">
                            <ButtonComponent title="Sign In" type={SmallSecondary}></ButtonComponent>
                        </div>
                        <div className="h-6 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 22" fill="none">
                                <path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"></path></svg>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Header