// src/components/AyigiriVersesList.jsx
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const AyigiriVersesList = () => {
    const [verses, setVerses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVerses = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'ayigiriverselist'));
                const versesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setVerses(versesData);
            } catch (error) {
                console.error("Error fetching verses: ", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVerses();
    }, []);

    if (loading) {
        return <p>Loading verses...</p>;
    }

    if (error) {
        return <p>Error fetching verses: {error}</p>;
    }

    return (
        <div>
            <h2>Ayigiri Nandini Verses</h2>
            <ul>
                {verses.map(verse => (
                    <li key={verse.id}>
                        <Link to={`/ayigiri-verse/${verse.id}`}>
                            <h3>{verse.verse}</h3> {/* Display the verse here */}
                        </Link>
                        <p>{verse.translation}</p> {/* Display the translation here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AyigiriVersesList;
