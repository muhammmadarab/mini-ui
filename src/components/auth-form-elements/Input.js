import React from 'react'

const Input = ({ type, id, label, icon, className, ...rest }) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="block mb-2 text-base font-medium text-[#0198C6]"
            >
                {label}
            </label>
            <div className="relative">
                {icon && <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    {icon}
                </div>}
                <input
                    type={type}
                    id={id}
                    className={`bg-gray-50 border tracking-wider text-[#0198C6] border-gray-300 text-base rounded-lg focus:ring-0 block w-full p-2.5 ${icon && "pl-10"} ${className}`}
                    {...rest}
                />
            </div>
        </div>
    )
}

export default Input