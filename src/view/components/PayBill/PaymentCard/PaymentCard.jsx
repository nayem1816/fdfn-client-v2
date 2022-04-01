import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import CustomAlert from './../../Common/Custom/CustomBtn/CustomAlert';
import { useForm } from 'react-hook-form';

const PaymentCard = () => {
    const [backData, setBackData] = useState([]);
    const [alertBox, setAlertBox] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        };

        fetch(
            'https://fdfnserverapi.fdfn.net/api/v1/createBill',
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setBackData(result);
                setAlertBox(true);
                setSuccessMsg(result.status);
            })
            .catch((error) => console.log('error', error));
    };
    return (
        <Container>
            <Box sx={{ border: '1px solid #e0e0e0', p: 3, borderRadius: 1 }}>
                <Typography
                    sx={{ textAlign: 'center' }}
                    variant="h4"
                    component="h4"
                >
                    FDFN Monthly Bill Payment
                </Typography>
                <hr
                    style={{ margin: '10px 0px', border: '1px solid #e0e0e0' }}
                />
                <Box>
                    <CustomAlert
                        sx={{ display: alertBox ? 'block' : 'none' }}
                        alertType={
                            successMsg === 'success' ? 'success' : 'error'
                        }
                        alertText={
                            successMsg === 'success'
                                ? 'Payment Success'
                                : 'Payment Failed'
                        }
                    />
                    <Box sx={{ mt: 3 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                error={errors.name && 'true'}
                                sx={{ width: '100%', mb: 2 }}
                                type="text"
                                label="Your Name"
                                variant="filled"
                                {...register('name', { required: true })}
                            />
                            <TextField
                                error={errors.userId && 'true'}
                                sx={{ width: '100%', mb: 2 }}
                                type="text"
                                label="FDFN User Id"
                                variant="filled"
                                {...register('userId', { required: true })}
                            />
                            <TextField
                                error={errors.phone && 'true'}
                                sx={{ width: '100%', mb: 2 }}
                                type="number"
                                label="Your Phone Number"
                                variant="filled"
                                {...register('phone', { required: true })}
                            />
                            <TextField
                                error={errors.totalPay && 'true'}
                                sx={{ width: '100%', mb: 2 }}
                                type="number"
                                label="Total Pay Amount"
                                variant="filled"
                                {...register('totalPay', { required: true })}
                            />
                            <TextField
                                error={errors.trxId && 'true'}
                                sx={{ width: '100%', mb: 2 }}
                                type="text"
                                label="Bkash trxID"
                                variant="filled"
                                {...register('trxId', { required: true })}
                            />

                            <Button variant="contained" type="submit">
                                Confirm Pay
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default PaymentCard;
