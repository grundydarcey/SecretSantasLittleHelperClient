import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import config from './config';

const memberContext = createContext();

function DataFetching ()  {
    const [members, setMembers] = useState([])

    const fetchAPI = async() => {
      return fetch(`${config.API_ENDPOINT}/members`)
    }

    useEffect(() => {
        fetchAPI().then(members =>
          members.json().then(json => {
              console.log(json);
              setMembers(json.members.map(member => member));
          })
        )
        .then(err => console.log('err', err));
        }, []);
    /*useEffect(() => {
      axios.get(`${config.API_ENDPOINT}/members`)
        .then(res => {
          console.log(res)
          setMembers(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])*/
    
    return (
        <div>
        <memberContext.Provider value={members} >
          {members.map(member => {
              return(
                  <div>
                    <ul>
                      <li>
                        <pre>{JSON.stringify(member)}</pre>
                      </li>
                     
                    </ul>
                  </div>
              )
          })}
          </memberContext.Provider>
        </div>

    ) 
}

export default { DataFetching, memberContext };