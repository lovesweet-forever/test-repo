import { contactData, contentsData } from "../utils/constData";

const FooterContent = () => {
    return (
        <div className="w-full mt-8">
            <div className="grid grid-cols-5  ">
                <div className=" flex-wrap gap-3 justify-around pl-50">
                    {
                        contactData.map((data, i) =>
                            <div className="flex flex-col flex-wrap pb-5" key={i}>
                                <p className="text-sm font-bold mb-4">{data.topic}</p>
                                <div className="text-xs flex flex-col grid-col gap-2 ">
                                    {
                                        data.item.map((li, index) =>
                                            <a key={index} className="text-xs cursor-pointer hover:text-blue-500">{li}</a>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className=" flex-wrap col-span-4 grid grid-cols-subgrid gap-3 justify-around px-10">
                    {
                        contentsData.map((data, i) =>
                            <div className="flex flex-col flex-wrap" key={i}>
                                <p className="text-sm font-bold mb-4">{data.topic}</p>
                                <div className="text-xs flex flex-col grid-col gap-2 ">
                                    {
                                        data.item.map((li, index) =>
                                            <a key={index} className="text-xs cursor-pointer hover:text-blue-500">{li}</a>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>

    )
}

export default FooterContent;