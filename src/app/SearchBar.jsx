import { useRef, useState } from "react";

function SearchBar({onSearch}) {
    const inputRef = useRef(null);
    const [isSubmitted, setSubmission] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userInput = inputRef.current.value;
        if (userInput.trim()) {
          onSearch(userInput); //when a user submits the form, we send the userInput to the onSearch, which is sent to Home()
          setSubmission(true);
          inputRef.current.value = "";
        }
      };

      if (isSubmitted) {
        return null;
      }

      return (
          <form onSubmit={handleSubmit} className="search-container">
            <input
              type="text"
              placeholder="Enter your prompt..."
              ref={inputRef}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <img className="uploadImage"
              src={'./arrow.svg'}
              >
              </img>
            </button>
          </form>
      );

}

export default SearchBar