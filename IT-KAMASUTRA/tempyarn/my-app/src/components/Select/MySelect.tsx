import React, {memo, useState} from "react";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@material-ui/core";

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
type ItemType = {
    title: string
    id: string
}

type MySelectPropsType = {
    value?: string
    items: Array<ItemType>

}

export const MySelect = memo((props: MySelectPropsType) => {

    const selectedItem = props.items.find(i => i.title === props.value)

    const [name, setName] = React.useState<string>('Andrey');

    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value as string);
    };

    return (
        <Box sx={{minWidth: 120}} style={{"paddingTop": "100px", "marginLeft": "50px"}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Name</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedItem && selectedItem.title}
                    label="Name"
                    onChange={handleChange}
                >
                    {props.items.map(n => <MenuItem key={n.id} value={n.title}>{n.title}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
})



