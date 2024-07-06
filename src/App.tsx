import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Store from "./Components/Store";
import {HairSalon} from "./Model/HairSalon";
import Book from "./Components/Book";


let data:HairSalon = {
  name: 'Shine Hair Salon',
  address: {
    streetNumber: '581 Glenridding Ravine Drive SW',
    city: 'Edmonton',
    province: 'AB',
    zipCode: 'T6W 4N9'
  },
  phoneNumber: '780-965-5021',
  instagram: 'IG@Shine_0113',
  services: [
    { id: "1", category: 'Hair Cut', subCategory: 'Kids Hair Cut', description: "Basic haircut for kids", price: "$25 +" },
    { id: "2", category: 'Hair Cut', subCategory: 'Men Hair Cut', description: "Standard men's haircut", price: "$30 +" },
    { id: "3", category: 'Hair Cut', subCategory: 'Women Hair Cut', description: "Standard women's haircut", price: "$45 +" },
    { id: "4", category: 'Hair Perm', subCategory: 'Men Hair Perm', description: "Basic perm for men", price: "$60 +" },
    { id: "5", category: 'Hair Perm', subCategory: 'Men Heat Perm', description: "Standard heat perm for men", price: "$100 +" },
    { id: "6", category: 'Hair Perm', subCategory: 'Men Magic Straight Perm', description: "Standard magic straight perm for men", price: "$100 +" },
    { id: "7", category: 'Hair Perm', subCategory: 'Women Hair Perm', description: "Basic perm for women", price: "$120 +" },
    { id: "8", category: 'Hair Perm', subCategory: 'Women Heat Perm', description: "Standard heat perm for women", price: "$160 +" },
    { id: "9", category: 'Hair Perm', subCategory: 'Women Magic Straight Perm', description: "Standard magic straight perm for women", price: "$160 +" },
    { id: "10", category: 'Coloring', subCategory: 'Men\'s Coloring', description: "Basic hair coloring for men", price: "$40 +" },
    { id: "11", category: 'Coloring', subCategory: 'Women\'s Coloring', description: "Basic hair coloring for women", price: "$120 +" },
    { id: "12", category: 'Coloring', subCategory: 'Color Refresh', description: "Basic hair coloring for women", price: "$70 +" },
    { id: "13", category: 'Coloring', subCategory: 'Ombre', description: "Basic hair coloring for women", price: "Upon Consultation" },
    { id: "14", category: 'Treatment', subCategory: 'Men Hair Treatment', description: "Basic hair treatment for men", price: "$40 +" },
    { id: "15", category: 'Treatment', subCategory: 'Women Hair Treatment', description: "Basic hair treatment for women", price: "$65 +" },
    { id: "16", category: 'Hair Styling', subCategory: 'Shampoo & Blowout', description: "Basic hair styling with shampoo and dry", price: "$35 +" },
    { id: "17", category: 'Hair Styling', subCategory: 'Curl', description: "Basic hair styling with curl service", price: "$35 +" },
    { id: "18", category: 'Hair Styling', subCategory: 'Straightening', description: "Basic hair styling with straightening", price: "$35 +" },
    { id: "19", category: 'Hair Styling', subCategory: 'Special Occasion', description: "Basic hair styling for special occasion", price: "$65 +" },
    { id: "20", category: 'Hair Styling', subCategory: 'Bridal', description: "Basic hair styling for bridal", price: "Upon Consultation" },
    { id: "21", category: 'Hair Extension', subCategory: 'Hair Extension', description: "Standard hair extensions", price: "$100 +" },
  ]
}

const App:React.FC = () => {
  const [hairSalon] = useState<HairSalon>(data);

  return (
      <div className="App">
        <Router>
          <Routes>
            <Route index element={<Store info={hairSalon}/>}/>
            <Route path="/" element={<Store info={hairSalon}/>}/>
            <Route path="/book" element={<Book />}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
