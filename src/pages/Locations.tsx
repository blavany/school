import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, GraduationCap, Navigation } from 'lucide-react';
import Footer from '../components/Footer';

interface LocationData {
  id: string;
  country: string;
  state: string;
  city: string;
  branch: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  studentCount: number;
  facilities: string[];
  timings: string;
  programs: string[];
}

const locationData: LocationData[] = [
  // India Locations - Maharashtra
  {
    id: 'in-mh-mu-bandra',
    country: 'India',
    state: 'Maharashtra',
    city: 'Mumbai',
    branch: 'Bandra West',
    address: '123 Hill Road, Bandra West, Mumbai 400050',
    phone: '+91 22 1234 5678',
    email: 'mumbai.bandra@b4school.com',
    image: 'https://media.istockphoto.com/id/1307189136/photo/gateway-of-india-mumbai-maharashtra-monument-landmark-famous-place-magnificent-view-without.jpg?s=612x612&w=0&k=20&c=gGzzkXY5bAVbRbokzrjvkt7Ve-Z3yzSVN04NaMqyBB8=',
    studentCount: 250,
    facilities: ['Playground', 'Swimming Pool', 'Music Room', 'Art Studio'],
    timings: '8:00 AM - 3:00 PM',
    programs: ['Pre-KG', 'Lower KG', 'Upper KG']
  },
  {
    id: 'in-mh-pu-koregaon',
    country: 'India',
    state: 'Maharashtra',
    city: 'Pune',
    branch: 'Guru Nanak Nagar',
    address: '45 North Main Road, Guru Nanak Nagar, Pune 411001',
    phone: '+91 20 2345 6789',
    email: 'pune.koregaon@b4school.com',
    image: 'https://static.toiimg.com/photo/77718645.cms',
    studentCount: 200,
    facilities: ['Indoor Gym', 'Library', 'Science Lab', 'Theater'],
    timings: '8:30 AM - 3:30 PM',
    programs: ['Nursery', 'Junior KG', 'Senior KG']
  },
 
 

  // India Locations - Haryana
  {
    id: 'in-hr-ggn-sector56',
    country: 'India',
    state: 'Haryana',
    city: 'Chulkana',
    branch: 'Chulkana',
    address: '123 Sector 56, Chulkana 122011',
    phone: '+91 124 234 5678',
    email: 'chulkana.sec56@b4school.com',
    image: 'https://cdnbbsr.s3waas.gov.in/s37b7a53e239400a13bd6be6c91c4f6c4e/uploads/bfi_thumb/2020051468-qnwxl6jbsbuz2v7936cj4ye71mm0x5bnf1mzbqlwha.jpg',
    studentCount: 220,
    facilities: ['Swimming Pool', 'Indoor Sports', 'STEM Lab', 'Library'],
    timings: '8:00 AM - 3:00 PM',
    programs: ['Pre-Nursery', 'Nursery', 'Kindergarten']
  },
  {
    id: 'in-hr-fbd-sector21',
    country: 'India',
    state: 'Haryana',
    city: 'Jaurasi',
    branch: 'Jaurasi',
    address: '45 Sector 21C, jaurasi 121001',
    phone: '+91 129 234 5678',
    email: 'jaurasi.sec21@b4school.com',
    image: 'https://www.hry.in/wp-content/uploads/2021/11/word-image-2.jpeg',
    studentCount: 180,
    facilities: ['Playground', 'Activity Room', 'Music Studio', 'Garden'],
    timings: '8:30 AM - 3:30 PM',
    programs: ['Play School', 'Nursery', 'KG']
  },
  {
    id: 'in-hr-pkla-sector6',
    country: 'India',
    state: 'Haryana',
    city: 'Machhrouli',
    branch: 'Machhrouli',
    address: '67 Sector 6, Machhrouli 134109',
    phone: '+91 172 234 5678',
    email: 'machhrouli.sec6@b4school.com',
    image: 'https://www.indiaeasytrip.com/states-of-india/places-to-visit-in-rajasthan/jodhpur-destination.gif',
    studentCount: 150,
    facilities: ['Sports Ground', 'Art Room', 'Dance Studio', 'Library'],
    timings: '8:15 AM - 3:15 PM',
    programs: ['Toddler', 'Pre-KG', 'KG']
  },
  {
    id: 'in-hr-knl-model',
    country: 'India',
    state: 'Haryana',
    city: 'Manana',
    branch: 'Manana',
    address: '89 Model Town, Manana 132001',
    phone: '+91 184 234 5678',
    email: 'manana.model@b4school.com',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/64/0c/84/serene.jpg?w=1400&h=1400&s=1',
    studentCount: 140,
    facilities: ['Indoor Games', 'Music Room', 'Science Lab', 'Garden'],
    timings: '8:00 AM - 3:00 PM',
    programs: ['Nursery', 'Junior KG', 'Senior KG']
  },

  // India Locations - Telangana
  {
    id: 'in-tg-hyd-banjara',
    country: 'India',
    state: 'Telangana',
    city: 'Hyderabad',
    branch: 'Banjara Hills',
    address: '123 Road No. 12, Banjara Hills, Hyderabad 500034',
    phone: '+91 40 2345 6789',
    email: 'hyderabad.banjara@b4school.com',
    image: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-171676147_full.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75',
    studentCount: 240,
    facilities: ['Swimming Pool', 'Smart Classes', 'Activity Center', 'Library'],
    timings: '8:30 AM - 3:30 PM',
    programs: ['Pre-Primary', 'Primary', 'Advanced']
  },
  {
    id: 'in-tg-wgl-hanamkonda',
    country: 'India',
    state: 'Telangana',
    city: 'Warangal',
    branch: 'Hanamkonda',
    address: '45 KU Road, Hanamkonda, Warangal 506001',
    phone: '+91 870 234 5678',
    email: 'warangal.hanamkonda@b4school.com',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SxRdFbsmC4uUorXKrBcA94c3SVC1CRwIXw&s',
    studentCount: 160,
    facilities: ['Play Area', 'Music Room', 'Art Studio', 'Garden'],
    timings: '8:15 AM - 3:15 PM',
    programs: ['Nursery', 'LKG', 'UKG']
  },
  {
    id: 'in-tg-krmr-central',
    country: 'India',
    state: 'Telangana',
    city: 'Karimnagar',
    branch: 'Central',
    address: '67 Jagitial Road, Karimnagar 505001',
    phone: '+91 878 234 5678',
    email: 'karimnagar.central@b4school.com',
    image: 'https://smartcity.eletsonline.com/wp-content/uploads/2016/06/karimnagar-city.jpg',
    studentCount: 140,
    facilities: ['Indoor Sports', 'Dance Room', 'Science Lab', 'Library'],
    timings: '8:00 AM - 3:00 PM',
    programs: ['Play School', 'Pre-KG', 'KG']
  },
  {
    id: 'in-tg-nzb-gandhi',
    country: 'India',
    state: 'Telangana',
    city: 'Nizamabad',
    branch: 'Gandhi Chowk',
    address: '89 Gandhi Chowk, Nizamabad 503001',
    phone: '+91 846 234 5678',
    email: 'nizamabad.gandhi@b4school.com',
    image: 'https://www.seawatersports.com/images/places/nizamabad-fort.png',
    studentCount: 130,
    facilities: ['Playground', 'Activity Room', 'Computer Lab', 'Garden'],
    timings: '8:30 AM - 3:30 PM',
    programs: ['Toddler', 'Nursery', 'Kindergarten']
  },

  // USA Locations - California
  {
    id: 'us-ca-sf-marina',
    country: 'USA',
    state: 'California',
    city: 'San Francisco',
    branch: 'Marina District',
    address: '789 Marina Blvd, San Francisco, CA 94123',
    phone: '+1 415 555 0123',
    email: 'sf.marina@b4school.com',
    image: 'data:image/jpeg;base64,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',
    studentCount: 180,
    facilities: ['Indoor Gym', 'Library', 'Science Lab', 'Theater'],
    timings: '7:30 AM - 2:30 PM',
    programs: ['Toddler Program', 'Pre-School', 'Kindergarten']
  },
 
  {
    id: 'us-ca-sd-lajolla',
    country: 'USA',
    state: 'Iowa',
    city: 'Bettendorf',
    branch: 'Bettendorf',
    address: '123 Prospect St, La Jolla, CA 92037',
    phone: '+1 858 555 0123',
    email: 'sd.lajolla@b4school.com',
    image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/268000/268867-Des-Moines.jpg',
    studentCount: 160,
    facilities: ['Beach Access', 'STEM Lab', 'Art Center', 'Library'],
    timings: '8:00 AM - 3:00 PM',
    programs: ['Infant Care', 'Toddler', 'Pre-K']
  },
 
  // USA Locations - New York
 





 
 

  // Zimbabwe Locations - Harare Province
  {
    id: 'zw-ha-ha-borrowdale',
    country: 'Zimbabwe',
    state: 'Mashonaland West',
    city: 'Kutam',
    branch: 'Gangarahwe village Zvimba',
    address: '123 Gangarahwe village Zvimba',
    phone: '+263 24 2123456',
    email: 'harare.borrowdale@b4school.com',
    image: 'https://media.istockphoto.com/id/1081365424/photo/aerial-view-of-famous-victoria-falls-zimbabwe-and-zambia.jpg?s=612x612&w=0&k=20&c=-w7lj9taR2qyenSo_zjNQCacXZkXmKKhg0u7LjKpZqQ=',
    studentCount: 150,
    facilities: ['Sports Field', 'Computer Lab', 'Dance Studio', 'Garden'],
    timings: '8:30 AM - 3:30 PM',
    programs: ['Early Learning', 'Pre-Primary', 'Primary Prep']
  },
 

  


 
  
 

  // South Africa Locations - KwaZulu-Natal
  {
    id: 'za-kzn-du-umhlanga',
    country: 'South Africa',
    state: 'KwaZulu-Natal',
    city: 'Durban',
    branch: '688 sarnia road',
    address: '789 Lighthouse Road, Umhlanga, Durban',
    phone: '+27 31 345 6789',
    email: 'durban.umhlanga@b4school.com',
    image: 'https://assets.cntraveller.in/photos/65a1370fda0c0e9786f852f0/16:9/w_1024%2Cc_limit/Cape_Town_When_to_Visit_South_Africa_November_GettyImages-671323338.jpg',
    studentCount: 200,
    facilities: ['Beach Access', 'Multi-Purpose Hall', 'Art Center', 'Reading Room'],
    timings: '7:45 AM - 2:45 PM',
    programs: ['Nursery', 'Reception', 'Grade R']
  },
  {
    id: 'za-kzn-du-morningside',
    country: 'South Africa',
    state: 'KwaZulu-Natal',
    city: 'World Atlas',
    branch: 'Morningside',
    address: '123 Florida Road, Morningside, Durban',
    phone: '+27 31 345 6790',
    email: 'durban.morningside@b4school.com',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    studentCount: 180,
    facilities: ['Swimming Pool', 'Music Room', 'Science Lab', 'Garden'],
    timings: '8:00 AM - 3:00 PM',
    programs: ['Pre-Grade R', 'Grade R', 'Grade 1']
  },

  
];

const Locations = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const uniqueCountries = [...new Set(locationData.map(loc => loc.country))];
  const filteredStates = [...new Set(locationData
    .filter(loc => !selectedCountry || loc.country === selectedCountry)
    .map(loc => loc.state))];
  const filteredCities = [...new Set(locationData
    .filter(loc => (!selectedCountry || loc.country === selectedCountry) &&
                   (!selectedState || loc.state === selectedState))
    .map(loc => loc.city))];

  const filteredLocations = locationData.filter(loc =>
    (!selectedCountry || loc.country === selectedCountry) &&
    (!selectedState || loc.state === selectedState) &&
    (!selectedCity || loc.city === selectedCity)
  );

  const handleReset = () => {
    setSelectedCountry(null);
    setSelectedState(null);
    setSelectedCity(null);
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Global Locations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover B4School centers across the world, each offering unique programs
            and facilities tailored to local communities.
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Country Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCountry || ''}
                onChange={(e) => {
                  setSelectedCountry(e.target.value || null);
                  setSelectedState(null);
                  setSelectedCity(null);
                }}
              >
                <option value="">All Countries</option>
                {uniqueCountries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* State Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedState || ''}
                onChange={(e) => {
                  setSelectedState(e.target.value || null);
                  setSelectedCity(null);
                }}
                disabled={!selectedCountry}
              >
                <option value="">All States</option>
                {filteredStates.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* City Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCity || ''}
                onChange={(e) => setSelectedCity(e.target.value || null)}
                disabled={!selectedState}
              >
                <option value="">All Cities</option>
                {filteredCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {(selectedCountry || selectedState || selectedCity) && (
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredLocations.map((location) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={location.image}
                    alt={location.branch}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/80 mb-2">
                      <Navigation className="w-4 h-4" />
                      <span>{location.country} / {location.state}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white">{location.branch}</h2>
                    <p className="text-white/90">{location.city}</p>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Students</p>
                        <p className="font-semibold">{location.studentCount}+</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Clock className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Hours</p>
                        <p className="font-semibold">{location.timings}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                        Programs
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {location.programs.map((program, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Facilities</h3>
                      <div className="flex flex-wrap gap-2">
                        {location.facilities.map((facility, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <p className="text-gray-600">{location.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <p className="text-gray-600">{location.phone}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <p className="text-gray-600">{location.email}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => window.location.href = `mailto:${location.email}`}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Contact This Location</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Locations Found</h3>
            <p className="text-gray-600">
              Try adjusting your filters to find more locations.
            </p>
          </div>
        )}
      </div>
      <Footer/>
    </div>
   
  );
};

export default Locations;