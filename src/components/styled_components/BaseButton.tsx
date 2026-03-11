
export const BaseBotton = {
  '--azure-blue': "#529ee9ff",
  '--blue': "#1565c0",
  '--dark-white': "#e1d9d1",

  backgroundColor: "var(--azure-blue)",
  color: "white",

  "&:hover": {
    backgroundColor: "var(--blue)",
    transform: "scale(1.03)",
  },

  "&.Mui-disabled": {
    backgroundColor: "var(--dark-white)",
    color: "gray",
  },

  "&:focus": {
    outline: "none",
  },
};