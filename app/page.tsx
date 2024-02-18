import { Metadata } from "next"
import Navbar from "components/Navigation/Navbar"
import Stats from "./sections/Stats"
import BasicContext from "./sections/BasicContext"
import 'styles/main.css'
import BasicFeature from "./sections/BasicFeature"
import Footer from "components/Footer/Footer"
import { MyBuxxLogo } from '../images/Mybuxx-Logo-DataURI';
import VideoSection from "./sections/VideoSection"

export const metadata: Metadata = {
  title: "MyBuxx",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://www.mybuxx.net",
    images: [
      {
        width: 1200,
        height: 630,
        url: MyBuxxLogo,
      },
    ],
  },
}
// background: linear-gradient(180deg, #C2FBFF 0%, rgba(255, 255, 255, 0) 93.47%);

export default function Web() {
  return (
    <>
      <section id="about" className="hero-section dark:bg-gray-900">
        <Navbar />
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl xl:text-6xl">
              <span className="text-blue-800"> Welcome to MYBUXX, a Hands off Payment Solution </span>
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              A Texas based business focused on internet payment service providing a financial platform as a mobile application merchant provider to the public.  The mobile application target social media, internet users, public, local businesses, and individuals with the convenience of transferring and receiving transaction electronically on real-time, utilizing technology that ensures quick access to funds.

            </p>
          </div>
        </div>
      </section>
      <section id="mission">
        <BasicContext />
      </section>
      <section id="demand" className="h-full">
        <Stats />
      </section>
      <section className="w-full h-full flex ">
        <VideoSection />
      </section>
      <section id="feature" className="h-full" >
        <BasicFeature />
      </section>

      <Footer />
      {/* <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  )
}
