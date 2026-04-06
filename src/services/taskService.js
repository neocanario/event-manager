import { db } from '../fireabse';
import {
    collection,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

const tasksCollection = collection(db, 'tasks');

export function subscribeToTasks(callback) {
    return onSnapshot(tasksCollection, (snapshot) => {
        const tasksData = snapshot.docs.map(docSnap => ({ ...docSnap.data(), id: docSnap.id }));
        callback(tasksData);
    });
}

export async function addTask(task) {
    return addDoc(tasksCollection, task);
}

export async function updateTask(id, data) {
    return updateDoc(doc(db, 'tasks', id), data);
}

export async function deleteTask(id) {
    return deleteDoc(doc(db, 'tasks', id));
}
