import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .add('Primary', () => <Button label='Do something' type='primary' />)
  .add('Primary Large', () => <Button label='Do something' type='primary' large />)
  .add('Primary Faded', () => <Button label='Do something' type='primary-faded' />)
  .add('Primary Faded Large', () => <Button label='Do something' type='primary-faded' large />)
  .add('Primary White', () => <Button label='Do something' type='primary-white' />)
  .add('Primary White Large', () => <Button label='Do something' type='primary-white' large />)


  .add('Danger', () => <Button label='Do something' type='danger' />)
  .add('Danger Large', () => <Button label='Do something' type='danger' large />)
  .add('Danger Faded', () => <Button label='Do something' type='danger-faded' />)
  .add('Danger Faded Large', () => <Button label='Do something' type='danger-faded' large />)
  .add('Danger White', () => <Button label='Do something' type='danger-white' />)
  .add('Danger White Large', () => <Button label='Do something' type='danger-white' large />)

  .add('Warning', () => <Button label='Do something' type='warning' />)
  .add('Warning Large', () => <Button label='Do something' type='warning' large />)
  .add('Warning Faded', () => <Button label='Do something' type='warning-faded' />)
  .add('Warning Faded Large', () => <Button label='Do something' type='warning-faded' large />)
  .add('Warning White', () => <Button label='Do something' type='warning-white' />)
  .add('Warning White Large', () => <Button label='Do something' type='warning-white' large />)

  .add('Success', () => <Button label='Do something' type='success' />)
  .add('Success Large', () => <Button label='Do something' type='success' large />)
  .add('Success Faded', () => <Button label='Do something' type='success-faded' />)
  .add('Success Faded Large', () => <Button label='Do something' type='success-faded' large />)
  .add('Success White', () => <Button label='Do something' type='success-white' />)
  .add('Success White Large', () => <Button label='Do something' type='success-white' large />)
