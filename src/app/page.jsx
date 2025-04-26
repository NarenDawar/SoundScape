'use client'
import { useSession, SessionProvider} from "next-auth/react";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import { getServerSession } from "next-auth";

import Image from "next/image";
import Title from "./Title.jsx";
import SearchBar from "./SearchBar.jsx";
import NavBar from "./NavBar.jsx";
import SideBar from "./SideBar.jsx";
import { options } from "./api/auth/[...nextauth]/options.js";


export default function Home() {
  // const session = await getServerSession(options)
  const [loading, setLoading] = useState(false);
  const [visible, setVisibility] = useState(false);

  const [showRequest, setRequest] = useState(false); // we use two variables each, one for the initial change... 
  // ... and the other for a slight delay so the transitions play correctly, hence the timeOuts(). It's like task.wait(1)
  const [requestVisible, setRV] = useState(false);

  const [searchResult, setSearchResult] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [aiResponse, setAiResponse] = useState([]);

  useEffect(() => { // use effect allows for delays
    if (loading) {
      // Small delay to ensure the component has rendered first
      const timer = setTimeout(() => {
        setVisibility(true);
      }, 50); // 50 ms delay
      
      return () => clearTimeout(timer);
    } else {
      setVisibility(false);
    }
  }, [loading]); // This line means it runs when loading changes, so like .Changed()

  useEffect(() => { // use effect allows for delays
    if (showRequest) {
      // Small delay to ensure the component has rendered first
      const timer = setTimeout(() => {
        setRV(true);
      }, 50); // 50 ms delay
      
      return () => clearTimeout(timer);
    } else {
      setRV(false);
    }
  }, [showRequest]);

  const handleSearch = async (prompt) => { //This is the function called from the client.
    try {
      setLoading(true);
      setSearchResult(prompt);

      const response = await fetch("/api/generate", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data.result)
      // setAiResponse(data.result);
      
      
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setLoading(false);
      setRequest(true);
    }
    // Here you would typically do something with the prompt
    // like sending it to an API
  };
   // Lift the state up to the parent component
  
   const toggleSidebar = () => {
     setSidebarOpen(!sidebarOpen);
   };

  return (
    <>
      <div className="homePage">
        <NavBar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <SideBar
          sidebarOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar}
        />

        <div className="center-parts">
          {!searchResult && (
            <>
              <Title></Title> 
              <SearchBar onSearch={handleSearch}></SearchBar> 
            </>
            // Home then receives the prompt and calls its own Handle
          )}
          
          {loading && (
            <div className="loading-container">
              <h2 className={`loading-text ${visible ? "visible" : ""}`} // change class name based on visibility
              >Loading...</h2>
            </div>
          )}

          {showRequest && (
            <div className="request-container">
              <h2 className={`request-text ${requestVisible ? "visible" : ""}`}>{`"${searchResult}"`}</h2>
            </div>
          )}
          

          { showRequest && (
            <div className="result-container">
              {aiResponse.map((song, index) => (
                <div className="result-text" key={index}>
                  <h2>{song.title}</h2>
                  <p>{song.creator}</p>
              </div>
              ))}
            </div>
          )}

          </div>
      </div>

    </>
  );
}