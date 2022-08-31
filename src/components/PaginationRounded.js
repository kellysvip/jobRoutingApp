import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({handleChange}) {
  return (
    <Stack sx={{mt: 5, alignSelf: 'center'}} spacing={2}>
      <Pagination onChange={handleChange} count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
