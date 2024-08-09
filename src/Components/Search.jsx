import Deso from "deso-protocol";
import React from "react";
import { Link } from "react-router-dom";
import { useDetectClickOutside } from "react-detect-click-outside";

const deso = new Deso();

function Search() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);

  React.useEffect(() => {
    const getData = setTimeout(async () => {
      if (query.length > 0) {
        const request = {
          UsernamePrefix: query,
        };
        try {
          const profiles = await deso.user.getProfiles(request);
          if (profiles && profiles.ProfilesFound !== null) {
            setShowResults(true);
            setResults(profiles.ProfilesFound.slice(0, 5));
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setShowResults(false);
      }
    }, 500);

    return () => clearTimeout(getData);
  }, [query]);

  const closeSearch = () => {
    setShowResults(false);
    setResults([]);
    setQuery("");
  };

  const ref = useDetectClickOutside({ onTriggered: closeSearch });

  return (
    <>
      <div className='flex flex-row w-40 sm:w-96  items-center relative'>
        <input
          type='text'
          placeholder='Search Users'
          className='text-gray-100 bg-[#350353] rounded-full w-40 sm:w-96 px-6 py-2 mt-4 focus:outline-none focus:shadow-outline'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />

        {showResults && (
          <div
            ref={ref}
            className='flex absolute left-0 top-10 drop-shadow-xl w-64 flex-col rounded-xl  divide-y divide-purple-800  theme-divider py-2 mt-8  text-white bg-[#350353] z-40'>
            {results.map((profile, index) => {
              return (
                <Link
                  to={`/u/${profile.Username}`}
                  className='flex space-x-2 items-center darkenHoverBg darkenBg py-2 px-2 hover:bg-[#2d0d41]'
                  key={index}>
                  <img
                    src={`${"https://diamondapp.com/api/v0"}/get-single-profile-picture/${
                      profile.PublicKeyBase58Check
                    }?fallback=https://diamondapp.com/assets/img/default_profile_pic.png`}
                    className='rounded-full subHeader w-10 h-10'
                    alt={profile.Username}
                  />
                  <div className='flex flex-col'>
                    <p className='extralightText'>{profile.Username}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
