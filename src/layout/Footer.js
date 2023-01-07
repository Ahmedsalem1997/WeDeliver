const Footer = () => {
  return (
    <div className="bg-dark h-100">
      <div className="container mx-auto p-8 py-32 lg:flex">
        <div className="lg:w-1/4 px-4">
          <img
            src={require(`../assets/images/Secondary-LogoWhite.png`)}
            alt="WeDeliver"
            className="max-w-[10rem] mx-auto lg:mx-0"
          />
          <p className="text-center lg:text-left text-gray-400 leading-relaxed my-8">
            On a mission to help the mobility gig economy thrives in the
            emerging markets.
          </p>
        </div>
        <div className="text-center lg:text-left lg:w-1/4 px-4">
          <h2 className="text-white font-bold uppercase mt-8 mb-4 lg:mt-0">Company</h2>
          <div className="useful-links flex flex-col justify-between space-y-2">
            <a href="/" className="text-gray-500">About Us</a>
            <a href="/" className="text-gray-500">Careers</a>
            <a href="/" className="text-gray-500">Press</a>
          </div>
        </div>
        <div className="text-center lg:text-left lg:w-1/4 px-4">
          <h2 className="text-white font-bold uppercase mt-8 mb-4 lg:mt-0">GET HELP</h2>
          <div className="useful-links flex flex-col justify-between space-y-2">
            <a href="/" className="text-gray-500">Contact Us</a>
            <a href="/" className="text-gray-500">FAQ</a>
            <a href="/" className="text-gray-500">Chat</a>
          </div>
        </div>
        <div className="text-center lg:text-left lg:w-1/4 px-4">
          <h2 className="text-white font-bold uppercase mt-8 mb-4 lg:mt-0">GET STARTED</h2>
          <div className="useful-links flex flex-col justify-between space-y-2">
            <a href="/" className="text-gray-500">Enterprise Signup</a>
            <a href="/" className="text-gray-500">Captains Signup</a>
            <a href="/" className="text-gray-500">Earnings Calculator</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <p className="text-gray-400">Copyright © 2023 - WEDELIVERTECH INC.</p>
      </div>
    </div>
  );
};

export default Footer;
