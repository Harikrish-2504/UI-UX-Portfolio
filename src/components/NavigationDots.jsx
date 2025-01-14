import React from "react";

const NavigationDots = ({active}) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map((items, index) => (
        <a 
        key={items+index}
        className="app__navigation-dot"
        href={`#${items}`} 
      
        style={active === items ? { backgroundColor: '#313BAC' } : {}}
        />

      ))
      
      }
    </div>
  );
};

export default NavigationDots;
