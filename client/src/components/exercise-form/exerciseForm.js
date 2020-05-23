import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
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

  return (
    <Grid container maxWidth='xs'>
      <Grid item>
        <Paper elevation={3}>
        <TextField id="outlined-basic" label="Exercise Name" variant="outlined" size={"small"} />
        <Autocomplete
          // id="filter-demo"
          options={muscleGroup}
          getOptionLabel={(option) => option.muscleGroup}
          // filterOptions={filterOptions}
          // style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Muscle Group" variant="outlined" />}
        />
        <Autocomplete
          // id="filter-demo"
          options={primaryMuscle}
          getOptionLabel={(option) => option.muscle}
          // filterOptions={filterOptions}
          // style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Primary Muscle" variant="outlined" />}
        />
        <Autocomplete
          // id="filter-demo"
          options={secondaryMuscle}
          getOptionLabel={(option) => option.muscle}
          // filterOptions={filterOptions}
          // style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Secondary Muscle" variant="outlined" />}
        />
        </Paper>
      </Grid>
    </Grid>
  );
};