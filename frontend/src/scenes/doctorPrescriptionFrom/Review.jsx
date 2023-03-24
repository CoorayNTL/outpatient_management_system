import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
    {
        name: "Medicine 1",
        desc: "After Lunch",
        price: "25mg",
    },
    {
        name: "Medicine 2",
        desc: "After Dinner",
        price: "5mg",
    },
    {
        name: "Medicine 3",
        desc: "Before Lunch",
        price: "6mg",
    },
    {
        name: "Medicine 4",
        desc: "Before Dinner",
        price: "56mg",
    },

];

const addresses = ["tl685998@gmail.com"];
const payments = [
    {name: "Card type", detail: "Visa"},
    {name: "Card holder", detail: "Mr Maleesha Gimhan"},

];

export default function Review() {
    return (
        <React.Fragment>



            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                        Prescription
                    </Typography>
                    <Typography gutterBottom>Maleesha Gimhan</Typography>
                    <Typography gutterBottom>{addresses.join(", ")}</Typography>
                </Grid>
                {/*<Grid item container direction="column" xs={12} sm={6}>*/}
                {/*    <Typography variant="h6" gutterBottom sx={{mt: 2}}>*/}
                {/*        Payment details*/}
                {/*    </Typography>*/}
                {/*    <Grid container>*/}
                {/*        {payments.map((payment) => (*/}
                {/*            <React.Fragment key={payment.name}>*/}
                {/*                <Grid item xs={6}>*/}
                {/*                    <Typography gutterBottom>{payment.name}</Typography>*/}
                {/*                </Grid>*/}
                {/*                <Grid item xs={6}>*/}
                {/*                    <Typography gutterBottom>{payment.detail}</Typography>*/}
                {/*                </Grid>*/}
                {/*            </React.Fragment>*/}
                {/*        ))}*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
            </Grid>

            <Typography variant="h6" gutterBottom>
                Medicine and Dosage
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem key={product.name} sx={{py: 1, px: 0}}>
                        <ListItemText primary={product.name} secondary={product.desc}/>
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}


            </List>

        </React.Fragment>
    );
}
