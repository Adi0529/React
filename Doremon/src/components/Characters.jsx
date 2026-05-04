import { mainCharacters, gadgets } from "../assets/Datamain.js";
import "./Characters.css";
import { useState, useRef } from 'react';

export default function Characters() {
    const [playingName, setPlayingName] = useState(null);
    
    // Fix 1: Initialize with a new Audio object immediately
    const audioRef = useRef(new Audio());

    const playSong = (name, song) => {
        const audio = audioRef.current;

        if (playingName === name) {
            audio.pause();
            setPlayingName(null);
        } else {
            // Fix 2: Reset the audio source to the new song
            audio.src = song;
            audio.load(); // Ensure the new source is loaded
            audio.play()
                .then(() => setPlayingName(name))
                .catch(err => console.error("Playback failed:", err));
        }
    };
    return (
        <>
            <h2 className="text-center text-decoration-underline mb-4 fs-1">Main Characters</h2>
            <div className="row container mx-auto">
                {mainCharacters.map((character, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card char">
                            <img src={character.image} className="card-img-top" alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text"><strong>Role:</strong> {character.role}</p>
                                <p className="card-text"><strong>Traits:</strong> {character.traits.join(", ")}</p>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                <button
                                    onClick={() => playSong(character.name, character.song)}
                                    className="btn btn-primary"
                                >
                                    {playingName === character.name ? "Stop" : "Play Voice"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-center text-decoration-underline mb-4 fs-1">Gadgets</h2>
            <div className="row container mx-auto">
                {gadgets.map((gadget, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card char">
                            <img src={gadget.image} className="card-img-top" alt={gadget.name} />
                            <div className="card-body">
                                <h5 className="card-title">{gadget.name}</h5>
                                <p className="card-text"><strong>Description:</strong> {gadget.use}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
