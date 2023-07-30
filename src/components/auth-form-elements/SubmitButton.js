import React from 'react'

const SubmitButton = ({ children, className, ...rest }) => {
    return (
        <button
            type="submit"
            className={`flex justify-center text-white w-full max-w-sm mx-auto bg-[#0198C6] hover:bg-[#0198c6cc] active:ring-0 focus:ring-0 font-medium rounded-lg text-base px-5 py-2.5 text-center ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default SubmitButton