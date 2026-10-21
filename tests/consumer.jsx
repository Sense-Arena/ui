import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Alert, Button, CheckboxField, Dropdown, GDPR, Modal, MultiSelect, Select,
  ShowMore, TextField, themeVars, useInterval,
} from '@sensearena/ui';
import '@sensearena/ui/theme.css';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [selection, setSelection] = useState('Alpha');
  const [dropdown, setDropdown] = useState('Alpha');
  const [multi, setMulti] = useState([]);
  const [open, setOpen] = useState(false);
  const [ticks, setTicks] = useState(0);
  const inputRef = useRef(null);
  useInterval(() => setTicks(v => v + 1), ticks < 2 ? 20 : null);
  const options = ['Alpha', 'Beta'].map(value => ({ value, title: value }));
  return (
    <>
      <Alert severity="success">Package loaded</Alert>
      <Button dataSAId="counter" onClick={() => setCount(v => v + 1)}>Clicks: {count}</Button>
      <Button loading onClick={() => setCount(999)}>Loading</Button>
      <TextField label="Name" value={value} onChange={e => setValue(e.target.value)} inputRef={inputRef} />
      <CheckboxField label="Agree" checked={checked} onChange={setChecked} dataSAId="checkbox" />
      <output data-testid="checked">{String(checked)}</output>
      <Select selectedOption={selection} selectedOptionLabel={selection} options={options}
        onChangeSelect={setSelection} dataSAId="select" />
      <Dropdown selectedOption={dropdown} selectedOptionLabel={dropdown} options={options}
        onSelect={setDropdown} dataSAId="dropdown" />
      <MultiSelect selectedOptions={multi} options={options} onChangeSelect={setMulti} dataSAId="multi" />
      <output data-testid="multi-value">{multi.join(',')}</output>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <p>Portal content</p><Button onClick={() => setOpen(false)}>Close modal</Button>
      </Modal>
      <ShowMore visible={1} items={[{ key: 'a', child: 'First item' }, { key: 'b', child: 'Second item' }]} />
      <output data-testid="ticks">{ticks}</output>
      <output data-testid="theme">{themeVars.colors.atpBlue}</output>
      <Button onClick={() => document.querySelector('#gdpr').hidden = false}>Show GDPR</Button>
      <section id="gdpr" hidden><GDPR /></section>
    </>
  );
}

createRoot(document.getElementById('app')).render(<App />);
