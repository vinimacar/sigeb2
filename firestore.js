// This file exports functions for interacting with Firestore, including methods for reading from and writing to the Firestore database.

import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

// Initialize Firestore
const db = getFirestore();

// Function to get users from "completar cadastro"
export const getUsersFromCompletarCadastro = async () => {
    const usersSnapshot = await getDocs(collection(db, 'completarCadastro'));
    const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return usersList;
};

// Function to add a user to the user database
export const addUserToDatabase = async (user) => {
    try {
        await addDoc(collection(db, 'usuarios'), user);
    } catch (error) {
        console.error('Error adding user to database:', error);
    }
};
