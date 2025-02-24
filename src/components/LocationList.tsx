import React, { useEffect, useState } from 'react';
import { Builder } from '@builder.io/react';
import { fetchLocations } from '../api/builderApi';

interface Location {
  id: number;
  name: string;
  address: {
    Default: string;
  };
  phone: string;
  hours: string;
  directions: string;
  state: string;
  metro: string;
}

const LocationList: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedMetro, setSelectedMetro] = useState('');

  useEffect(() => {
    const getLocations = async () => {
      const data = await fetchLocations();
      setLocations(data);
    };
    getLocations();
  }, []);

  const states = Array.from(new Set(locations.map(location => location.state)));
  const metros = Array.from(new Set(locations.map(location => location.metro)));

  const filteredLocations = locations.filter(location =>
    (selectedState ? location.state === selectedState : true) &&
    (selectedMetro ? location.metro === selectedMetro : true)
  );

  return (
    <div className="p-4 bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Our Locations</h2>
      <div className="mb-4">
        <select
          className="border rounded p-2 mr-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select State</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <select
          className="border rounded p-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          onChange={(e) => setSelectedMetro(e.target.value)}
        >
          <option value="">Select Metro</option>
          {metros.map(metro => (
            <option key={metro} value={metro}>{metro}</option>
          ))}
        </select>
      </div>
      <ul>
        {filteredLocations.map((location) => (
          <li key={location.id} className="py-4 border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <h3 className="font-medium text-xl text-gray-800 dark:text-white">{location.name}</h3>
            <p>{location.address.Default || 'Address not available'}</p>
            <p>State: {location.state}</p>
            <p>Metro: {location.metro}</p>
            <p>Phone: {location.phone}</p>
            <a href={location.directions} className="text-blue-600 dark:text-blue-400 hover:underline">Get Directions</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Builder.registerComponent(LocationList, {
  name: 'LocationList',
});

export default LocationList;
