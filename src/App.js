import {useState, useEffect} from 'react';
import AutoComplete from './autocomplete';
import CountryList from './countryList';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import './App.css';

const App = () => {
  const [countryList, modifyCountryList] = useState([]); 
  const [reloadAutocomplete, setReloadAutocomplete] = useState(true);
  const fetchList = () => {
      fetch('https://api.mocki.io/v1/a48a9655')
      .then(res => res.json())
      .then(res => {
          modifyCountryList(res);
      });
  }

  const addCountry = (newText) => {
    const code = newText.substr(0,2);
    modifyCountryList(prevList => {
      const newList = [...prevList, ...[{code: code, name: newText}]];
      return newList;
    });
  };

  const deleteCountry = (index) => {
    setReloadAutocomplete(false);
    modifyCountryList(prevList => {
      prevList.splice(index, 1);
      const newList = [...prevList];
      return newList;
    });
  }

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <Box component="span" m={1}>
      <Grid item xs={12}>
          { countryList.length > 0 && 
            <Grid container justify="center" spacing={3}>
              <Grid item>
                  <AutoComplete
                  countryList={countryList}
                  reloadAutocomplete={reloadAutocomplete}
                  setReloadAutocomplete={setReloadAutocomplete}
                ></AutoComplete>
              </Grid>
              <Grid>
                <CountryList
                  countryList={countryList}
                  addCountry={addCountry}
                  deleteCountry={deleteCountry}
                ></CountryList>
              </Grid>
          </Grid>
          }
      </Grid>
    </Box>
  );
}

export default App;
