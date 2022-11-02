import React from 'react'

const scaleNames: any = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function toCelsius (fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius: number): number {
  return (celsius * 9 / 5) + 32
}

const tryConvert = (temperature: any, convert: any): JSX.Element | string => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

function BoilingVerdict (props: any): JSX.Element {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

interface TemperatureInputInterface { scale: string, temperature: any, onTemperatureChange: (temperature: any) => void }
class TemperatureInput extends React.Component <TemperatureInputInterface> {
  constructor (props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e: any): void {
    this.props.onTemperatureChange(e.target.value)
  }

  render (): JSX.Element {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
    )
  }
}

class Calculator extends React.Component <any, any> {
  constructor (props: any) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = { temperature: '', scale: 'c' }
  }

  handleCelsiusChange (temperature: any): void {
    this.setState({ scale: 'c', temperature })
  }

  handleFahrenheitChange (temperature: any): void {
    this.setState({ scale: 'f', temperature })
  }

  render (): JSX.Element {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
    )
  }
}

export default Calculator
