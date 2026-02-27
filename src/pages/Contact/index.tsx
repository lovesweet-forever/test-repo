import ButtonComponent from "../../components/Button";
import { SmallPrimary } from "../../utils/buttonType";

const Contact = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col items-center min-w-[585px] min-h-[317px] bg-bgcolorcontract py-14 px-10 grid-col gap-10">
                    <div className="flex flex-row grid-row gap-4">
                        <div className="flex flex-col"> 
                            <label className="text-sm font-bold text-gray-600">Business email*</label>
                            <input type="text" className="pl-3 h-[40px] w-[241px] rounded-md border-1 border-bgcolorsecondary" placeholder="Business email*"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600">Country email*</label>
                            <select  className="border-1 border-solid border-bgcolorsecondary p-2 h-[40px] w-[241px] rounded-md" >
                                <option value="" selected>country*</option>
                                <option value="" >United state</option>
                                <option value="">China</option>
                                <option value="">Japanese</option>
                                <option value="">Brazil</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col grid-col gap-2">
                        <ButtonComponent title={`Next`} type={SmallPrimary} />
                        <p className="text-sm "> Step 1 of 3 </p>
                    </div>
            </div>
        </div>
    )
}

export default Contact;
