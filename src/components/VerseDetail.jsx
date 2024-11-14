import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { useParams, Link } from 'react-router-dom';

const VerseDetail = () => {
    const { id } = useParams();
    const [verseDetail, setVerseDetail] = useState(null);
    const [relatedVerses, setRelatedVerses] = useState([]);

    useEffect(() => {
        const fetchVerseDetail = async () => {
            const docRef = doc(db, 'teachings', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setVerseDetail(docSnap.data());
                fetchRelatedVerses(docSnap.data().category); // Fetch related verses by category
            } else {
                console.log('No such document!');
            }
        };

        fetchVerseDetail();
    }, [id]);

    const fetchRelatedVerses = async (category) => {
        const q = query(collection(db, 'teachings'), where('category', '==', category));
        const querySnapshot = await getDocs(q);
        const versesData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        setRelatedVerses(versesData);
    };

    if (!verseDetail) return <div>Loading...</div>;

    // Filter out the current verse from the related verses
    const filteredRelatedVerses = relatedVerses.filter((relatedVerse) => relatedVerse.id !== id);

    return (
        <div>
            <h3>Verse</h3>
            <p>{verseDetail.verse}</p>
            <h4>Translation</h4>
            <p>{verseDetail.translation}</p>
            {verseDetail.image && (
                <div>
                    <h4>Image</h4>
                    <img src={verseDetail.image} alt="Verse Illustration" style={{ width: '100%', height: 'auto' }} />
                </div>
            )}
            <h4>Context</h4>
            <p>{verseDetail.context}</p>
            <h4>Related Teachings</h4>
            <ul>
                {filteredRelatedVerses.map((relatedVerse) => (
                    <li key={relatedVerse.id}>
                        <Link to={`/verse/${relatedVerse.id}`}>
                            {relatedVerse.verse} -
                            {relatedVerse.translation} {/* Display the translation or another relevant detail */}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VerseDetail;
