// This is Chapter04 Example, It explains to excute function per 1 sec

function tic(){
  const element =(
    <div>
      <h1>Hello Tic Tak Tok</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )

  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tic, 1000);
