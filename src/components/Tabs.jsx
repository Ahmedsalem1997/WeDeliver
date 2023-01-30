import React, { useState } from "react";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "With Us",
      content: require(`../assets/images/with-us.png`),
    },
    {
      id: 2,
      title: "Without Us",
      content: require(`../assets/images/without-us.png`),
    },
  ];

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <nav className="flex border-b border-gray-100 text-md font-medium justify-center">
        {tabs.map((tab) => (
          <div key={tab.id}>
            <button
              className={toggleState === tab.id ? "tab tab-active" : "tab"}
              onClick={() => toggleTab(tab.id)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </nav>
      {tabs.map((tab) => (
        <div key={tab.id} className="content-tabs container mx-auto">
          <div
            className={
              toggleState === tab.id ? "content content-active" : "content"
            }
          >
            <img className="lg:w-[60rem]" src={tab.content} alt="with us" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
