import React, {useContext} from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    makeStyles
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
 import {appConfig} from '../services/config';
import { CartContext } from "../contexts/CartContext";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
});

const ProductCard = (props) => {
    const {product} = props;
    const {addToCart} = useContext(CartContext);
    const classes = useStyles();

    if (!product) {
        return <p>loading...</p>;
    } else {
        return (
            <Card className={classes.root}>
                <CardHeader title={product.name} subheader={`$${product.price}`}/>
                <CardMedia
                    className={classes.media}
                    image={`${appConfig.URL}${product?.photo.data.attributes.url}`}
                    title={product.name}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>
                        {product.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button
                        color='primary'
                        variant='contained'
                        fullWidth

                    >
                        Add To Cart
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
export default ProductCard;
