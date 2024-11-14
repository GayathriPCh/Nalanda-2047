// src/components/CategoryList.jsx
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Make sure this points to your Firebase config
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './CategoryList.css';
const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'categories')); // Fetch categories from Firestore
                const categoryData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setCategories(categoryData);
            } catch (error) {
                console.error("Error fetching categories: ", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <p>Loading categories...</p>;
    }

    if (error) {
        return <p>Error fetching categories: {error}</p>;
    }

    return (
        <div className="category-list">
        <h2>Categories</h2>
        <ul>
            {categories.map(category => (
                <li key={category.id}>
                    <Link to={`/categories/${category.name}`}>{category.name}</Link>
                    {category.description && <p>{category.description}</p>}
                </li>
            ))}
        </ul>
     </div>
    );
};

export default CategoryList;
