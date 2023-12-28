import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const dataArray = [
    {
      icon: '/assests/Merge PDF-01.png',
      heading: 'Merge PDF',
      description:
        'Combine multiple PDFs into one seamless document with our Merge PDF tool.',
      doc: 'mergeRead',
      page: 'merge',
    },
    {
      icon: '/assests/Protect PDF-02.png',
      heading: 'Protect PDF',
      description:
        'Safeguard your PDFs with an extra layer of protection using our Protect PDF tool.',
      doc: 'protectRead',
      page: 'protect',
    },
    {
      icon: '/assests/Unlock PDF-03.png',
      heading: 'Unlock PDF',
      description:
        'Easily remove restrictions from PDFs with our Unlock PDF function.',
      doc: 'unlockRead',
      page: 'unlock',
    },
    {
      icon: '/assests/Crop PDF-04.png',
      heading: 'Crop PDF',
      description:
        'Customize PDFs by easily removing unwanted margins or areas with our Crop PDF tool.',
      doc: 'cropRead',
      page: 'crop',
    },
    {
      icon: '/assests/JPG to PDF-05.png',
      heading: 'JPG to PDF',
      description:
        'Convert JPG images into PDFs quickly and efficiently with our JPG to PDF tool.',
      doc: 'convertRead',
      page: 'jpgToPdf',
    },
    {
      icon: '/assests/Compress PDF-06.png',
      heading: 'Compress PDF',
      description:
        'Optimize PDF sizes without compromising quality using our Compress PDF tool.',
      doc: 'compressRead',
      page: 'compress',
    },
  ];

  return (
    <>
      <main
        className={`flex  flex-col items-center mt-[60px] justify-between p-8 lg:p-24 ${inter.className}`}
      >
        {/* <div className="mx-auto max-w-xl font-normal p-4 bg-white rounded-lg shadow-lg text-center"> */}
        <h2 className="text-2xl text-center md:text-[40px] lg:text-[70px] lg:leading-[82px] font-semibold mb-4 text-gray-800  mx-auto">
          Every tool you need to work with PDFs in one place
        </h2>
        <div>
          <p className="text-gray-600 text-xl lg:text-3xl leading-relaxed max-w-[80%] mx-auto">
            Simplify Your PDF Tasks with Our Free Tools. All are 100% FREE and
            easy to use! Merge, split, compress, convert, rotate, unlock and
            watermark PDFs with just a few clicks.
          </p>
        </div>
        {/* </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {dataArray.map((item, index) => (
            // <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              style={{ flex: '0 0 calc(33.33% - 1rem)', margin: '0.5rem' }}
              key={index}
            >
              <Link href={item.page}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Image
                    src={item.icon}
                    width={60}
                    height={50}
                    alt={item.heading}
                  />
                  <h5 className="mb-2 p-6 ml-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.heading}
                  </h5>
                </div>
              </Link>
              <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>

              <Link
                href={item.doc}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
            // </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center space-x-4 p-4">
          <div className="flex-shrink-0">
            <Image
              src="/assests/How to use PDF converter_.png"
              alt="Icon"
              width={120}
              height={140}
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-2xl font-bold mt-10">
              How to use PDF converter?
            </h2>
            <ol className="list-decimal pl-5">
              <li>Select and drag and drop pdf`s into pdf`s converter.</li>
              <li>
                For non PDF formats conversion of PDf`s starts automatically.
              </li>
              <li>
                For a PDF file choose a choose a format you want to convert to
                and press `Convert PDF button``.
              </li>
              <li>
                Wait till Pdf converter completes the conversion and download
                your file.
              </li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
