import Header from "./components/Header";
import Entry from "./components/Entry";
import {images} from "./data.js";

export default function App(){

    const entryElements = images.map(function(entry){
        return(
            <Entry
                key={entry.id}
                entry={entry}
            /> 
        );
    });

    return(
        <>
            <Header/>
            <main className="container">
                {entryElements}
            </main>
        </>
    );
}