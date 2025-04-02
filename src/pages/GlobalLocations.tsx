// import React from 'react';
// import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
// import { motion } from 'framer-motion';
// import { Tooltip } from 'react-tooltip';

// const GlobalLocations = () => {
//   // Featured countries with their coordinates and details
//   const featuredCountries = [
//     {
//       name: "India",
//       coordinates: [78.9629, 20.5937],
//       markerOffset: -15,
//       students: "1000+"
//     },
//     {
//       name: "United States",
//       coordinates: [-95.7129, 37.0902],
//       markerOffset: -15,
//       students: "800+"
//     },
//     {
//       name: "Zimbabwe",
//       coordinates: [29.1549, -19.0154],
//       markerOffset: -15,
//       students: "500+"
//     },
//     {
//       name: "South Africa",
//       coordinates: [22.9375, -30.5595],
//       markerOffset: -15,
//       students: "600+"
//     }
//   ];

//   return (
//     <div className="relative w-full h-[500px] bg-blue-50 rounded-xl overflow-hidden mb-12">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="absolute inset-0"
//       >
//         <ComposableMap
//           projection="geoMercator"
//           projectionConfig={{
//             scale: 150,
//             center: [0, 20]
//           }}
//         >
//           <Geographies geography="/features.json">
//             {({ geographies }) =>
//               geographies.map((geo) => {
//                 const isFeatured = featuredCountries.find(
//                   country => country.name === geo.properties.name
//                 );
//                 return (
//                   <Geography
//                     key={geo.rsmKey}
//                     geography={geo}
//                     fill={isFeatured ? "#3B82F6" : "#E5E7EB"}
//                     stroke="#FFFFFF"
//                     strokeWidth={0.5}
//                     style={{
//                       default: {
//                         outline: "none"
//                       },
//                       hover: {
//                         fill: isFeatured ? "#2563EB" : "#D1D5DB",
//                         outline: "none"
//                       }
//                     }}
//                   />
//                 );
//               })
//             }
//           </Geographies>

//           {featuredCountries.map(({ name, coordinates, markerOffset, students }) => (
//             <Marker key={name} coordinates={coordinates}>
//               <motion.g
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//               >
//                 <circle
//                   r={6}
//                   fill="#EF4444"
//                   stroke="#FFFFFF"
//                   strokeWidth={2}
//                   data-tooltip-id={`marker-${name}`}
//                 />
//                 <text
//                   textAnchor="middle"
//                   y={markerOffset}
//                   style={{ 
//                     fontFamily: "system-ui",
//                     fontSize: "10px",
//                     fill: "#374151",
//                     fontWeight: "bold"
//                   }}
//                 >
//                   {name}
//                 </text>
//               </motion.g>
//               <Tooltip id={`marker-${name}`}>
//                 <div className="p-2">
//                   <p className="font-bold">{name}</p>
//                   <p>{students} Students</p>
//                 </div>
//               </Tooltip>
//             </Marker>
//           ))}
//         </ComposableMap>
//       </motion.div>

//       <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg shadow-lg">
//         <h3 className="text-lg font-bold text-gray-800 mb-2">Global Presence</h3>
//         <div className="grid grid-cols-2 gap-4">
//           {featuredCountries.map((country) => (
//             <div key={country.name} className="flex items-center space-x-2">
//               <div className="w-3 h-3 rounded-full bg-blue-500" />
//               <span className="text-sm text-gray-600">{country.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GlobalLocations;