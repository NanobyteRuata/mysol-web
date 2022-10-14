import {
  AtSymbolIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="w-full flex-col items-stretch">
      <div className="flex bg-cyan-500 text-black justify-evenly p-6">
        <div className="flex flex-col w-1/3">
          <div className="flex text-gray-800">
            <MapPinIcon className="h-6 w-6 mr-2" />
            <h1 className="text-md">
              <i>Location</i>
            </h1>
          </div>
          <p className="mr-2">
            Grand Nawaday Condo, Nawaday Street Yangon, Myanmar.
          </p>
        </div>
        <div className="flex flex-col w-1/3">
          <div className="flex text-gray-800">
            <AtSymbolIcon className="h-6 w-6 mr-2" />
            <h1 className="text-md">
              <i>Email</i>
            </h1>
          </div>
          <p className="mr-2 break-words">futurecareerdream@gmail.com</p>
        </div>
        <div className="flex flex-col w-1/3">
          <div className="flex text-gray-800">
            <PhoneIcon className="h-6 w-6 mr-2" />
            <h1 className="text-md">
              <i>Phone</i>
            </h1>
          </div>
          <p className="mr-2">+95 9773792671, +81 08044600534</p>
        </div>
      </div>
      <div className="flex justify-center p-5">
        © Copyright MySol Co., Ltd. All Rights Reserved.{" "}
        <a
          className="text-blue-600 underline ml-1"
          href="https://stg.myanmarsolution.com/ja/%7B%7B%20URL::to('/termandcomdition')%20%7D%7D"
        >
          Terms and Conditions
        </a>{" "}
        <a
          className="text-blue-600 underline ml-1"
          href="https://stg.myanmarsolution.com/ja/%7B%7B%20URL::to('/policy')%20%7D%7D"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
