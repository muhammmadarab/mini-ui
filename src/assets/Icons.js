const AddPostIcon = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="22.383"
    viewBox="0 0 23 22.383"
    {...rest}
  >
    <g
      id="Add_Post"
      data-name="Add Post"
      transform="translate(-274.748 -62.282)"
      opacity="1"
    >
      <g
        id="Rectangle_358"
        data-name="Rectangle 358"
        transform="translate(274.748 62.282)"
        fill="none"
        stroke="#000"
        strokeWidth="2.4"
      >
        <rect width="23" height="22.383" rx="4" stroke="none" />
        <rect
          x="1.2"
          y="1.2"
          width="20.6"
          height="19.983"
          rx="2.8"
          fill="none"
        />
      </g>
      <line
        id="Line_136"
        data-name="Line 136"
        y2="7.484"
        transform="translate(286.247 69.731)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <line
        id="Line_137"
        data-name="Line 137"
        x2="8.165"
        transform="translate(282.166 73.683)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </g>
  </svg>
);

const SearchIcon = ({ className, ...rest }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...rest}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    />
  </svg>
);

const CloseIcon = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="37.613"
    height="37.613"
    viewBox="0 0 37.613 37.613"
    {...rest}
  >
    <path
      id="Path_219"
      d="M15.631,2C8.107,2,2,7.809,2,14.966S8.107,27.931,15.631,27.931s13.631-5.809,13.631-12.966S23.155,2,15.631,2Zm6.815,14.262H16.994v5.186H14.268V16.262H8.815V13.669h5.452V8.483h2.726v5.186h5.452Z"
      transform="translate(18.336 -2.828) rotate(45)"
      fill="#434343"
      opacity="0.955"
    />
  </svg>
);

const PostIcon = ({ ...rest }) => (
  <svg
    id="Component_65_1"
    data-name="Component 65 – 1"
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    {...rest}
  >
    <rect
      id="Rectangle_315"
      data-name="Rectangle 315"
      width="28"
      height="28"
      fill="#414141"
      opacity="0.003"
    />
    <path
      id="add_post"
      data-name="add post"
      d="M11.029,16.189h2.58v2.58a1.29,1.29,0,1,0,2.58,0v-2.58h2.58a1.29,1.29,0,1,0,0-2.58h-2.58v-2.58a1.29,1.29,0,0,0-2.58,0v2.58h-2.58a1.29,1.29,0,0,0,0,2.58ZM26.508,2H3.29A1.29,1.29,0,0,0,2,3.29V26.508A1.29,1.29,0,0,0,3.29,27.8H26.508a1.29,1.29,0,0,0,1.29-1.29V3.29A1.29,1.29,0,0,0,26.508,2Zm-1.29,23.218H4.58V4.58H25.218Z"
      transform="translate(-1 -1.112)"
      fill="#414141"
    />
  </svg>
);

const StoryIcon = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="33"
    height="41"
    viewBox="0 0 33 41"
    {...rest}
  >
    <defs>
      <filter
        id="Rectangle_105"
        x="0"
        y="0"
        width="33"
        height="41"
        filterUnits="userSpaceOnUse"
      >
        <feOffset input="SourceAlpha" />
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feFlood floodOpacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g id="Story_Icon" data-name="Story Icon" transform="translate(4.5 4.5)">
      <g
        transform="matrix(1, 0, 0, 1, -4.5, -4.5)"
        filter="url(#Rectangle_105)"
      >
        <g
          id="Rectangle_105-2"
          data-name="Rectangle 105"
          transform="translate(4.5 4.5)"
          fill="none"
          stroke="#414141"
          strokeWidth="2"
        >
          <rect width="24" height="32" rx="5" stroke="none" />
          <rect x="1" y="1" width="22" height="30" rx="4" fill="none" />
        </g>
      </g>
      <path
        id="Path_179"
        data-name="Path 179"
        d="M44,785v8.384"
        transform="translate(-32.158 -772.561)"
        fill="none"
        stroke="#414141"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
      <path
        id="Path_180"
        data-name="Path 180"
        d="M38.281,789.713H46.7"
        transform="translate(-30.737 -772.985)"
        fill="none"
        stroke="#414141"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
    </g>
  </svg>
);

const BackArrowIcon = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 18 12"
    {...rest}
  >
    <path
      id="Path_1655"
      data-name="Path 1655"
      d="M21,11H6.83l3.58-3.59L9,6,3,12l6,6,1.41-1.41L6.83,13H21Z"
      transform="translate(-3 -6)"
    />
  </svg>
);

const CameraIcon = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30.796"
    height="30"
    viewBox="0 0 30.796 30"
    {...rest}
  >
    <path
      id="Path_222"
      data-name="Path 222"
      d="M4.017,5.286V1H6.695V5.286h4.017V8.143H6.695v4.286H4.017V8.143H0V5.286Zm4.017,8.571V9.571h4.017V5.286h9.373l2.45,2.857h4.244A2.78,2.78,0,0,1,30.8,11V28.143A2.78,2.78,0,0,1,28.118,31H6.695a2.78,2.78,0,0,1-2.678-2.857V13.857Zm9.373,12.857A6.932,6.932,0,0,0,24.1,19.571a6.932,6.932,0,0,0-6.695-7.143,6.932,6.932,0,0,0-6.695,7.143A6.932,6.932,0,0,0,17.406,26.714Zm-4.285-7.143a4.43,4.43,0,0,0,4.285,4.571,4.43,4.43,0,0,0,4.285-4.571A4.43,4.43,0,0,0,17.406,15a4.43,4.43,0,0,0-4.285,4.571Z"
      transform="translate(0 -1)"
      fill="#414141"
    />
  </svg>
);

const GalleryIcon = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30.008"
    height="30.008"
    viewBox="0 0 30.008 30.008"
    {...rest}
  >
    <path
      id="Path_221"
      data-name="Path 221"
      d="M32.008,23.005V5a3.01,3.01,0,0,0-3-3H11A3.01,3.01,0,0,0,8,5v18a3.01,3.01,0,0,0,3,3h18A3.01,3.01,0,0,0,32.008,23.005ZM15.5,17l3.046,4.066L23.005,15.5l6,7.5H11ZM2,8V29.007a3.01,3.01,0,0,0,3,3H26.006v-3H5V8Z"
      transform="translate(-2 -2)"
      fill="#414141"
    />
  </svg>
);

const CaptureIcon = ({ ...rest }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="50px"
    height="50px"
    {...rest}
  >
    <defs>
      <circle id="def-circle" fill="red" opacity="0.7" cx="0" cy="0" r="25" />
    </defs>
    <use xlinkHref="#def-circle" transform="translate(25 25)"></use>
  </svg>
);

const AspectRatioIcon = ({ aspectRatio, ...rest }) => (
  <div
    className={`h-auto ${
      aspectRatio === 16 / 9 ? "w-10" : "w-8"
    } border border-[#707070] rounded bg-white`}
    style={{ aspectRatio }}
  ></div>
);

const LocationIcon = ({ ...rest }) => (
  <svg
    fill="#0198C6"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 395.71 395.71"
    xmlSpace="preserve"
    {...rest}
  >
    <g>
      <path
        d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
      />
    </g>
  </svg>
);

const EyeOpenIcon = ({ ...rest }) => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    {...rest}
  >
    <path d="M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z" />
  </svg>
);

const EyeCloseIcon = ({ ...rest }) => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    {...rest}
  >
    <path d="M8.137 15.147c-.71-.857-1.146-1.947-1.146-3.147 0-2.76 2.241-5 5-5 1.201 0 2.291.435 3.148 1.145l1.897-1.897c-1.441-.738-3.122-1.248-5.035-1.248-6.115 0-10.025 5.355-10.842 6.584.529.834 2.379 3.527 5.113 5.428l1.865-1.865zm6.294-6.294c-.673-.53-1.515-.853-2.44-.853-2.207 0-4 1.792-4 4 0 .923.324 1.765.854 2.439l5.586-5.586zm7.56-6.146l-19.292 19.293-.708-.707 3.548-3.548c-2.298-1.612-4.234-3.885-5.548-6.169 2.418-4.103 6.943-7.576 12.01-7.576 2.065 0 4.021.566 5.782 1.501l3.501-3.501.707.707zm-2.465 3.879l-.734.734c2.236 1.619 3.628 3.604 4.061 4.274-.739 1.303-4.546 7.406-10.852 7.406-1.425 0-2.749-.368-3.951-.938l-.748.748c1.475.742 3.057 1.19 4.699 1.19 5.274 0 9.758-4.006 11.999-8.436-1.087-1.891-2.63-3.637-4.474-4.978zm-3.535 5.414c0-.554-.113-1.082-.317-1.562l.734-.734c.361.69.583 1.464.583 2.296 0 2.759-2.24 5-5 5-.832 0-1.604-.223-2.295-.583l.734-.735c.48.204 1.007.318 1.561.318 2.208 0 4-1.792 4-4z" />
  </svg>
);

const EmailIcon = ({ className, ...rest }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 16"
    {...rest}
  >
    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
  </svg>
);

const PwdIcon = ({ className, ...rest }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 16"
    {...rest}
  >
    <path d="M6 8v-2c0-3.313 2.687-6 6-6 3.312 0 6 2.687 6 6v2h-2v-2c0-2.206-1.795-4-4-4s-4 1.794-4 4v2h-2zm-3 2v14h18v-14h-18z" />
  </svg>
);

const HeartEmpty = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="23"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" />
  </svg>
);

const HeartFill = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="23"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
  </svg>
);

const MenuDotIcon = ({ ...rest }) => (
  <svg
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...rest}
  >
    <path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z" />
  </svg>
);

const ShareIcon = ({ ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    { ...rest }
  >
    <path d="M16 15v4l8-8.035-8-7.965v4s-13.277 2.144-16 14c5.796-6.206 16-6 16-6z" />
  </svg>
);

export {
  SearchIcon,
  CloseIcon,
  AddPostIcon,
  PostIcon,
  StoryIcon,
  BackArrowIcon,
  CameraIcon,
  GalleryIcon,
  CaptureIcon,
  AspectRatioIcon,
  LocationIcon,
  EyeOpenIcon,
  EyeCloseIcon,
  EmailIcon,
  PwdIcon,
  HeartEmpty,
  HeartFill,
  MenuDotIcon,
  ShareIcon,
};
