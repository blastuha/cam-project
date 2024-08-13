import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

type PositionType = 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static';

export default function Spinner({ position }: { position?: PositionType }) {
  return (
    <Box
      position={position ? position : 'static'}
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}
