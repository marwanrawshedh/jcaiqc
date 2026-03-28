import { Metadata } from "next";
import Image from "next/image";
import { common } from "../../constants/common";
export const metadata: Metadata = {
  title: `Contact Us - ${common.JournalTitle}`,
};
const ContactUs = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl ">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="flex items-center justify-center gap-16 p-4  max-w-4xl font-[sans-serif]">
        <div className=" flex  gap-5">
          <div>
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-2">
              <li className="flex items-center">
                <address className="flex gap-1">
                  <a href={`mailto:editor.jcaiqc@sciencecommunitypublisher.org`}>
                    <Image
                      className="transition duration-500 ease-in-out hover:scale-125"
                      width={25}
                      height={25}
                      src={"/logos/email.svg"}
                      alt="email link"
                    />
                  </a>
                  editor.jcaiqc@sciencecommunitypublisher.org
                </address>
              </li>
              {/* <li className="flex items-center">
                <address className="flex gap-1">
                  <a href={`mailto:contact@sciencecommunitypublisher.org`}>
                    <Image
                      className="transition duration-500 ease-in-out hover:scale-125"
                      width={25}
                      height={25}
                      src={"/logos/email.svg"}
                      alt="email link"
                    />
                  </a>
                  contact@sciencecommunitypublisher.org
                </address>
              </li> */}
            </ul>
          </div>
          <div>
            <h2 className="text-gray-800 text-base font-bold">Address</h2>
            <ul className="mt-2">
              <li className="flex items-center">
                <div className=" text-sm ">
                  <strong>Amman-Jordan</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
