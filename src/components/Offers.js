// import React from 'react';
// import '../assets/styles/Offers.css';
// import offer1 from '../assets/images/offer1.png';
// import offer2 from '../assets/images/offer2.png';
// import offer3 from '../assets/images/offer3.png';
// import offer4 from '../assets/images/offer4.png';
// import offer5 from '../assets/images/offer5.png';

// function Offers() {
//   const offers = [offer1, offer2, offer3, offer4, offer5];

//   return (
//     <div className="offers-container mt-20">
//       {offers.map((offer, index) => (
//         <div key={index} className="offer-card">
//           <img src={offer} alt={`Offer ${index + 1}`} className="offer-image" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Offers;


import React from 'react';
import '../assets/styles/Offers.css'; // Keep for custom styles, if needed
import offer1 from '../assets/images/offer1.png';
import offer2 from '../assets/images/offer2.png';
import offer3 from '../assets/images/offer3.png';
import offer4 from '../assets/images/offer4.png';
import offer5 from '../assets/images/offer5.png';

function Offers() {
  const offers = [offer1, offer2, offer3, offer4, offer5];

  return (
    <div className="overflow-hidden whitespace-nowrap relative mt-40">
      <div className="inline-block animate-scroll">
        {offers.map((offer, index) => (
          <div key={index} className="inline-block w-48 mx-2">
            <img src={offer} alt={`Offer ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
        {/* Duplicate offers for infinite effect */}
        {offers.map((offer, index) => (
          <div key={index + offers.length} className="inline-block w-48 mx-2">
            <img src={offer} alt={`Offer ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;

