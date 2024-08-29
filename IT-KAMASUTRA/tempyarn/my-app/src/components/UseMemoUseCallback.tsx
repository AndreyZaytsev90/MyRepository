import React, {memo, useCallback, useMemo, useState} from 'react';

export const UseMemoUseCallback = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1
    let fakeValue

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100) {
                fake++
                fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return (
        <div>
            <input type="text" value={a} onChange={(event) => setA(Number(event.currentTarget.value))}/>
            <input type="text" value={b} onChange={(event) => setB(+event.currentTarget.value)}/>

            <hr/>
            <div>Result for a : {resultA}</div>
            <span>fake: {fakeValue}</span>
            <div>Result for b : {resultB}</div>
        </div>
    );
};

type UsersType = {
    users: string[]
}
const UsersSecret: React.FC<UsersType> = ({users}) => {
    console.log('Users')
    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>{user}</div>
            ))}
        </div>
    );
};


const Users = memo(UsersSecret)

export const HelpToUseMemo = () => {
    console.log('HelpToUseMemo')
    const [counter, setCounter] = useState(1)

    const [users, setUsers] = useState(['Andrey', 'Olga', 'Petr'])

    const newArray = useMemo(() => {
        return users.filter((u) => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'newUser']
        setUsers(newUser)
    }

    return (
        <>
            <hr/>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <span>Counter:{counter}</span>
            <hr/>
            <button onClick={addUser}>addUser</button>
            <Users users={newArray}/>
        </>

    )
}



/*----------------------------useCallback----------------------------------*/

type BooksType = {
    books: string[],
    callback: ()=> void
}
const BooksSecret: React.FC<BooksType> = ({books, callback}) => {
    console.log('Books')
    return (
        <div>
            <button onClick={callback}>add-book</button>
            {books.map((book, index) => (
                <div key={index}>{book}</div>
            ))}
        </div>
    );
};

const Books = memo(BooksSecret)
export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)

    const [books, setBooks] = useState(['React', 'JavaScript', 'CSS'])

   /* const newArray = useMemo(() => {
        return books.filter((b) => b.toLowerCase().indexOf('a') > -1)
    }, [books])*/

    const addBook = () => {
        const newBook = [...books, 'Angular']
        setBooks(newBook)
    }

    const memoizedAddBook = useMemo(()=>{
        return addBook
    }, [books])

    const memoizedAddBook2 = useCallback(addBook,[books])

    return (
        <>
            <hr/>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <span>Counter:{counter}</span>
            <hr/>

            <Books books={books} callback={memoizedAddBook2}/>
        </>

    )
}