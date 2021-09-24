import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

type PopProps = {
    onOff:boolean;
    popMsg:string;
}
export default function DirectionSnackbar(props:PopProps) {

  return (
    <div id="pop">
      <Snackbar
        open={props.onOff}
        message={props.popMsg}
        key={''}
      />
    </div>
  );
}