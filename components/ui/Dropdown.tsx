import * as React from 'react';
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import { DropdownProps, BoardItem } from '../../typings/interfaces';

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  border-radius: 0.75em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: '#828FA3';

  &:hover {
    border-color: '#635FC7';
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: '#635FC7';
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  font-size: 15px;
  padding: 8px;
  border-radius: 0.45em;
  min-width: 408px;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    color: '#635FC7';
  }

  &.${optionUnstyledClasses.selected} {
    color: '#635FC7';
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect<TValue>(
  props: SelectUnstyledProps<TValue>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const components: SelectUnstyledProps<TValue>['components'] = {
    Root: StyledButton,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components}/>;
}) as <TValue>(
  props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLButtonElement>,
) => JSX.Element;

export default function UnstyledSelectSimple({status, selectedStatus}: DropdownProps) {
  return (
    <CustomSelect 
      data-testid="status-select"
      defaultValue={selectedStatus ? selectedStatus : status[0]?.name} // To do: Default should be the one selected
      className="
        dark:bg-transparent 
        border 
        border-solid 
        border-grey-700
        hover:border-purple
        "
      >
        <div className='bg-white dark:bg-midnight w-full py-6 mt-3 rounded-lg'>
          {status.map((item: BoardItem)=> {
            return(
              <StyledOption key={item.name} data-testid="status-select-option" className='w-full text-grey-400 pt-1 px-6 hover:text-purple' value={item.name}>{item.name}</StyledOption>
            )
          })}
          {/* <StyledOption className='w-full text-grey-400 pt-1 px-6 hover:text-purple' value={20}>Twenty</StyledOption>
          <StyledOption className='w-full text-grey-400 pt-1 px-6 hover:text-purple' value={30}>Thirty</StyledOption> */}
        </div>
    </CustomSelect>
  );
}
