import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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

            const docData = {
                stringExample: "hello"
            };
            await setDoc(doc(db, "data", "one"), docData);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return { addData };
};



