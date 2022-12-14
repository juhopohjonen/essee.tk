import { Box, Button, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"
import ResultCard from "./ResultCard"


const PotentialCalc = ({ sx, isLiftWork=false }) => {
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

    const [mass, setMass] = useState('')
    const [height, setHeight] = useState('')

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
        let gravityInterval = `G = mg = ${massInKG} kg * 10 m/s^2 = ${gravity} N `
        
        let potentialInterval = isLiftWork ? `W = Gh = ${gravity} N * ${heightInM} m = ${potentialEnergy} J` : `Ep = Gh = ${gravity} N * ${heightInM} m = ${potentialEnergy} J`


        setResult({
            finalRes: potentialEnergy,
            inters: [
                massInterval,
                heightInterval,
                gravityInterval,
                potentialInterval
            ]
        })
    }

    const regex = /^[0-9.\b]+$/

    const heightChange = (e) => {
        if (e.target.value !== '' && !regex.test(e.target.value)) {
            return false
        }

        setHeight(e.target.value)
    }
    
    const massChange = (e) => {
        if (e.target.value !== '' && !regex.test(e.target.value)){
            return e.preventDefault()
        }

        setMass(e.target.value)
    }

    return (
        <Box sx={sx}>
            
            <TextField 
                inputProps={{ inputMode: 'numeric', patterns: '[0-9]*' }}  
                label={`Massa (${massUnit.toString()})`}
                value={mass}
                onChange={(e) => massChange(e)}
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
                    onChange={heightChange}
                />
                <Select
                    labelId="heightUnitSel"
                    id="heightUnitSel"
                    value={heightUnit}
                    onChange={(e) => setHeightUnit(e.target.value)}
                    sx={{ ml: 0.5 }}
                >
                    {heightUnits.map(unit => <MenuItem key={unit.name} value={unit.name}>{unit.name}</MenuItem>)}
                </Select>

            </Box>


            <Button sx={{ mt: 1 }} onClick={calculate} color='success' variant='contained'>{isLiftWork ? 'Laske nostoty??' : 'Laske potentiaalienergia'}</Button>

            <ResultCard res={result} header={isLiftWork ? 'Nostoty??n lasku' : 'Potentiaalienergian lasku'} />

        </Box>
    )
}

export default PotentialCalc