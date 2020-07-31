import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
  const [socket] = useState(() => io(':8000'))
  const [connected, setConnected] = useState(false);
  const [inChat, setInChat] = useState(false);

  const [uname, setUname] = useState("");
  const [tUname, setTUname] = useState("");
  const [message, setMessage] = useState("");

  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    socket.emit('connected');

    // socket.on('success', data => setConnected(true));

    // socket.on('message_from_server', data => {
    //   console.log(data);
    //   let [...curLog] = chatLog;
    //   console.log(curLog)
    //   curLog.push(data);

    //   setChatLog(curLog);
    // });

    return () => socket.disconnect(true);
  }, [])

  useEffect( () => {
    socket.on('success', data => setConnected(true));
  })

  useEffect(() => {
    socket.on('message_from_server', data => {
      let [...curLog] = chatLog;
      curLog.push(data);
      setChatLog(curLog);
    })
  })

  const unameSubmit = e => {
    e.preventDefault();
    setUname(tUname);
  }

  const messageSubmit = e => {
    e.preventDefault();
    let [...curLog] = chatLog;

    console.log(curLog);
    let data = {
      uname: uname,
      message: message,
      time: Date.now()
    }


    curLog.push(data)
    setChatLog(curLog);
    socket.emit('message_from_client', data);
  }


  return (
    <div className="App">
      {
        connected ?
        <h1>Connection established, chat away!</h1>
        :
        <h1>Connecting to the server...</h1>
      }
      {
        connected ?
        <form onSubmit={ unameSubmit }>
          <label htmlFor="tUname">Username: </label>
          <input type="text" name="tUname" onChange={ e => setTUname(e.target.value) }/>
          <br/>
          <input type="submit" value="Set Username"/>
        </form>
        :
        ''
      }
      {
        connected && uname !== "" ?
        <div>
          <ul>
            {
              chatLog.map((data, i) => 
                <li>
                  <p>{data.uname} at {data.time}</p>
                  <p>{data.message}</p>
                </li>
              )
            }
          </ul>
          <form onSubmit={ messageSubmit }>
            <textarea name="message" cols="30" rows="10" onChange={ e => setMessage(e.target.value) }></textarea>
            <br/>
            <input type="submit" value="Send Message"/>
          </form>
        </div>
        :
        ''
      }
    </div>
  );
}

export default App;
