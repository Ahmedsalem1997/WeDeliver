import { FormattedMessage } from "react-intl";

const BannerSection = ({ page }) => {
  return (
    <section className="lg:min-h-[24rem] overflow-hidden bg-[url(https://prod-website-backend-uploads.s3.eu-west-1.amazonaws.com/team_hero_ce893d83b8.jpg?auto=format&fit=max&w=1920&q=100)] bg-cover bg-center bg-no-repeat">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-lg text-center sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            <FormattedMessage id={`${page}.title`} defaultMessage=" " />
          </h2>
          <p className="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed rtl:sm:text-right">
            <FormattedMessage id={`${page}.subtitle`} defaultMessage=" "
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
