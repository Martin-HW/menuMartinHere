import React from "react";

const Menu = ({ items, setMenuItems }) => {
  const deleteFunction = (myId) => {
    setMenuItems(items.filter((val) => val.id !== myId));
  };
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <button className="deleteButton" onClick={() => deleteFunction(id)}>
              Delete
            </button>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
      {items.length === 0 && (
        <h3 className="selection">Select a category please!!!!</h3>
      )}
    </div>
  );
};

export default Menu;
