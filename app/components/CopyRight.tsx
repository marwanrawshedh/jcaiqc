import Image from "next/image";
import Link from "next/link";
type CopyRightProps = {
  title: string;
  href: string;
};
const CopyRight = ({ title, href }: CopyRightProps) => {
  return (
    <div className="max-w-xl  mt-6 p-4 border-l-4 border-blue-500 bg-gray-100  rounded-lg shadow-md">
      <p className="text-sm text-gray-700 ">
        <Link
          property="dct:title"
          rel="cc:attributionURL"
          href={href}
          className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
        >
          {title}
        </Link>{" "}
        is licensed under{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          CC BY 4.0
          <Image
            width={20}
            height={20}
            className="inline-block h-5 ml-1 align-text-bottom"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            alt="CC"
          />
          <Image
            width={20}
            height={20}
            className="inline-block h-5 ml-1 align-text-bottom"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            alt="BY"
          />
        </a>
      </p>
    </div>
  );
};
export default CopyRight;
