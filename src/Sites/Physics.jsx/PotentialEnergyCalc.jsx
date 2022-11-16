import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"


const PotentialCalc = ({ sx }) => {
    const [massUnit, setMassUnit] = useState('kg')
    
    // kgFactor is value how to get kg
    // when multiplied
    const massUnits = [
        {
            'name': 'kg',
            'kgFactor': 1
        },
        {
            'name': 'g',
            'kgFactor': 1000
        }
    ]

    const [massInKG, setMass] = useState(0)

    const getMass = () => {
        const { kgFactor } = massUnits.find(unit => unit.name === massUnit)
        return massInKG * kgFactor


    }

    console.log(getMass())

    const changeMass = (e) => {
        const massTarget = e.target.value
        const { kgFactor } = massUnits.find(unit => unit.name === massUnit)

        setMass(massTarget * kgFactor)
    }

    return (
        <Box>
            
            <TextField 
                inputProps={{ inputMode: 'numeric', patterns: '[0-9]*' }}  
                label={`Massa (${massUnit.toString()})`}
                value={getMass()}
                onChange={(e) => changeMass(e)}
            />
            <Select
                labelId="massUnitSelLab"
                id="massUnitSel"
                value={massUnit}
                label='Massan yksikkö'
                onChange={(e) => setMassUnit(e.target.value)}
            >
                {massUnits.map(unit => <MenuItem id={unit.name} value={unit.name}>{unit.name}</MenuItem>)}
            </Select>


        </Box>
    )
}

export default PotentialCalc