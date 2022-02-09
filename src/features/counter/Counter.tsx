import { LoadingButton } from '@mui/lab';
import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
    selectIsLoading,
} from './counterSlice';


export function Counter() {
    const count = useAppSelector(selectCount);
    const isLoading = useAppSelector(selectIsLoading);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (

        <Stack spacing={2} direction="row">
            <Button
                variant="outlined"

                onClick={() => dispatch(decrement())}
            >
                -
            </Button>

            <Button
                variant="outlined"

                onClick={() => dispatch(increment())}
            >
                +
            </Button>


            <input


                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <Button

                onClick={() => dispatch(incrementByAmount(incrementValue))}
            >
                Add Amount
            </Button>
            <LoadingButton loading={ isLoading }

                onClick={() => dispatch(incrementAsync(incrementValue))}
            >
                Add Async
            </LoadingButton >
            <Button

                onClick={() => dispatch(incrementIfOdd(incrementValue))}
            >
                Add If Odd
            </Button>
            <h3>{count}</h3>
        </Stack>
    );
}
