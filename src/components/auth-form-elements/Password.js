import React, { useState } from 'react'
import { EyeOpenIcon, EyeCloseIcon, PwdIcon } from "../../assets/Icons";

const Password = ({ className, ...rest }) => {
    const [showpwd, setShowPwd] = useState(false);

    return (
        <div className="mb-6">
            <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-[#0198C6]"
            >
                Your password
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <PwdIcon className="text-[#0198C6]" />
                </div>
                <input
                    type={showpwd ? "text" : "password"}
                    name="password"
                    id="password"
                    className={`shadow-sm pl-10 bg-gray-50 border border-gray-300 tracking-wider text-[#0198C6] text-base rounded-lg focus:ring-0 block w-full p-2.5 ${className}`}
                    {...rest}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 cursor-pointer">
                    <button type="button" onClick={() => setShowPwd(!showpwd)}>
                        {!showpwd ? <EyeCloseIcon /> : <EyeOpenIcon />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Password