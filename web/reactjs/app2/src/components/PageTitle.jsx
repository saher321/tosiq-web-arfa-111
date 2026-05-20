import React from 'react'

const PageTitle = ({ title, subheading }) => {
  return (
    <div style={{
        margin: "0px 0px 4px 0px",
        color: "navy",
        backgroundColor: "yellow",
    }}>
      { title }

      <div>
        {subheading && subheading}
      </div>

    </div>
  )
}

export default PageTitle