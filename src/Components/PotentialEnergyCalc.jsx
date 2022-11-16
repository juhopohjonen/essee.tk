import { Box, Button, Typography, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"


const PotentialCalc = ({ sx }) => {
    const [result, setResult] = useState(null)

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
            'kgFactor': 0.001
        }
    ]

    const [mass, setMass] = useState(0)
    const changeMass = (e) => {
        const massTarget = e.target.value
        setMass(massTarget)
    }

    const [height, setHeight] = useState(0)

    const heightUnits = [
        {
            'name': 'm',
            'mFactor': 1
        },
        {
            'name': 'cm',
            'mFactor': 0.01
        }
    ]
    const [heightUnit, setHeightUnit] = useState('m')
    

    const calculate = () => {
        const massUnitObj = massUnits.find(unit => unit.name === massUnit)

        const { kgFactor } = massUnitObj
        const massUnitName = massUnitObj.name

        const massInKG = mass * kgFactor

        const heightUnitObj = heightUnits.find(unit => unit.name === heightUnit)

        const { mFactor } = heightUnitObj
        const heightUnitName = heightUnitObj.name

        const heightInM = height * mFactor
        const gravity = massInKG * 10
        
        const potentialEnergy = gravity * heightInM

        // intervals

        let massInterval = massUnitName === 'kg' ? `m = ${massInKG.toString()} kg` : `m = ${mass.toString()} ${massUnitName} = ${massInKG.toString()} kg`
        let heightInterval = heightUnitName === 'm' ? `h = ${heightInM.toString()} m` : `h = ${height} ${heightUnitName} = ${heightInM} m`
        let gravityInterval = `G = mg = ${massInterval} * 10 m/s^2 = ${gravity} N`
        let potentialInterval = `Ep = Gh = ${gravity} N * ${heightInM} m = ${potentialEnergy} J`

        

        setResult({
            potentialEnergy,
            massInterval,
            heightInterval,
            gravityInterval,
            potentialInterval
        })
    }

    return (
        <Box sx={sx}>
            
            <TextField 
                inputProps={{ inputMode: 'numeric', patterns: '[0-9]*' }}  
                label={`Massa (${massUnit.toString()})`}
                value={mass}
                onChange={(e) => changeMass(e)}
            />
            <Select
                labelId="massUnitSelLab"
                id="massUnitSel"
                value={massUnit}
                onChange={(e) => setMassUnit(e.target.value)}
                sx={{ ml: 0.5 }}
            >
                {massUnits.map(unit => <MenuItem key={unit.name} value={unit.name}>{unit.name}</MenuItem>)}
            </Select>

            <br />

            <Box sx={{ mt: 2 }}>
            
                <TextField
                    inputProps={{ inputMode: 'numeric', patterns: '[0-9]*' }}
                    label={`Korkeus (${heightUnit})`}
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
                <Select
                    labelId="heightUnitSel"
                    id="heightUnitSel"
                    value={heightUnit}
                    onChange={(e) => setHeightUnit(e.target.value)}
                >
                    {heightUnits.map(unit => <MenuItem key={unit.name} value={unit.name}>{unit.name}</MenuItem>)}
                </Select>

            </Box>

            <Button sx={{ mt: 1 }} onClick={calculate} variant='contained'>Laske potentiaalienergia</Button>

            <Result res={result} />

        </Box>
    )
}

const Result = ({ res }) => {
    if (!res) {
        return null
    }

    const resValues = Object.values(res)

    return (
        <Box sx={{ mt: 1 }}>
            <Typography paragraph>Vastaus: {res.potentialEnergy} J</Typography>
            {resValues.map(val => <Typography key={val}>{val}</Typography>)}
        </Box>
    )
}

export default PotentialCalc