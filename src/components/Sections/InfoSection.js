import { FormattedMessage } from "react-intl";

const InfoSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 mt-[-2rem] mb-8 lg:my-16">
        <div className="background-wedeliver rounded-t-xl h-[18rem] lg:h-[34rem]"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
          <div className="group bg-gray-50 p-8 h-[19rem] lg:rounded-bl-2xl lg:rtl:rounded-br-2xl lg:rtl:rounded-bl-none hover:bg-mainOrange transition ease-linear duration-200">
            <h2 className="text-center lg:text-left rtl:lg:text-right text-xl lg:text-2xl font-bold my-4 group-hover:text-white">
              <FormattedMessage
                id="homePage.infoSection.info1.title"
                defaultMessage="homePage.infoSection.info1.title"
              />
            </h2>
            <p className="text-center lg:text-left rtl:lg:text-right text-gray-600 leading-relaxed group-hover:text-white">
              <FormattedMessage
                id="homePage.infoSection.info1.content"
                defaultMessage="homePage.infoSection.info1.content"
              />
            </p>
          </div>
          <div className="group bg-gray-100 p-8 h-[19rem] hover:bg-mainOrange transition ease-linear duration-200">
            <h2 className="text-center lg:text-left rtl:lg:text-right text-xl lg:text-2xl font-bold my-4 group-hover:text-white">
              <FormattedMessage
                id="homePage.infoSection.info2.title"
                defaultMessage="homePage.infoSection.info2.title"
              />
            </h2>
            <p className="text-center lg:text-left rtl:lg:text-right text-gray-600 leading-relaxed group-hover:text-white">
              <FormattedMessage
                id="homePage.infoSection.info2.content"
                defaultMessage="homePage.infoSection.info2.content"
              />
            </p>
          </div>
          <div className="group bg-gray-200 p-8 h-[19rem] hover:bg-mainOrange transition ease-linear duration-200">
            <h2 className="text-center lg:text-left rtl:lg:text-right text-xl lg:text-2xl font-bold my-4 group-hover:text-white">
              <FormattedMessage
                id="homePage.infoSection.info3.title"
                defaultMessage="homePage.infoSection.info3.title"
              />
            </h2>
            <p className="text-center lg:text-left rtl:lg:text-right text-gray-600 leading-relaxed group-hover:text-white">
              <FormattedMessage
                id="homePage.infoSection.info3.content"
                defaultMessage="homePage.infoSection.info3.content"
              />
            </p>
          </div>
          <div className="group bg-gray-300 p-8 h-[19rem] rounded-b-2xl lg:rounded-br-2xl lg:rtl:rounded-bl-2xl lg:rtl:rounded-br-none lg:rounded-bl-none hover:bg-mainOrange transition ease-linear duration-200">
            <h2 className="text-center lg:text-left rtl:lg:text-right text-xl lg:text-2xl font-bold my-4 group-hover:text-white">
              <FormattedMessage
                id="homePage.infoSection.info4.title"
                defaultMessage="homePage.infoSection.info4.title"
              />
            </h2>
            <p className="text-center lg:text-left rtl:lg:text-right text-gray-600 leading-relaxed group-hover:text-white">
              <FormattedMessage
                id="homePage.infoSection.info4.content"
                defaultMessage="homePage.infoSection.info4.content"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
