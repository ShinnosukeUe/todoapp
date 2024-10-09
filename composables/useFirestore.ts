import { initializeApp } from "firebase/app";
import { getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { doc, setDoc, getDocs, Timestamp, collection } from "firebase/firestore";

const idTo32BitString = (id: number): string => {
    const max32BitValue = 0xFFFFFFFF;
    const normalizedId = id % (max32BitValue + 1)
    return normalizedId.toString(16).padStart(8, '0');
};

interface Todo {
    id: string;
    title: string;
    isComplete: boolean;
    body: string;
    date: SVGStringList;
}

export const useFirestore = () => {
    const getData = async () => {
        try {
            const db = getFirestore();
            const collectionRef = collection(db, "todos");
            const snapshot = await getDocs(collectionRef);

            const todos: Todo[] = [];
            snapshot.forEach((doc) => {
                todos.push({ ...doc.data(), id: doc.id } as Todo);
            });

            return todos;
        } catch (e) {
            console.error
            return [];
        }








    };





    const addData = async (todo: Todo) => {
        try {

            const db = getFirestore();

            const todoId = idTo32BitString(todo.id);
            const currentTimestamp = Timestamp.now();

            todo.id = todoId;
            todo.date = currentTimestamp

            await setDoc(doc(db, "todos", todoId), todo);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return { addData, getData };




}
