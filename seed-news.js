import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { INITIAL_NEWS } from "./src/information/news-data.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgSnH945HpEqBfiw6FfJ7yYPVWjvP2kco",
    authDomain: "event-manager-69e90.firebaseapp.com",
    projectId: "event-manager-69e90",
    storageBucket: "event-manager-69e90.firebasestorage.app",
    messagingSenderId: "118103551522",
    appId: "1:118103551522:web:38ae6950137c2a867f647b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seed() {
    const newsCollection = collection(db, 'news');

    // Borrar documentos existentes
    const existing = await getDocs(newsCollection);
    for (const docSnap of existing.docs) {
        await deleteDoc(doc(db, 'news', docSnap.id));
    }
    if (existing.size > 0) console.log(`Borrados ${existing.size} documentos existentes.`);

    // Subir INITIAL_NEWS
    for (const article of INITIAL_NEWS) {
        const { id, ...articleData } = article;
        await addDoc(newsCollection, articleData);
        console.log(`Subido: ${article.title}`);
    }

    console.log(`\n✓ ${INITIAL_NEWS.length} noticias subidas a Firestore.`);
    process.exit(0);
}

seed().catch((err) => {
    console.error('Error:', err);
    process.exit(1);
});
