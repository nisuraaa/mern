import { useState } from 'react'


function App() {
    const [bookname, setbookname] = useState('')
    const [ISBN, setISBN] = useState('')
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [status, setStatus] = useState('');

    async function bookinsert(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/books/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ISBN,
                title,
                author,
                publisher,
                status
            }),
        })
        const data = await response.json()
        console.log(data)
        if (data.user) {
            localStorage.setItem('token', data.user)
            alert("Login Successful")
        } 
    }

    return (
        <div style={{
            height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
        }}>
            <h1>Books Insert</h1>
            <form onSubmit={bookinsert}>
                <input value={bookname}
                    onChange={(e) => setbookname(e.target.value)}
                    type="text" placeholder="Book Name" /><br />
                <input value={ISBN}
                    onChange={(e) => setISBN(e.target.value)}
                    type="text" placeholder="ISBN" /><br />
                <input value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text" placeholder="Title" /><br />
                <input value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text" placeholder="Author" /><br />
                <input value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    type="text" placeholder="Publish" /><br />
                <input value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    type="text" placeholder="Status" /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default App; 