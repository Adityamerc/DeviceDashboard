export const AvatarDefault = ({ size, personFill, circleFill }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24.646" cy="24.5874" r="24" fill={circleFill} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.646 13.9601C27.1383 13.9601 29.1588 15.9805 29.1588 18.4728C29.1588 20.9651 27.1383 22.9855 24.646 22.9855C22.1537 22.9855 20.1333 20.9651 20.1333 18.4728C20.1333 15.9805 22.1537 13.9601 24.646 13.9601ZM24.646 12.155C21.1568 12.155 18.3282 14.9836 18.3282 18.4728C18.3282 21.9621 21.1568 24.7906 24.646 24.7906C28.1352 24.7906 30.9638 21.9621 30.9638 18.4728C30.9638 14.9836 28.1352 12.155 24.646 12.155ZM33.6714 37.4262H31.8664V32.9134C31.8664 31.7166 31.3909 30.5688 30.5446 29.7225C29.6983 28.8762 28.5505 28.4007 27.3536 28.4007H21.9384C19.4461 28.4007 17.4257 30.4211 17.4257 32.9134V37.4262H15.6206V32.9134C15.6206 29.4242 18.4492 26.5956 21.9384 26.5956H27.3536C30.8429 26.5956 33.6714 29.4242 33.6714 32.9134V37.4262Z"
      fill={personFill}
    />
  </svg>
);

export const AddNewDeviceIcon = ({
  size: { width = 20, height = 22 },
  color = "#054DB9",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.146 10.0874C17.1836 10.0874 19.646 12.5498 19.646 15.5874C19.646 18.625 17.1836 21.0874 14.146 21.0874C11.1084 21.0874 8.646 18.625 8.646 15.5874C8.646 12.5498 11.1084 10.0874 14.146 10.0874ZM10.396 0.0874023C11.6386 0.0874023 12.646 1.09476 12.646 2.3374L12.6462 9.2613C12.1183 9.38597 11.6153 9.575 11.1459 9.81965L11.146 2.3374C11.146 1.92319 10.8102 1.5874 10.396 1.5874H2.896C2.48178 1.5874 2.146 1.92319 2.146 2.3374V17.8374C2.146 18.2516 2.48178 18.5874 2.896 18.5874L8.37877 18.5885C8.66604 19.1394 9.02995 19.644 9.45636 20.0882L2.896 20.0874C1.65336 20.0874 0.645996 19.08 0.645996 17.8374V2.3374C0.645996 1.09476 1.65336 0.0874023 2.896 0.0874023H10.396ZM14.146 12.0866L14.0561 12.0947C13.852 12.1317 13.6911 12.2927 13.6541 12.4968L13.646 12.5866L13.6456 15.0866L11.1436 15.0874L11.0538 15.0955C10.8497 15.1325 10.6887 15.2934 10.6517 15.4975L10.6436 15.5874L10.6517 15.6773C10.6887 15.8814 10.8497 16.0423 11.0538 16.0793L11.1436 16.0874L13.6466 16.0866L13.6471 18.5909L13.6552 18.6808C13.6922 18.8849 13.8531 19.0458 14.0572 19.0828L14.1471 19.0909L14.237 19.0828C14.4411 19.0458 14.602 18.8849 14.639 18.6808L14.6471 18.5909L14.6466 16.0866L17.1506 16.0874L17.2404 16.0793C17.4445 16.0423 17.6055 15.8814 17.6425 15.6773L17.6506 15.5874L17.6425 15.4975C17.6055 15.2934 17.4445 15.1325 17.2404 15.0955L17.1506 15.0874L14.6456 15.0866L14.646 12.5866L14.6379 12.4968C14.6009 12.2927 14.44 12.1317 14.2359 12.0947L14.146 12.0866ZM5.39487 15.5912L7.646 15.5864C7.646 16.1036 7.70617 16.6058 7.81989 17.0872L5.39713 17.0912C4.98291 17.0918 4.64662 16.7565 4.646 16.3423C4.64537 15.9281 4.98065 15.5918 5.39487 15.5912Z"
      fill={color}
    />
  </svg>
);

export const DevicePhone = ({
  size: { height = 85, width = 45 },
  color = "#414042",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 45 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.8022 0.317871H5.29008C2.68091 0.317871 0.546143 2.48096 0.546143 5.12474V79.511C0.546143 82.1548 2.68091 84.3179 5.29008 84.3179H39.8022C42.4114 84.3179 44.5461 82.1548 44.5461 79.511V5.12474C44.5461 2.48096 42.4114 0.317871 39.8022 0.317871ZM39.8022 82.8758H5.29008C4.40059 82.8758 3.5704 82.5153 2.97741 81.9144C2.38442 81.3136 2.02862 80.4724 2.02862 79.5711V5.12474C2.02862 4.22345 2.38442 3.38225 2.97741 2.78139C3.5704 2.18053 4.40059 1.82002 5.29008 1.82002H39.8022C40.6917 1.82002 41.5219 2.18053 42.1149 2.78139C42.7079 3.38225 43.0637 4.22345 43.0637 5.12474V79.511C43.0637 80.4123 42.7079 81.2535 42.1149 81.8543C41.5219 82.5153 40.6917 82.8758 39.8022 82.8758Z"
      fill={color}
    />
    <path
      d="M25.7482 76.1467H19.3439C18.2172 76.1467 17.3277 77.048 17.3277 78.1897C17.3277 79.3313 18.2172 80.2326 19.3439 80.2326H25.7482C26.8749 80.2326 27.7644 79.3313 27.7644 78.1897C27.7644 77.1081 26.8749 76.1467 25.7482 76.1467ZM25.7482 78.8506H19.3439C19.0474 78.8506 18.7509 78.6103 18.7509 78.2497C18.7509 77.9493 18.9881 77.6489 19.3439 77.6489H25.7482C26.0447 77.6489 26.3412 77.8892 26.3412 78.2497C26.3412 78.5502 26.0447 78.8506 25.7482 78.8506Z"
      fill={color}
    />
    <path
      d="M40.5731 7.047H4.51915C4.10405 7.047 3.80756 7.34743 3.80756 7.76803V73.8024C3.80756 74.223 4.10405 74.5234 4.51915 74.5234H40.5138C40.9288 74.5234 41.2253 74.223 41.2253 73.8024V7.76803C41.2846 7.34743 40.9288 7.047 40.5731 7.047ZM39.8615 8.48906V73.0213H5.29004V8.48906H39.8615Z"
      fill={color}
    />
  </svg>
);

export const DeviceLap = ({ size: { width, height }, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 140 87"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M138.57 77.8444H132.614V4.53687C132.614 2.17211 130.693 0.241699 128.339 0.241699H11.0009C8.64738 0.241699 6.72616 2.17211 6.72616 4.53687V77.8444H0.722361C0.386148 77.8444 0.145996 78.0857 0.145996 78.4235V81.0778C0.145996 82.4291 0.866452 83.7804 2.2113 84.7939C3.41206 85.7108 4.90101 86.2417 6.29389 86.2417H133.094C134.487 86.2417 135.976 85.7108 137.177 84.7939C138.474 83.7804 139.242 82.4774 139.242 81.0778V78.4235C139.146 78.0857 138.906 77.8444 138.57 77.8444ZM11.0009 1.39995H128.339C129.204 1.39995 129.972 1.73777 130.549 2.3169C131.125 2.89602 131.461 3.66819 131.461 4.53687V77.8444H7.87889V4.53687C7.87889 3.66819 8.21511 2.89602 8.79147 2.3169C9.3198 1.78603 10.1363 1.39995 11.0009 1.39995ZM7.30253 79.0026H132.038H137.993V80.4987H1.29873V79.0026H7.30253ZM137.897 81.657C137.705 82.4774 137.129 83.2496 136.312 83.8769C135.352 84.6008 134.103 85.0835 132.998 85.0835H6.19783C5.09313 85.0835 3.84434 84.6008 2.88373 83.8769C2.11524 83.2978 1.49085 82.5257 1.29873 81.657H137.897Z"
      fill={color}
    />
    <path
      d="M13.6423 73.5487H125.601C125.937 73.5487 126.178 73.3074 126.178 72.9696V7.86636C126.178 7.52853 125.937 7.28723 125.601 7.28723H13.6423C13.3061 7.28723 13.066 7.52853 13.066 7.86636V72.9696C13.066 73.3074 13.3542 73.5487 13.6423 73.5487ZM14.2667 72.3905V8.44548H125.073V72.3905H14.2667Z"
      fill={color}
    />
  </svg>
);

export const MenuEdit = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4486 1.55218C12.2893 2.39292 12.2893 3.75602 11.4486 4.59676L4.24826 11.7971C4.08169 11.9637 3.87453 12.0839 3.64726 12.1459L0.569578 12.9852C0.232748 13.0771 -0.0763197 12.768 0.0155428 12.4312L0.85491 9.35352C0.916892 9.12625 1.03711 8.91909 1.20368 8.75252L8.40402 1.55218C9.24476 0.711447 10.6079 0.711447 11.4486 1.55218ZM7.82075 3.41172L1.84179 9.39063C1.78627 9.44615 1.7462 9.51521 1.72554 9.59096L1.09393 11.9068L3.40981 11.2752C3.48557 11.2546 3.55462 11.2145 3.61015 11.159L9.5889 5.17987L7.82075 3.41172ZM9.04213 2.19029L8.45847 2.7734L10.2266 4.54216L10.8105 3.95865C11.2988 3.47033 11.2988 2.67861 10.8105 2.19029C10.3222 1.70198 9.53045 1.70198 9.04213 2.19029Z"
      fill="#022742"
    />
  </svg>
);

export const MenuDelete = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.2 2C7.2 1.33726 6.66274 0.8 6 0.8C5.33726 0.8 4.8 1.33726 4.8 2H4C4 0.895431 4.89543 0 6 0C7.10457 0 8 0.895431 8 2H11.6C11.8209 2 12 2.17909 12 2.4C12 2.62091 11.8209 2.8 11.6 2.8H11.1568L10.12 11.7834C10.0268 12.5907 9.3432 13.2 8.5305 13.2H3.4695C2.6568 13.2 1.9732 12.5907 1.88005 11.7834L0.8424 2.8H0.4C0.203632 2.8 0.0403133 2.6585 0.00644455 2.4719L0 2.4C0 2.17909 0.179086 2 0.4 2H7.2ZM10.3504 2.8H1.6488L2.67477 11.6917C2.72135 12.0954 3.06315 12.4 3.4695 12.4H8.5305C8.93685 12.4 9.27865 12.0954 9.32523 11.6917L10.3504 2.8ZM4.8 4.8C4.99637 4.8 5.15969 4.92381 5.19356 5.08709L5.2 5.15V10.05C5.2 10.2433 5.02091 10.4 4.8 10.4C4.60363 10.4 4.44031 10.2762 4.40644 10.1129L4.4 10.05V5.15C4.4 4.9567 4.57909 4.8 4.8 4.8ZM7.2 4.8C7.39637 4.8 7.55969 4.92381 7.59356 5.08709L7.6 5.15V10.05C7.6 10.2433 7.42091 10.4 7.2 10.4C7.00363 10.4 6.84031 10.2762 6.80644 10.1129L6.8 10.05V5.15C6.8 4.9567 6.97909 4.8 7.2 4.8Z"
      fill="#022742"
    />
  </svg>
);
