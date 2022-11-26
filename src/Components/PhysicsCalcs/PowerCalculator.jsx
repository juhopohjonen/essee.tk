import { TextField, Box, Select, MenuItem, Button } from "@mui/material"
import { useState } from "react"
import ResultCard from "./ResultCard"


const PowerCalculator = ({ sx, buttonColor='success' }) => {
    const timeUnits = [
        {
            unitName: 'sek',
            secondFactor: 1
        },
        {
            unitName: 'min',
            secondFactor: 60
        }
    ]
    
    const energyUnits = [
        {
            unitName: 'j',
            jouleFactor: 1
        },
        {
            unitName: 'kJ',
            jouleFactor: 1000
        }
    ]

    const [timeUnit, setTimeUnit] = useState('sek')
    const [timeInput, setTimeInput] = useState('')

    const [timeInS, setTime] = useState(0)

    const [energyUnit, setEnergyUnit] = useState('j')
    const [energyInp, setEnergy] = useState('')
    const [energyInJoule, setEnergyInJoule] = useState(0)
    
    const regex = /^[0-9.\b]+$/

    const [result, setResult] = useState(null)

    

    

    const timeChange = (e) => {
        const value = e.target.value

        if (regex.test(value) || value === '') {
            const { secondFactor } = timeUnits.find(unit => unit.unitName === timeUnit)

            setTimeInput(e.target.value)
            setTime(value * secondFactor)

        }
    }

    const energyChange = (e) => {
        const value = e.target.value

        if (value === '') {
            setEnergyInJoule(0)
        } else {
            
            // find object and change to SI-values
            const unit = energyUnits.find(unit => unit.unitName === energyUnit)
            console.log('eunit', unit)

            const energyValue = value * unit.jouleFactor
            console.log('eval', energyValue)

            setEnergyInJoule(energyValue)
            console.log('eij', energyInJoule)
        }

        if (regex.test(value) || value === '') {
            setEnergy(value)
        } else if (!regex.test(value)) {
            console.log('invalid regex')
            return
        }

        if (energyInp === '') {
            setEnergyInJoule(0)
        } else {
            // find object and change to SI-values
            const unit = energyUnits.find(unit => unit.unitName === energyUnit)
            console.log(unit, energyUnit)
            const energyValue = value * unit.jouleFactor
            setEnergyInJoule(energyValue)
            console.log('eij', energyInJoule)
        }


    }
    
    

    const calculatePower = async () => {
    
        const { jouleFactor } = energyUnits.find(unit => unit.unitName === energyUnit)
        const { secondFactor } = timeUnits.find(unit => unit.unitName === timeUnit)

        const energySetting = Number(energyInp * jouleFactor)
        console.log(energySetting)
        await setEnergyInJoule(Number(energyInp * jouleFactor))

        const siTime = Number(timeInput) * secondFactor

        // Power = W / t
        
        const result = energySetting / siTime
        console.log('p', energyInJoule, '/', timeInS)

        const workInterval = 
            energyUnit === 'j' 
                 ? `W = ${energySetting} J`
                 : `W = ${energyInp} kJ = ${energySetting} J`

        const timeInterval =
            timeUnit === 'sek'
                ? `t = ${timeInS} s`
                : `t = ${timeInput} min = ${siTime} sek`
            

        const finalInterval = `P = W / t = ${energyInJoule} J / ${siTime} sek = ${result} W`

        const resultToSet = {
            finalRes: result,
            inters: [
                workInterval, 
                timeInterval,
                finalInterval
            ]
        }

        setResult(resultToSet)
    }   
    

    return (
        <Box sx={{ ...sx }}>
            <Box>
            <TextField 
                inputProps={{ inputMode: 'numeric', patterns: '[0-9]*' }}  
                label={`Energia (${energyUnit === 'kJ' ? 'kilojoulea' : 'joulea'})`}
                value={energyInp}
                onChange={(e) => energyChange(e)}
            />            
            <Select
                sx={{ ml: 0.5 }}
                value={energyUnit}
                onChange={async (e) => {
                    setEnergyUnit(e.target.value)
                        .then(() => {
                            const currentFactor = energyUnits.find(unit => unit.unitName === energyUnit).jouleFactor
                            setEnergyInJoule(energyInJoule * currentFactor)
                        })


                }}
            >
                {energyUnits.map(unit => <MenuItem key={unit.unitName} value={unit.unitName}>{unit.unitName}</MenuItem>)}
            </Select>
            <br />
            </Box>

            <Box sx={{ mt: 2 }}>
                <TextField 
                    inputProps={{ inputMode: 'numeric', patterns: '[0-9]*' }}  
                    label={`Aika (${timeUnit})`}
                    value={timeInput}
                    onChange={timeChange}
                />

                <Select
                    sx={{ ml: 0.5 }}
                    value={timeUnit}
                    onChange={(e) => setTimeUnit(e.target.value)}
                    labelId='timeUnit'
                >
                    {timeUnits.map(unit => <MenuItem  key={unit.unitName} value={unit.unitName}>{unit.unitName}</MenuItem>)}
                </Select>
            </Box>

            <Button sx={{ mt: 1 }} color={buttonColor} onClick={calculatePower} variant='contained'>Laske teho</Button>
            <ResultCard resultUnit="W" res={result} header='Tehon laskeminen' />
        </Box>
    )
}

export default PowerCalculator