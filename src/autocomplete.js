/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const AutoComplete = (props) => {
    useEffect(() => {
        props.setReloadAutocomplete(true);
    },[props, props.countryList])

  return (
      <div>
          {props.reloadAutocomplete && 
            <Autocomplete
                options={props.countryList}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                clearOnBlur={true}
                renderInput={(params) => <TextField {...params} label="Search" variant="outlined" />}
            />
          }
      </div>
  );
}

export default AutoComplete;
