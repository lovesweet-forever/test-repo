import { BreadCrumbData } from "../utils/constData";


function BreadCrumbs() {
    return (
        <div className="w-full flex bg-bglight items-center px-62 h-8 top-0 overflow-hidden fixed mt-16">
            <span className="text-xs">
                {BreadCrumbData.home}&nbsp;&nbsp;/&nbsp;&nbsp;{BreadCrumbData.products}&nbsp;&nbsp;/&nbsp;&nbsp;{BreadCrumbData.adobe}
            </span>
        </div>
    )
}

export default BreadCrumbs;