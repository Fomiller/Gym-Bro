import React, { useRef } from 'react';
import { useGlobalContext } from '../../utils/globalContext';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { createExercise } from '../../utils/API';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 50,
  },
}));

const muscleGroup = [
  { muscleGroup: 'Arms' },
  { muscleGroup: 'Back' },
  { muscleGroup: 'Chest' },
  { muscleGroup: 'Legs' },
  { muscleGroup: 'Shoulders' },
]
const primaryMuscle = [
  { muscle: 'Bicep' },
  { muscle: 'Tricep' },
  { muscle: 'Quads' },
  { muscle: 'Hamstrings' },
  { muscle: 'Glutes' },
]
const secondaryMuscle = [
  { muscle: 'Bicep' },
  { muscle: 'Tricep' },
  { muscle: 'Quads' },
  { muscle: 'Hamstrings' },
  { muscle: 'Glutes' },
]

export default function ExerciseForm() {
  const classes = useStyles();
  const [state, dispatch ] = useGlobalContext();
  const exerciseNameRef = useRef(null);
  const muscleGroupRef = useRef(null);
  const primaryMuscleRef = useRef(null);
  const secondaryMuscleRef = useRef(null);

  const HandleSubmit = (e) => {
    e.preventDefault()
    const newExercise = {
      userId: state.user.id,
      name: exerciseNameRef.current.value,
      muscleGroup: muscleGroupRef.current.value,
      primaryMuscle: primaryMuscleRef.current.value,
      secondaryMuscle: secondaryMuscleRef.current.value
    }
    createExercise(newExercise);
  } 

  return (
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
              inputRef={exerciseNameRef}
              id="outlined-basic"
              label="Exercise Name"
              variant="outlined"
              fullWidth='true'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
              options={muscleGroup}
              getOptionLabel={(option) => option.muscleGroup}
              renderInput={(params) => <TextField {...params} label="Muscle Group" variant="outlined" inputRef={muscleGroupRef}/>}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
              options={primaryMuscle}
              getOptionLabel={(option) => option.muscle}
              renderInput={(params) => <TextField {...params} label="Primary Muscle" variant="outlined" inputRef={primaryMuscleRef}/>}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
              options={secondaryMuscle}
              getOptionLabel={(option) => option.muscle}
              renderInput={(params) => <TextField {...params} label="Secondary Muscle" variant="outlined" inputRef={secondaryMuscleRef}/>}
              />
            </Grid>
            <Grid item>
              <Button color='primary' onClick={HandleSubmit}>Submit</Button>
            </Grid>
          </Grid>
        </Paper>
  );
};