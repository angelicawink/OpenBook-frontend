import React from "react";
import ResultsMaster from "./ResultsMaster";
import SavedSearches from "./SavedSearches";

const JournalSearchDisplay = props => {
  return (
    <React.Fragment>
      <div className="container search-body">
        <ResultsMaster
          savedEntryIDs={props.savedEntryIDs}
          addSavedEntry={props.addSavedEntry}
          deleteSavedEntry={props.deleteSavedEntry}
          results={props.results}
          user={props.user}
        />

        <SavedSearches user={props.user} />
      </div>
    </React.Fragment>
  );
};

export default JournalSearchDisplay;
