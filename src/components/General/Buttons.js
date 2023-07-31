const NavbarActionButton = ({ children, className, ...rest }) => (
  <button
    {...rest}
    type="button"
    className={`p-2 mx-2 w-10 h-10 rounded-lg hover:bg-gray-100 focus:outline-none ${className}`}
  >
    {children}
  </button>
);

const ModalButton = ({ children, className, ...rest }) => (
  <button
    type="button"
    {...rest}
    className={`text-black focus:outline-none font-medium text-xl px-5 py-2.5 text-center mb-2 border-b hover:opacity-70 flex items-center ${className}`}
  >
    {children}
  </button>
);

const UploadNextButton = ({ children, isDisabled = false, className, ...rest }) => (
  <button
    {...rest}
    className={`text-white hover:bg-[#00b2e8d3] focus:ring-0 font-medium rounded-3xl text-sm px-5 py-2 mr-2 mb-2 w-28 ${className} ${isDisabled ? "bg-[#414141]" : "bg-[#00B2E8]"
      }`}
  >
    {children}
  </button>
);

const AspectRatioButton = ({ children, className, ...rest }) => (
  <button
    type="button"
    {...rest}
    className={`px-4 py-2 mx-5 text-sm font-medium ${className}`}
  >
    {children}
  </button>
);

const PostMenuOptionButton = ({ children, className, ...rest }) => (
  <button
    type="button"
    {...rest}
    className={`w-full px-4 py-2 font-medium text-left border-b border-gray-200 cursor-pointer hover:opacity-75 focus:outline-none focus:ring-0 ${className}`}
  >
    {children}
  </button>
)

export { NavbarActionButton, ModalButton, UploadNextButton, AspectRatioButton, PostMenuOptionButton };
