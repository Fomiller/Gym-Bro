import React, { useRef } from 'react';
import { useGlobalContext } from '../../utils/globalContext';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  
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
      secondaryMuscleRef: secondaryMuscleRef.current.value
    }
    console.log(newExercise);
  } 

  return (
    <Grid container maxWidth='xs'>
      <Grid item>
        <Paper elevation={3}>
        <TextField inputRef={exerciseNameRef} id="outlined-basic" label="Exercise Name" variant="outlined" size={"small"} />
        <Autocomplete
          // id="filter-demo"
          options={muscleGroup}
          getOptionLabel={(option) => option.muscleGroup}
          // filterOptions={filterOptions}
          // style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Muscle Group" variant="outlined" inputRef={muscleGroupRef}/>}
          />
        <Autocomplete
          // id="filter-demo"
          options={primaryMuscle}
          getOptionLabel={(option) => option.muscle}
          // filterOptions={filterOptions}
          // style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Primary Muscle" variant="outlined" inputRef={primaryMuscleRef}/>}
          />
        <Autocomplete
          // id="filter-demo"
          options={secondaryMuscle}
          getOptionLabel={(option) => option.muscle}
          // filterOptions={filterOptions}
          // style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Secondary Muscle" variant="outlined" inputRef={secondaryMuscleRef}/>}
        />
        <Button color='primary' onClick={HandleSubmit}>Submit</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};