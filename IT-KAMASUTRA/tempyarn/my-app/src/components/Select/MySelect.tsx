import React from "react";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@material-ui/core";
import {v1} from "uuid";

/*type ItemsPropsType = {
    title: string
    id: string
}

type SelectPropsType = {
    id: string
    collapsed: boolean
    onChange: (id: string) => void
    items: Array<ItemsPropsType>
}

export function Select(props: SelectPropsType) {
    return (
        <div>
            <div>{props.items.find(item => props.id === item.id)}</div>
            {props.items.map(item => <div>{item.title}</div>)}
        </div>
    )
}*/
type NameType = {
    title: string
    id: string
}

type UserType = Array<NameType>

export const MySelect = () => {

    const item = [
        {title: "Andrey", id: v1()},
        {title: "Petr", id: v1()},
        {title: "Olga", id: v1()},
        {title: "Sergey", id: v1()},
    ]

    const [name, setName] = React.useState<string>('Andrey');

    const handleChange = (event: SelectChangeEvent) => {
       setName(event.target.value as string);
    };

    return (
        <Box sx={{minWidth: 120}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Name</InputLabel>
                <Select
                    defaultValue={"Andrey"}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    label="Name"
                    onChange={handleChange}
                >
                    {item.map(n => <MenuItem value={n.title}>{n.title}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}



