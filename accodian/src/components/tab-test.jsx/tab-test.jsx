import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {

    const [currentTabIndex,setCurrenTabIndex]=useState(0)
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem) => (
          <div key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex]&& tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}


///