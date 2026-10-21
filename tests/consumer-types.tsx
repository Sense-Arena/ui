import { createRef, useRef } from 'react';
import { Button, Dropdown, Modal, Select, TextField, themeVars, useClickOutside, useInterval } from '@sensearena/ui';
import type { ButtonProps } from '@sensearena/ui';

const props: ButtonProps = { color: 'primary', size: 'm' };
const options = [{ value: 1, title: 'One' }];
export function Consumer() {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {});
  useInterval(() => {}, null);
  return <div ref={ref}>
    <Button {...props} ref={createRef<HTMLButtonElement>()}>Hello</Button>
    <TextField label="Name" inputRef={useRef<HTMLInputElement>(null)} />
    <Dropdown<number> selectedOption={1} selectedOptionLabel="One" options={options} />
    <Select<number> selectedOption={1} selectedOptionLabel="One" options={options} />
    <Modal open={false} handleClose={() => {}}>Content</Modal>
    <span style={{ color: themeVars.colors.atpBlue }}>Theme</span>
  </div>;
}
