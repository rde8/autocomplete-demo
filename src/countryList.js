
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const CountryList = (props) => {

    const useStyles = makeStyles({
        icon: {
            cursor: 'pointer',
        },
        inputStyle: {
            height: '32px',
            border: 0,
            borderBottom: '1px solid #000',
            marginRight: '10px',
        }
    });
    const classes = useStyles();
    const [addText, setAddText] = useState(false);
    const [newText, setNewText] = useState('');
    const addCountry = () => {
        props.addCountry(newText);
        setAddText(false);
    };
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell align="right">
                    { !addText ? 
                        <Button variant="contained" onClick={() => {
                        setNewText('');
                        setAddText(true);
                    }}>Add Country</Button>
                    
                    : 
                        <div>
                            <input type="text" placeholder="Add Country" onKeyUp={(e) => {
                                setNewText(e.currentTarget.value);
                            }} className={classes.inputStyle}/>
                            <Button variant="contained" onClick={addCountry}>Add</Button>
                            {/* <button className={classes.icon} onClick={addCountry}>Add</button> */}
                        </div>
                    }
                        
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.countryList.map((obj, i) => (
                    <TableRow key={obj.code}>
                        <TableCell component="th" scope="row">
                        {obj.name}
                        </TableCell>
                        <TableCell align="right">
                            <DeleteIcon className={classes.icon}  onClick={() => props.deleteCountry(i) }/>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CountryList;