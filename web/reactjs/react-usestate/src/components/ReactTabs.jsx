import React, { useState } from 'react'

const ReactTabs = () => {
    const [currentTab, setCurrentTab] = useState("profile")
    const handleChangeTab = (currentTabName) => {
        setCurrentTab(currentTabName)
    }
  return (
    <div>
        <div>
            <button onClick={() => handleChangeTab("profile")}>
                Profile
            </button> | {" "}
            <button onClick={() => handleChangeTab("preferences")}>
                Preferences
            </button> | {" "}
            <button onClick={() => handleChangeTab("settings")}>
                Settings
            </button>
        </div>

        <div>
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