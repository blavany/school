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
    image: 'https://images.unsplash.com/photo-1598714805247-5dd440d87124?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1521464302861-ce943915d1c3?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1521464302861-ce943915d1c3?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
    studentCount: 200,
    facilities: ['Beach Access', 'Multi-Purpose Hall', 'Art Center', 'Reading Room'],
    timings: '7:45 AM - 2:45 PM',
    programs: ['Nursery', 'Reception', 'Grade R']
  },
  {
    id: 'za-kzn-du-morningside',
    country: 'South Africa',
    state: 'KwaZulu-Natal',
    city: 'Durban',
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