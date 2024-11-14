// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import CategoryList from './components/CategoryList'; // Links to Bhagavad Gita verses
import AyigiriVersesList from './components/AyigiriVersesList'; // Links to Ayigiri Nandini verses
import VerseDetail from './components/VerseDetail'; // For verse details
import VersesList from './components/VerseList'; // For Bhagavad Gita verses
import AyigiriVerseDetail from './components/AyigiriVerseDetail'; // For Ayigiri Nandini verse details
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/categories" element={<CategoryList />} /> {/* Category List for Bhagavad Gita */}
                <Route path="/categories/:category" element={<VersesList />} /> {/* Verses for selected category */}
                <Route path="/ayigiri-nandini" element={<AyigiriVersesList />} /> {/* Verses for Ayigiri Nandini */}
                <Route path="/ayigiri-verse/:id" element={<AyigiriVerseDetail />} /> {/* Add this route */}
                <Route path="/verse/:id" element={<VerseDetail />} /> {/* Verse details page */}
            </Routes>
        </Router>
    );
};

export default App;
