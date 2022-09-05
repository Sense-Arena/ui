import { styled, Tab, TabProps, Tabs, TabsProps } from '@mui/material';

const CustomTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#E4022D',
  },
});
const CustomTab = styled(Tab)(() => ({
  padding: '40px 10px',
  marginRight: '60px',
  fontFamily: 'Rubik, sans-serif',
  fontSize: '24px',
  lineHeight: '28px',
  letterSpacing: '0.38px',
  '&:hover': {
    color: '#E4022D',
  },
  '&.Mui-selected': {
    color: '#E4022D',
  },
}));

export type TabPanelProps = {
  children?: React.ReactNode;
  childrenClassName?: string;
  className?: string;
  index: number;
  value: number;
};

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, childrenClassName, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div className={childrenClassName}>{children}</div>}
    </div>
  );
};

export const SATab = (props: TabProps) => <CustomTab {...props} />;
export const SATabs = (props: TabsProps) => <CustomTabs {...props} />;
