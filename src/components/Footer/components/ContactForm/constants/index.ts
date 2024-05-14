export const inputStyles = {
  '& .MuiOutlinedInput-root': {
    fontWeight: 400,
    fontSize: 13,
    lineHeight: '19.5px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#808080',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#43CBCB',
    },
  },
  '& .MuiInputLabel-outlined': {
    color: '#ffffff',
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: '#43CBCB',
  },
};

export const buttonStyles = {
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '18px',
  letterSpacing: '0.8px',
  padding: '11px 30px 22px',
  background: '#43CBCB',
  border: '1px solid #17A2B8',
  marginTop: '10px',
};
