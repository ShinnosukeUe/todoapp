import { initializeApp } from "firebase/app";
import { getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const idTo32BitString = (id: number): string =>{
    const max32BitValue = 0xFFFFFFFF;
    const normalizedId = id % (max32BitValue +1)
    return normalizedId.toString(16).padStart(8,'0');

};

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

            const todoId = idTo32BitString(todo.id)

            console.log("%%%%%%%%%%%%");
            console.log(todoId);
            console.log("%%%%%%%%%%%%");
            
            await setDoc(doc(db, "todos", todoId), todo);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return { addData };
};



