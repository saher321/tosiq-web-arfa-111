import React, { useState } from 'react'

const ReactTabs = () => {
    const [currentTab, setCurrentTab] = useState("profile")

    const activeTabCss = "border-b text-black"

    const handleChangeTab = (currentTabName) => {
        setCurrentTab(currentTabName)
    }
  return (
    <div>
        <div className='tab-btns m-5 flex gap-3 text-gray-600'>
            <button 
            className={`active-tab pb-2 ${currentTab == "profile" && activeTabCss}`} 
            onClick={() => handleChangeTab("profile")}>
                Profile
            </button>
            <button 
            className={`active-tab pb-2 ${currentTab == "preferences" && activeTabCss}`} 
            onClick={() => handleChangeTab("preferences")}>
                Preferences
            </button>
            <button 
            className={`active-tab pb-2 ${currentTab == "settings" && activeTabCss}`} 
            onClick={() => handleChangeTab("settings")}>
                Settings
            </button>
        </div>

        <div className='m-5'>
            {
                currentTab == "profile" ?
                <div>Profile content goes here</div> :
                currentTab == "preferences" ?
                <div>Preferences content goes here</div> :
                currentTab == "settings" &&
                <div>Settings content goes here</div>
            }
        </div>
    </div>
  )
}

export default ReactTabs