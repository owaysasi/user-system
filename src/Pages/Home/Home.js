import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import 'antd/dist/antd.css';
import {makeStyles, ThemeProvider, withStyles} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import AddUser from '../../Components/AddUser/AddUser';
import { getUsersSelector } from '../../Selector/selector';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataForEverybody } from '../../ApiRequests/Requests';
import { useHistory } from 'react-router-dom';
import { deleteUser } from '../../Features/Slice/UsersSlice/usersSlice';
import Switch from '@material-ui/core/Switch';
import {ThemeContext} from '../../Context/theme-context';

const URL = 'https://dummyapi.io/data/api/user';
const APP_ID = '605dcfd123d78a50c5067229';

const useStyles = makeStyles({
    root: {
      width: '100%',
      
    },
    container: {
      maxHeight: 500,
    },
});

const themeMUI = createMuiTheme({
    typography:{
        fontFamily:'Staatliches, cursive'
    }
});



function Home(){

    const history = useHistory();
    const users = useSelector(getUsersSelector); 
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const classes = useStyles();
    const themeContext = useContext(ThemeContext);

    let style = {};

    if(themeContext.theme === 'dark'){
        style={
            background: 'rgb(134, 134, 134)',
            color: 'white'
        }
    } else {
        style={
            background: 'white',
            color: 'black'
        }
    }

    const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
    }))(TableRow);
    
    const StyledTableCell = withStyles(() => ({
        head: {
            backgroundColor: style.background,
            color: style.color
    
        },
        body: {
          fontSize: 14,
        },
    }))(TableCell);
    
    const Columns = [
        {id: 'firstName', label:'FirstName', align:'left'},
        {id: 'id', label:'ID', align:'left'},
        {id: 'email', label:'Email',  align:'left'},
        {id: 'lastName', label:'LastName', align:'left'},
        {id: 'action', label:'Action',  align:'left'}
    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        if(!users.length){
            const callbackFunc = () => setLoading(false);
            setLoading(true)
            dispatch(fetchDataForEverybody(callbackFunc))
        }
 
    },[users]);

    function materialTable(users) {
        if(loading) return(<div className="loader"></div>);
        if(users){
            return(
                <ThemeProvider theme={themeMUI}>
                    <Paper className={classes.root} style={style}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {Columns.map((col) => (
                                            <StyledTableCell key={col.id} align={col.align}>
                                                {col.label}
                                            </StyledTableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return(
                                            <StyledTableRow key={row.id}>
                                                {Columns.slice(0,Columns.length-1).map((col) => {
                                                    const value = row[col.id];
                                                    return(
                                                        <TableCell style={{color:style.color}} key={col.id}>{value}</TableCell>
                                                    );
                                                })}
                                                <TableCell>
                                                    <IconButton onClick={() => {history.push({pathname:"/posts", state : row.id})}}>
                                                        <EmailIcon/>
                                                    </IconButton>
                                                    <IconButton onClick={() => history.push({pathname:"/user", state : row.id})}>
                                                        <AccountCircleIcon color="primary"/>
                                                    </IconButton>
                                                    <IconButton onClick={() => dispatch(deleteUser(row.id))}>
                                                        <DeleteIcon color="secondary"/>
                                                    </IconButton>
                                                </TableCell>
                                            </StyledTableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={users.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </ThemeProvider>
            );

        }
    }

    return(
        <div className="home-wrapper" style={style}>
            <div className="add-btn-cont">
                <h1 style={style}>User System Managnment</h1>
                <AddUser/>
                <Switch onChange={() => {
                    themeContext.toggleTheme()
                }}/>
            </div>
            {materialTable(users)}
        </div>
    );
}

export default Home;