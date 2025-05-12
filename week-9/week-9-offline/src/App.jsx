

function App() {

  return (
    <div>hi there 2
      <Post/>
    </div>
  )
}

function Post() {
  return (
    <div>
      <div style={{widht: 200,backgroundColor: "white", borderColor: "gray", display: "flex", borderWidth: 1}}>
        <img src={"https://imgs.search.brave.com/JuWwQye2C8MWo-ccrACe4CnmqFwRjovlsBVoz_Su80s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmRlc2lnbi5j/b20vYXNzZXQvbG9n/by84NTU1N2E2OS1l/YTNiLTQzMGQtODcw/Ny1jMzgxZjlhODA0/MDQvbG9nby1zZWFy/Y2gtZ3JpZC0xeD9s/b2dvVGVtcGxhdGVW/ZXJzaW9uPTYmdj02/MzgxNTc1ODIxMTM5/MDAwMDA.jpeg"} alt="" style={{
          width: 30, 
          height: 30,
          borderRadius: 20
        }}/>
        <div style={{fontSize: 10, marginLeft: 10}}>
          <b>
            100xDevs
          </b>
          <div>23,888 followers</div>
          <div>12m</div>
        </div>
      </div>
      <div>
        What to Know? How to Win Big?
      </div>
  </div>)
  
}

// structure your app into components
// Defining the state of your application

export default App
