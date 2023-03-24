import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
    {
        name: "",
        desc: "",
        price: "",
    },
    {
        name: "",
        desc: "",
        price: "",
    },
    {
        name: "",
        desc: "",
        price: "",
    },
    {
        name: "Apoinment ",
        desc: "",
        price: "Rs. 4000.00",
    },

];

const addresses = ["102/2", "B", "kandliyaddhapaluwa", "ganemulla"];
const payments = [
    {name: "Card type", detail: "Visa"},
    {name: "Card holder", detail: "Mr Maleesha Gimhan"},
    {name: "", detail: ""},
    {name: "", detail: ""},
];

export default function Review() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Appointment of summary
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem key={product.name} sx={{py: 1, px: 0}}>
                        <ListItemText primary={product.name} secondary={product.desc}/>
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}

                <ListItem sx={{py: 1, px: 0}}>
                    <ListItemText primary="Total"/>
                    <Typography variant="subtitle1" sx={{fontWeight: 700}}>
                        Rs.4040.00
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                        Appointment
                    </Typography>
                    <Typography gutterBottom>Maleesha Gimhan</Typography>
                    <Typography gutterBottom>{addresses.join(", ")}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
