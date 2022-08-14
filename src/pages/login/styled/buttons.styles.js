import { Button } from "@mui/material";
import { styled } from "@mui/material/styles"

const myButtons = styled(Button)(() => ({

}))

export const RoundedButton = styled(myButtons)(() => ({
    borderRadius: '5px',
    // width: '426px',
    background: '#43b97f',
    color: '#fff',
}))


export default myButtons