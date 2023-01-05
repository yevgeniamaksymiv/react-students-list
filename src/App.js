import './App.css';
import {
  TextField,
  Button,
  Box,
  Modal,
  Typography,
  Divider,
  List,
  ListItem,
} from '@mui/material';
import { useState } from 'react';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const listItemStyle = {
  width: '170px',
  height: '30px',
  padding: '20px 0 20px 10px',
  margin: '20px 0 0 0',
  border: '1px solid blue',
  borderRadius: '3px',
};

const randomItemStyle = {
  width: '170px',
  height: '30px',
  padding: '20px 0 20px 10px',
  margin: '20px 0 0 0',
  border: '1px solid pink',
  backgroundColor: 'pink',
  color: 'white',
  borderRadius: '3px',
};

const App = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [random, setRandom] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addStudentToList = () => {
    setStudents((prev) => [...prev, name]);
    setName('');
  };

  const handleCancelButton = () => {
    setName('');
    setOpen(false);
  };

  const getRandomStudent = () => {
    return studentItem[Math.floor(Math.random() * studentItem.length)];
  };

  const studentItem = students.map((el, i) => (
    <ListItem style={listItemStyle} key={i}>
      {el}
    </ListItem>
  ));

  const handleRandom = () => {
    const random = getRandomStudent();
    setRandom(random);
  };

  return (
    <div className="App">
      <h1>Random students</h1>
      <Box>
        <Button variant="contained" onClick={handleOpen}>
          Додати студента
        </Button>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <List sx={{ display: 'inline-block', textAlign: 'left' }}>
          {studentItem}
        </List>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Додати студента до списку
          </Typography>
          <Divider />
          <Typography component="h6">Ім'я студента</Typography>
          <TextField
            fullWidth={true}
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <Divider />
          <Box sx={{ textAlign: 'right', padding: '15px 0 0' }}>
            <Button
              sx={{ marginRight: '10px' }}
              variant="contained"
              color="error"
              onClick={handleCancelButton}
            >
              Відміна
            </Button>
            <Button variant="contained" onClick={() => addStudentToList()}>
              Додати
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box>
        <Button variant="outlined" onClick={handleRandom}>
          Вибрати студента
        </Button>
      </Box>
    </div>
  );
};

export default App;
