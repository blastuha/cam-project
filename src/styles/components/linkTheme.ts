export const navLinkAside = {
  textDecoration: 'none',
  color: '#3a57e8',
  '&:hover': {
    textDecoration: 'underline',
  },
};
// пока что прописаны бесполезные стили, чтобы просто ознакомиться с кастомизацией mui

export const linkTheme = {
  variants: [
    {
      props: { className: 'navLinkAside' },
      style: navLinkAside,
    },
    // {
    //   props: { className: 'filtersStyle' },
    //   style: filtersStyle,
    // },
    // {
    //   props: { className: 'tableStyle' },
    //   style: tableStyle,
    // },
  ],
};
