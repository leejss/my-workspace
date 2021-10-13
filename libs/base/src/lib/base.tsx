import './base.module.scss';

/* eslint-disable-next-line */
export interface BaseProps {}

export function Base(props: BaseProps) {
  return (
    <div>
      <h1>Welcome to Base!</h1>
    </div>
  );
}

export default Base;
