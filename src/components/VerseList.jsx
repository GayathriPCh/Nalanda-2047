// src/components/VersesList.jsx
import  { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useParams, Link } from 'react-router-dom';

const VersesList = () => {
    const { category } = useParams();
    const [verses, setVerses] = useState([]);

    useEffect(() => {
        const fetchVerses = async () => {
            try {
                const q = query(collection(db, 'teachings'), where('category', '==', category));
                const querySnapshot = await getDocs(q);
                const versesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setVerses(versesData);
            } catch (error) {
                console.error("Error fetching verses: ", error);
            }
        };

        fetchVerses();
    }, [category]);

    return (
        <div>
            <h2>Verses for {category}</h2>
            <ul>
                {verses.map(verse => (
                    <li key={verse.id}>
                        <Link to={`/verse/${verse.id}`}>
                            <h3>{verse.verse}</h3>
                            <p>{verse.translation}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VersesList;
