import React from "react";
import { Typography } from "@mui/material";

export default function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">I am h1</Typography>
      <Typography variant="h2">I am h2</Typography>
      <Typography variant="h3">I am h3</Typography>
      <Typography variant="h4">I am h4</Typography>
      <Typography variant="h5">I am h5</Typography>
      <Typography variant="h6">I am h6</Typography>

      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="body1">
        body1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
        minus!
      </Typography>

      {/*By default Typography component use body1 as a variant*/}
      <Typography>
        body1 - By default Typography component use body1 as a variant
      </Typography>

      <Typography variant="body2">
        body2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Fugiat, dicta!
      </Typography>

      {/* If we want styles of h4 component but element should be h1 */}
      <Typography variant="h4" component="h1">
        I am h1 element but having styles of h4 component
      </Typography>

      {/* If I want margin bottom, By default gutterBottom value is false */}
      <Typography variant="h4" component="h1" gutterBottom>
        I am h1 element but having styles of h4 component, also added margin
        bottom with gutterBottom
      </Typography>
    </div>
  );
}
