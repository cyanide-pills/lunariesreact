import React, { useState } from 'react';

const items = [

  {
    title: "Woman with a parasol",
    image: "images/paintings/woman_with_a_parasol.jpg",
    price: 20000,
    artist: "Claude Monet",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1875 
  },
    {
    title: "The tomb of Bocklin",
    image: "images/paintings/ferdinand_keller_thetombofbocklin.jpg",
    price: 20000,
    artist: "Ferdinand Keller",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1902 
  },
  {
    title: "The Kiss",
    image: "images/paintings/klimt.jpg",
    price: 20000,
    artist: "Gustav Klimt",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1908 
  },
    {
    title: "Jacob wrestling with the angel",
    image: "images/paintings/dore2.jpg",
    price: 20000,
    artist: "Gustave Doré",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1855 
  },
  {
    title: "The lantern bearers",
    image: "images/paintings/maxfieldparrish1.jpg",
    price: 20000,
    artist: "Maxfield Parrish",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1908

  },
  {
    title: "The cactus lover",
    image: "images/paintings/spitzweg1.jpg",
    price: 20000,
    artist: "Carl Spitzweg",
    dimensiones: "20x24",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    year: 1855 
  }
];

function Prints() {
  return (
    <div id="item-list">
      {items.map((item, index) => (
        <div key={index} className="print-product">
          <img src={item.image} alt={item.title} className="print-image" />
          <div className="print-info">
            <p className="print-name">{item.title}</p>
            <div className="price-row">
              <p className="price">{item.price} CLP</p>
              <button className="add-button">
                <img src="images/icons/add.png" alt="Add" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Prints;
