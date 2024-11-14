// src/components/AyigiriVerseDetail.jsx
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const AyigiriVerseDetail = () => {
    const { id } = useParams(); // Get the verse ID from the URL
    const [verseDetail, setVerseDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVerseDetail = async () => {
            try {
                console.log("Fetching verse with ID:", id);
                const verseDoc = doc(db, 'ayigiriverselist', id);
                const docSnapshot = await getDoc(verseDoc);
                
                if (docSnapshot.exists()) {
                    console.log("Verse data:", docSnapshot.data());
                    setVerseDetail({ id: docSnapshot.id, ...docSnapshot.data() });
                } else {
                    setError("Verse not found");
                    console.error("Document does not exist");
                }
            } catch (error) {
                console.error("Error fetching verse detail: ", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVerseDetail();
    }, [id]);

    if (loading) {
        return <p>Loading verse details...</p>;
    }

    if (error) {
        return <p>Error fetching verse details: {error}</p>;
    }

    return (
        <div>
            <h2>Verse Detail</h2>
            {verseDetail && (
                <div>
                    <h3>{verseDetail.verse}</h3> {/* Ensure this matches your Firestore document */}
                    <p>{verseDetail.translation}</p> {/* Ensure this matches your Firestore document */}
            {verseDetail.image && (
                <div>
                    <h4>Image</h4>
                    <img src={verseDetail.image} alt="Verse Illustration" style={{ width: '100%', height: 'auto' }} />
                </div>
            )}
            <h4>Context</h4>
            <p>{verseDetail.context}</p>
              </div>
            )}
        </div>
    );
};

export default AyigiriVerseDetail;
