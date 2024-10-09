import { initializeApp } from "firebase/app";
import { getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

interface Todo {
    id: number;
    title: string;
    isComplete: boolean;
    body: string;
}

export const useFirestore = () => {


    const addData = async (todo: Todo) => {
        try {
            alert()
            const db = getFirestore();

            
            
            await setDoc(doc(db, "todos", todo.id.toString()), todo);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return { addData };
};



