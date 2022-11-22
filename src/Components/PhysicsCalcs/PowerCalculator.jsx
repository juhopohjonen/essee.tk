import { TextField, Box, Select, MenuItem, Button } from "@mui/material"
import { useState } from "react"

const PowerCalculator = ({ sx, buttonColor='secondary' }) => {
    const timeUnits = [
        {
            unitName: 'sek',
            minuteFactor: 60
        },
        {
            unitName: 'min',
            minuteFactor: 1
        }
    ]

    const [timeUnit, setTimeUnit] = useState('sek')
    const [timeInput, setTimeInput] = useState('')

    const [timeInMin, setTime] = useState(0)

    const [energyInp, setEnergy] = useState('')
    
    const regex = /^[0-9.\b]+$/


    const timeChange = (e) => {
        const value = e.target.value

        if (regex.test(value) || value === '') {
            setTimeInput(e.target.value)
        }
    }

    const energyChange = (e) => {
        const value = e.target.value

        if (regex.test(value) || value === '') {
            setEnergy(value)
        }
    }

    

    return (
        <Box sx={{ ...sx }}>
            <TextField 
                inputProps={{ inputMode: 'numeric', patterns: '[0-9]*' }}  
                label='Energia (joule)'
                value={energyInp}
                onChange={energyChange}
            />            
            <br />

            <Box sx={{ mt: 1 }}>
                <TextField 
                    inputProps={{ inputMode: 'numeric', patterns: '[0-9]*' }}  
                    label={`Aika (${timeUnit})`}
                    value={timeInput}
                    onChange={timeChange}
                />

                <Select
                    sx={{ ml: 0.5 }}
                    value={timeUnit}
                    labelId='timeUnit'
                >
                    {timeUnits.map(unit => <MenuItem  key={unit.unitName} value={unit.unitName}>{unit.unitName}</MenuItem>)}
                </Select>
            </Box>

            <Button sx={{ mt: 1 }} color={buttonColor} variant='contained'>Laske teho</Button>

        </Box>
    )
}

export default PowerCalculator