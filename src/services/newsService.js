import { db } from '../fireabse';
import {
    collection,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    getDocs,
    writeBatch,
    doc
} from 'firebase/firestore';

const newsCollection = collection(db, 'news');

export function subscribeToNews(callback) {
    return onSnapshot(newsCollection, (snapshot) => {
        const newsData = snapshot.docs.map(docSnap => ({ ...docSnap.data(), id: docSnap.id }));
        callback(newsData);
    });
}

export async function getAllNewsOnce() {
    const snapshot = await getDocs(newsCollection);
    return snapshot.docs.map(docSnap => ({ ...docSnap.data(), id: docSnap.id }));
}

export async function addNewsItem(item) {
    return addDoc(newsCollection, item);
}

export async function updateNewsItem(id, data) {
    return updateDoc(doc(db, 'news', id), data);
}

export async function deleteNewsItem(id) {
    return deleteDoc(doc(db, 'news', id));
}

export async function addNewsBatch(items) {
    const batch = writeBatch(db);
    items.forEach(item => {
        const { id: _id, ...itemData } = item;
        const newDocRef = doc(newsCollection);
        batch.set(newDocRef, itemData);
    });
    return batch.commit();
}
