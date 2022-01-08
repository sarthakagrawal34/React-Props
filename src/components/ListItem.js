import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

const ListItem = (props) => {
  const { icon, link, name, bgColor } = props.data;
  return (
    <div className="ListItem" style={{ backgroundColor: bgColor }}>
      <img src={icon} />
      <a href={link}> {name} </a>
    </div>
  );
};

export default ListItem;
